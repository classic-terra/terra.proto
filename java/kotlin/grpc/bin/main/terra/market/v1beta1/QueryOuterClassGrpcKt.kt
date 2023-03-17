package terra.market.v1beta1

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
import terra.market.v1beta1.QueryGrpc.getServiceDescriptor

/**
 * Holder for Kotlin coroutine-based client and server APIs for terra.market.v1beta1.Query.
 */
public object QueryGrpcKt {
  public const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  public val swapMethod:
      MethodDescriptor<QueryOuterClass.QuerySwapRequest, QueryOuterClass.QuerySwapResponse>
    @JvmStatic
    get() = QueryGrpc.getSwapMethod()

  public val terraPoolDeltaMethod:
      MethodDescriptor<QueryOuterClass.QueryTerraPoolDeltaRequest, QueryOuterClass.QueryTerraPoolDeltaResponse>
    @JvmStatic
    get() = QueryGrpc.getTerraPoolDeltaMethod()

  public val paramsMethod:
      MethodDescriptor<QueryOuterClass.QueryParamsRequest, QueryOuterClass.QueryParamsResponse>
    @JvmStatic
    get() = QueryGrpc.getParamsMethod()

  /**
   * A stub for issuing RPCs to a(n) terra.market.v1beta1.Query service as suspending coroutines.
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
    public suspend fun swap(request: QueryOuterClass.QuerySwapRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QuerySwapResponse = unaryRpc(
      channel,
      QueryGrpc.getSwapMethod(),
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
    public suspend fun terraPoolDelta(request: QueryOuterClass.QueryTerraPoolDeltaRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryTerraPoolDeltaResponse = unaryRpc(
      channel,
      QueryGrpc.getTerraPoolDeltaMethod(),
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
   * Skeletal implementation of the terra.market.v1beta1.Query service based on Kotlin coroutines.
   */
  public abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for terra.market.v1beta1.Query.Swap.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun swap(request: QueryOuterClass.QuerySwapRequest):
        QueryOuterClass.QuerySwapResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.market.v1beta1.Query.Swap is unimplemented"))

    /**
     * Returns the response to an RPC for terra.market.v1beta1.Query.TerraPoolDelta.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun terraPoolDelta(request: QueryOuterClass.QueryTerraPoolDeltaRequest):
        QueryOuterClass.QueryTerraPoolDeltaResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.market.v1beta1.Query.TerraPoolDelta is unimplemented"))

    /**
     * Returns the response to an RPC for terra.market.v1beta1.Query.Params.
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
        StatusException(UNIMPLEMENTED.withDescription("Method terra.market.v1beta1.Query.Params is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getSwapMethod(),
      implementation = ::swap
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getTerraPoolDeltaMethod(),
      implementation = ::terraPoolDelta
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getParamsMethod(),
      implementation = ::params
    )).build()
  }
}
