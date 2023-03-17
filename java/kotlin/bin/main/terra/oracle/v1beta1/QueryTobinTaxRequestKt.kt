//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/oracle/v1beta1/query.proto

package terra.oracle.v1beta1;

@kotlin.jvm.JvmName("-initializequeryTobinTaxRequest")
public inline fun queryTobinTaxRequest(block: terra.oracle.v1beta1.QueryTobinTaxRequestKt.Dsl.() -> kotlin.Unit): terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest =
  terra.oracle.v1beta1.QueryTobinTaxRequestKt.Dsl._create(terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest.newBuilder()).apply { block() }._build()
public object QueryTobinTaxRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest = _builder.build()

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
public inline fun terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest.copy(block: terra.oracle.v1beta1.QueryTobinTaxRequestKt.Dsl.() -> kotlin.Unit): terra.oracle.v1beta1.QueryOuterClass.QueryTobinTaxRequest =
  terra.oracle.v1beta1.QueryTobinTaxRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
