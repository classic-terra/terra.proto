//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/client/v1/client.proto

package ibc.core.client.v1;

@kotlin.jvm.JvmSynthetic
inline fun consensusStateWithHeight(block: ibc.core.client.v1.ConsensusStateWithHeightKt.Dsl.() -> Unit): ibc.core.client.v1.Client.ConsensusStateWithHeight =
  ibc.core.client.v1.ConsensusStateWithHeightKt.Dsl._create(ibc.core.client.v1.Client.ConsensusStateWithHeight.newBuilder()).apply { block() }._build()
object ConsensusStateWithHeightKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.client.v1.Client.ConsensusStateWithHeight.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.client.v1.Client.ConsensusStateWithHeight.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.client.v1.Client.ConsensusStateWithHeight = _builder.build()

    /**
     * <pre>
     * consensus state height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 1 [(.gogoproto.nullable) = false];</code>
     */
    var height: ibc.core.client.v1.Client.Height
      @JvmName("getHeight")
      get() = _builder.getHeight()
      @JvmName("setHeight")
      set(value) {
        _builder.setHeight(value)
      }
    /**
     * <pre>
     * consensus state height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 1 [(.gogoproto.nullable) = false];</code>
     */
    fun clearHeight() {
      _builder.clearHeight()
    }
    /**
     * <pre>
     * consensus state height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 1 [(.gogoproto.nullable) = false];</code>
     * @return Whether the height field is set.
     */
    fun hasHeight(): kotlin.Boolean {
      return _builder.hasHeight()
    }

    /**
     * <pre>
     * consensus state
     * </pre>
     *
     * <code>.google.protobuf.Any consensus_state = 2 [(.gogoproto.moretags) = "yaml&#92;"consensus_state&#92;""];</code>
     */
    var consensusState: com.google.protobuf.Any
      @JvmName("getConsensusState")
      get() = _builder.getConsensusState()
      @JvmName("setConsensusState")
      set(value) {
        _builder.setConsensusState(value)
      }
    /**
     * <pre>
     * consensus state
     * </pre>
     *
     * <code>.google.protobuf.Any consensus_state = 2 [(.gogoproto.moretags) = "yaml&#92;"consensus_state&#92;""];</code>
     */
    fun clearConsensusState() {
      _builder.clearConsensusState()
    }
    /**
     * <pre>
     * consensus state
     * </pre>
     *
     * <code>.google.protobuf.Any consensus_state = 2 [(.gogoproto.moretags) = "yaml&#92;"consensus_state&#92;""];</code>
     * @return Whether the consensusState field is set.
     */
    fun hasConsensusState(): kotlin.Boolean {
      return _builder.hasConsensusState()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.client.v1.Client.ConsensusStateWithHeight.copy(block: ibc.core.client.v1.ConsensusStateWithHeightKt.Dsl.() -> Unit): ibc.core.client.v1.Client.ConsensusStateWithHeight =
  ibc.core.client.v1.ConsensusStateWithHeightKt.Dsl._create(this.toBuilder()).apply { block() }._build()
