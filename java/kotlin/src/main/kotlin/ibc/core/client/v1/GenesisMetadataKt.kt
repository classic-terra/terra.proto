//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/client/v1/genesis.proto

package ibc.core.client.v1;

@kotlin.jvm.JvmName("-initializegenesisMetadata")
public inline fun genesisMetadata(block: ibc.core.client.v1.GenesisMetadataKt.Dsl.() -> kotlin.Unit): ibc.core.client.v1.Genesis.GenesisMetadata =
  ibc.core.client.v1.GenesisMetadataKt.Dsl._create(ibc.core.client.v1.Genesis.GenesisMetadata.newBuilder()).apply { block() }._build()
public object GenesisMetadataKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ibc.core.client.v1.Genesis.GenesisMetadata.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.client.v1.Genesis.GenesisMetadata.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.client.v1.Genesis.GenesisMetadata = _builder.build()

    /**
     * <pre>
     * store key of metadata without clientID-prefix
     * </pre>
     *
     * <code>bytes key = 1;</code>
     */
    public var key: com.google.protobuf.ByteString
      @JvmName("getKey")
      get() = _builder.getKey()
      @JvmName("setKey")
      set(value) {
        _builder.setKey(value)
      }
    /**
     * <pre>
     * store key of metadata without clientID-prefix
     * </pre>
     *
     * <code>bytes key = 1;</code>
     */
    public fun clearKey() {
      _builder.clearKey()
    }

    /**
     * <pre>
     * metadata value
     * </pre>
     *
     * <code>bytes value = 2;</code>
     */
    public var value: com.google.protobuf.ByteString
      @JvmName("getValue")
      get() = _builder.getValue()
      @JvmName("setValue")
      set(value) {
        _builder.setValue(value)
      }
    /**
     * <pre>
     * metadata value
     * </pre>
     *
     * <code>bytes value = 2;</code>
     */
    public fun clearValue() {
      _builder.clearValue()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ibc.core.client.v1.Genesis.GenesisMetadata.copy(block: ibc.core.client.v1.GenesisMetadataKt.Dsl.() -> kotlin.Unit): ibc.core.client.v1.Genesis.GenesisMetadata =
  ibc.core.client.v1.GenesisMetadataKt.Dsl._create(this.toBuilder()).apply { block() }._build()
