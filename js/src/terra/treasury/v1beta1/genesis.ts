/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./treasury";

export const protobufPackage = "terra.treasury.v1beta1";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params?: Params;
  taxRate: string;
  rewardWeight: string;
  taxCaps: TaxCap[];
  taxProceeds: Coin[];
  epochInitialIssuance: Coin[];
  epochStates: EpochState[];
}

/** TaxCap is the max tax amount can be charged for the given denom */
export interface TaxCap {
  denom: string;
  taxCap: string;
}

/** EpochState is the record for each epoch state */
export interface EpochState {
  epoch: Long;
  taxReward: string;
  seigniorageReward: string;
  totalStakedLuna: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    taxRate: "",
    rewardWeight: "",
    taxCaps: [],
    taxProceeds: [],
    epochInitialIssuance: [],
    epochStates: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.taxRate !== "") {
      writer.uint32(18).string(message.taxRate);
    }
    if (message.rewardWeight !== "") {
      writer.uint32(26).string(message.rewardWeight);
    }
    for (const v of message.taxCaps) {
      TaxCap.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.taxProceeds) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.epochInitialIssuance) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.epochStates) {
      EpochState.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.taxRate = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewardWeight = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.taxCaps.push(TaxCap.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.taxProceeds.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.epochInitialIssuance.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.epochStates.push(EpochState.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      taxRate: isSet(object.taxRate) ? String(object.taxRate) : "",
      rewardWeight: isSet(object.rewardWeight) ? String(object.rewardWeight) : "",
      taxCaps: Array.isArray(object?.taxCaps) ? object.taxCaps.map((e: any) => TaxCap.fromJSON(e)) : [],
      taxProceeds: Array.isArray(object?.taxProceeds)
        ? object.taxProceeds.map((e: any) => Coin.fromJSON(e))
        : [],
      epochInitialIssuance: Array.isArray(object?.epochInitialIssuance)
        ? object.epochInitialIssuance.map((e: any) => Coin.fromJSON(e))
        : [],
      epochStates: Array.isArray(object?.epochStates)
        ? object.epochStates.map((e: any) => EpochState.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.taxRate !== undefined && (obj.taxRate = message.taxRate);
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    if (message.taxCaps) {
      obj.taxCaps = message.taxCaps.map((e) => (e ? TaxCap.toJSON(e) : undefined));
    } else {
      obj.taxCaps = [];
    }
    if (message.taxProceeds) {
      obj.taxProceeds = message.taxProceeds.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.taxProceeds = [];
    }
    if (message.epochInitialIssuance) {
      obj.epochInitialIssuance = message.epochInitialIssuance.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.epochInitialIssuance = [];
    }
    if (message.epochStates) {
      obj.epochStates = message.epochStates.map((e) => (e ? EpochState.toJSON(e) : undefined));
    } else {
      obj.epochStates = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.taxRate = object.taxRate ?? "";
    message.rewardWeight = object.rewardWeight ?? "";
    message.taxCaps = object.taxCaps?.map((e) => TaxCap.fromPartial(e)) || [];
    message.taxProceeds = object.taxProceeds?.map((e) => Coin.fromPartial(e)) || [];
    message.epochInitialIssuance = object.epochInitialIssuance?.map((e) => Coin.fromPartial(e)) || [];
    message.epochStates = object.epochStates?.map((e) => EpochState.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTaxCap(): TaxCap {
  return { denom: "", taxCap: "" };
}

export const TaxCap = {
  encode(message: TaxCap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.taxCap !== "") {
      writer.uint32(18).string(message.taxCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaxCap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaxCap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.taxCap = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaxCap {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      taxCap: isSet(object.taxCap) ? String(object.taxCap) : "",
    };
  },

  toJSON(message: TaxCap): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.taxCap !== undefined && (obj.taxCap = message.taxCap);
    return obj;
  },

  create<I extends Exact<DeepPartial<TaxCap>, I>>(base?: I): TaxCap {
    return TaxCap.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TaxCap>, I>>(object: I): TaxCap {
    const message = createBaseTaxCap();
    message.denom = object.denom ?? "";
    message.taxCap = object.taxCap ?? "";
    return message;
  },
};

function createBaseEpochState(): EpochState {
  return { epoch: Long.UZERO, taxReward: "", seigniorageReward: "", totalStakedLuna: "" };
}

export const EpochState = {
  encode(message: EpochState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epoch.isZero()) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.taxReward !== "") {
      writer.uint32(18).string(message.taxReward);
    }
    if (message.seigniorageReward !== "") {
      writer.uint32(26).string(message.seigniorageReward);
    }
    if (message.totalStakedLuna !== "") {
      writer.uint32(34).string(message.totalStakedLuna);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.epoch = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.taxReward = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.seigniorageReward = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.totalStakedLuna = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EpochState {
    return {
      epoch: isSet(object.epoch) ? Long.fromValue(object.epoch) : Long.UZERO,
      taxReward: isSet(object.taxReward) ? String(object.taxReward) : "",
      seigniorageReward: isSet(object.seigniorageReward) ? String(object.seigniorageReward) : "",
      totalStakedLuna: isSet(object.totalStakedLuna) ? String(object.totalStakedLuna) : "",
    };
  },

  toJSON(message: EpochState): unknown {
    const obj: any = {};
    message.epoch !== undefined && (obj.epoch = (message.epoch || Long.UZERO).toString());
    message.taxReward !== undefined && (obj.taxReward = message.taxReward);
    message.seigniorageReward !== undefined && (obj.seigniorageReward = message.seigniorageReward);
    message.totalStakedLuna !== undefined && (obj.totalStakedLuna = message.totalStakedLuna);
    return obj;
  },

  create<I extends Exact<DeepPartial<EpochState>, I>>(base?: I): EpochState {
    return EpochState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EpochState>, I>>(object: I): EpochState {
    const message = createBaseEpochState();
    message.epoch =
      object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.UZERO;
    message.taxReward = object.taxReward ?? "";
    message.seigniorageReward = object.seigniorageReward ?? "";
    message.totalStakedLuna = object.totalStakedLuna ?? "";
    return message;
  },
};

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
