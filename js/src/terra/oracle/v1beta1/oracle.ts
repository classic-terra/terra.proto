/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "terra.oracle.v1beta1";

/** Params defines the parameters for the oracle module. */
export interface Params {
  votePeriod: Long;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: Long;
  whitelist: Denom[];
  slashFraction: string;
  slashWindow: Long;
  minValidPerWindow: string;
}

/** Denom - the object to hold configurations of each denom */
export interface Denom {
  name: string;
  tobinTax: string;
}

/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submitBlock: Long;
}

/**
 * MsgAggregateExchangeRateVote - struct for voting on
 * the exchange rates of Luna denominated in various Terra assets.
 */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}

/** ExchangeRateTuple - struct to store interpreted exchange rates data to store */
export interface ExchangeRateTuple {
  denom: string;
  exchangeRate: string;
}

function createBaseParams(): Params {
  return {
    votePeriod: Long.UZERO,
    voteThreshold: "",
    rewardBand: "",
    rewardDistributionWindow: Long.UZERO,
    whitelist: [],
    slashFraction: "",
    slashWindow: Long.UZERO,
    minValidPerWindow: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.votePeriod.isZero()) {
      writer.uint32(8).uint64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold);
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(message.rewardBand);
    }
    if (!message.rewardDistributionWindow.isZero()) {
      writer.uint32(32).uint64(message.rewardDistributionWindow);
    }
    for (const v of message.whitelist) {
      Denom.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.slashFraction !== "") {
      writer.uint32(50).string(message.slashFraction);
    }
    if (!message.slashWindow.isZero()) {
      writer.uint32(56).uint64(message.slashWindow);
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(66).string(message.minValidPerWindow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.votePeriod = reader.uint64() as Long;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.voteThreshold = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rewardBand = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.rewardDistributionWindow = reader.uint64() as Long;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.whitelist.push(Denom.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.slashFraction = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.slashWindow = reader.uint64() as Long;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.minValidPerWindow = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      votePeriod: isSet(object.votePeriod) ? Long.fromValue(object.votePeriod) : Long.UZERO,
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      rewardBand: isSet(object.rewardBand) ? String(object.rewardBand) : "",
      rewardDistributionWindow: isSet(object.rewardDistributionWindow)
        ? Long.fromValue(object.rewardDistributionWindow)
        : Long.UZERO,
      whitelist: Array.isArray(object?.whitelist) ? object.whitelist.map((e: any) => Denom.fromJSON(e)) : [],
      slashFraction: isSet(object.slashFraction) ? String(object.slashFraction) : "",
      slashWindow: isSet(object.slashWindow) ? Long.fromValue(object.slashWindow) : Long.UZERO,
      minValidPerWindow: isSet(object.minValidPerWindow) ? String(object.minValidPerWindow) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = (message.votePeriod || Long.UZERO).toString());
    message.voteThreshold !== undefined && (obj.voteThreshold = message.voteThreshold);
    message.rewardBand !== undefined && (obj.rewardBand = message.rewardBand);
    message.rewardDistributionWindow !== undefined &&
      (obj.rewardDistributionWindow = (message.rewardDistributionWindow || Long.UZERO).toString());
    if (message.whitelist) {
      obj.whitelist = message.whitelist.map((e) => e ? Denom.toJSON(e) : undefined);
    } else {
      obj.whitelist = [];
    }
    message.slashFraction !== undefined && (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined && (obj.slashWindow = (message.slashWindow || Long.UZERO).toString());
    message.minValidPerWindow !== undefined && (obj.minValidPerWindow = message.minValidPerWindow);
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.votePeriod = (object.votePeriod !== undefined && object.votePeriod !== null)
      ? Long.fromValue(object.votePeriod)
      : Long.UZERO;
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.rewardDistributionWindow =
      (object.rewardDistributionWindow !== undefined && object.rewardDistributionWindow !== null)
        ? Long.fromValue(object.rewardDistributionWindow)
        : Long.UZERO;
    message.whitelist = object.whitelist?.map((e) => Denom.fromPartial(e)) || [];
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = (object.slashWindow !== undefined && object.slashWindow !== null)
      ? Long.fromValue(object.slashWindow)
      : Long.UZERO;
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    return message;
  },
};

function createBaseDenom(): Denom {
  return { name: "", tobinTax: "" };
}

export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.tobinTax !== "") {
      writer.uint32(18).string(message.tobinTax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
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

  fromJSON(object: any): Denom {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      tobinTax: isSet(object.tobinTax) ? String(object.tobinTax) : "",
    };
  },

  toJSON(message: Denom): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.tobinTax !== undefined && (obj.tobinTax = message.tobinTax);
    return obj;
  },

  create<I extends Exact<DeepPartial<Denom>, I>>(base?: I): Denom {
    return Denom.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Denom>, I>>(object: I): Denom {
    const message = createBaseDenom();
    message.name = object.name ?? "";
    message.tobinTax = object.tobinTax ?? "";
    return message;
  },
};

function createBaseAggregateExchangeRatePrevote(): AggregateExchangeRatePrevote {
  return { hash: "", voter: "", submitBlock: Long.UZERO };
}

export const AggregateExchangeRatePrevote = {
  encode(message: AggregateExchangeRatePrevote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (!message.submitBlock.isZero()) {
      writer.uint32(24).uint64(message.submitBlock);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRatePrevote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRatePrevote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.voter = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.submitBlock = reader.uint64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRatePrevote {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      voter: isSet(object.voter) ? String(object.voter) : "",
      submitBlock: isSet(object.submitBlock) ? Long.fromValue(object.submitBlock) : Long.UZERO,
    };
  },

  toJSON(message: AggregateExchangeRatePrevote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.voter !== undefined && (obj.voter = message.voter);
    message.submitBlock !== undefined && (obj.submitBlock = (message.submitBlock || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<AggregateExchangeRatePrevote>, I>>(base?: I): AggregateExchangeRatePrevote {
    return AggregateExchangeRatePrevote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AggregateExchangeRatePrevote>, I>>(object: I): AggregateExchangeRatePrevote {
    const message = createBaseAggregateExchangeRatePrevote();
    message.hash = object.hash ?? "";
    message.voter = object.voter ?? "";
    message.submitBlock = (object.submitBlock !== undefined && object.submitBlock !== null)
      ? Long.fromValue(object.submitBlock)
      : Long.UZERO;
    return message;
  },
};

function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return { exchangeRateTuples: [], voter: "" };
}

export const AggregateExchangeRateVote = {
  encode(message: AggregateExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.voter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRateVote {
    return {
      exchangeRateTuples: Array.isArray(object?.exchangeRateTuples)
        ? object.exchangeRateTuples.map((e: any) => ExchangeRateTuple.fromJSON(e))
        : [],
      voter: isSet(object.voter) ? String(object.voter) : "",
    };
  },

  toJSON(message: AggregateExchangeRateVote): unknown {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchangeRateTuples = message.exchangeRateTuples.map((e) => e ? ExchangeRateTuple.toJSON(e) : undefined);
    } else {
      obj.exchangeRateTuples = [];
    }
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  create<I extends Exact<DeepPartial<AggregateExchangeRateVote>, I>>(base?: I): AggregateExchangeRateVote {
    return AggregateExchangeRateVote.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AggregateExchangeRateVote>, I>>(object: I): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples = object.exchangeRateTuples?.map((e) => ExchangeRateTuple.fromPartial(e)) || [];
    message.voter = object.voter ?? "";
    return message;
  },
};

function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return { denom: "", exchangeRate: "" };
}

export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateTuple();
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

          message.exchangeRate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateTuple {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "",
    };
  },

  toJSON(message: ExchangeRateTuple): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },

  create<I extends Exact<DeepPartial<ExchangeRateTuple>, I>>(base?: I): ExchangeRateTuple {
    return ExchangeRateTuple.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExchangeRateTuple>, I>>(object: I): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    message.denom = object.denom ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
};

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
