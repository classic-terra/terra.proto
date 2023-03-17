#!/bin/sh

initialize() {
    # check if python poetry is installed
    if ! command -v poetry &> /dev/null; then
        echo "poetry could not be found. Please look installation help at python folder README.md"
        exit
    fi

    if [ ! -d "_build" ]; then
        mkdir _build
    fi
    cd _build
}

# in _build directory
get_classic_proto() {
    REVISION=$1
    if [ -z "$REVISION" ]; then
        # if no revision is specifid, revision will be the latest release
        REVISION=$(curl --silent "https://api.github.com/repos/classic-terra/core/releases/latest" | jq -r '.tag_name')
    fi

    # check if core repo does not exist
    if [ ! -d "core" ]; then
        git clone https://github.com/classic-terra/core.git
        cd core
        git checkout $REVISION
        cd ..
    fi

    cp -R core/proto/terra ../proto
}

# in _build directory
get_cosmos_proto() {
    # fetch cosmos sdk version that classic-terra/core is using
    cd core
    COSMOS_SDK_MOD=$(go list -m -json github.com/cosmos/cosmos-sdk)
    cd ..
    # check if there is field Replace
    if [ $(echo $COSMOS_SDK_MOD | jq 'has("Replace")') ]; then
        COSMOS_SDK_PATH=$(echo $COSMOS_SDK_MOD | jq -r '.Replace.Path')
        COSMOS_SDK_REVISION=$(echo $COSMOS_SDK_MOD | jq -r '.Replace.Version' | cut -d '-' -f 3)
    else
        COSMOS_SDK_PATH=$(echo $COSMOS_SDK_MOD | jq -r '.Path')
        COSMOS_SDK_REVISION=$(echo $COSMOS_SDK_MOD | jq -r '.Version')
    fi

    if [ ! -d cosmos-sdk ]; then
        git clone https://$COSMOS_SDK_PATH.git
    fi
    cd cosmos-sdk
    git checkout $COSMOS_SDK_REVISION
    cd ..
    cp -R cosmos-sdk/proto/ ../proto
    cp -R cosmos-sdk/third_party/proto/ ../proto
}

# in terra.proto directory
generate_proto() {
    cd ..

    language=(js python java)
    for i in ${language[@]}; do
        cd $i
        make all
        cd ..
    done
}

initialize
get_classic_proto
get_cosmos_proto
generate_proto