#!/bin/sh
# halt on error
# set -e

initialize() {
    # check if python poetry is installed
    if ! command -v  &> /dev/null; then
        echo "poetry could not be found. Please look installation help at python folder README.md"
        exit
    fi

    if [ ! -d "proto" ]; then
        mkdir proto
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
        git clone -b $REVISION https://github.com/classic-terra/core.git
    fi

    cp -R core/proto/terra/ ../proto/terra
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
        COSMOS_SDK_VERSION=$(echo $COSMOS_SDK_MOD | jq -r '.Replace.Version')
    else
        COSMOS_SDK_PATH=$(echo $COSMOS_SDK_MOD | jq -r '.Path')
        COSMOS_SDK_VERSION=$(echo $COSMOS_SDK_MOD | jq -r '.Version')
    fi

    if [ ! -d cosmos-sdk ]; then
        git clone -b $COSMOS_SDK_VERSION https://$COSMOS_SDK_PATH.git
    fi
    cp -nR cosmos-sdk/proto/ ../proto
    cp -nR cosmos-sdk/third_party/proto/ ../proto
    rm -R ../proto/confio
}

# in _build directory
get_ibc_proto() {
    # fetch ibc-go version that classic-terra/core is using
    cd core
    IBC_VERSION=$(go list -m -f '{{ .Version }}' github.com/cosmos/ibc-go/v4)
    cd ..

    if [ ! -d ibc-go ]; then
        git clone -b $IBC_VERSION https://github.com/cosmos/ibc-go.git
    fi
    cp -nR ibc-go/proto/ibc ../proto
    cp -nR ibc-go/third_party/proto/ ../proto
    rm ../proto/buf.yaml
}

# in _build directory
get_wasm_proto() {
    # fetch ibc-go version that classic-terra/core is using
    cd core
    WASMD_MOD=$(go list -m -json github.com/CosmWasm/wasmd)
    cd ..
    if [ $(echo $WASMD_MOD | jq 'has("Replace")') ]; then
        WASMD_PATH=$(echo $WASMD_MOD | jq -r '.Replace.Path')
        WASMD_VERSION=$(echo $WASMD_MOD | jq -r '.Replace.Version')
    else
        WASMD_PATH=$(echo $WASMD_MOD | jq -r '.Path')
        WASMD_VERSION=$(echo $WASMD_MOD | jq -r '.Version')
    fi

    if [ ! -d wasmd ]; then
        git clone -b $WASMD_VERSION https://$WASMD_PATH.git
    fi
    cp -nR wasmd/proto/cosmwasm ../proto
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
get_cosmos_proto
get_ibc_proto
get_classic_proto
get_wasm_proto
generate_proto
