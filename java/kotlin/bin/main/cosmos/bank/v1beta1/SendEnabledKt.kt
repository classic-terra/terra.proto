//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/bank/v1beta1/bank.proto

package cosmos.bank.v1beta1;

@kotlin.jvm.JvmName("-initializesendEnabled")
public inline fun sendEnabled(block: cosmos.bank.v1beta1.SendEnabledKt.Dsl.() -> kotlin.Unit): cosmos.bank.v1beta1.Bank.SendEnabled =
  cosmos.bank.v1beta1.SendEnabledKt.Dsl._create(cosmos.bank.v1beta1.Bank.SendEnabled.newBuilder()).apply { block() }._build()
public object SendEnabledKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: cosmos.bank.v1beta1.Bank.SendEnabled.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.bank.v1beta1.Bank.SendEnabled.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.bank.v1beta1.Bank.SendEnabled = _builder.build()

    /**
     * <code>string denom = 1;</code>
     */
    public var denom: kotlin.String
      @JvmName("getDenom")
      get() = _builder.getDenom()
      @JvmName("setDenom")
      set(value) {
        _builder.setDenom(value)
      }
    /**
     * <code>string denom = 1;</code>
     */
    public fun clearDenom() {
      _builder.clearDenom()
    }

    /**
     * <code>bool enabled = 2;</code>
     */
    public var enabled: kotlin.Boolean
      @JvmName("getEnabled")
      get() = _builder.getEnabled()
      @JvmName("setEnabled")
      set(value) {
        _builder.setEnabled(value)
      }
    /**
     * <code>bool enabled = 2;</code>
     */
    public fun clearEnabled() {
      _builder.clearEnabled()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun cosmos.bank.v1beta1.Bank.SendEnabled.copy(block: cosmos.bank.v1beta1.SendEnabledKt.Dsl.() -> kotlin.Unit): cosmos.bank.v1beta1.Bank.SendEnabled =
  cosmos.bank.v1beta1.SendEnabledKt.Dsl._create(this.toBuilder()).apply { block() }._build()
