//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/connection/v1/tx.proto

package ibc.core.connection.v1;

@kotlin.jvm.JvmSynthetic
inline fun msgConnectionOpenAck(block: ibc.core.connection.v1.MsgConnectionOpenAckKt.Dsl.() -> Unit): ibc.core.connection.v1.Tx.MsgConnectionOpenAck =
  ibc.core.connection.v1.MsgConnectionOpenAckKt.Dsl._create(ibc.core.connection.v1.Tx.MsgConnectionOpenAck.newBuilder()).apply { block() }._build()
object MsgConnectionOpenAckKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: ibc.core.connection.v1.Tx.MsgConnectionOpenAck.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.connection.v1.Tx.MsgConnectionOpenAck.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.connection.v1.Tx.MsgConnectionOpenAck = _builder.build()

    /**
     * <code>string connection_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"connection_id&#92;""];</code>
     */
    var connectionId: kotlin.String
      @JvmName("getConnectionId")
      get() = _builder.getConnectionId()
      @JvmName("setConnectionId")
      set(value) {
        _builder.setConnectionId(value)
      }
    /**
     * <code>string connection_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"connection_id&#92;""];</code>
     */
    fun clearConnectionId() {
      _builder.clearConnectionId()
    }

    /**
     * <code>string counterparty_connection_id = 2 [(.gogoproto.moretags) = "yaml:&#92;"counterparty_connection_id&#92;""];</code>
     */
    var counterpartyConnectionId: kotlin.String
      @JvmName("getCounterpartyConnectionId")
      get() = _builder.getCounterpartyConnectionId()
      @JvmName("setCounterpartyConnectionId")
      set(value) {
        _builder.setCounterpartyConnectionId(value)
      }
    /**
     * <code>string counterparty_connection_id = 2 [(.gogoproto.moretags) = "yaml:&#92;"counterparty_connection_id&#92;""];</code>
     */
    fun clearCounterpartyConnectionId() {
      _builder.clearCounterpartyConnectionId()
    }

    /**
     * <code>.ibc.core.connection.v1.Version version = 3;</code>
     */
    var version: ibc.core.connection.v1.Connection.Version
      @JvmName("getVersion")
      get() = _builder.getVersion()
      @JvmName("setVersion")
      set(value) {
        _builder.setVersion(value)
      }
    /**
     * <code>.ibc.core.connection.v1.Version version = 3;</code>
     */
    fun clearVersion() {
      _builder.clearVersion()
    }
    /**
     * <code>.ibc.core.connection.v1.Version version = 3;</code>
     * @return Whether the version field is set.
     */
    fun hasVersion(): kotlin.Boolean {
      return _builder.hasVersion()
    }

    /**
     * <code>.google.protobuf.Any client_state = 4 [(.gogoproto.moretags) = "yaml:&#92;"client_state&#92;""];</code>
     */
    var clientState: com.google.protobuf.Any
      @JvmName("getClientState")
      get() = _builder.getClientState()
      @JvmName("setClientState")
      set(value) {
        _builder.setClientState(value)
      }
    /**
     * <code>.google.protobuf.Any client_state = 4 [(.gogoproto.moretags) = "yaml:&#92;"client_state&#92;""];</code>
     */
    fun clearClientState() {
      _builder.clearClientState()
    }
    /**
     * <code>.google.protobuf.Any client_state = 4 [(.gogoproto.moretags) = "yaml:&#92;"client_state&#92;""];</code>
     * @return Whether the clientState field is set.
     */
    fun hasClientState(): kotlin.Boolean {
      return _builder.hasClientState()
    }

    /**
     * <code>.ibc.core.client.v1.Height proof_height = 5 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"proof_height&#92;""];</code>
     */
    var proofHeight: ibc.core.client.v1.Client.Height
      @JvmName("getProofHeight")
      get() = _builder.getProofHeight()
      @JvmName("setProofHeight")
      set(value) {
        _builder.setProofHeight(value)
      }
    /**
     * <code>.ibc.core.client.v1.Height proof_height = 5 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"proof_height&#92;""];</code>
     */
    fun clearProofHeight() {
      _builder.clearProofHeight()
    }
    /**
     * <code>.ibc.core.client.v1.Height proof_height = 5 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"proof_height&#92;""];</code>
     * @return Whether the proofHeight field is set.
     */
    fun hasProofHeight(): kotlin.Boolean {
      return _builder.hasProofHeight()
    }

    /**
     * <pre>
     * proof of the initialization the connection on Chain B: `UNITIALIZED -&gt;
     * TRYOPEN`
     * </pre>
     *
     * <code>bytes proof_try = 6 [(.gogoproto.moretags) = "yaml:&#92;"proof_try&#92;""];</code>
     */
    var proofTry: com.google.protobuf.ByteString
      @JvmName("getProofTry")
      get() = _builder.getProofTry()
      @JvmName("setProofTry")
      set(value) {
        _builder.setProofTry(value)
      }
    /**
     * <pre>
     * proof of the initialization the connection on Chain B: `UNITIALIZED -&gt;
     * TRYOPEN`
     * </pre>
     *
     * <code>bytes proof_try = 6 [(.gogoproto.moretags) = "yaml:&#92;"proof_try&#92;""];</code>
     */
    fun clearProofTry() {
      _builder.clearProofTry()
    }

    /**
     * <pre>
     * proof of client state included in message
     * </pre>
     *
     * <code>bytes proof_client = 7 [(.gogoproto.moretags) = "yaml:&#92;"proof_client&#92;""];</code>
     */
    var proofClient: com.google.protobuf.ByteString
      @JvmName("getProofClient")
      get() = _builder.getProofClient()
      @JvmName("setProofClient")
      set(value) {
        _builder.setProofClient(value)
      }
    /**
     * <pre>
     * proof of client state included in message
     * </pre>
     *
     * <code>bytes proof_client = 7 [(.gogoproto.moretags) = "yaml:&#92;"proof_client&#92;""];</code>
     */
    fun clearProofClient() {
      _builder.clearProofClient()
    }

    /**
     * <pre>
     * proof of client consensus state
     * </pre>
     *
     * <code>bytes proof_consensus = 8 [(.gogoproto.moretags) = "yaml:&#92;"proof_consensus&#92;""];</code>
     */
    var proofConsensus: com.google.protobuf.ByteString
      @JvmName("getProofConsensus")
      get() = _builder.getProofConsensus()
      @JvmName("setProofConsensus")
      set(value) {
        _builder.setProofConsensus(value)
      }
    /**
     * <pre>
     * proof of client consensus state
     * </pre>
     *
     * <code>bytes proof_consensus = 8 [(.gogoproto.moretags) = "yaml:&#92;"proof_consensus&#92;""];</code>
     */
    fun clearProofConsensus() {
      _builder.clearProofConsensus()
    }

    /**
     * <code>.ibc.core.client.v1.Height consensus_height = 9 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"consensus_height&#92;""];</code>
     */
    var consensusHeight: ibc.core.client.v1.Client.Height
      @JvmName("getConsensusHeight")
      get() = _builder.getConsensusHeight()
      @JvmName("setConsensusHeight")
      set(value) {
        _builder.setConsensusHeight(value)
      }
    /**
     * <code>.ibc.core.client.v1.Height consensus_height = 9 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"consensus_height&#92;""];</code>
     */
    fun clearConsensusHeight() {
      _builder.clearConsensusHeight()
    }
    /**
     * <code>.ibc.core.client.v1.Height consensus_height = 9 [(.gogoproto.nullable) = false, (.gogoproto.moretags) = "yaml:&#92;"consensus_height&#92;""];</code>
     * @return Whether the consensusHeight field is set.
     */
    fun hasConsensusHeight(): kotlin.Boolean {
      return _builder.hasConsensusHeight()
    }

    /**
     * <code>string signer = 10;</code>
     */
    var signer: kotlin.String
      @JvmName("getSigner")
      get() = _builder.getSigner()
      @JvmName("setSigner")
      set(value) {
        _builder.setSigner(value)
      }
    /**
     * <code>string signer = 10;</code>
     */
    fun clearSigner() {
      _builder.clearSigner()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun ibc.core.connection.v1.Tx.MsgConnectionOpenAck.copy(block: ibc.core.connection.v1.MsgConnectionOpenAckKt.Dsl.() -> Unit): ibc.core.connection.v1.Tx.MsgConnectionOpenAck =
  ibc.core.connection.v1.MsgConnectionOpenAckKt.Dsl._create(this.toBuilder()).apply { block() }._build()
