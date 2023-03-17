//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/base/reflection/v2alpha1/reflection.proto

package cosmos.base.reflection.v2alpha1;

@kotlin.jvm.JvmName("-initializequeryServiceDescriptor")
public inline fun queryServiceDescriptor(block: cosmos.base.reflection.v2alpha1.QueryServiceDescriptorKt.Dsl.() -> kotlin.Unit): cosmos.base.reflection.v2alpha1.Reflection.QueryServiceDescriptor =
  cosmos.base.reflection.v2alpha1.QueryServiceDescriptorKt.Dsl._create(cosmos.base.reflection.v2alpha1.Reflection.QueryServiceDescriptor.newBuilder()).apply { block() }._build()
public object QueryServiceDescriptorKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: cosmos.base.reflection.v2alpha1.Reflection.QueryServiceDescriptor.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.base.reflection.v2alpha1.Reflection.QueryServiceDescriptor.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.base.reflection.v2alpha1.Reflection.QueryServiceDescriptor = _builder.build()

    /**
     * <pre>
     * fullname is the protobuf fullname of the service descriptor
     * </pre>
     *
     * <code>string fullname = 1;</code>
     */
    public var fullname: kotlin.String
      @JvmName("getFullname")
      get() = _builder.getFullname()
      @JvmName("setFullname")
      set(value) {
        _builder.setFullname(value)
      }
    /**
     * <pre>
     * fullname is the protobuf fullname of the service descriptor
     * </pre>
     *
     * <code>string fullname = 1;</code>
     */
    public fun clearFullname() {
      _builder.clearFullname()
    }

    /**
     * <pre>
     * is_module describes if this service is actually exposed by an application's module
     * </pre>
     *
     * <code>bool is_module = 2;</code>
     */
    public var isModule: kotlin.Boolean
      @JvmName("getIsModule")
      get() = _builder.getIsModule()
      @JvmName("setIsModule")
      set(value) {
        _builder.setIsModule(value)
      }
    /**
     * <pre>
     * is_module describes if this service is actually exposed by an application's module
     * </pre>
     *
     * <code>bool is_module = 2;</code>
     */
    public fun clearIsModule() {
      _builder.clearIsModule()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class MethodsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * methods provides a list of query service methods
     * </pre>
     *
     * <code>repeated .cosmos.base.reflection.v2alpha1.QueryMethodDescriptor methods = 3;</code>
     */
     public val methods: com.google.protobuf.kotlin.DslList<cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor, MethodsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getMethodsList()
      )
    /**
     * <pre>
     * methods provides a list of query service methods
     * </pre>
     *
     * <code>repeated .cosmos.base.reflection.v2alpha1.QueryMethodDescriptor methods = 3;</code>
     * @param value The methods to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addMethods")
    public fun com.google.protobuf.kotlin.DslList<cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor, MethodsProxy>.add(value: cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor) {
      _builder.addMethods(value)
    }
    /**
     * <pre>
     * methods provides a list of query service methods
     * </pre>
     *
     * <code>repeated .cosmos.base.reflection.v2alpha1.QueryMethodDescriptor methods = 3;</code>
     * @param value The methods to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignMethods")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor, MethodsProxy>.plusAssign(value: cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor) {
      add(value)
    }
    /**
     * <pre>
     * methods provides a list of query service methods
     * </pre>
     *
     * <code>repeated .cosmos.base.reflection.v2alpha1.QueryMethodDescriptor methods = 3;</code>
     * @param values The methods to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllMethods")
    public fun com.google.protobuf.kotlin.DslList<cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor, MethodsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor>) {
      _builder.addAllMethods(values)
    }
    /**
     * <pre>
     * methods provides a list of query service methods
     * </pre>
     *
     * <code>repeated .cosmos.base.reflection.v2alpha1.QueryMethodDescriptor methods = 3;</code>
     * @param values The methods to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllMethods")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor, MethodsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor>) {
      addAll(values)
    }
    /**
     * <pre>
     * methods provides a list of query service methods
     * </pre>
     *
     * <code>repeated .cosmos.base.reflection.v2alpha1.QueryMethodDescriptor methods = 3;</code>
     * @param index The index to set the value at.
     * @param value The methods to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setMethods")
    public operator fun com.google.protobuf.kotlin.DslList<cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor, MethodsProxy>.set(index: kotlin.Int, value: cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor) {
      _builder.setMethods(index, value)
    }
    /**
     * <pre>
     * methods provides a list of query service methods
     * </pre>
     *
     * <code>repeated .cosmos.base.reflection.v2alpha1.QueryMethodDescriptor methods = 3;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearMethods")
    public fun com.google.protobuf.kotlin.DslList<cosmos.base.reflection.v2alpha1.Reflection.QueryMethodDescriptor, MethodsProxy>.clear() {
      _builder.clearMethods()
    }

  }
}
@kotlin.jvm.JvmSynthetic
public inline fun cosmos.base.reflection.v2alpha1.Reflection.QueryServiceDescriptor.copy(block: cosmos.base.reflection.v2alpha1.QueryServiceDescriptorKt.Dsl.() -> kotlin.Unit): cosmos.base.reflection.v2alpha1.Reflection.QueryServiceDescriptor =
  cosmos.base.reflection.v2alpha1.QueryServiceDescriptorKt.Dsl._create(this.toBuilder()).apply { block() }._build()
