//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/capability/v1beta1/capability.proto

package cosmos.capability.v1beta1;

@kotlin.jvm.JvmName("-initializeowner")
public inline fun owner(block: cosmos.capability.v1beta1.OwnerKt.Dsl.() -> kotlin.Unit): cosmos.capability.v1beta1.CapabilityOuterClass.Owner =
  cosmos.capability.v1beta1.OwnerKt.Dsl._create(cosmos.capability.v1beta1.CapabilityOuterClass.Owner.newBuilder()).apply { block() }._build()
public object OwnerKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: cosmos.capability.v1beta1.CapabilityOuterClass.Owner.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.capability.v1beta1.CapabilityOuterClass.Owner.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.capability.v1beta1.CapabilityOuterClass.Owner = _builder.build()

    /**
     * <code>string module = 1 [(.gogoproto.moretags) = "yaml:&#92;"module&#92;""];</code>
     */
    public var module: kotlin.String
      @JvmName("getModule")
      get() = _builder.getModule()
      @JvmName("setModule")
      set(value) {
        _builder.setModule(value)
      }
    /**
     * <code>string module = 1 [(.gogoproto.moretags) = "yaml:&#92;"module&#92;""];</code>
     */
    public fun clearModule() {
      _builder.clearModule()
    }

    /**
     * <code>string name = 2 [(.gogoproto.moretags) = "yaml:&#92;"name&#92;""];</code>
     */
    public var name: kotlin.String
      @JvmName("getName")
      get() = _builder.getName()
      @JvmName("setName")
      set(value) {
        _builder.setName(value)
      }
    /**
     * <code>string name = 2 [(.gogoproto.moretags) = "yaml:&#92;"name&#92;""];</code>
     */
    public fun clearName() {
      _builder.clearName()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun cosmos.capability.v1beta1.CapabilityOuterClass.Owner.copy(block: cosmos.capability.v1beta1.OwnerKt.Dsl.() -> kotlin.Unit): cosmos.capability.v1beta1.CapabilityOuterClass.Owner =
  cosmos.capability.v1beta1.OwnerKt.Dsl._create(this.toBuilder()).apply { block() }._build()
