//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/oracle/v1beta1/tx.proto

package terra.oracle.v1beta1;

@kotlin.jvm.JvmName("-initializemsgAggregateExchangeRatePrevoteResponse")
public inline fun msgAggregateExchangeRatePrevoteResponse(block: terra.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponseKt.Dsl.() -> kotlin.Unit): terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse =
  terra.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponseKt.Dsl._create(terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse.newBuilder()).apply { block() }._build()
public object MsgAggregateExchangeRatePrevoteResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse.copy(block: terra.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponseKt.Dsl.() -> kotlin.Unit): terra.oracle.v1beta1.Tx.MsgAggregateExchangeRatePrevoteResponse =
  terra.oracle.v1beta1.MsgAggregateExchangeRatePrevoteResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
