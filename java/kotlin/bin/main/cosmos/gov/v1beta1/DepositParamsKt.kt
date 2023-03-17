//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/gov/v1beta1/gov.proto

package cosmos.gov.v1beta1;

@kotlin.jvm.JvmName("-initializedepositParams")
public inline fun depositParams(block: cosmos.gov.v1beta1.DepositParamsKt.Dsl.() -> kotlin.Unit): cosmos.gov.v1beta1.Gov.DepositParams =
  cosmos.gov.v1beta1.DepositParamsKt.Dsl._create(cosmos.gov.v1beta1.Gov.DepositParams.newBuilder()).apply { block() }._build()
public object DepositParamsKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: cosmos.gov.v1beta1.Gov.DepositParams.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.gov.v1beta1.Gov.DepositParams.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.gov.v1beta1.Gov.DepositParams = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class MinDepositProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     *  Minimum deposit for a proposal to enter voting period.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin min_deposit = 1 [(.gogoproto.nullable) = false, (.gogoproto.jsontag) = "min_deposit,omitempty", (.gogoproto.moretags) = "yaml:&#92;"min_deposit&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
     public val minDeposit: com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, MinDepositProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getMinDepositList()
      )
    /**
     * <pre>
     *  Minimum deposit for a proposal to enter voting period.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin min_deposit = 1 [(.gogoproto.nullable) = false, (.gogoproto.jsontag) = "min_deposit,omitempty", (.gogoproto.moretags) = "yaml:&#92;"min_deposit&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The minDeposit to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addMinDeposit")
    public fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, MinDepositProxy>.add(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.addMinDeposit(value)
    }
    /**
     * <pre>
     *  Minimum deposit for a proposal to enter voting period.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin min_deposit = 1 [(.gogoproto.nullable) = false, (.gogoproto.jsontag) = "min_deposit,omitempty", (.gogoproto.moretags) = "yaml:&#92;"min_deposit&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The minDeposit to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignMinDeposit")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, MinDepositProxy>.plusAssign(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      add(value)
    }
    /**
     * <pre>
     *  Minimum deposit for a proposal to enter voting period.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin min_deposit = 1 [(.gogoproto.nullable) = false, (.gogoproto.jsontag) = "min_deposit,omitempty", (.gogoproto.moretags) = "yaml:&#92;"min_deposit&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The minDeposit to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllMinDeposit")
    public fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, MinDepositProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      _builder.addAllMinDeposit(values)
    }
    /**
     * <pre>
     *  Minimum deposit for a proposal to enter voting period.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin min_deposit = 1 [(.gogoproto.nullable) = false, (.gogoproto.jsontag) = "min_deposit,omitempty", (.gogoproto.moretags) = "yaml:&#92;"min_deposit&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The minDeposit to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllMinDeposit")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, MinDepositProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      addAll(values)
    }
    /**
     * <pre>
     *  Minimum deposit for a proposal to enter voting period.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin min_deposit = 1 [(.gogoproto.nullable) = false, (.gogoproto.jsontag) = "min_deposit,omitempty", (.gogoproto.moretags) = "yaml:&#92;"min_deposit&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param index The index to set the value at.
     * @param value The minDeposit to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setMinDeposit")
    public operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, MinDepositProxy>.set(index: kotlin.Int, value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.setMinDeposit(index, value)
    }
    /**
     * <pre>
     *  Minimum deposit for a proposal to enter voting period.
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin min_deposit = 1 [(.gogoproto.nullable) = false, (.gogoproto.jsontag) = "min_deposit,omitempty", (.gogoproto.moretags) = "yaml:&#92;"min_deposit&#92;"", (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearMinDeposit")
    public fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, MinDepositProxy>.clear() {
      _builder.clearMinDeposit()
    }


    /**
     * <pre>
     *  Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     *  months.
     * </pre>
     *
     * <code>.google.protobuf.Duration max_deposit_period = 2 [(.gogoproto.nullable) = false, (.gogoproto.jsontag) = "max_deposit_period,omitempty", (.gogoproto.moretags) = "yaml:&#92;"max_deposit_period&#92;"", (.gogoproto.stdduration) = true];</code>
     */
    public var maxDepositPeriod: com.google.protobuf.Duration
      @JvmName("getMaxDepositPeriod")
      get() = _builder.getMaxDepositPeriod()
      @JvmName("setMaxDepositPeriod")
      set(value) {
        _builder.setMaxDepositPeriod(value)
      }
    /**
     * <pre>
     *  Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     *  months.
     * </pre>
     *
     * <code>.google.protobuf.Duration max_deposit_period = 2 [(.gogoproto.nullable) = false, (.gogoproto.jsontag) = "max_deposit_period,omitempty", (.gogoproto.moretags) = "yaml:&#92;"max_deposit_period&#92;"", (.gogoproto.stdduration) = true];</code>
     */
    public fun clearMaxDepositPeriod() {
      _builder.clearMaxDepositPeriod()
    }
    /**
     * <pre>
     *  Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     *  months.
     * </pre>
     *
     * <code>.google.protobuf.Duration max_deposit_period = 2 [(.gogoproto.nullable) = false, (.gogoproto.jsontag) = "max_deposit_period,omitempty", (.gogoproto.moretags) = "yaml:&#92;"max_deposit_period&#92;"", (.gogoproto.stdduration) = true];</code>
     * @return Whether the maxDepositPeriod field is set.
     */
    public fun hasMaxDepositPeriod(): kotlin.Boolean {
      return _builder.hasMaxDepositPeriod()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun cosmos.gov.v1beta1.Gov.DepositParams.copy(block: cosmos.gov.v1beta1.DepositParamsKt.Dsl.() -> kotlin.Unit): cosmos.gov.v1beta1.Gov.DepositParams =
  cosmos.gov.v1beta1.DepositParamsKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val cosmos.gov.v1beta1.Gov.DepositParamsOrBuilder.maxDepositPeriodOrNull: com.google.protobuf.Duration?
  get() = if (hasMaxDepositPeriod()) getMaxDepositPeriod() else null
