//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/lightclients/localhost/v1/localhost.proto

package ibc.lightclients.localhost.v1;

@kotlin.jvm.JvmName("-initializeclientState")
public inline fun clientState(block: ibc.lightclients.localhost.v1.ClientStateKt.Dsl.() -> kotlin.Unit): ibc.lightclients.localhost.v1.Localhost.ClientState =
  ibc.lightclients.localhost.v1.ClientStateKt.Dsl._create(ibc.lightclients.localhost.v1.Localhost.ClientState.newBuilder()).apply { block() }._build()
public object ClientStateKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ibc.lightclients.localhost.v1.Localhost.ClientState.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.lightclients.localhost.v1.Localhost.ClientState.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.lightclients.localhost.v1.Localhost.ClientState = _builder.build()

    /**
     * <pre>
     * self chain ID
     * </pre>
     *
     * <code>string chain_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"chain_id&#92;""];</code>
     */
    public var chainId: kotlin.String
      @JvmName("getChainId")
      get() = _builder.getChainId()
      @JvmName("setChainId")
      set(value) {
        _builder.setChainId(value)
      }
    /**
     * <pre>
     * self chain ID
     * </pre>
     *
     * <code>string chain_id = 1 [(.gogoproto.moretags) = "yaml:&#92;"chain_id&#92;""];</code>
     */
    public fun clearChainId() {
      _builder.clearChainId()
    }

    /**
     * <pre>
     * self latest block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 2 [(.gogoproto.nullable) = false];</code>
     */
    public var height: ibc.core.client.v1.Client.Height
      @JvmName("getHeight")
      get() = _builder.getHeight()
      @JvmName("setHeight")
      set(value) {
        _builder.setHeight(value)
      }
    /**
     * <pre>
     * self latest block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 2 [(.gogoproto.nullable) = false];</code>
     */
    public fun clearHeight() {
      _builder.clearHeight()
    }
    /**
     * <pre>
     * self latest block height
     * </pre>
     *
     * <code>.ibc.core.client.v1.Height height = 2 [(.gogoproto.nullable) = false];</code>
     * @return Whether the height field is set.
     */
    public fun hasHeight(): kotlin.Boolean {
      return _builder.hasHeight()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ibc.lightclients.localhost.v1.Localhost.ClientState.copy(block: ibc.lightclients.localhost.v1.ClientStateKt.Dsl.() -> kotlin.Unit): ibc.lightclients.localhost.v1.Localhost.ClientState =
  ibc.lightclients.localhost.v1.ClientStateKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ibc.lightclients.localhost.v1.Localhost.ClientStateOrBuilder.heightOrNull: ibc.core.client.v1.Client.Height?
  get() = if (hasHeight()) getHeight() else null
