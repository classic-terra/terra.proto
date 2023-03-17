all: proto-gen

proto-gen: 
	@echo "Generating Protobuf files"
	./gradlew cleanProto generateProto

publish:
	@echo "Publish Protobuf Artifacts"
	./gradlew publish
