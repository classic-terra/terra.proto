//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ibc/core/client/v1/client.proto

package ibc.core.client.v1;

@kotlin.jvm.JvmName("-initializeparams")
public inline fun params(block: ibc.core.client.v1.ParamsKt.Dsl.() -> kotlin.Unit): ibc.core.client.v1.Client.Params =
  ibc.core.client.v1.ParamsKt.Dsl._create(ibc.core.client.v1.Client.Params.newBuilder()).apply { block() }._build()
public object ParamsKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ibc.core.client.v1.Client.Params.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ibc.core.client.v1.Client.Params.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ibc.core.client.v1.Client.Params = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class AllowedClientsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * allowed_clients defines the list of allowed client state types.
     * </pre>
     *
     * <code>repeated string allowed_clients = 1 [(.gogoproto.moretags) = "yaml:&#92;"allowed_clients&#92;""];</code>
     * @return A list containing the allowedClients.
     */
    public val allowedClients: com.google.protobuf.kotlin.DslList<kotlin.String, AllowedClientsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getAllowedClientsList()
      )
    /**
     * <pre>
     * allowed_clients defines the list of allowed client state types.
     * </pre>
     *
     * <code>repeated string allowed_clients = 1 [(.gogoproto.moretags) = "yaml:&#92;"allowed_clients&#92;""];</code>
     * @param value The allowedClients to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllowedClients")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, AllowedClientsProxy>.add(value: kotlin.String) {
      _builder.addAllowedClients(value)
    }
    /**
     * <pre>
     * allowed_clients defines the list of allowed client state types.
     * </pre>
     *
     * <code>repeated string allowed_clients = 1 [(.gogoproto.moretags) = "yaml:&#92;"allowed_clients&#92;""];</code>
     * @param value The allowedClients to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllowedClients")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AllowedClientsProxy>.plusAssign(value: kotlin.String) {
      add(value)
    }
    /**
     * <pre>
     * allowed_clients defines the list of allowed client state types.
     * </pre>
     *
     * <code>repeated string allowed_clients = 1 [(.gogoproto.moretags) = "yaml:&#92;"allowed_clients&#92;""];</code>
     * @param values The allowedClients to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllAllowedClients")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, AllowedClientsProxy>.addAll(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllAllowedClients(values)
    }
    /**
     * <pre>
     * allowed_clients defines the list of allowed client state types.
     * </pre>
     *
     * <code>repeated string allowed_clients = 1 [(.gogoproto.moretags) = "yaml:&#92;"allowed_clients&#92;""];</code>
     * @param values The allowedClients to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllAllowedClients")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AllowedClientsProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.String>) {
      addAll(values)
    }
    /**
     * <pre>
     * allowed_clients defines the list of allowed client state types.
     * </pre>
     *
     * <code>repeated string allowed_clients = 1 [(.gogoproto.moretags) = "yaml:&#92;"allowed_clients&#92;""];</code>
     * @param index The index to set the value at.
     * @param value The allowedClients to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setAllowedClients")
    public operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AllowedClientsProxy>.set(index: kotlin.Int, value: kotlin.String) {
      _builder.setAllowedClients(index, value)
    }/**
     * <pre>
     * allowed_clients defines the list of allowed client state types.
     * </pre>
     *
     * <code>repeated string allowed_clients = 1 [(.gogoproto.moretags) = "yaml:&#92;"allowed_clients&#92;""];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearAllowedClients")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, AllowedClientsProxy>.clear() {
      _builder.clearAllowedClients()
    }}
}
@kotlin.jvm.JvmSynthetic
public inline fun ibc.core.client.v1.Client.Params.copy(block: ibc.core.client.v1.ParamsKt.Dsl.() -> kotlin.Unit): ibc.core.client.v1.Client.Params =
  ibc.core.client.v1.ParamsKt.Dsl._create(this.toBuilder()).apply { block() }._build()
