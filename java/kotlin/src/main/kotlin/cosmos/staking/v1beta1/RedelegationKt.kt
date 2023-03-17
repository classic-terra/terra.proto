//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/staking/v1beta1/staking.proto

package cosmos.staking.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun redelegation(block: cosmos.staking.v1beta1.RedelegationKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Staking.Redelegation =
  cosmos.staking.v1beta1.RedelegationKt.Dsl._create(cosmos.staking.v1beta1.Staking.Redelegation.newBuilder()).apply { block() }._build()
object RedelegationKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.staking.v1beta1.Staking.Redelegation.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.staking.v1beta1.Staking.Redelegation.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.staking.v1beta1.Staking.Redelegation = _builder.build()

    /**
     * <pre>
     * delegator_address is the bech32-encoded address of the delegator.
     * </pre>
     *
     * <code>string delegator_address = 1 [(.gogoproto.moretags) = "yaml:&#92;"delegator_address&#92;""];</code>
     */
    var delegatorAddress: kotlin.String
      @JvmName("getDelegatorAddress")
      get() = _builder.getDelegatorAddress()
      @JvmName("setDelegatorAddress")
      set(value) {
        _builder.setDelegatorAddress(value)
      }
    /**
     * <pre>
     * delegator_address is the bech32-encoded address of the delegator.
     * </pre>
     *
     * <code>string delegator_address = 1 [(.gogoproto.moretags) = "yaml:&#92;"delegator_address&#92;""];</code>
     */
    fun clearDelegatorAddress() {
      _builder.clearDelegatorAddress()
    }

    /**
     * <pre>
     * validator_src_address is the validator redelegation source operator address.
     * </pre>
     *
     * <code>string validator_src_address = 2 [(.gogoproto.moretags) = "yaml:&#92;"validator_src_address&#92;""];</code>
     */
    var validatorSrcAddress: kotlin.String
      @JvmName("getValidatorSrcAddress")
      get() = _builder.getValidatorSrcAddress()
      @JvmName("setValidatorSrcAddress")
      set(value) {
        _builder.setValidatorSrcAddress(value)
      }
    /**
     * <pre>
     * validator_src_address is the validator redelegation source operator address.
     * </pre>
     *
     * <code>string validator_src_address = 2 [(.gogoproto.moretags) = "yaml:&#92;"validator_src_address&#92;""];</code>
     */
    fun clearValidatorSrcAddress() {
      _builder.clearValidatorSrcAddress()
    }

    /**
     * <pre>
     * validator_dst_address is the validator redelegation destination operator address.
     * </pre>
     *
     * <code>string validator_dst_address = 3 [(.gogoproto.moretags) = "yaml:&#92;"validator_dst_address&#92;""];</code>
     */
    var validatorDstAddress: kotlin.String
      @JvmName("getValidatorDstAddress")
      get() = _builder.getValidatorDstAddress()
      @JvmName("setValidatorDstAddress")
      set(value) {
        _builder.setValidatorDstAddress(value)
      }
    /**
     * <pre>
     * validator_dst_address is the validator redelegation destination operator address.
     * </pre>
     *
     * <code>string validator_dst_address = 3 [(.gogoproto.moretags) = "yaml:&#92;"validator_dst_address&#92;""];</code>
     */
    fun clearValidatorDstAddress() {
      _builder.clearValidatorDstAddress()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class EntriesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * entries are the redelegation entries.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.RedelegationEntry entries = 4 [(.gogoproto.nullable) = false];</code>
     */
     val entries: com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.RedelegationEntry, EntriesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getEntriesList()
      )
    /**
     * <pre>
     * entries are the redelegation entries.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.RedelegationEntry entries = 4 [(.gogoproto.nullable) = false];</code>
     * @param value The entries to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addEntries")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.RedelegationEntry, EntriesProxy>.add(value: cosmos.staking.v1beta1.Staking.RedelegationEntry) {
      _builder.addEntries(value)
    }/**
     * <pre>
     * entries are the redelegation entries.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.RedelegationEntry entries = 4 [(.gogoproto.nullable) = false];</code>
     * @param value The entries to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignEntries")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.RedelegationEntry, EntriesProxy>.plusAssign(value: cosmos.staking.v1beta1.Staking.RedelegationEntry) {
      add(value)
    }/**
     * <pre>
     * entries are the redelegation entries.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.RedelegationEntry entries = 4 [(.gogoproto.nullable) = false];</code>
     * @param values The entries to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllEntries")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.RedelegationEntry, EntriesProxy>.addAll(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.RedelegationEntry>) {
      _builder.addAllEntries(values)
    }/**
     * <pre>
     * entries are the redelegation entries.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.RedelegationEntry entries = 4 [(.gogoproto.nullable) = false];</code>
     * @param values The entries to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllEntries")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.RedelegationEntry, EntriesProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.staking.v1beta1.Staking.RedelegationEntry>) {
      addAll(values)
    }/**
     * <pre>
     * entries are the redelegation entries.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.RedelegationEntry entries = 4 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The entries to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setEntries")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.RedelegationEntry, EntriesProxy>.set(index: kotlin.Int, value: cosmos.staking.v1beta1.Staking.RedelegationEntry) {
      _builder.setEntries(index, value)
    }/**
     * <pre>
     * entries are the redelegation entries.
     * </pre>
     *
     * <code>repeated .cosmos.staking.v1beta1.RedelegationEntry entries = 4 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearEntries")
    fun com.google.protobuf.kotlin.DslList<cosmos.staking.v1beta1.Staking.RedelegationEntry, EntriesProxy>.clear() {
      _builder.clearEntries()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.staking.v1beta1.Staking.Redelegation.copy(block: cosmos.staking.v1beta1.RedelegationKt.Dsl.() -> Unit): cosmos.staking.v1beta1.Staking.Redelegation =
  cosmos.staking.v1beta1.RedelegationKt.Dsl._create(this.toBuilder()).apply { block() }._build()
