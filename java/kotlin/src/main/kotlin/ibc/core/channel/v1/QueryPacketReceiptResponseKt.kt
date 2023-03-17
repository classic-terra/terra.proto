//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/channel/v1/query.proto

package ibc.core.channel.v1;

@kotlin.jvm.JvmName("-initializequeryPacketReceiptResponse")
public inline fun queryPacketReceiptResponse(block: ibc.core.channel.v1.QueryPacketReceiptResponseKt.Dsl.() -> kotlin.Unit): ibc.core.channel.v1.QueryOuterClass.QueryPacketReceiptResponse =
  ibc.core.channel.v1.QueryPacketReceiptResponseKt.Dsl._create(ibc.core.channel.v1.QueryOuterClass.QueryPacketReceiptResponse.newBuilder()).apply { block() }._build()
public object QueryPacketReceiptResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ibc.core.channel.v1.QueryOuterClass.QueryPacketReceiptResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.channel.v1.QueryOuterClass.QueryPacketReceiptResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.channel.v1.QueryOuterClass.QueryPacketReceiptResponse = _builder.build()

    /**
     * <pre>
     * success flag for if receipt exists
     * </pre>
     *
     * <code>bool received = 2;</code>
     */
    public var received: kotlin.Boolean
      @JvmName("getReceived")
      get() = _builder.getReceived()
      @JvmName("setReceived")
      set(value) {
        _builder.setReceived(value)
      }
    /**
     * <pre>
     * success flag for if receipt exists
     * </pre>
     *
     * <code>bool received = 2;</code>
     */
    public fun clearReceived() {
      _builder.clearReceived()
    }

    /**
     * <pre>
     * merkle proof of existence
     * </pre>
     *
     * <code>bytes proof = 3;</code>
     */
    public var proof: com.google.protobuf.ByteString
      @JvmName("getProof")
      get() = _builder.getProof()
      @JvmName("setProof")
      set(value) {
        _builder.setProof(value)
      }
    /**
     * <pre>
     * merkle proof of existence
     * </pre>
     *
     * <code>bytes proof = 3;</code>
     */
    public fun clearProof() {
      _builder.clearProof()
    }

    /**
     * <pre>
     * height at which the proof was retrieved
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height proof_height = 4 [(.gogoproto.nullable) = false];</code>
     */
    public var proofHeight: ibc.core.client.v1.Client.Height
      @JvmName("getProofHeight")
      get() = _builder.getProofHeight()
      @JvmName("setProofHeight")
      set(value) {
        _builder.setProofHeight(value)
      }
    /**
     * <pre>
     * height at which the proof was retrieved
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height proof_height = 4 [(.gogoproto.nullable) = false];</code>
     */
    public fun clearProofHeight() {
      _builder.clearProofHeight()
    }
    /**
     * <pre>
     * height at which the proof was retrieved
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height proof_height = 4 [(.gogoproto.nullable) = false];</code>
     * @return Whether the proofHeight field is set.
     */
    public fun hasProofHeight(): kotlin.Boolean {
      return _builder.hasProofHeight()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ibc.core.channel.v1.QueryOuterClass.QueryPacketReceiptResponse.copy(block: ibc.core.channel.v1.QueryPacketReceiptResponseKt.Dsl.() -> kotlin.Unit): ibc.core.channel.v1.QueryOuterClass.QueryPacketReceiptResponse =
  ibc.core.channel.v1.QueryPacketReceiptResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ibc.core.channel.v1.QueryOuterClass.QueryPacketReceiptResponseOrBuilder.proofHeightOrNull: ibc.core.client.v1.Client.Height?
  get() = if (hasProofHeight()) getProofHeight() else null
