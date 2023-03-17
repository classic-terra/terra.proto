//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/base/reflection/v2alpha1/reflection.proto

package cosmos.base.reflection.v2alpha1;

@kotlin.jvm.JvmSynthetic
inline fun getAuthnDescriptorResponse(block: cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponseKt.Dsl.() -> Unit): cosmos.base.reflection.v2alpha1.Reflection.GetAuthnDescriptorResponse =
  cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponseKt.Dsl._create(cosmos.base.reflection.v2alpha1.Reflection.GetAuthnDescriptorResponse.newBuilder()).apply { block() }._build()
object GetAuthnDescriptorResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.base.reflection.v2alpha1.Reflection.GetAuthnDescriptorResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.base.reflection.v2alpha1.Reflection.GetAuthnDescriptorResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.base.reflection.v2alpha1.Reflection.GetAuthnDescriptorResponse = _builder.build()

    /**
     * <pre>
     * authn describes how to authenticate to the application when sending transactions
     * </pre>
     *
     * <code>.cosmos.base.reflection.v2alpha1.AuthnDescriptor authn = 1;</code>
     */
    var authn: cosmos.base.reflection.v2alpha1.Reflection.AuthnDescriptor
      @JvmName("getAuthn")
      get() = _builder.getAuthn()
      @JvmName("setAuthn")
      set(value) {
        _builder.setAuthn(value)
      }
    /**
     * <pre>
     * authn describes how to authenticate to the application when sending transactions
     * </pre>
     *
     * <code>.cosmos.base.reflection.v2alpha1.AuthnDescriptor authn = 1;</code>
     */
    fun clearAuthn() {
      _builder.clearAuthn()
    }
    /**
     * <pre>
     * authn describes how to authenticate to the application when sending transactions
     * </pre>
     *
     * <code>.cosmos.base.reflection.v2alpha1.AuthnDescriptor authn = 1;</code>
     * @return Whether the authn field is set.
     */
    fun hasAuthn(): kotlin.Boolean {
      return _builder.hasAuthn()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.base.reflection.v2alpha1.Reflection.GetAuthnDescriptorResponse.copy(block: cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponseKt.Dsl.() -> Unit): cosmos.base.reflection.v2alpha1.Reflection.GetAuthnDescriptorResponse =
  cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
