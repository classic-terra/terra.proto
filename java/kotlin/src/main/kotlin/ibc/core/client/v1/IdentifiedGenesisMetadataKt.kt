//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/client/v1/genesis.proto

package ibc.core.client.v1;

@kotlin.jvm.JvmSynthetic
inline fun identifiedGenesisMetadata(block: ibc.core.client.v1.IdentifiedGenesisMetadataKt.Dsl.() -> Unit): ibc.core.client.v1.Genesis.IdentifiedGenesisMetadata =
  ibc.core.client.v1.IdentifiedGenesisMetadataKt.Dsl._create(ibc.core.client.v1.Genesis.IdentifiedGenesisMetadata.newBuilder()).apply { block() }._build()
object IdentifiedGenesisMetadataKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.client.v1.Genesis.IdentifiedGenesisMetadata.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.client.v1.Genesis.IdentifiedGenesisMetadata.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.client.v1.Genesis.IdentifiedGenesisMetadata = _builder.build()

    /**
     * <code>string client_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"client_id&#92;""];</code>
     */
    var clientId: kotlin.String
      @JvmName("getClientId")
      get() = _builder.getClientId()
      @JvmName("setClientId")
      set(value) {
        _builder.setClientId(value)
      }
    /**
     * <code>string client_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"client_id&#92;""];</code>
     */
    fun clearClientId() {
      _builder.clearClientId()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class ClientMetadataProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ibc.core.client.v1.GenesisMetadata client_metadata = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"client_metadata&#92;""];</code>
     */
     val clientMetadata: com.google.protobuf.kotlin.DslList<ibc.core.client.v1.Genesis.GenesisMetadata, ClientMetadataProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getClientMetadataList()
      )
    /**
     * <code>repeated .ibc.core.client.v1.GenesisMetadata client_metadata = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"client_metadata&#92;""];</code>
     * @param value The clientMetadata to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addClientMetadata")
    fun com.google.protobuf.kotlin.DslList<ibc.core.client.v1.Genesis.GenesisMetadata, ClientMetadataProxy>.add(value: ibc.core.client.v1.Genesis.GenesisMetadata) {
      _builder.addClientMetadata(value)
    }/**
     * <code>repeated .ibc.core.client.v1.GenesisMetadata client_metadata = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"client_metadata&#92;""];</code>
     * @param value The clientMetadata to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignClientMetadata")
    inline operator fun com.google.protobuf.kotlin.DslList<ibc.core.client.v1.Genesis.GenesisMetadata, ClientMetadataProxy>.plusAssign(value: ibc.core.client.v1.Genesis.GenesisMetadata) {
      add(value)
    }/**
     * <code>repeated .ibc.core.client.v1.GenesisMetadata client_metadata = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"client_metadata&#92;""];</code>
     * @param values The clientMetadata to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllClientMetadata")
    fun com.google.protobuf.kotlin.DslList<ibc.core.client.v1.Genesis.GenesisMetadata, ClientMetadataProxy>.addAll(values: kotlin.collections.Iterable<ibc.core.client.v1.Genesis.GenesisMetadata>) {
      _builder.addAllClientMetadata(values)
    }/**
     * <code>repeated .ibc.core.client.v1.GenesisMetadata client_metadata = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"client_metadata&#92;""];</code>
     * @param values The clientMetadata to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllClientMetadata")
    inline operator fun com.google.protobuf.kotlin.DslList<ibc.core.client.v1.Genesis.GenesisMetadata, ClientMetadataProxy>.plusAssign(values: kotlin.collections.Iterable<ibc.core.client.v1.Genesis.GenesisMetadata>) {
      addAll(values)
    }/**
     * <code>repeated .ibc.core.client.v1.GenesisMetadata client_metadata = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"client_metadata&#92;""];</code>
     * @param index The index to set the value at.
     * @param value The clientMetadata to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setClientMetadata")
    operator fun com.google.protobuf.kotlin.DslList<ibc.core.client.v1.Genesis.GenesisMetadata, ClientMetadataProxy>.set(index: kotlin.Int, value: ibc.core.client.v1.Genesis.GenesisMetadata) {
      _builder.setClientMetadata(index, value)
    }/**
     * <code>repeated .ibc.core.client.v1.GenesisMetadata client_metadata = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"client_metadata&#92;""];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearClientMetadata")
    fun com.google.protobuf.kotlin.DslList<ibc.core.client.v1.Genesis.GenesisMetadata, ClientMetadataProxy>.clear() {
      _builder.clearClientMetadata()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.client.v1.Genesis.IdentifiedGenesisMetadata.copy(block: ibc.core.client.v1.IdentifiedGenesisMetadataKt.Dsl.() -> Unit): ibc.core.client.v1.Genesis.IdentifiedGenesisMetadata =
  ibc.core.client.v1.IdentifiedGenesisMetadataKt.Dsl._create(this.toBuilder()).apply { block() }._build()
