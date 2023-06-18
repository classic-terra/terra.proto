/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, ExchangeRateTuple, Params } from "./oracle";

export const protobufPackage = "terra.oracle.v1beta1";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params?: Params;
  feederDelegations: FeederDelegation[];
  exchangeRates: ExchangeRateTuple[];
  missCounters: MissCounter[];
  aggregateExchangeRatePrevotes: AggregateExchangeRatePrevote[];
  aggregateExchangeRateVotes: AggregateExchangeRateVote[];
  tobinTaxes: TobinTax[];
}

/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 */
export interface FeederDelegation {
  feederAddress: string;
  validatorAddress: string;
}

/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 */
export interface MissCounter {
  validatorAddress: string;
  missCounter: Long;
}

/**
 * TobinTax defines an denom and tobin_tax pair used in
 * oracle module's genesis state
 */
export interface TobinTax {
  denom: string;
  tobinTax: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    feederDelegations: [],
    exchangeRates: [],
    missCounters: [],
    aggregateExchangeRatePrevotes: [],
    aggregateExchangeRateVotes: [],
    tobinTaxes: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feederDelegations) {
      FeederDelegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.exchangeRates) {
      ExchangeRateTuple.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.missCounters) {
      MissCounter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.aggregateExchangeRatePrevotes) {
      AggregateExchangeRatePrevote.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.aggregateExchangeRateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.tobinTaxes) {
      TobinTax.encode(v!, writer.uint32(58).fork()).ldelim();
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

          message.feederDelegations.push(FeederDelegation.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.exchangeRates.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.missCounters.push(MissCounter.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.aggregateExchangeRatePrevotes.push(
            AggregateExchangeRatePrevote.decode(reader, reader.uint32()),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.aggregateExchangeRateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.tobinTaxes.push(TobinTax.decode(reader, reader.uint32()));
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
      feederDelegations: Array.isArray(object?.feederDelegations)
        ? object.feederDelegations.map((e: any) => FeederDelegation.fromJSON(e))
        : [],
      exchangeRates: Array.isArray(object?.exchangeRates)
        ? object.exchangeRates.map((e: any) => ExchangeRateTuple.fromJSON(e))
        : [],
      missCounters: Array.isArray(object?.missCounters)
        ? object.missCounters.map((e: any) => MissCounter.fromJSON(e))
        : [],
      aggregateExchangeRatePrevotes: Array.isArray(object?.aggregateExchangeRatePrevotes)
        ? object.aggregateExchangeRatePrevotes.map((e: any) => AggregateExchangeRatePrevote.fromJSON(e))
        : [],
      aggregateExchangeRateVotes: Array.isArray(object?.aggregateExchangeRateVotes)
        ? object.aggregateExchangeRateVotes.map((e: any) => AggregateExchangeRateVote.fromJSON(e))
        : [],
      tobinTaxes: Array.isArray(object?.tobinTaxes)
        ? object.tobinTaxes.map((e: any) => TobinTax.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.feederDelegations) {
      obj.feederDelegations = message.feederDelegations.map((e) =>
        e ? FeederDelegation.toJSON(e) : undefined,
      );
    } else {
      obj.feederDelegations = [];
    }
    if (message.exchangeRates) {
      obj.exchangeRates = message.exchangeRates.map((e) => (e ? ExchangeRateTuple.toJSON(e) : undefined));
    } else {
      obj.exchangeRates = [];
    }
    if (message.missCounters) {
      obj.missCounters = message.missCounters.map((e) => (e ? MissCounter.toJSON(e) : undefined));
    } else {
      obj.missCounters = [];
    }
    if (message.aggregateExchangeRatePrevotes) {
      obj.aggregateExchangeRatePrevotes = message.aggregateExchangeRatePrevotes.map((e) =>
        e ? AggregateExchangeRatePrevote.toJSON(e) : undefined,
      );
    } else {
      obj.aggregateExchangeRatePrevotes = [];
    }
    if (message.aggregateExchangeRateVotes) {
      obj.aggregateExchangeRateVotes = message.aggregateExchangeRateVotes.map((e) =>
        e ? AggregateExchangeRateVote.toJSON(e) : undefined,
      );
    } else {
      obj.aggregateExchangeRateVotes = [];
    }
    if (message.tobinTaxes) {
      obj.tobinTaxes = message.tobinTaxes.map((e) => (e ? TobinTax.toJSON(e) : undefined));
    } else {
      obj.tobinTaxes = [];
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
    message.feederDelegations = object.feederDelegations?.map((e) => FeederDelegation.fromPartial(e)) || [];
    message.exchangeRates = object.exchangeRates?.map((e) => ExchangeRateTuple.fromPartial(e)) || [];
    message.missCounters = object.missCounters?.map((e) => MissCounter.fromPartial(e)) || [];
    message.aggregateExchangeRatePrevotes =
      object.aggregateExchangeRatePrevotes?.map((e) => AggregateExchangeRatePrevote.fromPartial(e)) || [];
    message.aggregateExchangeRateVotes =
      object.aggregateExchangeRateVotes?.map((e) => AggregateExchangeRateVote.fromPartial(e)) || [];
    message.tobinTaxes = object.tobinTaxes?.map((e) => TobinTax.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFeederDelegation(): FeederDelegation {
  return { feederAddress: "", validatorAddress: "" };
}

export const FeederDelegation = {
  encode(message: FeederDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feederAddress !== "") {
      writer.uint32(10).string(message.feederAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeederDelegation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeederDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feederAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FeederDelegation {
    return {
      feederAddress: isSet(object.feederAddress) ? String(object.feederAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
    };
  },

  toJSON(message: FeederDelegation): unknown {
    const obj: any = {};
    message.feederAddress !== undefined && (obj.feederAddress = message.feederAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<FeederDelegation>, I>>(base?: I): FeederDelegation {
    return FeederDelegation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FeederDelegation>, I>>(object: I): FeederDelegation {
    const message = createBaseFeederDelegation();
    message.feederAddress = object.feederAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseMissCounter(): MissCounter {
  return { validatorAddress: "", missCounter: Long.UZERO };
}

export const MissCounter = {
  encode(message: MissCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (!message.missCounter.isZero()) {
      writer.uint32(16).uint64(message.missCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MissCounter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddress = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.missCounter = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MissCounter {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      missCounter: isSet(object.missCounter) ? Long.fromValue(object.missCounter) : Long.UZERO,
    };
  },

  toJSON(message: MissCounter): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.missCounter !== undefined && (obj.missCounter = (message.missCounter || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<MissCounter>, I>>(base?: I): MissCounter {
    return MissCounter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MissCounter>, I>>(object: I): MissCounter {
    const message = createBaseMissCounter();
    message.validatorAddress = object.validatorAddress ?? "";
    message.missCounter =
      object.missCounter !== undefined && object.missCounter !== null
        ? Long.fromValue(object.missCounter)
        : Long.UZERO;
    return message;
  },
};

function createBaseTobinTax(): TobinTax {
  return { denom: "", tobinTax: "" };
}

export const TobinTax = {
  encode(message: TobinTax, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.tobinTax !== "") {
      writer.uint32(18).string(message.tobinTax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TobinTax {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTobinTax();
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

          message.tobinTax = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TobinTax {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      tobinTax: isSet(object.tobinTax) ? String(object.tobinTax) : "",
    };
  },

  toJSON(message: TobinTax): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.tobinTax !== undefined && (obj.tobinTax = message.tobinTax);
    return obj;
  },

  create<I extends Exact<DeepPartial<TobinTax>, I>>(base?: I): TobinTax {
    return TobinTax.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TobinTax>, I>>(object: I): TobinTax {
    const message = createBaseTobinTax();
    message.denom = object.denom ?? "";
    message.tobinTax = object.tobinTax ?? "";
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
