//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/base/reflection/v2alpha1/reflection.proto

package cosmos.base.reflection.v2alpha1;

@kotlin.jvm.JvmName("-initializegetQueryServicesDescriptorRequest")
public inline fun getQueryServicesDescriptorRequest(block: cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequestKt.Dsl.() -> kotlin.Unit): cosmos.base.reflection.v2alpha1.Reflection.GetQueryServicesDescriptorRequest =
  cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequestKt.Dsl._create(cosmos.base.reflection.v2alpha1.Reflection.GetQueryServicesDescriptorRequest.newBuilder()).apply { block() }._build()
public object GetQueryServicesDescriptorRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: cosmos.base.reflection.v2alpha1.Reflection.GetQueryServicesDescriptorRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.base.reflection.v2alpha1.Reflection.GetQueryServicesDescriptorRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.base.reflection.v2alpha1.Reflection.GetQueryServicesDescriptorRequest = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun cosmos.base.reflection.v2alpha1.Reflection.GetQueryServicesDescriptorRequest.copy(block: cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequestKt.Dsl.() -> kotlin.Unit): cosmos.base.reflection.v2alpha1.Reflection.GetQueryServicesDescriptorRequest =
  cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()
