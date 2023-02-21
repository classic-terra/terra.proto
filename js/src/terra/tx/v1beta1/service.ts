/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { Tx } from "../../../cosmos/tx/v1beta1/tx";
import { BrowserHeaders } from "browser-headers";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "terra.tx.v1beta1";

/**
 * ComputeTaxRequest is the request type for the Service.ComputeTax
 * RPC method.
 */
export interface ComputeTaxRequest {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   *
   * @deprecated
   */
  tx?: Tx;
  /** tx_bytes is the raw transaction. */
  txBytes: Uint8Array;
}

/**
 * ComputeTaxResponse is the response type for the Service.ComputeTax
 * RPC method.
 */
export interface ComputeTaxResponse {
  /** amount is the amount of coins to be paid as a fee */
  taxAmount: Coin[];
}

const baseComputeTaxRequest: object = {};

export const ComputeTaxRequest = {
  encode(message: ComputeTaxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComputeTaxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseComputeTaxRequest } as ComputeTaxRequest;
    message.txBytes = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComputeTaxRequest {
    const message = { ...baseComputeTaxRequest } as ComputeTaxRequest;
    message.txBytes = new Uint8Array();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromJSON(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.txBytes !== undefined && object.txBytes !== null) {
      message.txBytes = bytesFromBase64(object.txBytes);
    }
    return message;
  },

  toJSON(message: ComputeTaxRequest): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.txBytes !== undefined &&
      (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<ComputeTaxRequest>): ComputeTaxRequest {
    const message = { ...baseComputeTaxRequest } as ComputeTaxRequest;
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromPartial(object.tx);
    } else {
      message.tx = undefined;
    }
    if (object.txBytes !== undefined && object.txBytes !== null) {
      message.txBytes = object.txBytes;
    } else {
      message.txBytes = new Uint8Array();
    }
    return message;
  },
};

const baseComputeTaxResponse: object = {};

export const ComputeTaxResponse = {
  encode(message: ComputeTaxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.taxAmount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ComputeTaxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseComputeTaxResponse } as ComputeTaxResponse;
    message.taxAmount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taxAmount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ComputeTaxResponse {
    const message = { ...baseComputeTaxResponse } as ComputeTaxResponse;
    message.taxAmount = [];
    if (object.taxAmount !== undefined && object.taxAmount !== null) {
      for (const e of object.taxAmount) {
        message.taxAmount.push(Coin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: ComputeTaxResponse): unknown {
    const obj: any = {};
    if (message.taxAmount) {
      obj.taxAmount = message.taxAmount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.taxAmount = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<ComputeTaxResponse>): ComputeTaxResponse {
    const message = { ...baseComputeTaxResponse } as ComputeTaxResponse;
    message.taxAmount = [];
    if (object.taxAmount !== undefined && object.taxAmount !== null) {
      for (const e of object.taxAmount) {
        message.taxAmount.push(Coin.fromPartial(e));
      }
    }
    return message;
  },
};

/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
  /** EstimateFee simulates executing a transaction for estimating gas usage. */
  ComputeTax(request: DeepPartial<ComputeTaxRequest>, metadata?: grpc.Metadata): Promise<ComputeTaxResponse>;
}

export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ComputeTax = this.ComputeTax.bind(this);
  }

  ComputeTax(request: DeepPartial<ComputeTaxRequest>, metadata?: grpc.Metadata): Promise<ComputeTaxResponse> {
    return this.rpc.unary(ServiceComputeTaxDesc, ComputeTaxRequest.fromPartial(request), metadata);
  }
}

export const ServiceDesc = {
  serviceName: "terra.tx.v1beta1.Service",
};

export const ServiceComputeTaxDesc: UnaryMethodDefinitionish = {
  methodName: "ComputeTax",
  service: ServiceDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return ComputeTaxRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...ComputeTaxResponse.decode(data),
        toObject() {
          return this;
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
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
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
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
