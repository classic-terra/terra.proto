#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

echo "install betterproto... pre-release for now. stable one has some issues"
#pip install --upgrade "avast.betterproto[compiler]"
pip3 install --upgrade "betterproto[compiler]" --pre

OUT_DIR="./terra_proto"

mkdir -p "$OUT_DIR"

echo "Processing proto files ..."

PROTO_DIR="../proto"

protoc \
  --proto_path=${PROTO_DIR} \
  --python_betterproto_out="${OUT_DIR}" \
  $(find ${PROTO_DIR} -path -prune -o -name '*.proto' -print0 | xargs -0)
