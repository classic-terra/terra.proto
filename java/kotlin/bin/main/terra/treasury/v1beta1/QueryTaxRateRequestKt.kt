//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/treasury/v1beta1/query.proto

package terra.treasury.v1beta1;

@kotlin.jvm.JvmName("-initializequeryTaxRateRequest")
public inline fun queryTaxRateRequest(block: terra.treasury.v1beta1.QueryTaxRateRequestKt.Dsl.() -> kotlin.Unit): terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest =
  terra.treasury.v1beta1.QueryTaxRateRequestKt.Dsl._create(terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest.newBuilder()).apply { block() }._build()
public object QueryTaxRateRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest.copy(block: terra.treasury.v1beta1.QueryTaxRateRequestKt.Dsl.() -> kotlin.Unit): terra.treasury.v1beta1.QueryOuterClass.QueryTaxRateRequest =
  terra.treasury.v1beta1.QueryTaxRateRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
