//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/slashing/v1beta1/tx.proto

package cosmos.slashing.v1beta1;

@kotlin.jvm.JvmName("-initializemsgUnjail")
public inline fun msgUnjail(block: cosmos.slashing.v1beta1.MsgUnjailKt.Dsl.() -> kotlin.Unit): cosmos.slashing.v1beta1.Tx.MsgUnjail =
  cosmos.slashing.v1beta1.MsgUnjailKt.Dsl._create(cosmos.slashing.v1beta1.Tx.MsgUnjail.newBuilder()).apply { block() }._build()
public object MsgUnjailKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: cosmos.slashing.v1beta1.Tx.MsgUnjail.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.slashing.v1beta1.Tx.MsgUnjail.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.slashing.v1beta1.Tx.MsgUnjail = _builder.build()

    /**
     * <code>string validator_addr = 1 [(.gogoproto.jsontag) = "address", (.gogoproto.moretags) = "yaml:&#92;"address&#92;""];</code>
     */
    public var validatorAddr: kotlin.String
      @JvmName("getValidatorAddr")
      get() = _builder.getValidatorAddr()
      @JvmName("setValidatorAddr")
      set(value) {
        _builder.setValidatorAddr(value)
      }
    /**
     * <code>string validator_addr = 1 [(.gogoproto.jsontag) = "address", (.gogoproto.moretags) = "yaml:&#92;"address&#92;""];</code>
     */
    public fun clearValidatorAddr() {
      _builder.clearValidatorAddr()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun cosmos.slashing.v1beta1.Tx.MsgUnjail.copy(block: cosmos.slashing.v1beta1.MsgUnjailKt.Dsl.() -> kotlin.Unit): cosmos.slashing.v1beta1.Tx.MsgUnjail =
  cosmos.slashing.v1beta1.MsgUnjailKt.Dsl._create(this.toBuilder()).apply { block() }._build()
