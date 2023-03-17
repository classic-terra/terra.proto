package terra.wasm.v1beta1

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
import terra.wasm.v1beta1.QueryGrpc.getServiceDescriptor

/**
 * Holder for Kotlin coroutine-based client and server APIs for terra.wasm.v1beta1.Query.
 */
public object QueryGrpcKt {
  public const val SERVICE_NAME: String = QueryGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = QueryGrpc.getServiceDescriptor()

  public val codeInfoMethod:
      MethodDescriptor<QueryOuterClass.QueryCodeInfoRequest, QueryOuterClass.QueryCodeInfoResponse>
    @JvmStatic
    get() = QueryGrpc.getCodeInfoMethod()

  public val byteCodeMethod:
      MethodDescriptor<QueryOuterClass.QueryByteCodeRequest, QueryOuterClass.QueryByteCodeResponse>
    @JvmStatic
    get() = QueryGrpc.getByteCodeMethod()

  public val contractInfoMethod:
      MethodDescriptor<QueryOuterClass.QueryContractInfoRequest, QueryOuterClass.QueryContractInfoResponse>
    @JvmStatic
    get() = QueryGrpc.getContractInfoMethod()

  public val contractStoreMethod:
      MethodDescriptor<QueryOuterClass.QueryContractStoreRequest, QueryOuterClass.QueryContractStoreResponse>
    @JvmStatic
    get() = QueryGrpc.getContractStoreMethod()

  public val rawStoreMethod:
      MethodDescriptor<QueryOuterClass.QueryRawStoreRequest, QueryOuterClass.QueryRawStoreResponse>
    @JvmStatic
    get() = QueryGrpc.getRawStoreMethod()

  public val paramsMethod:
      MethodDescriptor<QueryOuterClass.QueryParamsRequest, QueryOuterClass.QueryParamsResponse>
    @JvmStatic
    get() = QueryGrpc.getParamsMethod()

  /**
   * A stub for issuing RPCs to a(n) terra.wasm.v1beta1.Query service as suspending coroutines.
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
    public suspend fun codeInfo(request: QueryOuterClass.QueryCodeInfoRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryCodeInfoResponse = unaryRpc(
      channel,
      QueryGrpc.getCodeInfoMethod(),
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
    public suspend fun byteCode(request: QueryOuterClass.QueryByteCodeRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryByteCodeResponse = unaryRpc(
      channel,
      QueryGrpc.getByteCodeMethod(),
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
    public suspend fun contractInfo(request: QueryOuterClass.QueryContractInfoRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryContractInfoResponse = unaryRpc(
      channel,
      QueryGrpc.getContractInfoMethod(),
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
    public suspend fun contractStore(request: QueryOuterClass.QueryContractStoreRequest,
        headers: Metadata = Metadata()): QueryOuterClass.QueryContractStoreResponse = unaryRpc(
      channel,
      QueryGrpc.getContractStoreMethod(),
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
    public suspend fun rawStore(request: QueryOuterClass.QueryRawStoreRequest, headers: Metadata =
        Metadata()): QueryOuterClass.QueryRawStoreResponse = unaryRpc(
      channel,
      QueryGrpc.getRawStoreMethod(),
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
   * Skeletal implementation of the terra.wasm.v1beta1.Query service based on Kotlin coroutines.
   */
  public abstract class QueryCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.CodeInfo.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun codeInfo(request: QueryOuterClass.QueryCodeInfoRequest):
        QueryOuterClass.QueryCodeInfoResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.CodeInfo is unimplemented"))

    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.ByteCode.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun byteCode(request: QueryOuterClass.QueryByteCodeRequest):
        QueryOuterClass.QueryByteCodeResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.ByteCode is unimplemented"))

    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.ContractInfo.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun contractInfo(request: QueryOuterClass.QueryContractInfoRequest):
        QueryOuterClass.QueryContractInfoResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.ContractInfo is unimplemented"))

    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.ContractStore.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun contractStore(request: QueryOuterClass.QueryContractStoreRequest):
        QueryOuterClass.QueryContractStoreResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.ContractStore is unimplemented"))

    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.RawStore.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun rawStore(request: QueryOuterClass.QueryRawStoreRequest):
        QueryOuterClass.QueryRawStoreResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.RawStore is unimplemented"))

    /**
     * Returns the response to an RPC for terra.wasm.v1beta1.Query.Params.
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
        StatusException(UNIMPLEMENTED.withDescription("Method terra.wasm.v1beta1.Query.Params is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getCodeInfoMethod(),
      implementation = ::codeInfo
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getByteCodeMethod(),
      implementation = ::byteCode
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getContractInfoMethod(),
      implementation = ::contractInfo
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getContractStoreMethod(),
      implementation = ::contractStore
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getRawStoreMethod(),
      implementation = ::rawStore
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = QueryGrpc.getParamsMethod(),
      implementation = ::params
    )).build()
  }
}
