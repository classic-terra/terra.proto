//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/channel/v1/tx.proto

package ibc.core.channel.v1;

@kotlin.jvm.JvmName("-initializemsgAcknowledgementResponse")
public inline fun msgAcknowledgementResponse(block: ibc.core.channel.v1.MsgAcknowledgementResponseKt.Dsl.() -> kotlin.Unit): ibc.core.channel.v1.Tx.MsgAcknowledgementResponse =
  ibc.core.channel.v1.MsgAcknowledgementResponseKt.Dsl._create(ibc.core.channel.v1.Tx.MsgAcknowledgementResponse.newBuilder()).apply { block() }._build()
public object MsgAcknowledgementResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ibc.core.channel.v1.Tx.MsgAcknowledgementResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.channel.v1.Tx.MsgAcknowledgementResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.channel.v1.Tx.MsgAcknowledgementResponse = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ibc.core.channel.v1.Tx.MsgAcknowledgementResponse.copy(block: ibc.core.channel.v1.MsgAcknowledgementResponseKt.Dsl.() -> kotlin.Unit): ibc.core.channel.v1.Tx.MsgAcknowledgementResponse =
  ibc.core.channel.v1.MsgAcknowledgementResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
