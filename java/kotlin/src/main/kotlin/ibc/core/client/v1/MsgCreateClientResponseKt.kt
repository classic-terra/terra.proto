//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/client/v1/tx.proto

package ibc.core.client.v1;

@kotlin.jvm.JvmSynthetic
inline fun msgCreateClientResponse(block: ibc.core.client.v1.MsgCreateClientResponseKt.Dsl.() -> Unit): ibc.core.client.v1.Tx.MsgCreateClientResponse =
  ibc.core.client.v1.MsgCreateClientResponseKt.Dsl._create(ibc.core.client.v1.Tx.MsgCreateClientResponse.newBuilder()).apply { block() }._build()
object MsgCreateClientResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.client.v1.Tx.MsgCreateClientResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.client.v1.Tx.MsgCreateClientResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.client.v1.Tx.MsgCreateClientResponse = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.client.v1.Tx.MsgCreateClientResponse.copy(block: ibc.core.client.v1.MsgCreateClientResponseKt.Dsl.() -> Unit): ibc.core.client.v1.Tx.MsgCreateClientResponse =
  ibc.core.client.v1.MsgCreateClientResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
