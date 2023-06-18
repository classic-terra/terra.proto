/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "terra.wasm.v1beta1";

/**
 * MsgStoreCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgStoreCode {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
}

/** MsgStoreCodeResponse defines the Msg/StoreCode response type. */
export interface MsgStoreCodeResponse {
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
}

/**
 * MsgMigrateCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgMigrateCode {
  /** CodeID is the migration target code id */
  codeId: Long;
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** WASMByteCode can be raw or gzip compressed */
  wasmByteCode: Uint8Array;
}

/** MsgMigrateCodeResponse defines the Msg/MigrateCode response type. */
export interface MsgMigrateCodeResponse {}

/**
 * MsgInstantiateContract represents a message to create
 * a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
  /** Sender is an sender address */
  sender: string;
  /** Admin is an optional admin address who can migrate the contract */
  admin: string;
  /** CodeID is the reference to the stored WASM code */
  codeId: Long;
  /** InitMsg json encoded message to be passed to the contract on instantiation */
  initMsg: Uint8Array;
  /** InitCoins that are transferred to the contract on execution */
  initCoins: Coin[];
}

/** MsgInstantiateContractResponse defines the Msg/InstantiateContract response type. */
export interface MsgInstantiateContractResponse {
  /** ContractAddress is the bech32 address of the new contract instance. */
  contractAddress: string;
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}

/**
 * MsgExecuteContract represents a message to
 * submits the given message data to a smart contract.
 */
export interface MsgExecuteContract {
  /** Sender is the that actor that signed the messages */
  sender: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** ExecuteMsg json encoded message to be passed to the contract */
  executeMsg: Uint8Array;
  /** Coins that are transferred to the contract on execution */
  coins: Coin[];
}

/** MsgExecuteContractResponse defines the Msg/ExecuteContract response type. */
export interface MsgExecuteContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}

/**
 * MsgMigrateContract represents a message to
 * runs a code upgrade/ downgrade for a smart contract
 */
export interface MsgMigrateContract {
  /** Admin is the current contract admin */
  admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
  /** NewCodeID references the new WASM code */
  newCodeId: Long;
  /** MigrateMsg is json encoded message to be passed to the contract on migration */
  migrateMsg: Uint8Array;
}

/** MsgMigrateContractResponse defines the Msg/MigrateContract response type. */
export interface MsgMigrateContractResponse {
  /** Data contains base64-encoded bytes to returned from the contract */
  data: Uint8Array;
}

/**
 * MsgUpdateContractAdmin represents a message to
 * sets a new admin for a smart contract
 */
export interface MsgUpdateContractAdmin {
  /** Admin is the current contract admin */
  admin: string;
  /** NewAdmin is the new contract admin */
  newAdmin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/** MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type. */
export interface MsgUpdateContractAdminResponse {}

/**
 * MsgClearContractAdmin represents a message to
 * clear admin address from a smart contract
 */
export interface MsgClearContractAdmin {
  /** Admin is the current contract admin */
  admin: string;
  /** Contract is the address of the smart contract */
  contract: string;
}

/** MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type. */
export interface MsgClearContractAdminResponse {}

function createBaseMsgStoreCode(): MsgStoreCode {
  return { sender: "", wasmByteCode: new Uint8Array(0) };
}

export const MsgStoreCode = {
  encode(message: MsgStoreCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(18).bytes(message.wasmByteCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.wasmByteCode = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStoreCode {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgStoreCode): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStoreCode>, I>>(base?: I): MsgStoreCode {
    return MsgStoreCode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgStoreCode>, I>>(object: I): MsgStoreCode {
    const message = createBaseMsgStoreCode();
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgStoreCodeResponse(): MsgStoreCodeResponse {
  return { codeId: Long.UZERO };
}

export const MsgStoreCodeResponse = {
  encode(message: MsgStoreCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreCodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.codeId = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgStoreCodeResponse {
    return { codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO };
  },

  toJSON(message: MsgStoreCodeResponse): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgStoreCodeResponse>, I>>(base?: I): MsgStoreCodeResponse {
    return MsgStoreCodeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgStoreCodeResponse>, I>>(object: I): MsgStoreCodeResponse {
    const message = createBaseMsgStoreCodeResponse();
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    return message;
  },
};

function createBaseMsgMigrateCode(): MsgMigrateCode {
  return { codeId: Long.UZERO, sender: "", wasmByteCode: new Uint8Array(0) };
}

export const MsgMigrateCode = {
  encode(message: MsgMigrateCode, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.wasmByteCode.length !== 0) {
      writer.uint32(26).bytes(message.wasmByteCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateCode {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateCode();
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

          message.sender = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.wasmByteCode = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMigrateCode {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgMigrateCode): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.wasmByteCode !== undefined &&
      (obj.wasmByteCode = base64FromBytes(
        message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMigrateCode>, I>>(base?: I): MsgMigrateCode {
    return MsgMigrateCode.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgMigrateCode>, I>>(object: I): MsgMigrateCode {
    const message = createBaseMsgMigrateCode();
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.wasmByteCode = object.wasmByteCode ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgMigrateCodeResponse(): MsgMigrateCodeResponse {
  return {};
}

export const MsgMigrateCodeResponse = {
  encode(_: MsgMigrateCodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateCodeResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateCodeResponse();
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

  fromJSON(_: any): MsgMigrateCodeResponse {
    return {};
  },

  toJSON(_: MsgMigrateCodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMigrateCodeResponse>, I>>(base?: I): MsgMigrateCodeResponse {
    return MsgMigrateCodeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgMigrateCodeResponse>, I>>(_: I): MsgMigrateCodeResponse {
    const message = createBaseMsgMigrateCodeResponse();
    return message;
  },
};

function createBaseMsgInstantiateContract(): MsgInstantiateContract {
  return { sender: "", admin: "", codeId: Long.UZERO, initMsg: new Uint8Array(0), initCoins: [] };
}

export const MsgInstantiateContract = {
  encode(message: MsgInstantiateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(34).bytes(message.initMsg);
    }
    for (const v of message.initCoins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.codeId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.initMsg = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initCoins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgInstantiateContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      admin: isSet(object.admin) ? String(object.admin) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array(0),
      initCoins: Array.isArray(object?.initCoins) ? object.initCoins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgInstantiateContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.admin !== undefined && (obj.admin = message.admin);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.initMsg !== undefined &&
      (obj.initMsg = base64FromBytes(message.initMsg !== undefined ? message.initMsg : new Uint8Array(0)));
    if (message.initCoins) {
      obj.initCoins = message.initCoins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.initCoins = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInstantiateContract>, I>>(base?: I): MsgInstantiateContract {
    return MsgInstantiateContract.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgInstantiateContract>, I>>(object: I): MsgInstantiateContract {
    const message = createBaseMsgInstantiateContract();
    message.sender = object.sender ?? "";
    message.admin = object.admin ?? "";
    message.codeId =
      object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.initMsg = object.initMsg ?? new Uint8Array(0);
    message.initCoins = object.initCoins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgInstantiateContractResponse(): MsgInstantiateContractResponse {
  return { contractAddress: "", data: new Uint8Array(0) };
}

export const MsgInstantiateContractResponse = {
  encode(message: MsgInstantiateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInstantiateContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInstantiateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.contractAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgInstantiateContractResponse {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgInstantiateContractResponse): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgInstantiateContractResponse>, I>>(
    base?: I,
  ): MsgInstantiateContractResponse {
    return MsgInstantiateContractResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgInstantiateContractResponse>, I>>(
    object: I,
  ): MsgInstantiateContractResponse {
    const message = createBaseMsgInstantiateContractResponse();
    message.contractAddress = object.contractAddress ?? "";
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgExecuteContract(): MsgExecuteContract {
  return { sender: "", contract: "", executeMsg: new Uint8Array(0), coins: [] };
}

export const MsgExecuteContract = {
  encode(message: MsgExecuteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.executeMsg.length !== 0) {
      writer.uint32(26).bytes(message.executeMsg);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contract = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.executeMsg = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.coins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteContract {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      executeMsg: isSet(object.executeMsg) ? bytesFromBase64(object.executeMsg) : new Uint8Array(0),
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgExecuteContract): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contract !== undefined && (obj.contract = message.contract);
    message.executeMsg !== undefined &&
      (obj.executeMsg = base64FromBytes(
        message.executeMsg !== undefined ? message.executeMsg : new Uint8Array(0),
      ));
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(base?: I): MsgExecuteContract {
    return MsgExecuteContract.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteContract>, I>>(object: I): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.executeMsg = object.executeMsg ?? new Uint8Array(0);
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgExecuteContractResponse(): MsgExecuteContractResponse {
  return { data: new Uint8Array(0) };
}

export const MsgExecuteContractResponse = {
  encode(message: MsgExecuteContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteContractResponse {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: MsgExecuteContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgExecuteContractResponse>, I>>(base?: I): MsgExecuteContractResponse {
    return MsgExecuteContractResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteContractResponse>, I>>(
    object: I,
  ): MsgExecuteContractResponse {
    const message = createBaseMsgExecuteContractResponse();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgMigrateContract(): MsgMigrateContract {
  return { admin: "", contract: "", newCodeId: Long.UZERO, migrateMsg: new Uint8Array(0) };
}

export const MsgMigrateContract = {
  encode(message: MsgMigrateContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (!message.newCodeId.isZero()) {
      writer.uint32(24).uint64(message.newCodeId);
    }
    if (message.migrateMsg.length !== 0) {
      writer.uint32(34).bytes(message.migrateMsg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContract {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contract = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.newCodeId = reader.uint64() as Long;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.migrateMsg = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMigrateContract {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      newCodeId: isSet(object.newCodeId) ? Long.fromValue(object.newCodeId) : Long.UZERO,
      migrateMsg: isSet(object.migrateMsg) ? bytesFromBase64(object.migrateMsg) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgMigrateContract): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.contract !== undefined && (obj.contract = message.contract);
    message.newCodeId !== undefined && (obj.newCodeId = (message.newCodeId || Long.UZERO).toString());
    message.migrateMsg !== undefined &&
      (obj.migrateMsg = base64FromBytes(
        message.migrateMsg !== undefined ? message.migrateMsg : new Uint8Array(0),
      ));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMigrateContract>, I>>(base?: I): MsgMigrateContract {
    return MsgMigrateContract.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgMigrateContract>, I>>(object: I): MsgMigrateContract {
    const message = createBaseMsgMigrateContract();
    message.admin = object.admin ?? "";
    message.contract = object.contract ?? "";
    message.newCodeId =
      object.newCodeId !== undefined && object.newCodeId !== null
        ? Long.fromValue(object.newCodeId)
        : Long.UZERO;
    message.migrateMsg = object.migrateMsg ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgMigrateContractResponse(): MsgMigrateContractResponse {
  return { data: new Uint8Array(0) };
}

export const MsgMigrateContractResponse = {
  encode(message: MsgMigrateContractResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMigrateContractResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrateContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgMigrateContractResponse {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: MsgMigrateContractResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array(0)));
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMigrateContractResponse>, I>>(base?: I): MsgMigrateContractResponse {
    return MsgMigrateContractResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgMigrateContractResponse>, I>>(
    object: I,
  ): MsgMigrateContractResponse {
    const message = createBaseMsgMigrateContractResponse();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgUpdateContractAdmin(): MsgUpdateContractAdmin {
  return { admin: "", newAdmin: "", contract: "" };
}

export const MsgUpdateContractAdmin = {
  encode(message: MsgUpdateContractAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.newAdmin !== "") {
      writer.uint32(18).string(message.newAdmin);
    }
    if (message.contract !== "") {
      writer.uint32(26).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateContractAdmin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateContractAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.newAdmin = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contract = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateContractAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: MsgUpdateContractAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateContractAdmin>, I>>(base?: I): MsgUpdateContractAdmin {
    return MsgUpdateContractAdmin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateContractAdmin>, I>>(object: I): MsgUpdateContractAdmin {
    const message = createBaseMsgUpdateContractAdmin();
    message.admin = object.admin ?? "";
    message.newAdmin = object.newAdmin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBaseMsgUpdateContractAdminResponse(): MsgUpdateContractAdminResponse {
  return {};
}

export const MsgUpdateContractAdminResponse = {
  encode(_: MsgUpdateContractAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateContractAdminResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateContractAdminResponse();
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

  fromJSON(_: any): MsgUpdateContractAdminResponse {
    return {};
  },

  toJSON(_: MsgUpdateContractAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateContractAdminResponse>, I>>(
    base?: I,
  ): MsgUpdateContractAdminResponse {
    return MsgUpdateContractAdminResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateContractAdminResponse>, I>>(
    _: I,
  ): MsgUpdateContractAdminResponse {
    const message = createBaseMsgUpdateContractAdminResponse();
    return message;
  },
};

function createBaseMsgClearContractAdmin(): MsgClearContractAdmin {
  return { admin: "", contract: "" };
}

export const MsgClearContractAdmin = {
  encode(message: MsgClearContractAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearContractAdmin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearContractAdmin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.contract = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgClearContractAdmin {
    return {
      admin: isSet(object.admin) ? String(object.admin) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
    };
  },

  toJSON(message: MsgClearContractAdmin): unknown {
    const obj: any = {};
    message.admin !== undefined && (obj.admin = message.admin);
    message.contract !== undefined && (obj.contract = message.contract);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClearContractAdmin>, I>>(base?: I): MsgClearContractAdmin {
    return MsgClearContractAdmin.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearContractAdmin>, I>>(object: I): MsgClearContractAdmin {
    const message = createBaseMsgClearContractAdmin();
    message.admin = object.admin ?? "";
    message.contract = object.contract ?? "";
    return message;
  },
};

function createBaseMsgClearContractAdminResponse(): MsgClearContractAdminResponse {
  return {};
}

export const MsgClearContractAdminResponse = {
  encode(_: MsgClearContractAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearContractAdminResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearContractAdminResponse();
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

  fromJSON(_: any): MsgClearContractAdminResponse {
    return {};
  },

  toJSON(_: MsgClearContractAdminResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgClearContractAdminResponse>, I>>(
    base?: I,
  ): MsgClearContractAdminResponse {
    return MsgClearContractAdminResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearContractAdminResponse>, I>>(
    _: I,
  ): MsgClearContractAdminResponse {
    const message = createBaseMsgClearContractAdminResponse();
    return message;
  },
};

/** Msg defines the oracle Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  StoreCode(request: DeepPartial<MsgStoreCode>, metadata?: grpc.Metadata): Promise<MsgStoreCodeResponse>;
  /** MigrateCode to submit new version Wasm code to the system */
  MigrateCode(
    request: DeepPartial<MsgMigrateCode>,
    metadata?: grpc.Metadata,
  ): Promise<MsgMigrateCodeResponse>;
  /** Instantiate creates a new smart contract instance for the given code id. */
  InstantiateContract(
    request: DeepPartial<MsgInstantiateContract>,
    metadata?: grpc.Metadata,
  ): Promise<MsgInstantiateContractResponse>;
  /** Execute submits the given message data to a smart contract */
  ExecuteContract(
    request: DeepPartial<MsgExecuteContract>,
    metadata?: grpc.Metadata,
  ): Promise<MsgExecuteContractResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  MigrateContract(
    request: DeepPartial<MsgMigrateContract>,
    metadata?: grpc.Metadata,
  ): Promise<MsgMigrateContractResponse>;
  /** UpdateContractAdmin sets a new admin for a smart contract */
  UpdateContractAdmin(
    request: DeepPartial<MsgUpdateContractAdmin>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateContractAdminResponse>;
  /** ClearContractAdmin remove admin flag from a smart contract */
  ClearContractAdmin(
    request: DeepPartial<MsgClearContractAdmin>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClearContractAdminResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.StoreCode = this.StoreCode.bind(this);
    this.MigrateCode = this.MigrateCode.bind(this);
    this.InstantiateContract = this.InstantiateContract.bind(this);
    this.ExecuteContract = this.ExecuteContract.bind(this);
    this.MigrateContract = this.MigrateContract.bind(this);
    this.UpdateContractAdmin = this.UpdateContractAdmin.bind(this);
    this.ClearContractAdmin = this.ClearContractAdmin.bind(this);
  }

  StoreCode(request: DeepPartial<MsgStoreCode>, metadata?: grpc.Metadata): Promise<MsgStoreCodeResponse> {
    return this.rpc.unary(MsgStoreCodeDesc, MsgStoreCode.fromPartial(request), metadata);
  }

  MigrateCode(
    request: DeepPartial<MsgMigrateCode>,
    metadata?: grpc.Metadata,
  ): Promise<MsgMigrateCodeResponse> {
    return this.rpc.unary(MsgMigrateCodeDesc, MsgMigrateCode.fromPartial(request), metadata);
  }

  InstantiateContract(
    request: DeepPartial<MsgInstantiateContract>,
    metadata?: grpc.Metadata,
  ): Promise<MsgInstantiateContractResponse> {
    return this.rpc.unary(MsgInstantiateContractDesc, MsgInstantiateContract.fromPartial(request), metadata);
  }

  ExecuteContract(
    request: DeepPartial<MsgExecuteContract>,
    metadata?: grpc.Metadata,
  ): Promise<MsgExecuteContractResponse> {
    return this.rpc.unary(MsgExecuteContractDesc, MsgExecuteContract.fromPartial(request), metadata);
  }

  MigrateContract(
    request: DeepPartial<MsgMigrateContract>,
    metadata?: grpc.Metadata,
  ): Promise<MsgMigrateContractResponse> {
    return this.rpc.unary(MsgMigrateContractDesc, MsgMigrateContract.fromPartial(request), metadata);
  }

  UpdateContractAdmin(
    request: DeepPartial<MsgUpdateContractAdmin>,
    metadata?: grpc.Metadata,
  ): Promise<MsgUpdateContractAdminResponse> {
    return this.rpc.unary(MsgUpdateContractAdminDesc, MsgUpdateContractAdmin.fromPartial(request), metadata);
  }

  ClearContractAdmin(
    request: DeepPartial<MsgClearContractAdmin>,
    metadata?: grpc.Metadata,
  ): Promise<MsgClearContractAdminResponse> {
    return this.rpc.unary(MsgClearContractAdminDesc, MsgClearContractAdmin.fromPartial(request), metadata);
  }
}

export const MsgDesc = { serviceName: "terra.wasm.v1beta1.Msg" };

export const MsgStoreCodeDesc: UnaryMethodDefinitionish = {
  methodName: "StoreCode",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgStoreCode.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgStoreCodeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgMigrateCodeDesc: UnaryMethodDefinitionish = {
  methodName: "MigrateCode",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgMigrateCode.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgMigrateCodeResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgInstantiateContractDesc: UnaryMethodDefinitionish = {
  methodName: "InstantiateContract",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgInstantiateContract.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgInstantiateContractResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgExecuteContractDesc: UnaryMethodDefinitionish = {
  methodName: "ExecuteContract",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgExecuteContract.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgExecuteContractResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgMigrateContractDesc: UnaryMethodDefinitionish = {
  methodName: "MigrateContract",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgMigrateContract.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgMigrateContractResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgUpdateContractAdminDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateContractAdmin",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgUpdateContractAdmin.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgUpdateContractAdminResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const MsgClearContractAdminDesc: UnaryMethodDefinitionish = {
  methodName: "ClearContractAdmin",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgClearContractAdmin.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = MsgClearContractAdminResponse.decode(data);
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
