//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/applications/transfer/v1/genesis.proto

package ibc.applications.transfer.v1;

@kotlin.jvm.JvmSynthetic
inline fun genesisState(block: ibc.applications.transfer.v1.GenesisStateKt.Dsl.() -> Unit): ibc.applications.transfer.v1.Genesis.GenesisState =
  ibc.applications.transfer.v1.GenesisStateKt.Dsl._create(ibc.applications.transfer.v1.Genesis.GenesisState.newBuilder()).apply { block() }._build()
object GenesisStateKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.applications.transfer.v1.Genesis.GenesisState.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.applications.transfer.v1.Genesis.GenesisState.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.applications.transfer.v1.Genesis.GenesisState = _builder.build()

    /**
     * <code>string port_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"port_id&#92;""];</code>
     */
    var portId: kotlin.String
      @JvmName("getPortId")
      get() = _builder.getPortId()
      @JvmName("setPortId")
      set(value) {
        _builder.setPortId(value)
      }
    /**
     * <code>string port_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"port_id&#92;""];</code>
     */
    fun clearPortId() {
      _builder.clearPortId()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class DenomTracesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ibc.applications.transfer.v1.DenomTrace denom_traces = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"denom_traces&#92;"", (.gogoproto.castrepeated) = "Traces"];</code>
     */
     val denomTraces: com.google.protobuf.kotlin.DslList<ibc.applications.transfer.v1.Transfer.DenomTrace, DenomTracesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getDenomTracesList()
      )
    /**
     * <code>repeated .ibc.applications.transfer.v1.DenomTrace denom_traces = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"denom_traces&#92;"", (.gogoproto.castrepeated) = "Traces"];</code>
     * @param value The denomTraces to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addDenomTraces")
    fun com.google.protobuf.kotlin.DslList<ibc.applications.transfer.v1.Transfer.DenomTrace, DenomTracesProxy>.add(value: ibc.applications.transfer.v1.Transfer.DenomTrace) {
      _builder.addDenomTraces(value)
    }/**
     * <code>repeated .ibc.applications.transfer.v1.DenomTrace denom_traces = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"denom_traces&#92;"", (.gogoproto.castrepeated) = "Traces"];</code>
     * @param value The denomTraces to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignDenomTraces")
    inline operator fun com.google.protobuf.kotlin.DslList<ibc.applications.transfer.v1.Transfer.DenomTrace, DenomTracesProxy>.plusAssign(value: ibc.applications.transfer.v1.Transfer.DenomTrace) {
      add(value)
    }/**
     * <code>repeated .ibc.applications.transfer.v1.DenomTrace denom_traces = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"denom_traces&#92;"", (.gogoproto.castrepeated) = "Traces"];</code>
     * @param values The denomTraces to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllDenomTraces")
    fun com.google.protobuf.kotlin.DslList<ibc.applications.transfer.v1.Transfer.DenomTrace, DenomTracesProxy>.addAll(values: kotlin.collections.Iterable<ibc.applications.transfer.v1.Transfer.DenomTrace>) {
      _builder.addAllDenomTraces(values)
    }/**
     * <code>repeated .ibc.applications.transfer.v1.DenomTrace denom_traces = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"denom_traces&#92;"", (.gogoproto.castrepeated) = "Traces"];</code>
     * @param values The denomTraces to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllDenomTraces")
    inline operator fun com.google.protobuf.kotlin.DslList<ibc.applications.transfer.v1.Transfer.DenomTrace, DenomTracesProxy>.plusAssign(values: kotlin.collections.Iterable<ibc.applications.transfer.v1.Transfer.DenomTrace>) {
      addAll(values)
    }/**
     * <code>repeated .ibc.applications.transfer.v1.DenomTrace denom_traces = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"denom_traces&#92;"", (.gogoproto.castrepeated) = "Traces"];</code>
     * @param index The index to set the value at.
     * @param value The denomTraces to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setDenomTraces")
    operator fun com.google.protobuf.kotlin.DslList<ibc.applications.transfer.v1.Transfer.DenomTrace, DenomTracesProxy>.set(index: kotlin.Int, value: ibc.applications.transfer.v1.Transfer.DenomTrace) {
      _builder.setDenomTraces(index, value)
    }/**
     * <code>repeated .ibc.applications.transfer.v1.DenomTrace denom_traces = 2 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"denom_traces&#92;"", (.gogoproto.castrepeated) = "Traces"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearDenomTraces")
    fun com.google.protobuf.kotlin.DslList<ibc.applications.transfer.v1.Transfer.DenomTrace, DenomTracesProxy>.clear() {
      _builder.clearDenomTraces()
    }
    /**
     * <code>.ibc.applications.transfer.v1.Params params = 3 [(.gogoproto.nullable) = false];</code>
     */
    var params: ibc.applications.transfer.v1.Transfer.Params
      @JvmName("getParams")
      get() = _builder.getParams()
      @JvmName("setParams")
      set(value) {
        _builder.setParams(value)
      }
    /**
     * <code>.ibc.applications.transfer.v1.Params params = 3 [(.gogoproto.nullable) = false];</code>
     */
    fun clearParams() {
      _builder.clearParams()
    }
    /**
     * <code>.ibc.applications.transfer.v1.Params params = 3 [(.gogoproto.nullable) = false];</code>
     * @return Whether the params field is set.
     */
    fun hasParams(): kotlin.Boolean {
      return _builder.hasParams()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.applications.transfer.v1.Genesis.GenesisState.copy(block: ibc.applications.transfer.v1.GenesisStateKt.Dsl.() -> Unit): ibc.applications.transfer.v1.Genesis.GenesisState =
  ibc.applications.transfer.v1.GenesisStateKt.Dsl._create(this.toBuilder()).apply { block() }._build()