#!/bin/sh

ROOT=$(dirname $(dirname $(realpath $0)))

initialize() {
    # check if python poetry is installed
    if ! command -v poetry &> /dev/null; then
        echo "poetry could not be found. Please look installation help at python folder README.md"
        exit
    fi

    if [ ! -d "$ROOT/proto" ]; then
        mkdir $ROOT/proto
    fi

    if [ ! -d "$ROOT/_build" ]; then
        mkdir $ROOT/_build
    fi

    cd $ROOT/_build
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
        echo "git checkout core $REVISION"
        cd ..
    fi

    cd core/proto
    find . -name "*.proto" -print0 | cpio -pdm $ROOT/proto
    cd ../..
}

# in _build directory
get_cosmos_sdk_proto() {
    # fetch cosmos sdk version that classic-terra/core is using
    cd core
    COSMOS_SDK_MOD=$(go list -m -json github.com/cosmos/cosmos-sdk)
    cd ..
    # check if there is field Replace
    if [ $(echo $COSMOS_SDK_MOD | jq 'has("Replace")') ]; then
        COSMOS_SDK_PATH=$(echo $COSMOS_SDK_MOD | jq -r '.Replace.Path')
        COSMOS_SDK_REVISION=$(echo $COSMOS_SDK_MOD | jq -r '.Replace.Version')
    else
        COSMOS_SDK_PATH=$(echo $COSMOS_SDK_MOD | jq -r '.Path')
        COSMOS_SDK_REVISION=$(echo $COSMOS_SDK_MOD | jq -r '.Version')
    fi

    if [ ! -d cosmos-sdk ]; then
        git clone https://$COSMOS_SDK_PATH.git
        cd cosmos-sdk
        git checkout $COSMOS_SDK_REVISION
        echo "git checkout cosmos sdk $COSMOS_SDK_REVISION"
        cd ..
    fi
    
    cd cosmos-sdk/proto
    find . -name "*.proto" -print0 | cpio -pdm $ROOT/proto
    cd ../..

    cd cosmos-sdk/third_party/proto
    find . -name "*.proto" -print0 | cpio -pdm $ROOT/proto
    cd ../../..
}

# in _build directory
get_ibc_proto() {
    # fetch ibc-go version that classic-terra/core is using
    cd core
    IBC_VERSION=$(go list -m -f '{{ .Version }}' github.com/cosmos/ibc-go)
    cd ..

    if [ ! -d ibc-go ]; then
        git clone https://github.com/cosmos/ibc-go.git
        cd ibc-go
        git checkout $IBC_VERSION
        echo "git checkout ibc $IBC_VERSION"
        cd ..
    fi
    cp -nR ibc-go/proto/ibc ../proto

    cd ibc-go/proto
    find . -name "*.proto" -print0 | cpio -pdm $ROOT/proto
    cd ../..
}

# in terra.proto directory
generate_proto() {
    cd ..

    language=(js python)
    for i in ${language[@]}; do
        cd $i
        make all
        cd ..
    done
}

# proto filter
filter() {
    # deal with proofs.proto conflict between ibc-go and cosmos-sdk
    mv $ROOT/proto/confio/proofs.proto $ROOT/proto/
    rm -rf $ROOT/proto/confio
}

initialize
get_cosmos_sdk_proto
get_ibc_proto
get_classic_proto
filter
generate_proto