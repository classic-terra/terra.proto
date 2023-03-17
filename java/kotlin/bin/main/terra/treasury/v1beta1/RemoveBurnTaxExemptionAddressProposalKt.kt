//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/treasury/v1beta1/gov.proto

package terra.treasury.v1beta1;

@kotlin.jvm.JvmName("-initializeremoveBurnTaxExemptionAddressProposal")
public inline fun removeBurnTaxExemptionAddressProposal(block: terra.treasury.v1beta1.RemoveBurnTaxExemptionAddressProposalKt.Dsl.() -> kotlin.Unit): terra.treasury.v1beta1.Gov.RemoveBurnTaxExemptionAddressProposal =
  terra.treasury.v1beta1.RemoveBurnTaxExemptionAddressProposalKt.Dsl._create(terra.treasury.v1beta1.Gov.RemoveBurnTaxExemptionAddressProposal.newBuilder()).apply { block() }._build()
public object RemoveBurnTaxExemptionAddressProposalKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: terra.treasury.v1beta1.Gov.RemoveBurnTaxExemptionAddressProposal.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.treasury.v1beta1.Gov.RemoveBurnTaxExemptionAddressProposal.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.treasury.v1beta1.Gov.RemoveBurnTaxExemptionAddressProposal = _builder.build()

    /**
     * <code>string title = 1;</code>
     */
    public var title: kotlin.String
      @JvmName("getTitle")
      get() = _builder.getTitle()
      @JvmName("setTitle")
      set(value) {
        _builder.setTitle(value)
      }
    /**
     * <code>string title = 1;</code>
     */
    public fun clearTitle() {
      _builder.clearTitle()
    }

    /**
     * <code>string description = 2;</code>
     */
    public var description: kotlin.String
      @JvmName("getDescription")
      get() = _builder.getDescription()
      @JvmName("setDescription")
      set(value) {
        _builder.setDescription(value)
      }
    /**
     * <code>string description = 2;</code>
     */
    public fun clearDescription() {
      _builder.clearDescription()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class AddressesProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated string addresses = 3 [(.gogoproto.moretags) = "yaml:&#92;"addresses&#92;""];</code>
     * @return A list containing the addresses.
     */
    public val addresses: com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getAddressesList()
      )
    /**
     * <code>repeated string addresses = 3 [(.gogoproto.moretags) = "yaml:&#92;"addresses&#92;""];</code>
     * @param value The addresses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAddresses")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.add(value: kotlin.String) {
      _builder.addAddresses(value)
    }
    /**
     * <code>repeated string addresses = 3 [(.gogoproto.moretags) = "yaml:&#92;"addresses&#92;""];</code>
     * @param value The addresses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAddresses")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.plusAssign(value: kotlin.String) {
      add(value)
    }
    /**
     * <code>repeated string addresses = 3 [(.gogoproto.moretags) = "yaml:&#92;"addresses&#92;""];</code>
     * @param values The addresses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllAddresses")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.addAll(values: kotlin.collections.Iterable<kotlin.String>) {
      _builder.addAllAddresses(values)
    }
    /**
     * <code>repeated string addresses = 3 [(.gogoproto.moretags) = "yaml:&#92;"addresses&#92;""];</code>
     * @param values The addresses to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllAddresses")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.plusAssign(values: kotlin.collections.Iterable<kotlin.String>) {
      addAll(values)
    }
    /**
     * <code>repeated string addresses = 3 [(.gogoproto.moretags) = "yaml:&#92;"addresses&#92;""];</code>
     * @param index The index to set the value at.
     * @param value The addresses to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setAddresses")
    public operator fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.set(index: kotlin.Int, value: kotlin.String) {
      _builder.setAddresses(index, value)
    }/**
     * <code>repeated string addresses = 3 [(.gogoproto.moretags) = "yaml:&#92;"addresses&#92;""];</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearAddresses")
    public fun com.google.protobuf.kotlin.DslList<kotlin.String, AddressesProxy>.clear() {
      _builder.clearAddresses()
    }}
}
@kotlin.jvm.JvmSynthetic
public inline fun terra.treasury.v1beta1.Gov.RemoveBurnTaxExemptionAddressProposal.copy(block: terra.treasury.v1beta1.RemoveBurnTaxExemptionAddressProposalKt.Dsl.() -> kotlin.Unit): terra.treasury.v1beta1.Gov.RemoveBurnTaxExemptionAddressProposal =
  terra.treasury.v1beta1.RemoveBurnTaxExemptionAddressProposalKt.Dsl._create(this.toBuilder()).apply { block() }._build()
