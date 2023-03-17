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
import terra.market.v1beta1.MsgGrpc.getServiceDescriptor

/**
 * Holder for Kotlin coroutine-based client and server APIs for terra.market.v1beta1.Msg.
 */
public object MsgGrpcKt {
  public const val SERVICE_NAME: String = MsgGrpc.SERVICE_NAME

  @JvmStatic
  public val serviceDescriptor: ServiceDescriptor
    get() = MsgGrpc.getServiceDescriptor()

  public val swapMethod: MethodDescriptor<Tx.MsgSwap, Tx.MsgSwapResponse>
    @JvmStatic
    get() = MsgGrpc.getSwapMethod()

  public val swapSendMethod: MethodDescriptor<Tx.MsgSwapSend, Tx.MsgSwapSendResponse>
    @JvmStatic
    get() = MsgGrpc.getSwapSendMethod()

  /**
   * A stub for issuing RPCs to a(n) terra.market.v1beta1.Msg service as suspending coroutines.
   */
  @StubFor(MsgGrpc::class)
  public class MsgCoroutineStub @JvmOverloads constructor(
    channel: Channel,
    callOptions: CallOptions = DEFAULT,
  ) : AbstractCoroutineStub<MsgCoroutineStub>(channel, callOptions) {
    public override fun build(channel: Channel, callOptions: CallOptions): MsgCoroutineStub =
        MsgCoroutineStub(channel, callOptions)

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
    public suspend fun swap(request: Tx.MsgSwap, headers: Metadata = Metadata()): Tx.MsgSwapResponse
        = unaryRpc(
      channel,
      MsgGrpc.getSwapMethod(),
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
    public suspend fun swapSend(request: Tx.MsgSwapSend, headers: Metadata = Metadata()):
        Tx.MsgSwapSendResponse = unaryRpc(
      channel,
      MsgGrpc.getSwapSendMethod(),
      request,
      callOptions,
      headers
    )
  }

  /**
   * Skeletal implementation of the terra.market.v1beta1.Msg service based on Kotlin coroutines.
   */
  public abstract class MsgCoroutineImplBase(
    coroutineContext: CoroutineContext = EmptyCoroutineContext,
  ) : AbstractCoroutineServerImpl(coroutineContext) {
    /**
     * Returns the response to an RPC for terra.market.v1beta1.Msg.Swap.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun swap(request: Tx.MsgSwap): Tx.MsgSwapResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.market.v1beta1.Msg.Swap is unimplemented"))

    /**
     * Returns the response to an RPC for terra.market.v1beta1.Msg.SwapSend.
     *
     * If this method fails with a [StatusException], the RPC will fail with the corresponding
     * [Status].  If this method fails with a [java.util.concurrent.CancellationException], the RPC
     * will fail
     * with status `Status.CANCELLED`.  If this method fails for any other reason, the RPC will
     * fail with `Status.UNKNOWN` with the exception as a cause.
     *
     * @param request The request from the client.
     */
    public open suspend fun swapSend(request: Tx.MsgSwapSend): Tx.MsgSwapSendResponse = throw
        StatusException(UNIMPLEMENTED.withDescription("Method terra.market.v1beta1.Msg.SwapSend is unimplemented"))

    public final override fun bindService(): ServerServiceDefinition =
        builder(getServiceDescriptor())
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getSwapMethod(),
      implementation = ::swap
    ))
      .addMethod(unaryServerMethodDefinition(
      context = this.context,
      descriptor = MsgGrpc.getSwapSendMethod(),
      implementation = ::swapSend
    )).build()
  }
}
