//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/wasm/v1beta1/tx.proto

package terra.wasm.v1beta1;

@kotlin.jvm.JvmName("-initializemsgMigrateContractResponse")
public inline fun msgMigrateContractResponse(block: terra.wasm.v1beta1.MsgMigrateContractResponseKt.Dsl.() -> kotlin.Unit): terra.wasm.v1beta1.Tx.MsgMigrateContractResponse =
  terra.wasm.v1beta1.MsgMigrateContractResponseKt.Dsl._create(terra.wasm.v1beta1.Tx.MsgMigrateContractResponse.newBuilder()).apply { block() }._build()
public object MsgMigrateContractResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: terra.wasm.v1beta1.Tx.MsgMigrateContractResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.wasm.v1beta1.Tx.MsgMigrateContractResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.wasm.v1beta1.Tx.MsgMigrateContractResponse = _builder.build()

    /**
     * <pre>
     * Data contains base64-encoded bytes to returned from the contract
     * </pre>
     *
     * <code>bytes data = 1 [(.gogoproto.moretags) = "yaml:&#92;"data&#92;""];</code>
     */
    public var data: com.google.protobuf.ByteString
      @JvmName("getData")
      get() = _builder.getData()
      @JvmName("setData")
      set(value) {
        _builder.setData(value)
      }
    /**
     * <pre>
     * Data contains base64-encoded bytes to returned from the contract
     * </pre>
     *
     * <code>bytes data = 1 [(.gogoproto.moretags) = "yaml:&#92;"data&#92;""];</code>
     */
    public fun clearData() {
      _builder.clearData()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun terra.wasm.v1beta1.Tx.MsgMigrateContractResponse.copy(block: terra.wasm.v1beta1.MsgMigrateContractResponseKt.Dsl.() -> kotlin.Unit): terra.wasm.v1beta1.Tx.MsgMigrateContractResponse =
  terra.wasm.v1beta1.MsgMigrateContractResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
