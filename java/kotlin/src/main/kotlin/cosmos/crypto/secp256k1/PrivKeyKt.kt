//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/crypto/secp256k1/keys.proto

package cosmos.crypto.secp256k1;

@kotlin.jvm.JvmSynthetic
inline fun privKey(block: cosmos.crypto.secp256k1.PrivKeyKt.Dsl.() -> Unit): cosmos.crypto.secp256k1.Keys.PrivKey =
  cosmos.crypto.secp256k1.PrivKeyKt.Dsl._create(cosmos.crypto.secp256k1.Keys.PrivKey.newBuilder()).apply { block() }._build()
object PrivKeyKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.crypto.secp256k1.Keys.PrivKey.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.crypto.secp256k1.Keys.PrivKey.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.crypto.secp256k1.Keys.PrivKey = _builder.build()

    /**
     * <code>bytes key = 1;</code>
     */
    var key: com.google.protobuf.ByteString
      @JvmName("getKey")
      get() = _builder.getKey()
      @JvmName("setKey")
      set(value) {
        _builder.setKey(value)
      }
    /**
     * <code>bytes key = 1;</code>
     */
    fun clearKey() {
      _builder.clearKey()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.crypto.secp256k1.Keys.PrivKey.copy(block: cosmos.crypto.secp256k1.PrivKeyKt.Dsl.() -> Unit): cosmos.crypto.secp256k1.Keys.PrivKey =
  cosmos.crypto.secp256k1.PrivKeyKt.Dsl._create(this.toBuilder()).apply { block() }._build()
