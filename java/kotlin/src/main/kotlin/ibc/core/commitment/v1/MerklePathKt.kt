//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/commitment/v1/commitment.proto

package ibc.core.commitment.v1;

@kotlin.jvm.JvmName("-initializemerklePath")
public inline fun merklePath(block: ibc.core.commitment.v1.MerklePathKt.Dsl.() -> kotlin.Unit): ibc.core.commitment.v1.Commitment.MerklePath =
  ibc.core.commitment.v1.MerklePathKt.Dsl._create(ibc.core.commitment.v1.Commitment.MerklePath.newBuilder()).apply { block() }._build()
public object MerklePathKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ibc.core.commitment.v1.Commitment.MerklePath.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.commitment.v1.Commitment.MerklePath.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.commitment.v1.Commitment.MerklePath = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class KeyPathProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated string key_path = 1 [(.gogoproto.moretags) = "yaml:&#92;"key_path&#92;""];</code>
     * @return A list containing the keyPath.
     */
    public val keyPath: com.google.protobuf.kotlin.DslList<kotlin.String, KeyPathProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getKeyPathList()
      )
    /**
     * <code>repeated string key_path = 1 [(.gogoproto.moretags) = "yaml:&#92;"key_path&#92;""];</code>
     * @param value The keyPath to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addKeyPath")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, KeyPathProxy>.add(value: kotlin.String) {
      _builder.addKeyPath(value)
    }
    /**
     * <code>repeated string key_path = 1 [(.gogoproto.moretags) = "yaml:&#92;"key_path&#92;""];</code>
     * @param value The keyPath to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignKeyPath")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, KeyPathProxy>.plusAssign(value: kotlin.String) {
      add(value)
    }
    /**
     * <code>repeated string key_path = 1 [(.gogoproto.moretags) = "yaml:&#92;"key_path&#92;""];</code>
     * @param values The keyPath to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllKeyPath")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, KeyPathProxy>.addAll(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllKeyPath(values)
    }
    /**
     * <code>repeated string key_path = 1 [(.gogoproto.moretags) = "yaml:&#92;"key_path&#92;""];</code>
     * @param values The keyPath to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllKeyPath")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, KeyPathProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.String>) {
      addAll(values)
    }
    /**
     * <code>repeated string key_path = 1 [(.gogoproto.moretags) = "yaml:&#92;"key_path&#92;""];</code>
     * @param index The index to set the value at.
     * @param value The keyPath to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setKeyPath")
    public operator fun com.google.protobuf.kotlin.DslList<kotlin.String, KeyPathProxy>.set(index: kotlin.Int, value: kotlin.String) {
      _builder.setKeyPath(index, value)
    }/**
     * <code>repeated string key_path = 1 [(.gogoproto.moretags) = "yaml:&#92;"key_path&#92;""];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearKeyPath")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, KeyPathProxy>.clear() {
      _builder.clearKeyPath()
    }}
}
@kotlin.jvm.JvmSynthetic
public inline fun ibc.core.commitment.v1.Commitment.MerklePath.copy(block: ibc.core.commitment.v1.MerklePathKt.Dsl.() -> kotlin.Unit): ibc.core.commitment.v1.Commitment.MerklePath =
  ibc.core.commitment.v1.MerklePathKt.Dsl._create(this.toBuilder()).apply { block() }._build()
