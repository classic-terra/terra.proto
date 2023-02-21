all: proto-gen build

proto-gen: 
	@echo "Generating Protobuf files"
	./scripts/proto-gen.sh

build: 
	poetry build

publish:
	poetry publish

.PHONY: all proto-gen format build publish
