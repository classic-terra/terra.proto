//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/client/v1/query.proto

package ibc.core.client.v1;

@kotlin.jvm.JvmSynthetic
inline fun queryClientParamsRequest(block: ibc.core.client.v1.QueryClientParamsRequestKt.Dsl.() -> Unit): ibc.core.client.v1.QueryOuterClass.QueryClientParamsRequest =
  ibc.core.client.v1.QueryClientParamsRequestKt.Dsl._create(ibc.core.client.v1.QueryOuterClass.QueryClientParamsRequest.newBuilder()).apply { block() }._build()
object QueryClientParamsRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.client.v1.QueryOuterClass.QueryClientParamsRequest.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.client.v1.QueryOuterClass.QueryClientParamsRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.client.v1.QueryOuterClass.QueryClientParamsRequest = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.client.v1.QueryOuterClass.QueryClientParamsRequest.copy(block: ibc.core.client.v1.QueryClientParamsRequestKt.Dsl.() -> Unit): ibc.core.client.v1.QueryOuterClass.QueryClientParamsRequest =
  ibc.core.client.v1.QueryClientParamsRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()