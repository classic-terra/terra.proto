//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/wasm/v1beta1/tx.proto

package terra.wasm.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun msgExecuteContract(block: terra.wasm.v1beta1.MsgExecuteContractKt.Dsl.() -> Unit): terra.wasm.v1beta1.Tx.MsgExecuteContract =
  terra.wasm.v1beta1.MsgExecuteContractKt.Dsl._create(terra.wasm.v1beta1.Tx.MsgExecuteContract.newBuilder()).apply { block() }._build()
object MsgExecuteContractKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: terra.wasm.v1beta1.Tx.MsgExecuteContract.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.wasm.v1beta1.Tx.MsgExecuteContract.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.wasm.v1beta1.Tx.MsgExecuteContract = _builder.build()

    /**
     * <pre>
     * Sender is the that actor that signed the messages
     * </pre>
     *
     * <code>string sender = 1 [(.gogoproto.moretags) = "yaml:&#92;"sender&#92;""];</code>
     */
    var sender: kotlin.String
      @JvmName("getSender")
      get() = _builder.getSender()
      @JvmName("setSender")
      set(value) {
        _builder.setSender(value)
      }
    /**
     * <pre>
     * Sender is the that actor that signed the messages
     * </pre>
     *
     * <code>string sender = 1 [(.gogoproto.moretags) = "yaml:&#92;"sender&#92;""];</code>
     */
    fun clearSender() {
      _builder.clearSender()
    }

    /**
     * <pre>
     * Contract is the address of the smart contract
     * </pre>
     *
     * <code>string contract = 2 [(.gogoproto.moretags) = "yaml:&#92;"contract&#92;""];</code>
     */
    var contract: kotlin.String
      @JvmName("getContract")
      get() = _builder.getContract()
      @JvmName("setContract")
      set(value) {
        _builder.setContract(value)
      }
    /**
     * <pre>
     * Contract is the address of the smart contract
     * </pre>
     *
     * <code>string contract = 2 [(.gogoproto.moretags) = "yaml:&#92;"contract&#92;""];</code>
     */
    fun clearContract() {
      _builder.clearContract()
    }

    /**
     * <pre>
     * ExecuteMsg json encoded message to be passed to the contract
     * </pre>
     *
     * <code>bytes execute_msg = 3 [(.gogoproto.moretags) = "yaml:&#92;"execute_msg&#92;"", (.gogoproto.casttype) = "encoding/json.RawMessage"];</code>
     */
    var executeMsg: com.google.protobuf.ByteString
      @JvmName("getExecuteMsg")
      get() = _builder.getExecuteMsg()
      @JvmName("setExecuteMsg")
      set(value) {
        _builder.setExecuteMsg(value)
      }
    /**
     * <pre>
     * ExecuteMsg json encoded message to be passed to the contract
     * </pre>
     *
     * <code>bytes execute_msg = 3 [(.gogoproto.moretags) = "yaml:&#92;"execute_msg&#92;"", (.gogoproto.casttype) = "encoding/json.RawMessage"];</code>
     */
    fun clearExecuteMsg() {
      _builder.clearExecuteMsg()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class CoinsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * Coins that are transferred to the contract on execution
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin coins = 5 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"coins&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
     val coins: com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, CoinsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getCoinsList()
      )
    /**
     * <pre>
     * Coins that are transferred to the contract on execution
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin coins = 5 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"coins&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The coins to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addCoins")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, CoinsProxy>.add(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.addCoins(value)
    }/**
     * <pre>
     * Coins that are transferred to the contract on execution
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin coins = 5 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"coins&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The coins to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignCoins")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, CoinsProxy>.plusAssign(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      add(value)
    }/**
     * <pre>
     * Coins that are transferred to the contract on execution
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin coins = 5 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"coins&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The coins to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllCoins")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, CoinsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      _builder.addAllCoins(values)
    }/**
     * <pre>
     * Coins that are transferred to the contract on execution
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin coins = 5 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"coins&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The coins to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllCoins")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, CoinsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      addAll(values)
    }/**
     * <pre>
     * Coins that are transferred to the contract on execution
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin coins = 5 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"coins&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param index The index to set the value at.
     * @param value The coins to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setCoins")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, CoinsProxy>.set(index: kotlin.Int, value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.setCoins(index, value)
    }/**
     * <pre>
     * Coins that are transferred to the contract on execution
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin coins = 5 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"coins&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearCoins")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, CoinsProxy>.clear() {
      _builder.clearCoins()
    }}
}
@kotlin.jvm.JvmSynthetic
inline fun terra.wasm.v1beta1.Tx.MsgExecuteContract.copy(block: terra.wasm.v1beta1.MsgExecuteContractKt.Dsl.() -> Unit): terra.wasm.v1beta1.Tx.MsgExecuteContract =
  terra.wasm.v1beta1.MsgExecuteContractKt.Dsl._create(this.toBuilder()).apply { block() }._build()
