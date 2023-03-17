//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/treasury/v1beta1/query.proto

package terra.treasury.v1beta1;

@kotlin.jvm.JvmName("-initializequeryTaxCapRequest")
public inline fun queryTaxCapRequest(block: terra.treasury.v1beta1.QueryTaxCapRequestKt.Dsl.() -> kotlin.Unit): terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest =
  terra.treasury.v1beta1.QueryTaxCapRequestKt.Dsl._create(terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest.newBuilder()).apply { block() }._build()
public object QueryTaxCapRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest = _builder.build()

    /**
     * <pre>
     * denom defines the denomination to query for.
     * </pre>
     *
     * <code>string denom = 1;</code>
     */
    public var denom: kotlin.String
      @JvmName("getDenom")
      get() = _builder.getDenom()
      @JvmName("setDenom")
      set(value) {
        _builder.setDenom(value)
      }
    /**
     * <pre>
     * denom defines the denomination to query for.
     * </pre>
     *
     * <code>string denom = 1;</code>
     */
    public fun clearDenom() {
      _builder.clearDenom()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest.copy(block: terra.treasury.v1beta1.QueryTaxCapRequestKt.Dsl.() -> kotlin.Unit): terra.treasury.v1beta1.QueryOuterClass.QueryTaxCapRequest =
  terra.treasury.v1beta1.QueryTaxCapRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
