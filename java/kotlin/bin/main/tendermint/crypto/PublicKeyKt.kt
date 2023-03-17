//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: tendermint/crypto/keys.proto

package tendermint.crypto;

@kotlin.jvm.JvmName("-initializepublicKey")
public inline fun publicKey(block: tendermint.crypto.PublicKeyKt.Dsl.() -> kotlin.Unit): tendermint.crypto.Keys.PublicKey =
  tendermint.crypto.PublicKeyKt.Dsl._create(tendermint.crypto.Keys.PublicKey.newBuilder()).apply { block() }._build()
public object PublicKeyKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: tendermint.crypto.Keys.PublicKey.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: tendermint.crypto.Keys.PublicKey.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): tendermint.crypto.Keys.PublicKey = _builder.build()

    /**
     * <code>bytes ed25519 = 1;</code>
     */
    public var ed25519: com.google.protobuf.ByteString
      @JvmName("getEd25519")
      get() = _builder.getEd25519()
      @JvmName("setEd25519")
      set(value) {
        _builder.setEd25519(value)
      }
    /**
     * <code>bytes ed25519 = 1;</code>
     */
    public fun clearEd25519() {
      _builder.clearEd25519()
    }
    /**
     * <code>bytes ed25519 = 1;</code>
     * @return Whether the ed25519 field is set.
     */
    public fun hasEd25519(): kotlin.Boolean {
      return _builder.hasEd25519()
    }

    /**
     * <code>bytes secp256k1 = 2;</code>
     */
    public var secp256K1: com.google.protobuf.ByteString
      @JvmName("getSecp256K1")
      get() = _builder.getSecp256K1()
      @JvmName("setSecp256K1")
      set(value) {
        _builder.setSecp256K1(value)
      }
    /**
     * <code>bytes secp256k1 = 2;</code>
     */
    public fun clearSecp256K1() {
      _builder.clearSecp256K1()
    }
    /**
     * <code>bytes secp256k1 = 2;</code>
     * @return Whether the secp256k1 field is set.
     */
    public fun hasSecp256K1(): kotlin.Boolean {
      return _builder.hasSecp256K1()
    }
    public val sumCase: tendermint.crypto.Keys.PublicKey.SumCase
      @JvmName("getSumCase")
      get() = _builder.getSumCase()

    public fun clearSum() {
      _builder.clearSum()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun tendermint.crypto.Keys.PublicKey.copy(block: tendermint.crypto.PublicKeyKt.Dsl.() -> kotlin.Unit): tendermint.crypto.Keys.PublicKey =
  tendermint.crypto.PublicKeyKt.Dsl._create(this.toBuilder()).apply { block() }._build()
