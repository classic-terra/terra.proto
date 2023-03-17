//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/wasm/v1beta1/genesis.proto

package terra.wasm.v1beta1;

@kotlin.jvm.JvmName("-initializegenesisState")
public inline fun genesisState(block: terra.wasm.v1beta1.GenesisStateKt.Dsl.() -> kotlin.Unit): terra.wasm.v1beta1.Genesis.GenesisState =
  terra.wasm.v1beta1.GenesisStateKt.Dsl._create(terra.wasm.v1beta1.Genesis.GenesisState.newBuilder()).apply { block() }._build()
public object GenesisStateKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: terra.wasm.v1beta1.Genesis.GenesisState.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.wasm.v1beta1.Genesis.GenesisState.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.wasm.v1beta1.Genesis.GenesisState = _builder.build()

    /**
     * <code>.terra.wasm.v1beta1.Params params = 1 [(.gogoproto.nullable) = false];</code>
     */
    public var params: terra.wasm.v1beta1.Wasm.Params
      @JvmName("getParams")
      get() = _builder.getParams()
      @JvmName("setParams")
      set(value) {
        _builder.setParams(value)
      }
    /**
     * <code>.terra.wasm.v1beta1.Params params = 1 [(.gogoproto.nullable) = false];</code>
     */
    public fun clearParams() {
      _builder.clearParams()
    }
    /**
     * <code>.terra.wasm.v1beta1.Params params = 1 [(.gogoproto.nullable) = false];</code>
     * @return Whether the params field is set.
     */
    public fun hasParams(): kotlin.Boolean {
      return _builder.hasParams()
    }

    /**
     * <code>uint64 last_code_id = 2 [(.gogoproto.customname) = "LastCodeID"];</code>
     */
    public var lastCodeId: kotlin.Long
      @JvmName("getLastCodeId")
      get() = _builder.getLastCodeId()
      @JvmName("setLastCodeId")
      set(value) {
        _builder.setLastCodeId(value)
      }
    /**
     * <code>uint64 last_code_id = 2 [(.gogoproto.customname) = "LastCodeID"];</code>
     */
    public fun clearLastCodeId() {
      _builder.clearLastCodeId()
    }

    /**
     * <code>uint64 last_instance_id = 3 [(.gogoproto.customname) = "LastInstanceID"];</code>
     */
    public var lastInstanceId: kotlin.Long
      @JvmName("getLastInstanceId")
      get() = _builder.getLastInstanceId()
      @JvmName("setLastInstanceId")
      set(value) {
        _builder.setLastInstanceId(value)
      }
    /**
     * <code>uint64 last_instance_id = 3 [(.gogoproto.customname) = "LastInstanceID"];</code>
     */
    public fun clearLastInstanceId() {
      _builder.clearLastInstanceId()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class CodesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .terra.wasm.v1beta1.Code codes = 4 [(.gogoproto.nullable) = false];</code>
     */
     public val codes: com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Code, CodesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getCodesList()
      )
    /**
     * <code>repeated .terra.wasm.v1beta1.Code codes = 4 [(.gogoproto.nullable) = false];</code>
     * @param value The codes to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addCodes")
    public fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Code, CodesProxy>.add(value: terra.wasm.v1beta1.Genesis.Code) {
      _builder.addCodes(value)
    }
    /**
     * <code>repeated .terra.wasm.v1beta1.Code codes = 4 [(.gogoproto.nullable) = false];</code>
     * @param value The codes to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignCodes")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Code, CodesProxy>.plusAssign(value: terra.wasm.v1beta1.Genesis.Code) {
      add(value)
    }
    /**
     * <code>repeated .terra.wasm.v1beta1.Code codes = 4 [(.gogoproto.nullable) = false];</code>
     * @param values The codes to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllCodes")
    public fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Code, CodesProxy>.addAll(values: kotlin.collections.Iterable<terra.wasm.v1beta1.Genesis.Code>) {
      _builder.addAllCodes(values)
    }
    /**
     * <code>repeated .terra.wasm.v1beta1.Code codes = 4 [(.gogoproto.nullable) = false];</code>
     * @param values The codes to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllCodes")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Code, CodesProxy>.plusAssign(values: kotlin.collections.Iterable<terra.wasm.v1beta1.Genesis.Code>) {
      addAll(values)
    }
    /**
     * <code>repeated .terra.wasm.v1beta1.Code codes = 4 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The codes to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setCodes")
    public operator fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Code, CodesProxy>.set(index: kotlin.Int, value: terra.wasm.v1beta1.Genesis.Code) {
      _builder.setCodes(index, value)
    }
    /**
     * <code>repeated .terra.wasm.v1beta1.Code codes = 4 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearCodes")
    public fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Code, CodesProxy>.clear() {
      _builder.clearCodes()
    }


    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class ContractsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .terra.wasm.v1beta1.Contract contracts = 5 [(.gogoproto.nullable) = false];</code>
     */
     public val contracts: com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Contract, ContractsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getContractsList()
      )
    /**
     * <code>repeated .terra.wasm.v1beta1.Contract contracts = 5 [(.gogoproto.nullable) = false];</code>
     * @param value The contracts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addContracts")
    public fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Contract, ContractsProxy>.add(value: terra.wasm.v1beta1.Genesis.Contract) {
      _builder.addContracts(value)
    }
    /**
     * <code>repeated .terra.wasm.v1beta1.Contract contracts = 5 [(.gogoproto.nullable) = false];</code>
     * @param value The contracts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignContracts")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Contract, ContractsProxy>.plusAssign(value: terra.wasm.v1beta1.Genesis.Contract) {
      add(value)
    }
    /**
     * <code>repeated .terra.wasm.v1beta1.Contract contracts = 5 [(.gogoproto.nullable) = false];</code>
     * @param values The contracts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllContracts")
    public fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Contract, ContractsProxy>.addAll(values: kotlin.collections.Iterable<terra.wasm.v1beta1.Genesis.Contract>) {
      _builder.addAllContracts(values)
    }
    /**
     * <code>repeated .terra.wasm.v1beta1.Contract contracts = 5 [(.gogoproto.nullable) = false];</code>
     * @param values The contracts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllContracts")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Contract, ContractsProxy>.plusAssign(values: kotlin.collections.Iterable<terra.wasm.v1beta1.Genesis.Contract>) {
      addAll(values)
    }
    /**
     * <code>repeated .terra.wasm.v1beta1.Contract contracts = 5 [(.gogoproto.nullable) = false];</code>
     * @param index The index to set the value at.
     * @param value The contracts to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setContracts")
    public operator fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Contract, ContractsProxy>.set(index: kotlin.Int, value: terra.wasm.v1beta1.Genesis.Contract) {
      _builder.setContracts(index, value)
    }
    /**
     * <code>repeated .terra.wasm.v1beta1.Contract contracts = 5 [(.gogoproto.nullable) = false];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearContracts")
    public fun com.google.protobuf.kotlin.DslList<terra.wasm.v1beta1.Genesis.Contract, ContractsProxy>.clear() {
      _builder.clearContracts()
    }

  }
}
@kotlin.jvm.JvmSynthetic
public inline fun terra.wasm.v1beta1.Genesis.GenesisState.copy(block: terra.wasm.v1beta1.GenesisStateKt.Dsl.() -> kotlin.Unit): terra.wasm.v1beta1.Genesis.GenesisState =
  terra.wasm.v1beta1.GenesisStateKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val terra.wasm.v1beta1.Genesis.GenesisStateOrBuilder.paramsOrNull: terra.wasm.v1beta1.Wasm.Params?
  get() = if (hasParams()) getParams() else null
