//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/channel/v1/tx.proto

package ibc.core.channel.v1;

@kotlin.jvm.JvmName("-initializemsgChannelCloseInitResponse")
public inline fun msgChannelCloseInitResponse(block: ibc.core.channel.v1.MsgChannelCloseInitResponseKt.Dsl.() -> kotlin.Unit): ibc.core.channel.v1.Tx.MsgChannelCloseInitResponse =
  ibc.core.channel.v1.MsgChannelCloseInitResponseKt.Dsl._create(ibc.core.channel.v1.Tx.MsgChannelCloseInitResponse.newBuilder()).apply { block() }._build()
public object MsgChannelCloseInitResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ibc.core.channel.v1.Tx.MsgChannelCloseInitResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.channel.v1.Tx.MsgChannelCloseInitResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.channel.v1.Tx.MsgChannelCloseInitResponse = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ibc.core.channel.v1.Tx.MsgChannelCloseInitResponse.copy(block: ibc.core.channel.v1.MsgChannelCloseInitResponseKt.Dsl.() -> kotlin.Unit): ibc.core.channel.v1.Tx.MsgChannelCloseInitResponse =
  ibc.core.channel.v1.MsgChannelCloseInitResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
