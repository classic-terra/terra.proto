//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/wasm/v1beta1/query.proto

package terra.wasm.v1beta1;

@kotlin.jvm.JvmName("-initializequeryContractInfoRequest")
public inline fun queryContractInfoRequest(block: terra.wasm.v1beta1.QueryContractInfoRequestKt.Dsl.() -> kotlin.Unit): terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest =
  terra.wasm.v1beta1.QueryContractInfoRequestKt.Dsl._create(terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest.newBuilder()).apply { block() }._build()
public object QueryContractInfoRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest = _builder.build()

    /**
     * <code>string contract_address = 1;</code>
     */
    public var contractAddress: kotlin.String
      @JvmName("getContractAddress")
      get() = _builder.getContractAddress()
      @JvmName("setContractAddress")
      set(value) {
        _builder.setContractAddress(value)
      }
    /**
     * <code>string contract_address = 1;</code>
     */
    public fun clearContractAddress() {
      _builder.clearContractAddress()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest.copy(block: terra.wasm.v1beta1.QueryContractInfoRequestKt.Dsl.() -> kotlin.Unit): terra.wasm.v1beta1.QueryOuterClass.QueryContractInfoRequest =
  terra.wasm.v1beta1.QueryContractInfoRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
