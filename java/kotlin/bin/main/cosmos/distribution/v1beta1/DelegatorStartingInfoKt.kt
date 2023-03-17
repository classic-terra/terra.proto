//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/distribution/v1beta1/distribution.proto

package cosmos.distribution.v1beta1;

@kotlin.jvm.JvmName("-initializedelegatorStartingInfo")
public inline fun delegatorStartingInfo(block: cosmos.distribution.v1beta1.DelegatorStartingInfoKt.Dsl.() -> kotlin.Unit): cosmos.distribution.v1beta1.Distribution.DelegatorStartingInfo =
  cosmos.distribution.v1beta1.DelegatorStartingInfoKt.Dsl._create(cosmos.distribution.v1beta1.Distribution.DelegatorStartingInfo.newBuilder()).apply { block() }._build()
public object DelegatorStartingInfoKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: cosmos.distribution.v1beta1.Distribution.DelegatorStartingInfo.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.distribution.v1beta1.Distribution.DelegatorStartingInfo.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.distribution.v1beta1.Distribution.DelegatorStartingInfo = _builder.build()

    /**
     * <code>uint64 previous_period = 1 [(.gogoproto.moretags) = "yaml:&#92;"previous_period&#92;""];</code>
     */
    public var previousPeriod: kotlin.Long
      @JvmName("getPreviousPeriod")
      get() = _builder.getPreviousPeriod()
      @JvmName("setPreviousPeriod")
      set(value) {
        _builder.setPreviousPeriod(value)
      }
    /**
     * <code>uint64 previous_period = 1 [(.gogoproto.moretags) = "yaml:&#92;"previous_period&#92;""];</code>
     */
    public fun clearPreviousPeriod() {
      _builder.clearPreviousPeriod()
    }

    /**
     * <code>string stake = 2 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec", (.gogoproto.moretags) = "yaml:&#92;"stake&#92;""];</code>
     */
    public var stake: kotlin.String
      @JvmName("getStake")
      get() = _builder.getStake()
      @JvmName("setStake")
      set(value) {
        _builder.setStake(value)
      }
    /**
     * <code>string stake = 2 [(.gogoproto.nullable) = false, (.gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Dec", (.gogoproto.moretags) = "yaml:&#92;"stake&#92;""];</code>
     */
    public fun clearStake() {
      _builder.clearStake()
    }

    /**
     * <code>uint64 height = 3 [(.gogoproto.jsontag) = "creation_height", (.gogoproto.moretags) = "yaml:&#92;"creation_height&#92;""];</code>
     */
    public var height: kotlin.Long
      @JvmName("getHeight")
      get() = _builder.getHeight()
      @JvmName("setHeight")
      set(value) {
        _builder.setHeight(value)
      }
    /**
     * <code>uint64 height = 3 [(.gogoproto.jsontag) = "creation_height", (.gogoproto.moretags) = "yaml:&#92;"creation_height&#92;""];</code>
     */
    public fun clearHeight() {
      _builder.clearHeight()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun cosmos.distribution.v1beta1.Distribution.DelegatorStartingInfo.copy(block: cosmos.distribution.v1beta1.DelegatorStartingInfoKt.Dsl.() -> kotlin.Unit): cosmos.distribution.v1beta1.Distribution.DelegatorStartingInfo =
  cosmos.distribution.v1beta1.DelegatorStartingInfoKt.Dsl._create(this.toBuilder()).apply { block() }._build()
