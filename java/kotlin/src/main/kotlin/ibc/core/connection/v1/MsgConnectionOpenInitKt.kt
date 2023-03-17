//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/connection/v1/tx.proto

package ibc.core.connection.v1;

@kotlin.jvm.JvmName("-initializemsgConnectionOpenInit")
public inline fun msgConnectionOpenInit(block: ibc.core.connection.v1.MsgConnectionOpenInitKt.Dsl.() -> kotlin.Unit): ibc.core.connection.v1.Tx.MsgConnectionOpenInit =
  ibc.core.connection.v1.MsgConnectionOpenInitKt.Dsl._create(ibc.core.connection.v1.Tx.MsgConnectionOpenInit.newBuilder()).apply { block() }._build()
public object MsgConnectionOpenInitKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ibc.core.connection.v1.Tx.MsgConnectionOpenInit.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.connection.v1.Tx.MsgConnectionOpenInit.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.connection.v1.Tx.MsgConnectionOpenInit = _builder.build()

    /**
     * <code>string client_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"client_id&#92;""];</code>
     */
    public var clientId: kotlin.String
      @JvmName("getClientId")
      get() = _builder.getClientId()
      @JvmName("setClientId")
      set(value) {
        _builder.setClientId(value)
      }
    /**
     * <code>string client_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"client_id&#92;""];</code>
     */
    public fun clearClientId() {
      _builder.clearClientId()
    }

    /**
     * <code>.ibc.core.connection.v1.Counterparty counterparty = 2 [(.gogoproto.nullable) = false];</code>
     */
    public var counterparty: ibc.core.connection.v1.Connection.Counterparty
      @JvmName("getCounterparty")
      get() = _builder.getCounterparty()
      @JvmName("setCounterparty")
      set(value) {
        _builder.setCounterparty(value)
      }
    /**
     * <code>.ibc.core.connection.v1.Counterparty counterparty = 2 [(.gogoproto.nullable) = false];</code>
     */
    public fun clearCounterparty() {
      _builder.clearCounterparty()
    }
    /**
     * <code>.ibc.core.connection.v1.Counterparty counterparty = 2 [(.gogoproto.nullable) = false];</code>
     * @return Whether the counterparty field is set.
     */
    public fun hasCounterparty(): kotlin.Boolean {
      return _builder.hasCounterparty()
    }

    /**
     * <code>.ibc.core.connection.v1.Version version = 3;</code>
     */
    public var version: ibc.core.connection.v1.Connection.Version
      @JvmName("getVersion")
      get() = _builder.getVersion()
      @JvmName("setVersion")
      set(value) {
        _builder.setVersion(value)
      }
    /**
     * <code>.ibc.core.connection.v1.Version version = 3;</code>
     */
    public fun clearVersion() {
      _builder.clearVersion()
    }
    /**
     * <code>.ibc.core.connection.v1.Version version = 3;</code>
     * @return Whether the version field is set.
     */
    public fun hasVersion(): kotlin.Boolean {
      return _builder.hasVersion()
    }

    /**
     * <code>uint64 delay_period = 4 [(.gogoproto.moretags) = "yaml:&#92;"delay_period&#92;""];</code>
     */
    public var delayPeriod: kotlin.Long
      @JvmName("getDelayPeriod")
      get() = _builder.getDelayPeriod()
      @JvmName("setDelayPeriod")
      set(value) {
        _builder.setDelayPeriod(value)
      }
    /**
     * <code>uint64 delay_period = 4 [(.gogoproto.moretags) = "yaml:&#92;"delay_period&#92;""];</code>
     */
    public fun clearDelayPeriod() {
      _builder.clearDelayPeriod()
    }

    /**
     * <code>string signer = 5;</code>
     */
    public var signer: kotlin.String
      @JvmName("getSigner")
      get() = _builder.getSigner()
      @JvmName("setSigner")
      set(value) {
        _builder.setSigner(value)
      }
    /**
     * <code>string signer = 5;</code>
     */
    public fun clearSigner() {
      _builder.clearSigner()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ibc.core.connection.v1.Tx.MsgConnectionOpenInit.copy(block: ibc.core.connection.v1.MsgConnectionOpenInitKt.Dsl.() -> kotlin.Unit): ibc.core.connection.v1.Tx.MsgConnectionOpenInit =
  ibc.core.connection.v1.MsgConnectionOpenInitKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ibc.core.connection.v1.Tx.MsgConnectionOpenInitOrBuilder.counterpartyOrNull: ibc.core.connection.v1.Connection.Counterparty?
  get() = if (hasCounterparty()) getCounterparty() else null

public val ibc.core.connection.v1.Tx.MsgConnectionOpenInitOrBuilder.versionOrNull: ibc.core.connection.v1.Connection.Version?
  get() = if (hasVersion()) getVersion() else null
