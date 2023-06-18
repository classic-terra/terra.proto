/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./market";

export const protobufPackage = "terra.market.v1beta1";

/** QuerySwapRequest is the request type for the Query/Swap RPC method. */
export interface QuerySwapRequest {
  /** offer_coin defines the coin being offered (i.e. 1000000uluna) */
  offerCoin: string;
  /** ask_denom defines the denom of the coin to swap to */
  askDenom: string;
}

/** QuerySwapResponse is the response type for the Query/Swap RPC method. */
export interface QuerySwapResponse {
  /** return_coin defines the coin returned as a result of the swap simulation. */
  returnCoin?: Coin;
}

/** QueryTerraPoolDeltaRequest is the request type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaRequest {}

/** QueryTerraPoolDeltaResponse is the response type for the Query/TerraPoolDelta RPC method. */
export interface QueryTerraPoolDeltaResponse {
  /** terra_pool_delta defines the gap between the TerraPool and the TerraBasePool */
  terraPoolDelta: Uint8Array;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

function createBaseQuerySwapRequest(): QuerySwapRequest {
  return { offerCoin: "", askDenom: "" };
}

export const QuerySwapRequest = {
  encode(message: QuerySwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.offerCoin !== "") {
      writer.uint32(10).string(message.offerCoin);
    }
    if (message.askDenom !== "") {
      writer.uint32(18).string(message.askDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.offerCoin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QuerySwapRequest {
    return {
      offerCoin: isSet(object.offerCoin) ? String(object.offerCoin) : "",
      askDenom: isSet(object.askDenom) ? String(object.askDenom) : "",
    };
  },

  toJSON(message: QuerySwapRequest): unknown {
    const obj: any = {};
    message.offerCoin !== undefined && (obj.offerCoin = message.offerCoin);
    message.askDenom !== undefined && (obj.askDenom = message.askDenom);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySwapRequest>, I>>(base?: I): QuerySwapRequest {
    return QuerySwapRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapRequest>, I>>(object: I): QuerySwapRequest {
    const message = createBaseQuerySwapRequest();
    message.offerCoin = object.offerCoin ?? "";
    message.askDenom = object.askDenom ?? "";
    return message;
  },
};

function createBaseQuerySwapResponse(): QuerySwapResponse {
  return { returnCoin: undefined };
}

export const QuerySwapResponse = {
  encode(message: QuerySwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.returnCoin !== undefined) {
      Coin.encode(message.returnCoin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.returnCoin = Coin.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySwapResponse {
    return { returnCoin: isSet(object.returnCoin) ? Coin.fromJSON(object.returnCoin) : undefined };
  },

  toJSON(message: QuerySwapResponse): unknown {
    const obj: any = {};
    message.returnCoin !== undefined &&
      (obj.returnCoin = message.returnCoin ? Coin.toJSON(message.returnCoin) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySwapResponse>, I>>(base?: I): QuerySwapResponse {
    return QuerySwapResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapResponse>, I>>(object: I): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    message.returnCoin =
      object.returnCoin !== undefined && object.returnCoin !== null
        ? Coin.fromPartial(object.returnCoin)
        : undefined;
    return message;
  },
};

function createBaseQueryTerraPoolDeltaRequest(): QueryTerraPoolDeltaRequest {
  return {};
}

export const QueryTerraPoolDeltaRequest = {
  encode(_: QueryTerraPoolDeltaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTerraPoolDeltaRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTerraPoolDeltaRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryTerraPoolDeltaRequest {
    return {};
  },

  toJSON(_: QueryTerraPoolDeltaRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTerraPoolDeltaRequest>, I>>(base?: I): QueryTerraPoolDeltaRequest {
    return QueryTerraPoolDeltaRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTerraPoolDeltaRequest>, I>>(_: I): QueryTerraPoolDeltaRequest {
    const message = createBaseQueryTerraPoolDeltaRequest();
    return message;
  },
};

function createBaseQueryTerraPoolDeltaResponse(): QueryTerraPoolDeltaResponse {
  return { terraPoolDelta: new Uint8Array(0) };
}

export const QueryTerraPoolDeltaResponse = {
  encode(message: QueryTerraPoolDeltaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.terraPoolDelta.length !== 0) {
      writer.uint32(10).bytes(message.terraPoolDelta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTerraPoolDeltaResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTerraPoolDeltaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.terraPoolDelta = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTerraPoolDeltaResponse {
    return {
      terraPoolDelta: isSet(object.terraPoolDelta)
        ? bytesFromBase64(object.terraPoolDelta)
        : new Uint8Array(0),
    };
  },

  toJSON(message: QueryTerraPoolDeltaResponse): unknown {
    const obj: any = {};
    message.terraPoolDelta !== undefined &&
      (obj.terraPoolDelta = base64FromBytes(
        message.terraPoolDelta !== undefined ? message.terraPoolDelta : new Uint8Array(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTerraPoolDeltaResponse>, I>>(
    base?: I,
  ): QueryTerraPoolDeltaResponse {
    return QueryTerraPoolDeltaResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTerraPoolDeltaResponse>, I>>(
    object: I,
  ): QueryTerraPoolDeltaResponse {
    const message = createBaseQueryTerraPoolDeltaResponse();
    message.terraPoolDelta = object.terraPoolDelta ?? new Uint8Array(0);
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Swap returns simulated swap amount. */
  Swap(request: DeepPartial<QuerySwapRequest>, metadata?: grpc.Metadata): Promise<QuerySwapResponse>;
  /** TerraPoolDelta returns terra_pool_delta amount. */
  TerraPoolDelta(
    request: DeepPartial<QueryTerraPoolDeltaRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTerraPoolDeltaResponse>;
  /** Params queries all parameters. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Swap = this.Swap.bind(this);
    this.TerraPoolDelta = this.TerraPoolDelta.bind(this);
    this.Params = this.Params.bind(this);
  }

  Swap(request: DeepPartial<QuerySwapRequest>, metadata?: grpc.Metadata): Promise<QuerySwapResponse> {
    return this.rpc.unary(QuerySwapDesc, QuerySwapRequest.fromPartial(request), metadata);
  }

  TerraPoolDelta(
    request: DeepPartial<QueryTerraPoolDeltaRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTerraPoolDeltaResponse> {
    return this.rpc.unary(QueryTerraPoolDeltaDesc, QueryTerraPoolDeltaRequest.fromPartial(request), metadata);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "terra.market.v1beta1.Query" };

export const QuerySwapDesc: UnaryMethodDefinitionish = {
  methodName: "Swap",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySwapRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QuerySwapResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryTerraPoolDeltaDesc: UnaryMethodDefinitionish = {
  methodName: "TerraPoolDelta",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTerraPoolDeltaRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTerraPoolDeltaResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryParamsResponse.decode(data);
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
    const maybeCombinedMetadata =
      metadata && this.options.metadata
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
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
