/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { LegacyCodeInfo, LegacyContractInfo } from "./wasm";

export const protobufPackage = "terra.wasm.v1beta1";

/** Model is a struct that holds a KV pair */
export interface Model {
  key: Uint8Array;
  value: Uint8Array;
}

/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
  codeInfo?: LegacyCodeInfo;
  codeBytes: Uint8Array;
}

/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
  contractInfo?: LegacyContractInfo;
  contractStore: Model[];
}

function createBaseModel(): Model {
  return { key: new Uint8Array(0), value: new Uint8Array(0) };
}

export const Model = {
  encode(message: Model, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Model {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Model {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
    };
  },

  toJSON(message: Model): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array(0)));
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<Model>, I>>(base?: I): Model {
    return Model.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Model>, I>>(object: I): Model {
    const message = createBaseModel();
    message.key = object.key ?? new Uint8Array(0);
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseCode(): Code {
  return { codeInfo: undefined, codeBytes: new Uint8Array(0) };
}

export const Code = {
  encode(message: Code, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.codeInfo !== undefined) {
      LegacyCodeInfo.encode(message.codeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.codeBytes.length !== 0) {
      writer.uint32(18).bytes(message.codeBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Code {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.codeInfo = LegacyCodeInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.codeBytes = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Code {
    return {
      codeInfo: isSet(object.codeInfo) ? LegacyCodeInfo.fromJSON(object.codeInfo) : undefined,
      codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array(0),
    };
  },

  toJSON(message: Code): unknown {
    const obj: any = {};
    message.codeInfo !== undefined &&
      (obj.codeInfo = message.codeInfo ? LegacyCodeInfo.toJSON(message.codeInfo) : undefined);
    message.codeBytes !== undefined &&
      (obj.codeBytes = base64FromBytes(
        message.codeBytes !== undefined ? message.codeBytes : new Uint8Array(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<Code>, I>>(base?: I): Code {
    return Code.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Code>, I>>(object: I): Code {
    const message = createBaseCode();
    message.codeInfo =
      object.codeInfo !== undefined && object.codeInfo !== null
        ? LegacyCodeInfo.fromPartial(object.codeInfo)
        : undefined;
    message.codeBytes = object.codeBytes ?? new Uint8Array(0);
    return message;
  },
};

function createBaseContract(): Contract {
  return { contractInfo: undefined, contractStore: [] };
}

export const Contract = {
  encode(message: Contract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractInfo !== undefined) {
      LegacyContractInfo.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractStore) {
      Model.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Contract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractInfo = LegacyContractInfo.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contractStore.push(Model.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Contract {
    return {
      contractInfo: isSet(object.contractInfo) ? LegacyContractInfo.fromJSON(object.contractInfo) : undefined,
      contractStore: Array.isArray(object?.contractStore)
        ? object.contractStore.map((e: any) => Model.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Contract): unknown {
    const obj: any = {};
    message.contractInfo !== undefined &&
      (obj.contractInfo = message.contractInfo ? LegacyContractInfo.toJSON(message.contractInfo) : undefined);
    if (message.contractStore) {
      obj.contractStore = message.contractStore.map((e) => (e ? Model.toJSON(e) : undefined));
    } else {
      obj.contractStore = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Contract>, I>>(base?: I): Contract {
    return Contract.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Contract>, I>>(object: I): Contract {
    const message = createBaseContract();
    message.contractInfo =
      object.contractInfo !== undefined && object.contractInfo !== null
        ? LegacyContractInfo.fromPartial(object.contractInfo)
        : undefined;
    message.contractStore = object.contractStore?.map((e) => Model.fromPartial(e)) || [];
    return message;
  },
};

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
