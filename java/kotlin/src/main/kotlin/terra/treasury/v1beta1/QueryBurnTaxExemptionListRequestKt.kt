//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: terra/treasury/v1beta1/query.proto

package terra.treasury.v1beta1;

@kotlin.jvm.JvmName("-initializequeryBurnTaxExemptionListRequest")
public inline fun queryBurnTaxExemptionListRequest(block: terra.treasury.v1beta1.QueryBurnTaxExemptionListRequestKt.Dsl.() -> kotlin.Unit): terra.treasury.v1beta1.QueryOuterClass.QueryBurnTaxExemptionListRequest =
  terra.treasury.v1beta1.QueryBurnTaxExemptionListRequestKt.Dsl._create(terra.treasury.v1beta1.QueryOuterClass.QueryBurnTaxExemptionListRequest.newBuilder()).apply { block() }._build()
public object QueryBurnTaxExemptionListRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: terra.treasury.v1beta1.QueryOuterClass.QueryBurnTaxExemptionListRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: terra.treasury.v1beta1.QueryOuterClass.QueryBurnTaxExemptionListRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): terra.treasury.v1beta1.QueryOuterClass.QueryBurnTaxExemptionListRequest = _builder.build()

    /**
     * <code>.cosmos.base.query.v1beta1.PageRequest pagination = 2;</code>
     */
    public var pagination: cosmos.base.query.v1beta1.Pagination.PageRequest
      @JvmName("getPagination")
      get() = _builder.getPagination()
      @JvmName("setPagination")
      set(value) {
        _builder.setPagination(value)
      }
    /**
     * <code>.cosmos.base.query.v1beta1.PageRequest pagination = 2;</code>
     */
    public fun clearPagination() {
      _builder.clearPagination()
    }
    /**
     * <code>.cosmos.base.query.v1beta1.PageRequest pagination = 2;</code>
     * @return Whether the pagination field is set.
     */
    public fun hasPagination(): kotlin.Boolean {
      return _builder.hasPagination()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun terra.treasury.v1beta1.QueryOuterClass.QueryBurnTaxExemptionListRequest.copy(block: terra.treasury.v1beta1.QueryBurnTaxExemptionListRequestKt.Dsl.() -> kotlin.Unit): terra.treasury.v1beta1.QueryOuterClass.QueryBurnTaxExemptionListRequest =
  terra.treasury.v1beta1.QueryBurnTaxExemptionListRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val terra.treasury.v1beta1.QueryOuterClass.QueryBurnTaxExemptionListRequestOrBuilder.paginationOrNull: cosmos.base.query.v1beta1.Pagination.PageRequest?
  get() = if (hasPagination()) getPagination() else null
