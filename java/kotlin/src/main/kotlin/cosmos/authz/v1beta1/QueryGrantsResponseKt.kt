//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: cosmos/authz/v1beta1/query.proto

package cosmos.authz.v1beta1;

@kotlin.jvm.JvmSynthetic
inline fun queryGrantsResponse(block: cosmos.authz.v1beta1.QueryGrantsResponseKt.Dsl.() -> Unit): cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsResponse =
  cosmos.authz.v1beta1.QueryGrantsResponseKt.Dsl._create(cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsResponse.newBuilder()).apply { block() }._build()
object QueryGrantsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  class Dsl private constructor(
    @kotlin.jvm.JvmField private val _builder: cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsResponse.Builder
  ) {
    companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsResponse = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    class GrantsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <pre>
     * authorizations is a list of grants granted for grantee by granter.
     * </pre>
     *
     * <code>repeated .cosmos.authz.v1beta1.Grant grants = 1;</code>
     */
     val grants: com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Authz.Grant, GrantsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getGrantsList()
      )
    /**
     * <pre>
     * authorizations is a list of grants granted for grantee by granter.
     * </pre>
     *
     * <code>repeated .cosmos.authz.v1beta1.Grant grants = 1;</code>
     * @param value The grants to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addGrants")
    fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Authz.Grant, GrantsProxy>.add(value: cosmos.authz.v1beta1.Authz.Grant) {
      _builder.addGrants(value)
    }/**
     * <pre>
     * authorizations is a list of grants granted for grantee by granter.
     * </pre>
     *
     * <code>repeated .cosmos.authz.v1beta1.Grant grants = 1;</code>
     * @param value The grants to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignGrants")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Authz.Grant, GrantsProxy>.plusAssign(value: cosmos.authz.v1beta1.Authz.Grant) {
      add(value)
    }/**
     * <pre>
     * authorizations is a list of grants granted for grantee by granter.
     * </pre>
     *
     * <code>repeated .cosmos.authz.v1beta1.Grant grants = 1;</code>
     * @param values The grants to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllGrants")
    fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Authz.Grant, GrantsProxy>.addAll(values: kotlin.collections.Iterable<cosmos.authz.v1beta1.Authz.Grant>) {
      _builder.addAllGrants(values)
    }/**
     * <pre>
     * authorizations is a list of grants granted for grantee by granter.
     * </pre>
     *
     * <code>repeated .cosmos.authz.v1beta1.Grant grants = 1;</code>
     * @param values The grants to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllGrants")
    inline operator fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Authz.Grant, GrantsProxy>.plusAssign(values: kotlin.collections.Iterable<cosmos.authz.v1beta1.Authz.Grant>) {
      addAll(values)
    }/**
     * <pre>
     * authorizations is a list of grants granted for grantee by granter.
     * </pre>
     *
     * <code>repeated .cosmos.authz.v1beta1.Grant grants = 1;</code>
     * @param index The index to set the value at.
     * @param value The grants to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setGrants")
    operator fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Authz.Grant, GrantsProxy>.set(index: kotlin.Int, value: cosmos.authz.v1beta1.Authz.Grant) {
      _builder.setGrants(index, value)
    }/**
     * <pre>
     * authorizations is a list of grants granted for grantee by granter.
     * </pre>
     *
     * <code>repeated .cosmos.authz.v1beta1.Grant grants = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearGrants")
    fun com.google.protobuf.kotlin.DslList<cosmos.authz.v1beta1.Authz.Grant, GrantsProxy>.clear() {
      _builder.clearGrants()
    }
    /**
     * <pre>
     * pagination defines an pagination for the response.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     */
    var pagination: cosmos.base.query.v1beta1.Pagination.PageResponse
      @JvmName("getPagination")
      get() = _builder.getPagination()
      @JvmName("setPagination")
      set(value) {
        _builder.setPagination(value)
      }
    /**
     * <pre>
     * pagination defines an pagination for the response.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     */
    fun clearPagination() {
      _builder.clearPagination()
    }
    /**
     * <pre>
     * pagination defines an pagination for the response.
     * </pre>
     *
     * <code>.cosmos.base.query.v1beta1.PageResponse pagination = 2;</code>
     * @return Whether the pagination field is set.
     */
    fun hasPagination(): kotlin.Boolean {
      return _builder.hasPagination()
    }
  }
}
@kotlin.jvm.JvmSynthetic
inline fun cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsResponse.copy(block: cosmos.authz.v1beta1.QueryGrantsResponseKt.Dsl.() -> Unit): cosmos.authz.v1beta1.QueryOuterClass.QueryGrantsResponse =
  cosmos.authz.v1beta1.QueryGrantsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
