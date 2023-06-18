/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "terra.wasm.v1beta1";

/** CodeInfo is data for the uploaded contract WASM code */
export interface LegacyCodeInfo {
  /** CodeID is the sequentially increasing unique identifier */
  codeId: Long;
  /** CodeHash is the unique identifier created by wasmvm */
  codeHash: Uint8Array;
  /** Creator address who initially stored the code */
  creator: string;
}

/** ContractInfo stores a WASM contract instance */
export interface LegacyContractInfo {
  /** Address is the address of the contract */
  address: string;
  /** Creator is the contract creator address */
  creator: string;
  /** Admin is who can execute the contract migration */
  admin: string;
  /** CodeID is the reference to the stored Wasm code */
  codeId: Long;
  /** InitMsg is the raw message used when instantiating a contract */
  initMsg: Uint8Array;
}

function createBaseLegacyCodeInfo(): LegacyCodeInfo {
  return { codeId: Long.UZERO, codeHash: new Uint8Array(0), creator: "" };
}

export const LegacyCodeInfo = {
  encode(message: LegacyCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(18).bytes(message.codeHash);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyCodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.codeId = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.codeHash = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.creator = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyCodeInfo {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(0),
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: LegacyCodeInfo): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.codeHash !== undefined &&
      (obj.codeHash = base64FromBytes(message.codeHash !== undefined ? message.codeHash : new Uint8Array(0)));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyCodeInfo>, I>>(base?: I): LegacyCodeInfo {
    return LegacyCodeInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacyCodeInfo>, I>>(object: I): LegacyCodeInfo {
    const message = createBaseLegacyCodeInfo();
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.codeHash = object.codeHash ?? new Uint8Array(0);
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseLegacyContractInfo(): LegacyContractInfo {
  return { address: "", creator: "", admin: "", codeId: Long.UZERO, initMsg: new Uint8Array(0) };
}

export const LegacyContractInfo = {
  encode(message: LegacyContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(32).uint64(message.codeId);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(42).bytes(message.initMsg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyContractInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyContractInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.creator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.codeId = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initMsg = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyContractInfo {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array(0),
    };
  },

  toJSON(message: LegacyContractInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.creator !== undefined && (obj.creator = message.creator);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.initMsg !== undefined &&
      (obj.initMsg = base64FromBytes(message.initMsg !== undefined ? message.initMsg : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyContractInfo>, I>>(base?: I): LegacyContractInfo {
    return LegacyContractInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LegacyContractInfo>, I>>(object: I): LegacyContractInfo {
    const message = createBaseLegacyContractInfo();
    message.address = object.address ?? "";
    message.creator = object.creator ?? "";
    message.admin = object.admin ?? "";
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.initMsg = object.initMsg ?? new Uint8Array(0);
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
