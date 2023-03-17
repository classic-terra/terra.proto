package terra.treasury.v1beta1

import io.grpc.CallOptions
import io.grpc.CallOptions.DEFAULT
import io.grpc.Channel
import io.grpc.Metadata
import io.grpc.MethodDescriptor
import io.grpc.ServerServiceDefinition
import io.grpc.ServerServiceDefinition.builder
import io.grpc.ServiceDescriptor
import io.grpc.Status
import io.grpc.Status.UNIMPLEMENTED
import io.grpc.StatusException
import io.grpc.kotlin.AbstractCoroutineServerImpl
import io.grpc.kotlin.AbstractCoroutineStub
import io.grpc.kotlin.ClientCalls
import io.grpc.kotlin.ClientCalls.unaryRpc
import io.grpc.kotlin.ServerCalls
import io.grpc.kotlin.ServerCalls.unaryServerMethodDefinition
import io.grpc.kotlin.StubFor
import kotlin.String
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.EmptyCoroutineContext
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic
import terra.treasury.v1beta1.QueryGrpc.getServiceDescriptor

/**
 * Holder for Kotlin coroutine-based client and server APIs for terra.treasury.v1beta1.Query.
 */
public object QueryGrpcKt {
  public const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  public val taxRateMethod:
      MethodDescriptor<QueryOuterClass.QueryTaxRateRequest, QueryOuterClass.QueryTaxRateResponse>
    @JvmStatic
    get() = QueryGrpc.getTaxRateMethod()

  public val taxCapMethod:
      MethodDescriptor<QueryOuterClass.QueryTaxCapRequest, QueryOuterClass.QueryTaxCapResponse>
    @JvmStatic
    get() = QueryGrpc.getTaxCapMethod()

  public val taxCapsMethod:
      MethodDescriptor<QueryOuterClass.QueryTaxCapsRequest, QueryOuterClass.QueryTaxCapsResponse>
    @JvmStatic
    get() = QueryGrpc.getTaxCapsMethod()

  public val rewardWeightMethod:
      MethodDescriptor<QueryOuterClass.QueryRewardWeightRequest, QueryOuterClass.QueryRewardWeightResponse>
    @JvmStatic
    get() = QueryGrpc.getRewardWeightMethod()

  public val seigniorageProceedsMethod:
      MethodDescriptor<QueryOuterClass.QuerySeigniorageProceedsRequest, QueryOuterClass.QuerySeigniorageProceedsResponse>
    @JvmStatic
    get() = QueryGrpc.getSeigniorageProceedsMethod()

  public val taxProceedsMethod:
      MethodDescriptor<QueryOuterClass.QueryTaxProceedsRequest, QueryOuterClass.QueryTaxProceedsResponse>
    @JvmStatic
    get() = QueryGrpc.getTaxProceedsMethod()

  public val indicatorsMethod:
      MethodDescriptor<QueryOuterClass.QueryIndicatorsRequest, QueryOuterClass.QueryIndicatorsResponse>
    @JvmStatic
    get() = QueryGrpc.getIndicatorsMethod()

  public val burnTaxExemptionListMethod:
      MethodDescriptor<QueryOuterClass.QueryBurnTaxExemptionListRequest, QueryOuterClass.QueryBurnTaxExemptionListResponse>
    @JvmStatic
    get() = QueryGrpc.getBurnTaxExemptionListMethod()

  public val paramsMethod:
      MethodDescriptor<QueryOuterClass.QueryParamsRequest, QueryOuterClass.QueryParamsResponse>
    @JvmStatic
    get() = QueryGrpc.getParamsMethod()

  /**
   * A stub for issuing RPCs to a(n) terra.treasury.v1beta1.Query service as suspending coroutines.
   */
  @StubFor(QueryGrpc::class)
  public class QueryCoroutineStub @JvmOverloads constructor(
    channel: Channel,
    callOptions: CallOptions = DEFAULT,
  ) : AbstractCoroutineStub<QueryCoroutineStub>(channel, callOptions) {
    public override fun build(channel: Channel, callOptions: CallOptions): QueryCoroutineStub =
        QueryCoroutineStub(channel, callOptions)

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun taxRate(request: QueryOuterClass.QueryTaxRateRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryTaxRateResponse = unaryRpc(
      channel,
      QueryGrpc.getTaxRateMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun taxCap(request: QueryOuterClass.QueryTaxCapRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryTaxCapResponse = unaryRpc(
      channel,
      QueryGrpc.getTaxCapMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun taxCaps(request: QueryOuterClass.QueryTaxCapsRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryTaxCapsResponse = unaryRpc(
      channel,
      QueryGrpc.getTaxCapsMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun rewardWeight(request: QueryOuterClass.QueryRewardWeightRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryRewardWeightResponse = unaryRpc(
      channel,
      QueryGrpc.getRewardWeightMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun seigniorageProceeds(request: QueryOuterClass.QuerySeigniorageProceedsRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QuerySeigniorageProceedsResponse =
        unaryRpc(
      channel,
      QueryGrpc.getSeigniorageProceedsMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun taxProceeds(request: QueryOuterClass.QueryTaxProceedsRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryTaxProceedsResponse = unaryRpc(
      channel,
      QueryGrpc.getTaxProceedsMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun indicators(request: QueryOuterClass.QueryIndicatorsRequest, headers: Metadata
        = Metadata()): QueryOuterClass.QueryIndicatorsResponse = unaryRpc(
      channel,
      QueryGrpc.getIndicatorsMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend
        fun burnTaxExemptionList(request: QueryOuterClass.QueryBurnTaxExemptionListRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryBurnTaxExemptionListResponse =
        unaryRpc(
      channel,
      QueryGrpc.getBurnTaxExemptionListMethod(),
      request,
      callOptions,
      headers
    )

    /**
     * Executes this RPC and returns the response message, suspending until the RPC completes
     * with [`Status.OK`][Status].  If the RPC completes with another status, a corresponding
     * [StatusException] is thrown.  If this coroutine is cancelled, the RPC is also cancelled
     * with the corresponding exception as a cause.
     *
     * @param request The request message to send to the server.
     *
     * @param headers Metadata to attach to the request.  Most users will not need this.
     *
     * @return The single response from the server.
     */
    public suspend fun params(request: QueryOuterClass.QueryParamsRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryParamsResponse = unaryRpc(
      channel,
      QueryGrpc.getParamsMethod(),
      request,
      callOptions,
      headers
    )
  }

  /**
   * Skeletal implementation of the terra.treasury.v1beta1.Query service based on Kotlin coroutines.
   */
  public abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.TaxRate.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun taxRate(request: QueryOuterClass.QueryTaxRateRequest):
        QueryOuterClass.QueryTaxRateResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.TaxRate is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.TaxCap.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun taxCap(request: QueryOuterClass.QueryTaxCapRequest):
        QueryOuterClass.QueryTaxCapResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.TaxCap is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.TaxCaps.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun taxCaps(request: QueryOuterClass.QueryTaxCapsRequest):
        QueryOuterClass.QueryTaxCapsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.TaxCaps is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.RewardWeight.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun rewardWeight(request: QueryOuterClass.QueryRewardWeightRequest):
        QueryOuterClass.QueryRewardWeightResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.RewardWeight is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.SeigniorageProceeds.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend
        fun seigniorageProceeds(request: QueryOuterClass.QuerySeigniorageProceedsRequest):
        QueryOuterClass.QuerySeigniorageProceedsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.SeigniorageProceeds is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.TaxProceeds.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun taxProceeds(request: QueryOuterClass.QueryTaxProceedsRequest):
        QueryOuterClass.QueryTaxProceedsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.TaxProceeds is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.Indicators.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun indicators(request: QueryOuterClass.QueryIndicatorsRequest):
        QueryOuterClass.QueryIndicatorsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.Indicators is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.BurnTaxExemptionList.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend
        fun burnTaxExemptionList(request: QueryOuterClass.QueryBurnTaxExemptionListRequest):
        QueryOuterClass.QueryBurnTaxExemptionListResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.BurnTaxExemptionList is unimplemented"))

    /**
     * Returns the response to an RPC for terra.treasury.v1beta1.Query.Params.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun params(request: QueryOuterClass.QueryParamsRequest):
        QueryOuterClass.QueryParamsResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.treasury.v1beta1.Query.Params is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTaxRateMethod(),
      implementation = ::taxRate
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTaxCapMethod(),
      implementation = ::taxCap
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTaxCapsMethod(),
      implementation = ::taxCaps
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getRewardWeightMethod(),
      implementation = ::rewardWeight
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getSeigniorageProceedsMethod(),
      implementation = ::seigniorageProceeds
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTaxProceedsMethod(),
      implementation = ::taxProceeds
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getIndicatorsMethod(),
      implementation = ::indicators
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getBurnTaxExemptionListMethod(),
      implementation = ::burnTaxExemptionList
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getParamsMethod(),
      implementation = ::params
    )).build()
  }
}
