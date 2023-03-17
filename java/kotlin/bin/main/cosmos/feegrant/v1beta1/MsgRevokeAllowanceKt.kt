//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/feegrant/v1beta1/tx.proto

package cosmos.feegrant.v1beta1;

@kotlin.jvm.JvmName("-initializemsgRevokeAllowance")
public inline fun msgRevokeAllowance(block: cosmos.feegrant.v1beta1.MsgRevokeAllowanceKt.Dsl.() -> kotlin.Unit): cosmos.feegrant.v1beta1.Tx.MsgRevokeAllowance =
  cosmos.feegrant.v1beta1.MsgRevokeAllowanceKt.Dsl._create(cosmos.feegrant.v1beta1.Tx.MsgRevokeAllowance.newBuilder()).apply { block() }._build()
public object MsgRevokeAllowanceKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: cosmos.feegrant.v1beta1.Tx.MsgRevokeAllowance.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.feegrant.v1beta1.Tx.MsgRevokeAllowance.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.feegrant.v1beta1.Tx.MsgRevokeAllowance = _builder.build()

    /**
     * <pre>
     * granter is the address of the user granting an allowance of their funds.
     * </pre>
     *
     * <code>string granter = 1;</code>
     */
    public var granter: kotlin.String
      @JvmName("getGranter")
      get() = _builder.getGranter()
      @JvmName("setGranter")
      set(value) {
        _builder.setGranter(value)
      }
    /**
     * <pre>
     * granter is the address of the user granting an allowance of their funds.
     * </pre>
     *
     * <code>string granter = 1;</code>
     */
    public fun clearGranter() {
      _builder.clearGranter()
    }

    /**
     * <pre>
     * grantee is the address of the user being granted an allowance of another user's funds.
     * </pre>
     *
     * <code>string grantee = 2;</code>
     */
    public var grantee: kotlin.String
      @JvmName("getGrantee")
      get() = _builder.getGrantee()
      @JvmName("setGrantee")
      set(value) {
        _builder.setGrantee(value)
      }
    /**
     * <pre>
     * grantee is the address of the user being granted an allowance of another user's funds.
     * </pre>
     *
     * <code>string grantee = 2;</code>
     */
    public fun clearGrantee() {
      _builder.clearGrantee()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun cosmos.feegrant.v1beta1.Tx.MsgRevokeAllowance.copy(block: cosmos.feegrant.v1beta1.MsgRevokeAllowanceKt.Dsl.() -> kotlin.Unit): cosmos.feegrant.v1beta1.Tx.MsgRevokeAllowance =
  cosmos.feegrant.v1beta1.MsgRevokeAllowanceKt.Dsl._create(this.toBuilder()).apply { block() }._build()
