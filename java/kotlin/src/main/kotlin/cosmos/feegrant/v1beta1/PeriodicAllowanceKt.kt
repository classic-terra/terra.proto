//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/feegrant/v1beta1/feegrant.proto

package cosmos.feegrant.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun periodicAllowance(block: cosmos.feegrant.v1beta1.PeriodicAllowanceKt.Dsl.() -> Unit): cosmos.feegrant.v1beta1.Feegrant.PeriodicAllowance =
  cosmos.feegrant.v1beta1.PeriodicAllowanceKt.Dsl._create(cosmos.feegrant.v1beta1.Feegrant.PeriodicAllowance.newBuilder()).apply { block() }._build()
object PeriodicAllowanceKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.feegrant.v1beta1.Feegrant.PeriodicAllowance.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.feegrant.v1beta1.Feegrant.PeriodicAllowance.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.feegrant.v1beta1.Feegrant.PeriodicAllowance = _builder.build()

    /**
     * <pre>
     * basic specifies a struct of `BasicAllowance`
     * </pre>
     *
     * <code>.cosmos.feegrant.v1beta1.BasicAllowance basic = 1 [(.gogoproto.nullable) = false];</code>
     */
    var basic: cosmos.feegrant.v1beta1.Feegrant.BasicAllowance
      @JvmName("getBasic")
      get() = _builder.getBasic()
      @JvmName("setBasic")
      set(value) {
        _builder.setBasic(value)
      }
    /**
     * <pre>
     * basic specifies a struct of `BasicAllowance`
     * </pre>
     *
     * <code>.cosmos.feegrant.v1beta1.BasicAllowance basic = 1 [(.gogoproto.nullable) = false];</code>
     */
    fun clearBasic() {
      _builder.clearBasic()
    }
    /**
     * <pre>
     * basic specifies a struct of `BasicAllowance`
     * </pre>
     *
     * <code>.cosmos.feegrant.v1beta1.BasicAllowance basic = 1 [(.gogoproto.nullable) = false];</code>
     * @return Whether the basic field is set.
     */
    fun hasBasic(): kotlin.Boolean {
      return _builder.hasBasic()
    }

    /**
     * <pre>
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     * </pre>
     *
     * <code>.google.protobuf.Duration period = 2 [(.gogoproto.nullable) = false, (.gogoproto.stdduration) = true];</code>
     */
    var period: com.google.protobuf.Duration
      @JvmName("getPeriod")
      get() = _builder.getPeriod()
      @JvmName("setPeriod")
      set(value) {
        _builder.setPeriod(value)
      }
    /**
     * <pre>
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     * </pre>
     *
     * <code>.google.protobuf.Duration period = 2 [(.gogoproto.nullable) = false, (.gogoproto.stdduration) = true];</code>
     */
    fun clearPeriod() {
      _builder.clearPeriod()
    }
    /**
     * <pre>
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     * </pre>
     *
     * <code>.google.protobuf.Duration period = 2 [(.gogoproto.nullable) = false, (.gogoproto.stdduration) = true];</code>
     * @return Whether the period field is set.
     */
    fun hasPeriod(): kotlin.Boolean {
      return _builder.hasPeriod()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class PeriodSpendLimitProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_spend_limit = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
     val periodSpendLimit: com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodSpendLimitProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getPeriodSpendLimitList()
      )
    /**
     * <pre>
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_spend_limit = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The periodSpendLimit to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addPeriodSpendLimit")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodSpendLimitProxy>.add(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.addPeriodSpendLimit(value)
    }/**
     * <pre>
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_spend_limit = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The periodSpendLimit to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignPeriodSpendLimit")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodSpendLimitProxy>.plusAssign(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      add(value)
    }/**
     * <pre>
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_spend_limit = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The periodSpendLimit to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllPeriodSpendLimit")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodSpendLimitProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      _builder.addAllPeriodSpendLimit(values)
    }/**
     * <pre>
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_spend_limit = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The periodSpendLimit to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllPeriodSpendLimit")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodSpendLimitProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      addAll(values)
    }/**
     * <pre>
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_spend_limit = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param index The index to set the value at.
     * @param value The periodSpendLimit to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setPeriodSpendLimit")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodSpendLimitProxy>.set(index: kotlin.Int, value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.setPeriodSpendLimit(index, value)
    }/**
     * <pre>
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_spend_limit = 3 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearPeriodSpendLimit")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodSpendLimitProxy>.clear() {
      _builder.clearPeriodSpendLimit()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class PeriodCanSpendProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * period_can_spend is the number of coins left to be spent before the period_reset time
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_can_spend = 4 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
     val periodCanSpend: com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodCanSpendProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getPeriodCanSpendList()
      )
    /**
     * <pre>
     * period_can_spend is the number of coins left to be spent before the period_reset time
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_can_spend = 4 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The periodCanSpend to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addPeriodCanSpend")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodCanSpendProxy>.add(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.addPeriodCanSpend(value)
    }/**
     * <pre>
     * period_can_spend is the number of coins left to be spent before the period_reset time
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_can_spend = 4 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param value The periodCanSpend to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignPeriodCanSpend")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodCanSpendProxy>.plusAssign(value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      add(value)
    }/**
     * <pre>
     * period_can_spend is the number of coins left to be spent before the period_reset time
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_can_spend = 4 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The periodCanSpend to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllPeriodCanSpend")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodCanSpendProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      _builder.addAllPeriodCanSpend(values)
    }/**
     * <pre>
     * period_can_spend is the number of coins left to be spent before the period_reset time
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_can_spend = 4 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param values The periodCanSpend to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllPeriodCanSpend")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodCanSpendProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.v1beta1.CoinOuterClass.Coin>) {
      addAll(values)
    }/**
     * <pre>
     * period_can_spend is the number of coins left to be spent before the period_reset time
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_can_spend = 4 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     * @param index The index to set the value at.
     * @param value The periodCanSpend to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setPeriodCanSpend")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodCanSpendProxy>.set(index: kotlin.Int, value: cosmos.base.v1beta1.CoinOuterClass.Coin) {
      _builder.setPeriodCanSpend(index, value)
    }/**
     * <pre>
     * period_can_spend is the number of coins left to be spent before the period_reset time
     * </pre>
     *
     * <code>repeated .cosmos.base.v1beta1.Coin period_can_spend = 4 [(.gogoproto.nullable) = false, (.gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearPeriodCanSpend")
    fun com.google.protobuf.kotlin.DslList<cosmos.base.v1beta1.CoinOuterClass.Coin, PeriodCanSpendProxy>.clear() {
      _builder.clearPeriodCanSpend()
    }
    /**
     * <pre>
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     * </pre>
     *
     * <code>.google.protobuf.Timestamp period_reset = 5 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     */
    var periodReset: com.google.protobuf.Timestamp
      @JvmName("getPeriodReset")
      get() = _builder.getPeriodReset()
      @JvmName("setPeriodReset")
      set(value) {
        _builder.setPeriodReset(value)
      }
    /**
     * <pre>
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     * </pre>
     *
     * <code>.google.protobuf.Timestamp period_reset = 5 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     */
    fun clearPeriodReset() {
      _builder.clearPeriodReset()
    }
    /**
     * <pre>
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     * </pre>
     *
     * <code>.google.protobuf.Timestamp period_reset = 5 [(.gogoproto.nullable) = false, (.gogoproto.stdtime) = true];</code>
     * @return Whether the periodReset field is set.
     */
    fun hasPeriodReset(): kotlin.Boolean {
      return _builder.hasPeriodReset()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.feegrant.v1beta1.Feegrant.PeriodicAllowance.copy(block: cosmos.feegrant.v1beta1.PeriodicAllowanceKt.Dsl.() -> Unit): cosmos.feegrant.v1beta1.Feegrant.PeriodicAllowance =
  cosmos.feegrant.v1beta1.PeriodicAllowanceKt.Dsl._create(this.toBuilder()).apply { block() }._build()
