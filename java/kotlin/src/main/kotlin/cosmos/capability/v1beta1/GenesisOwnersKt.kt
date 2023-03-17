//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/capability/v1beta1/genesis.proto

package cosmos.capability.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun genesisOwners(block: cosmos.capability.v1beta1.GenesisOwnersKt.Dsl.() -> Unit): cosmos.capability.v1beta1.Genesis.GenesisOwners =
  cosmos.capability.v1beta1.GenesisOwnersKt.Dsl._create(cosmos.capability.v1beta1.Genesis.GenesisOwners.newBuilder()).apply { block() }._build()
object GenesisOwnersKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.capability.v1beta1.Genesis.GenesisOwners.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.capability.v1beta1.Genesis.GenesisOwners.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.capability.v1beta1.Genesis.GenesisOwners = _builder.build()

    /**
     * <pre>
     * index is the index of the capability owner.
     * </pre>
     *
     * <code>uint64 index = 1;</code>
     */
    var index: kotlin.Long
      @JvmName("getIndex")
      get() = _builder.getIndex()
      @JvmName("setIndex")
      set(value) {
        _builder.setIndex(value)
      }
    /**
     * <pre>
     * index is the index of the capability owner.
     * </pre>
     *
     * <code>uint64 index = 1;</code>
     */
    fun clearIndex() {
      _builder.clearIndex()
    }

    /**
     * <pre>
     * index_owners are the owners at the given index.
     * </pre>
     *
     * <code>.cosmos.capability.v1beta1.CapabilityOwners index_owners = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"index_owners&#92;""];</code>
     */
    var indexOwners: cosmos.capability.v1beta1.CapabilityOuterClass.CapabilityOwners
      @JvmName("getIndexOwners")
      get() = _builder.getIndexOwners()
      @JvmName("setIndexOwners")
      set(value) {
        _builder.setIndexOwners(value)
      }
    /**
     * <pre>
     * index_owners are the owners at the given index.
     * </pre>
     *
     * <code>.cosmos.capability.v1beta1.CapabilityOwners index_owners = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"index_owners&#92;""];</code>
     */
    fun clearIndexOwners() {
      _builder.clearIndexOwners()
    }
    /**
     * <pre>
     * index_owners are the owners at the given index.
     * </pre>
     *
     * <code>.cosmos.capability.v1beta1.CapabilityOwners index_owners = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"index_owners&#92;""];</code>
     * @return Whether the indexOwners field is set.
     */
    fun hasIndexOwners(): kotlin.Boolean {
      return _builder.hasIndexOwners()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.capability.v1beta1.Genesis.GenesisOwners.copy(block: cosmos.capability.v1beta1.GenesisOwnersKt.Dsl.() -> Unit): cosmos.capability.v1beta1.Genesis.GenesisOwners =
  cosmos.capability.v1beta1.GenesisOwnersKt.Dsl._create(this.toBuilder()).apply { block() }._build()
