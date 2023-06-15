/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "terra.market.v1beta1";

/** MsgSwap represents a message to swap coin to another denom. */
export interface MsgSwap {
  trader: string;
  offerCoin?: Coin;
  askDenom: string;
}

/** MsgSwapResponse defines the Msg/Swap response type. */
export interface MsgSwapResponse {
  swapCoin?: Coin;
  swapFee?: Coin;
}

/** MsgSwapSend represents a message to swap coin and send all result coin to recipient */
export interface MsgSwapSend {
  fromAddress: string;
  toAddress: string;
  offerCoin?: Coin;
  askDenom: string;
}

/** MsgSwapSendResponse defines the Msg/SwapSend response type. */
export interface MsgSwapSendResponse {
  swapCoin?: Coin;
  swapFee?: Coin;
}

function createBaseMsgSwap(): MsgSwap {
  return { trader: "", offerCoin: undefined, askDenom: "" };
}

export const MsgSwap = {
  encode(message: MsgSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trader !== "") {
      writer.uint32(10).string(message.trader);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(18).fork()).ldelim();
    }
    if (message.askDenom !== "") {
      writer.uint32(26).string(message.askDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trader = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.offerCoin = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.askDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSwap {
    return {
      trader: isSet(object.trader) ? String(object.trader) : "",
      offerCoin: isSet(object.offerCoin) ? Coin.fromJSON(object.offerCoin) : undefined,
      askDenom: isSet(object.askDenom) ? String(object.askDenom) : "",
    };
  },

  toJSON(message: MsgSwap): unknown {
    const obj: any = {};
    message.trader !== undefined && (obj.trader = message.trader);
    message.offerCoin !== undefined && (obj.offerCoin = message.offerCoin ? Coin.toJSON(message.offerCoin) : undefined);
    message.askDenom !== undefined && (obj.askDenom = message.askDenom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSwap>, I>>(base?: I): MsgSwap {
    return MsgSwap.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwap>, I>>(object: I): MsgSwap {
    const message = createBaseMsgSwap();
    message.trader = object.trader ?? "";
    message.offerCoin = (object.offerCoin !== undefined && object.offerCoin !== null)
      ? Coin.fromPartial(object.offerCoin)
      : undefined;
    message.askDenom = object.askDenom ?? "";
    return message;
  },
};

function createBaseMsgSwapResponse(): MsgSwapResponse {
  return { swapCoin: undefined, swapFee: undefined };
}

export const MsgSwapResponse = {
  encode(message: MsgSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapCoin !== undefined) {
      Coin.encode(message.swapCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.swapCoin = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.swapFee = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSwapResponse {
    return {
      swapCoin: isSet(object.swapCoin) ? Coin.fromJSON(object.swapCoin) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined,
    };
  },

  toJSON(message: MsgSwapResponse): unknown {
    const obj: any = {};
    message.swapCoin !== undefined && (obj.swapCoin = message.swapCoin ? Coin.toJSON(message.swapCoin) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSwapResponse>, I>>(base?: I): MsgSwapResponse {
    return MsgSwapResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapResponse>, I>>(object: I): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    message.swapCoin = (object.swapCoin !== undefined && object.swapCoin !== null)
      ? Coin.fromPartial(object.swapCoin)
      : undefined;
    message.swapFee = (object.swapFee !== undefined && object.swapFee !== null)
      ? Coin.fromPartial(object.swapFee)
      : undefined;
    return message;
  },
};

function createBaseMsgSwapSend(): MsgSwapSend {
  return { fromAddress: "", toAddress: "", offerCoin: undefined, askDenom: "" };
}

export const MsgSwapSend = {
  encode(message: MsgSwapSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAddress !== "") {
      writer.uint32(10).string(message.fromAddress);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(26).fork()).ldelim();
    }
    if (message.askDenom !== "") {
      writer.uint32(34).string(message.askDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapSend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fromAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.offerCoin = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.askDenom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSwapSend {
    return {
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      offerCoin: isSet(object.offerCoin) ? Coin.fromJSON(object.offerCoin) : undefined,
      askDenom: isSet(object.askDenom) ? String(object.askDenom) : "",
    };
  },

  toJSON(message: MsgSwapSend): unknown {
    const obj: any = {};
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.offerCoin !== undefined && (obj.offerCoin = message.offerCoin ? Coin.toJSON(message.offerCoin) : undefined);
    message.askDenom !== undefined && (obj.askDenom = message.askDenom);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSwapSend>, I>>(base?: I): MsgSwapSend {
    return MsgSwapSend.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapSend>, I>>(object: I): MsgSwapSend {
    const message = createBaseMsgSwapSend();
    message.fromAddress = object.fromAddress ?? "";
    message.toAddress = object.toAddress ?? "";
    message.offerCoin = (object.offerCoin !== undefined && object.offerCoin !== null)
      ? Coin.fromPartial(object.offerCoin)
      : undefined;
    message.askDenom = object.askDenom ?? "";
    return message;
  },
};

function createBaseMsgSwapSendResponse(): MsgSwapSendResponse {
  return { swapCoin: undefined, swapFee: undefined };
}

export const MsgSwapSendResponse = {
  encode(message: MsgSwapSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.swapCoin !== undefined) {
      Coin.encode(message.swapCoin, writer.uint32(10).fork()).ldelim();
    }
    if (message.swapFee !== undefined) {
      Coin.encode(message.swapFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapSendResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.swapCoin = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.swapFee = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgSwapSendResponse {
    return {
      swapCoin: isSet(object.swapCoin) ? Coin.fromJSON(object.swapCoin) : undefined,
      swapFee: isSet(object.swapFee) ? Coin.fromJSON(object.swapFee) : undefined,
    };
  },

  toJSON(message: MsgSwapSendResponse): unknown {
    const obj: any = {};
    message.swapCoin !== undefined && (obj.swapCoin = message.swapCoin ? Coin.toJSON(message.swapCoin) : undefined);
    message.swapFee !== undefined && (obj.swapFee = message.swapFee ? Coin.toJSON(message.swapFee) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSwapSendResponse>, I>>(base?: I): MsgSwapSendResponse {
    return MsgSwapSendResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapSendResponse>, I>>(object: I): MsgSwapSendResponse {
    const message = createBaseMsgSwapSendResponse();
    message.swapCoin = (object.swapCoin !== undefined && object.swapCoin !== null)
      ? Coin.fromPartial(object.swapCoin)
      : undefined;
    message.swapFee = (object.swapFee !== undefined && object.swapFee !== null)
      ? Coin.fromPartial(object.swapFee)
      : undefined;
    return message;
  },
};

/** Msg defines the market Msg service. */
export interface Msg {
  /**
   * Swap defines a method for swapping coin from one denom to another
   * denom.
   */
  Swap(request: DeepPartial<MsgSwap>, metadata?: grpc.Metadata): Promise<MsgSwapResponse>;
  /**
   * SwapSend defines a method for swapping and sending coin from a account to other
   * account.
   */
  SwapSend(request: DeepPartial<MsgSwapSend>, metadata?: grpc.Metadata): Promise<MsgSwapSendResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Swap = this.Swap.bind(this);
    this.SwapSend = this.SwapSend.bind(this);
  }

  Swap(request: DeepPartial<MsgSwap>, metadata?: grpc.Metadata): Promise<MsgSwapResponse> {
    return this.rpc.unary(MsgSwapDesc, MsgSwap.fromPartial(request), metadata);
  }

  SwapSend(request: DeepPartial<MsgSwapSend>, metadata?: grpc.Metadata): Promise<MsgSwapSendResponse> {
    return this.rpc.unary(MsgSwapSendDesc, MsgSwapSend.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "terra.market.v1beta1.Msg" };

export const MsgSwapDesc: UnaryMethodDefinitionish = {
  methodName: "Swap",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSwap.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgSwapResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgSwapSendDesc: UnaryMethodDefinitionish = {
  methodName: "SwapSend",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgSwapSend.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgSwapSendResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
    upStreamRetryCodes?: number[];
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
      upStreamRetryCodes?: number[];
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata = metadata && this.options.metadata
      ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
      : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message!.toObject());
          } else {
            const err = new GrpcWebError(response.statusMessage, response.status, response.trailers);
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export class GrpcWebError extends tsProtoGlobalThis.Error {
  constructor(message: string, public code: grpc.Code, public metadata: grpc.Metadata) {
    super(message);
  }
}
