/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, Denom, Params } from "./oracle";

export const protobufPackage = "terra.oracle.v1beta1";

/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}

/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
  /** exchange_rate defines the exchange rate of Luna denominated in various Terra */
  exchangeRate: string;
}

/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequest {
}

/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
  /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
  exchangeRates: DecCoin[];
}

/** QueryTobinTaxRequest is the request type for the Query/TobinTax RPC method. */
export interface QueryTobinTaxRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}

/**
 * QueryTobinTaxResponse is response type for the
 * Query/TobinTax RPC method.
 */
export interface QueryTobinTaxResponse {
  /** tobin_taxe defines the tobin tax of a denom */
  tobinTax: string;
}

/** QueryTobinTaxesRequest is the request type for the Query/TobinTaxes RPC method. */
export interface QueryTobinTaxesRequest {
}

/**
 * QueryTobinTaxesResponse is response type for the
 * Query/TobinTaxes RPC method.
 */
export interface QueryTobinTaxesResponse {
  /** tobin_taxes defines a list of the tobin tax of all whitelisted denoms */
  tobinTaxes: Denom[];
}

/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {
}

/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
  /** actives defines a list of the denomination which oracle prices aggreed upon. */
  actives: string[];
}

/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequest {
}

/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  voteTargets: string[];
}

/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
  /** feeder_addr defines the feeder delegation of a validator */
  feederAddr: string;
}

/** QueryMissCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryMissCounterRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
  /** miss_counter defines the oracle miss counter of a validator */
  missCounter: Long;
}

/** QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method. */
export interface QueryAggregatePrevoteRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
  /** aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period */
  aggregatePrevote?: AggregateExchangeRatePrevote;
}

/** QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method. */
export interface QueryAggregatePrevotesRequest {
}

/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
  /** aggregate_prevotes defines all oracle aggregate prevotes submitted in the current vote period */
  aggregatePrevotes: AggregateExchangeRatePrevote[];
}

/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
  /** aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period */
  aggregateVote?: AggregateExchangeRateVote;
}

/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequest {
}

/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
  /** aggregate_votes defines all oracle aggregate votes submitted in the current vote period */
  aggregateVotes: AggregateExchangeRateVote[];
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return { denom: "" };
}

export const QueryExchangeRateRequest = {
  encode(message: QueryExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryExchangeRateRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryExchangeRateRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExchangeRateRequest>, I>>(base?: I): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRateRequest>, I>>(object: I): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
  return { exchangeRate: "" };
}

export const QueryExchangeRateResponse = {
  encode(message: QueryExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(message.exchangeRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryExchangeRateResponse {
    return { exchangeRate: isSet(object.exchangeRate) ? String(object.exchangeRate) : "" };
  },

  toJSON(message: QueryExchangeRateResponse): unknown {
    const obj: any = {};
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExchangeRateResponse>, I>>(base?: I): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRateResponse>, I>>(object: I): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  },
};

function createBaseQueryExchangeRatesRequest(): QueryExchangeRatesRequest {
  return {};
}

export const QueryExchangeRatesRequest = {
  encode(_: QueryExchangeRatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesRequest();
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

  fromJSON(_: any): QueryExchangeRatesRequest {
    return {};
  },

  toJSON(_: QueryExchangeRatesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExchangeRatesRequest>, I>>(base?: I): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRatesRequest>, I>>(_: I): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest();
    return message;
  },
};

function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return { exchangeRates: [] };
}

export const QueryExchangeRatesResponse = {
  encode(message: QueryExchangeRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRates) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.exchangeRates.push(DecCoin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryExchangeRatesResponse {
    return {
      exchangeRates: Array.isArray(object?.exchangeRates)
        ? object.exchangeRates.map((e: any) => DecCoin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryExchangeRatesResponse): unknown {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchangeRates = message.exchangeRates.map((e) => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.exchangeRates = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExchangeRatesResponse>, I>>(base?: I): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRatesResponse>, I>>(object: I): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.exchangeRates = object.exchangeRates?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTobinTaxRequest(): QueryTobinTaxRequest {
  return { denom: "" };
}

export const QueryTobinTaxRequest = {
  encode(message: QueryTobinTaxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTobinTaxRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTobinTaxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTobinTaxRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryTobinTaxRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTobinTaxRequest>, I>>(base?: I): QueryTobinTaxRequest {
    return QueryTobinTaxRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTobinTaxRequest>, I>>(object: I): QueryTobinTaxRequest {
    const message = createBaseQueryTobinTaxRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryTobinTaxResponse(): QueryTobinTaxResponse {
  return { tobinTax: "" };
}

export const QueryTobinTaxResponse = {
  encode(message: QueryTobinTaxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tobinTax !== "") {
      writer.uint32(10).string(message.tobinTax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTobinTaxResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTobinTaxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryTobinTaxResponse {
    return { tobinTax: isSet(object.tobinTax) ? String(object.tobinTax) : "" };
  },

  toJSON(message: QueryTobinTaxResponse): unknown {
    const obj: any = {};
    message.tobinTax !== undefined && (obj.tobinTax = message.tobinTax);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTobinTaxResponse>, I>>(base?: I): QueryTobinTaxResponse {
    return QueryTobinTaxResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTobinTaxResponse>, I>>(object: I): QueryTobinTaxResponse {
    const message = createBaseQueryTobinTaxResponse();
    message.tobinTax = object.tobinTax ?? "";
    return message;
  },
};

function createBaseQueryTobinTaxesRequest(): QueryTobinTaxesRequest {
  return {};
}

export const QueryTobinTaxesRequest = {
  encode(_: QueryTobinTaxesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTobinTaxesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTobinTaxesRequest();
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

  fromJSON(_: any): QueryTobinTaxesRequest {
    return {};
  },

  toJSON(_: QueryTobinTaxesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTobinTaxesRequest>, I>>(base?: I): QueryTobinTaxesRequest {
    return QueryTobinTaxesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTobinTaxesRequest>, I>>(_: I): QueryTobinTaxesRequest {
    const message = createBaseQueryTobinTaxesRequest();
    return message;
  },
};

function createBaseQueryTobinTaxesResponse(): QueryTobinTaxesResponse {
  return { tobinTaxes: [] };
}

export const QueryTobinTaxesResponse = {
  encode(message: QueryTobinTaxesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tobinTaxes) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTobinTaxesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTobinTaxesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tobinTaxes.push(Denom.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTobinTaxesResponse {
    return {
      tobinTaxes: Array.isArray(object?.tobinTaxes) ? object.tobinTaxes.map((e: any) => Denom.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryTobinTaxesResponse): unknown {
    const obj: any = {};
    if (message.tobinTaxes) {
      obj.tobinTaxes = message.tobinTaxes.map((e) => e ? Denom.toJSON(e) : undefined);
    } else {
      obj.tobinTaxes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTobinTaxesResponse>, I>>(base?: I): QueryTobinTaxesResponse {
    return QueryTobinTaxesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTobinTaxesResponse>, I>>(object: I): QueryTobinTaxesResponse {
    const message = createBaseQueryTobinTaxesResponse();
    message.tobinTaxes = object.tobinTaxes?.map((e) => Denom.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryActivesRequest(): QueryActivesRequest {
  return {};
}

export const QueryActivesRequest = {
  encode(_: QueryActivesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesRequest();
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

  fromJSON(_: any): QueryActivesRequest {
    return {};
  },

  toJSON(_: QueryActivesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryActivesRequest>, I>>(base?: I): QueryActivesRequest {
    return QueryActivesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryActivesRequest>, I>>(_: I): QueryActivesRequest {
    const message = createBaseQueryActivesRequest();
    return message;
  },
};

function createBaseQueryActivesResponse(): QueryActivesResponse {
  return { actives: [] };
}

export const QueryActivesResponse = {
  encode(message: QueryActivesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actives) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.actives.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryActivesResponse {
    return { actives: Array.isArray(object?.actives) ? object.actives.map((e: any) => String(e)) : [] };
  },

  toJSON(message: QueryActivesResponse): unknown {
    const obj: any = {};
    if (message.actives) {
      obj.actives = message.actives.map((e) => e);
    } else {
      obj.actives = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryActivesResponse>, I>>(base?: I): QueryActivesResponse {
    return QueryActivesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryActivesResponse>, I>>(object: I): QueryActivesResponse {
    const message = createBaseQueryActivesResponse();
    message.actives = object.actives?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryVoteTargetsRequest(): QueryVoteTargetsRequest {
  return {};
}

export const QueryVoteTargetsRequest = {
  encode(_: QueryVoteTargetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsRequest();
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

  fromJSON(_: any): QueryVoteTargetsRequest {
    return {};
  },

  toJSON(_: QueryVoteTargetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryVoteTargetsRequest>, I>>(base?: I): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoteTargetsRequest>, I>>(_: I): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest();
    return message;
  },
};

function createBaseQueryVoteTargetsResponse(): QueryVoteTargetsResponse {
  return { voteTargets: [] };
}

export const QueryVoteTargetsResponse = {
  encode(message: QueryVoteTargetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.voteTargets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.voteTargets.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryVoteTargetsResponse {
    return { voteTargets: Array.isArray(object?.voteTargets) ? object.voteTargets.map((e: any) => String(e)) : [] };
  },

  toJSON(message: QueryVoteTargetsResponse): unknown {
    const obj: any = {};
    if (message.voteTargets) {
      obj.voteTargets = message.voteTargets.map((e) => e);
    } else {
      obj.voteTargets = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryVoteTargetsResponse>, I>>(base?: I): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoteTargetsResponse>, I>>(object: I): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse();
    message.voteTargets = object.voteTargets?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryFeederDelegationRequest(): QueryFeederDelegationRequest {
  return { validatorAddr: "" };
}

export const QueryFeederDelegationRequest = {
  encode(message: QueryFeederDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeederDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeederDelegationRequest {
    return { validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "" };
  },

  toJSON(message: QueryFeederDelegationRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFeederDelegationRequest>, I>>(base?: I): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeederDelegationRequest>, I>>(object: I): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return { feederAddr: "" };
}

export const QueryFeederDelegationResponse = {
  encode(message: QueryFeederDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feederAddr !== "") {
      writer.uint32(10).string(message.feederAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeederDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.feederAddr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryFeederDelegationResponse {
    return { feederAddr: isSet(object.feederAddr) ? String(object.feederAddr) : "" };
  },

  toJSON(message: QueryFeederDelegationResponse): unknown {
    const obj: any = {};
    message.feederAddr !== undefined && (obj.feederAddr = message.feederAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryFeederDelegationResponse>, I>>(base?: I): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryFeederDelegationResponse>, I>>(
    object: I,
  ): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    message.feederAddr = object.feederAddr ?? "";
    return message;
  },
};

function createBaseQueryMissCounterRequest(): QueryMissCounterRequest {
  return { validatorAddr: "" };
}

export const QueryMissCounterRequest = {
  encode(message: QueryMissCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMissCounterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMissCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryMissCounterRequest {
    return { validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "" };
  },

  toJSON(message: QueryMissCounterRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryMissCounterRequest>, I>>(base?: I): QueryMissCounterRequest {
    return QueryMissCounterRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryMissCounterRequest>, I>>(object: I): QueryMissCounterRequest {
    const message = createBaseQueryMissCounterRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryMissCounterResponse(): QueryMissCounterResponse {
  return { missCounter: Long.UZERO };
}

export const QueryMissCounterResponse = {
  encode(message: QueryMissCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.missCounter.isZero()) {
      writer.uint32(8).uint64(message.missCounter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMissCounterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMissCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
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

  fromJSON(object: any): QueryMissCounterResponse {
    return { missCounter: isSet(object.missCounter) ? Long.fromValue(object.missCounter) : Long.UZERO };
  },

  toJSON(message: QueryMissCounterResponse): unknown {
    const obj: any = {};
    message.missCounter !== undefined && (obj.missCounter = (message.missCounter || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryMissCounterResponse>, I>>(base?: I): QueryMissCounterResponse {
    return QueryMissCounterResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryMissCounterResponse>, I>>(object: I): QueryMissCounterResponse {
    const message = createBaseQueryMissCounterResponse();
    message.missCounter = (object.missCounter !== undefined && object.missCounter !== null)
      ? Long.fromValue(object.missCounter)
      : Long.UZERO;
    return message;
  },
};

function createBaseQueryAggregatePrevoteRequest(): QueryAggregatePrevoteRequest {
  return { validatorAddr: "" };
}

export const QueryAggregatePrevoteRequest = {
  encode(message: QueryAggregatePrevoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregatePrevoteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAggregatePrevoteRequest {
    return { validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "" };
  },

  toJSON(message: QueryAggregatePrevoteRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAggregatePrevoteRequest>, I>>(base?: I): QueryAggregatePrevoteRequest {
    return QueryAggregatePrevoteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregatePrevoteRequest>, I>>(object: I): QueryAggregatePrevoteRequest {
    const message = createBaseQueryAggregatePrevoteRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryAggregatePrevoteResponse(): QueryAggregatePrevoteResponse {
  return { aggregatePrevote: undefined };
}

export const QueryAggregatePrevoteResponse = {
  encode(message: QueryAggregatePrevoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aggregatePrevote !== undefined) {
      AggregateExchangeRatePrevote.encode(message.aggregatePrevote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregatePrevoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aggregatePrevote = AggregateExchangeRatePrevote.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAggregatePrevoteResponse {
    return {
      aggregatePrevote: isSet(object.aggregatePrevote)
        ? AggregateExchangeRatePrevote.fromJSON(object.aggregatePrevote)
        : undefined,
    };
  },

  toJSON(message: QueryAggregatePrevoteResponse): unknown {
    const obj: any = {};
    message.aggregatePrevote !== undefined && (obj.aggregatePrevote = message.aggregatePrevote
      ? AggregateExchangeRatePrevote.toJSON(message.aggregatePrevote)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAggregatePrevoteResponse>, I>>(base?: I): QueryAggregatePrevoteResponse {
    return QueryAggregatePrevoteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregatePrevoteResponse>, I>>(
    object: I,
  ): QueryAggregatePrevoteResponse {
    const message = createBaseQueryAggregatePrevoteResponse();
    message.aggregatePrevote = (object.aggregatePrevote !== undefined && object.aggregatePrevote !== null)
      ? AggregateExchangeRatePrevote.fromPartial(object.aggregatePrevote)
      : undefined;
    return message;
  },
};

function createBaseQueryAggregatePrevotesRequest(): QueryAggregatePrevotesRequest {
  return {};
}

export const QueryAggregatePrevotesRequest = {
  encode(_: QueryAggregatePrevotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregatePrevotesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevotesRequest();
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

  fromJSON(_: any): QueryAggregatePrevotesRequest {
    return {};
  },

  toJSON(_: QueryAggregatePrevotesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAggregatePrevotesRequest>, I>>(base?: I): QueryAggregatePrevotesRequest {
    return QueryAggregatePrevotesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregatePrevotesRequest>, I>>(_: I): QueryAggregatePrevotesRequest {
    const message = createBaseQueryAggregatePrevotesRequest();
    return message;
  },
};

function createBaseQueryAggregatePrevotesResponse(): QueryAggregatePrevotesResponse {
  return { aggregatePrevotes: [] };
}

export const QueryAggregatePrevotesResponse = {
  encode(message: QueryAggregatePrevotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aggregatePrevotes) {
      AggregateExchangeRatePrevote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregatePrevotesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregatePrevotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aggregatePrevotes.push(AggregateExchangeRatePrevote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAggregatePrevotesResponse {
    return {
      aggregatePrevotes: Array.isArray(object?.aggregatePrevotes)
        ? object.aggregatePrevotes.map((e: any) => AggregateExchangeRatePrevote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAggregatePrevotesResponse): unknown {
    const obj: any = {};
    if (message.aggregatePrevotes) {
      obj.aggregatePrevotes = message.aggregatePrevotes.map((e) =>
        e ? AggregateExchangeRatePrevote.toJSON(e) : undefined
      );
    } else {
      obj.aggregatePrevotes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAggregatePrevotesResponse>, I>>(base?: I): QueryAggregatePrevotesResponse {
    return QueryAggregatePrevotesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregatePrevotesResponse>, I>>(
    object: I,
  ): QueryAggregatePrevotesResponse {
    const message = createBaseQueryAggregatePrevotesResponse();
    message.aggregatePrevotes = object.aggregatePrevotes?.map((e) => AggregateExchangeRatePrevote.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryAggregateVoteRequest(): QueryAggregateVoteRequest {
  return { validatorAddr: "" };
}

export const QueryAggregateVoteRequest = {
  encode(message: QueryAggregateVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVoteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAggregateVoteRequest {
    return { validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "" };
  },

  toJSON(message: QueryAggregateVoteRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAggregateVoteRequest>, I>>(base?: I): QueryAggregateVoteRequest {
    return QueryAggregateVoteRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregateVoteRequest>, I>>(object: I): QueryAggregateVoteRequest {
    const message = createBaseQueryAggregateVoteRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryAggregateVoteResponse(): QueryAggregateVoteResponse {
  return { aggregateVote: undefined };
}

export const QueryAggregateVoteResponse = {
  encode(message: QueryAggregateVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aggregateVote !== undefined) {
      AggregateExchangeRateVote.encode(message.aggregateVote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVoteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aggregateVote = AggregateExchangeRateVote.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAggregateVoteResponse {
    return {
      aggregateVote: isSet(object.aggregateVote) ? AggregateExchangeRateVote.fromJSON(object.aggregateVote) : undefined,
    };
  },

  toJSON(message: QueryAggregateVoteResponse): unknown {
    const obj: any = {};
    message.aggregateVote !== undefined &&
      (obj.aggregateVote = message.aggregateVote ? AggregateExchangeRateVote.toJSON(message.aggregateVote) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAggregateVoteResponse>, I>>(base?: I): QueryAggregateVoteResponse {
    return QueryAggregateVoteResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregateVoteResponse>, I>>(object: I): QueryAggregateVoteResponse {
    const message = createBaseQueryAggregateVoteResponse();
    message.aggregateVote = (object.aggregateVote !== undefined && object.aggregateVote !== null)
      ? AggregateExchangeRateVote.fromPartial(object.aggregateVote)
      : undefined;
    return message;
  },
};

function createBaseQueryAggregateVotesRequest(): QueryAggregateVotesRequest {
  return {};
}

export const QueryAggregateVotesRequest = {
  encode(_: QueryAggregateVotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVotesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVotesRequest();
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

  fromJSON(_: any): QueryAggregateVotesRequest {
    return {};
  },

  toJSON(_: QueryAggregateVotesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAggregateVotesRequest>, I>>(base?: I): QueryAggregateVotesRequest {
    return QueryAggregateVotesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregateVotesRequest>, I>>(_: I): QueryAggregateVotesRequest {
    const message = createBaseQueryAggregateVotesRequest();
    return message;
  },
};

function createBaseQueryAggregateVotesResponse(): QueryAggregateVotesResponse {
  return { aggregateVotes: [] };
}

export const QueryAggregateVotesResponse = {
  encode(message: QueryAggregateVotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.aggregateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVotesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAggregateVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.aggregateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryAggregateVotesResponse {
    return {
      aggregateVotes: Array.isArray(object?.aggregateVotes)
        ? object.aggregateVotes.map((e: any) => AggregateExchangeRateVote.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAggregateVotesResponse): unknown {
    const obj: any = {};
    if (message.aggregateVotes) {
      obj.aggregateVotes = message.aggregateVotes.map((e) => e ? AggregateExchangeRateVote.toJSON(e) : undefined);
    } else {
      obj.aggregateVotes = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAggregateVotesResponse>, I>>(base?: I): QueryAggregateVotesResponse {
    return QueryAggregateVotesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAggregateVotesResponse>, I>>(object: I): QueryAggregateVotesResponse {
    const message = createBaseQueryAggregateVotesResponse();
    message.aggregateVotes = object.aggregateVotes?.map((e) => AggregateExchangeRateVote.fromPartial(e)) || [];
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
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** ExchangeRate returns exchange rate of a denom */
  ExchangeRate(
    request: DeepPartial<QueryExchangeRateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryExchangeRateResponse>;
  /** ExchangeRates returns exchange rates of all denoms */
  ExchangeRates(
    request: DeepPartial<QueryExchangeRatesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryExchangeRatesResponse>;
  /** TobinTax returns tobin tax of a denom */
  TobinTax(request: DeepPartial<QueryTobinTaxRequest>, metadata?: grpc.Metadata): Promise<QueryTobinTaxResponse>;
  /** TobinTaxes returns tobin taxes of all denoms */
  TobinTaxes(request: DeepPartial<QueryTobinTaxesRequest>, metadata?: grpc.Metadata): Promise<QueryTobinTaxesResponse>;
  /** Actives returns all active denoms */
  Actives(request: DeepPartial<QueryActivesRequest>, metadata?: grpc.Metadata): Promise<QueryActivesResponse>;
  /** VoteTargets returns all vote target denoms */
  VoteTargets(
    request: DeepPartial<QueryVoteTargetsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryVoteTargetsResponse>;
  /** FeederDelegation returns feeder delegation of a validator */
  FeederDelegation(
    request: DeepPartial<QueryFeederDelegationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeederDelegationResponse>;
  /** MissCounter returns oracle miss counter of a validator */
  MissCounter(
    request: DeepPartial<QueryMissCounterRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryMissCounterResponse>;
  /** AggregatePrevote returns an aggregate prevote of a validator */
  AggregatePrevote(
    request: DeepPartial<QueryAggregatePrevoteRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAggregatePrevoteResponse>;
  /** AggregatePrevotes returns aggregate prevotes of all validators */
  AggregatePrevotes(
    request: DeepPartial<QueryAggregatePrevotesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAggregatePrevotesResponse>;
  /** AggregateVote returns an aggregate vote of a validator */
  AggregateVote(
    request: DeepPartial<QueryAggregateVoteRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAggregateVoteResponse>;
  /** AggregateVotes returns aggregate votes of all validators */
  AggregateVotes(
    request: DeepPartial<QueryAggregateVotesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAggregateVotesResponse>;
  /** Params queries all parameters. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ExchangeRate = this.ExchangeRate.bind(this);
    this.ExchangeRates = this.ExchangeRates.bind(this);
    this.TobinTax = this.TobinTax.bind(this);
    this.TobinTaxes = this.TobinTaxes.bind(this);
    this.Actives = this.Actives.bind(this);
    this.VoteTargets = this.VoteTargets.bind(this);
    this.FeederDelegation = this.FeederDelegation.bind(this);
    this.MissCounter = this.MissCounter.bind(this);
    this.AggregatePrevote = this.AggregatePrevote.bind(this);
    this.AggregatePrevotes = this.AggregatePrevotes.bind(this);
    this.AggregateVote = this.AggregateVote.bind(this);
    this.AggregateVotes = this.AggregateVotes.bind(this);
    this.Params = this.Params.bind(this);
  }

  ExchangeRate(
    request: DeepPartial<QueryExchangeRateRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryExchangeRateResponse> {
    return this.rpc.unary(QueryExchangeRateDesc, QueryExchangeRateRequest.fromPartial(request), metadata);
  }

  ExchangeRates(
    request: DeepPartial<QueryExchangeRatesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryExchangeRatesResponse> {
    return this.rpc.unary(QueryExchangeRatesDesc, QueryExchangeRatesRequest.fromPartial(request), metadata);
  }

  TobinTax(request: DeepPartial<QueryTobinTaxRequest>, metadata?: grpc.Metadata): Promise<QueryTobinTaxResponse> {
    return this.rpc.unary(QueryTobinTaxDesc, QueryTobinTaxRequest.fromPartial(request), metadata);
  }

  TobinTaxes(request: DeepPartial<QueryTobinTaxesRequest>, metadata?: grpc.Metadata): Promise<QueryTobinTaxesResponse> {
    return this.rpc.unary(QueryTobinTaxesDesc, QueryTobinTaxesRequest.fromPartial(request), metadata);
  }

  Actives(request: DeepPartial<QueryActivesRequest>, metadata?: grpc.Metadata): Promise<QueryActivesResponse> {
    return this.rpc.unary(QueryActivesDesc, QueryActivesRequest.fromPartial(request), metadata);
  }

  VoteTargets(
    request: DeepPartial<QueryVoteTargetsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryVoteTargetsResponse> {
    return this.rpc.unary(QueryVoteTargetsDesc, QueryVoteTargetsRequest.fromPartial(request), metadata);
  }

  FeederDelegation(
    request: DeepPartial<QueryFeederDelegationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryFeederDelegationResponse> {
    return this.rpc.unary(QueryFeederDelegationDesc, QueryFeederDelegationRequest.fromPartial(request), metadata);
  }

  MissCounter(
    request: DeepPartial<QueryMissCounterRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryMissCounterResponse> {
    return this.rpc.unary(QueryMissCounterDesc, QueryMissCounterRequest.fromPartial(request), metadata);
  }

  AggregatePrevote(
    request: DeepPartial<QueryAggregatePrevoteRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAggregatePrevoteResponse> {
    return this.rpc.unary(QueryAggregatePrevoteDesc, QueryAggregatePrevoteRequest.fromPartial(request), metadata);
  }

  AggregatePrevotes(
    request: DeepPartial<QueryAggregatePrevotesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAggregatePrevotesResponse> {
    return this.rpc.unary(QueryAggregatePrevotesDesc, QueryAggregatePrevotesRequest.fromPartial(request), metadata);
  }

  AggregateVote(
    request: DeepPartial<QueryAggregateVoteRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAggregateVoteResponse> {
    return this.rpc.unary(QueryAggregateVoteDesc, QueryAggregateVoteRequest.fromPartial(request), metadata);
  }

  AggregateVotes(
    request: DeepPartial<QueryAggregateVotesRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryAggregateVotesResponse> {
    return this.rpc.unary(QueryAggregateVotesDesc, QueryAggregateVotesRequest.fromPartial(request), metadata);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "terra.oracle.v1beta1.Query" };

export const QueryExchangeRateDesc: UnaryMethodDefinitionish = {
  methodName: "ExchangeRate",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryExchangeRateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryExchangeRateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryExchangeRatesDesc: UnaryMethodDefinitionish = {
  methodName: "ExchangeRates",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryExchangeRatesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryExchangeRatesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryTobinTaxDesc: UnaryMethodDefinitionish = {
  methodName: "TobinTax",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTobinTaxRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTobinTaxResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryTobinTaxesDesc: UnaryMethodDefinitionish = {
  methodName: "TobinTaxes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTobinTaxesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTobinTaxesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryActivesDesc: UnaryMethodDefinitionish = {
  methodName: "Actives",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryActivesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryActivesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryVoteTargetsDesc: UnaryMethodDefinitionish = {
  methodName: "VoteTargets",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryVoteTargetsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryVoteTargetsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryFeederDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "FeederDelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryFeederDelegationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryFeederDelegationResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryMissCounterDesc: UnaryMethodDefinitionish = {
  methodName: "MissCounter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryMissCounterRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryMissCounterResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryAggregatePrevoteDesc: UnaryMethodDefinitionish = {
  methodName: "AggregatePrevote",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAggregatePrevoteRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAggregatePrevoteResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryAggregatePrevotesDesc: UnaryMethodDefinitionish = {
  methodName: "AggregatePrevotes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAggregatePrevotesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAggregatePrevotesResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryAggregateVoteDesc: UnaryMethodDefinitionish = {
  methodName: "AggregateVote",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAggregateVoteRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAggregateVoteResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryAggregateVotesDesc: UnaryMethodDefinitionish = {
  methodName: "AggregateVotes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryAggregateVotesRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryAggregateVotesResponse.decode(data);
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
