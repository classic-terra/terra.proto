/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./treasury";

export const protobufPackage = "terra.treasury.v1beta1";

/** QueryTaxRateRequest is the request type for the Query/TaxRate RPC method. */
export interface QueryTaxRateRequest {
}

/**
 * QueryTaxRateResponse is response type for the
 * Query/TaxRate RPC method.
 */
export interface QueryTaxRateResponse {
  taxRate: string;
}

/** QueryTaxCapRequest is the request type for the Query/TaxCap RPC method. */
export interface QueryTaxCapRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}

/**
 * QueryTaxCapResponse is response type for the
 * Query/TaxCap RPC method.
 */
export interface QueryTaxCapResponse {
  taxCap: string;
}

/** QueryTaxCapsRequest is the request type for the Query/TaxCaps RPC method. */
export interface QueryTaxCapsRequest {
}

/**
 * QueryTaxCapsResponseItem is response item type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponseItem {
  denom: string;
  taxCap: string;
}

/**
 * QueryTaxCapsResponse is response type for the
 * Query/TaxCaps RPC method.
 */
export interface QueryTaxCapsResponse {
  taxCaps: QueryTaxCapsResponseItem[];
}

/** QueryRewardWeightRequest is the request type for the Query/RewardWeight RPC method. */
export interface QueryRewardWeightRequest {
}

/**
 * QueryRewardWeightResponse is response type for the
 * Query/RewardWeight RPC method.
 */
export interface QueryRewardWeightResponse {
  rewardWeight: string;
}

/** QueryTaxProceedsRequest is the request type for the Query/TaxProceeds RPC method. */
export interface QueryTaxProceedsRequest {
}

/**
 * QueryTaxProceedsResponse is response type for the
 * Query/TaxProceeds RPC method.
 */
export interface QueryTaxProceedsResponse {
  taxProceeds: Coin[];
}

/** QuerySeigniorageProceedsRequest is the request type for the Query/SeigniorageProceeds RPC method. */
export interface QuerySeigniorageProceedsRequest {
}

/**
 * QuerySeigniorageProceedsResponse is response type for the
 * Query/SeigniorageProceeds RPC method.
 */
export interface QuerySeigniorageProceedsResponse {
  seigniorageProceeds: string;
}

/** QueryIndicatorsRequest is the request type for the Query/Indicators RPC method. */
export interface QueryIndicatorsRequest {
}

/**
 * QueryIndicatorsResponse is response type for the
 * Query/Indicators RPC method.
 */
export interface QueryIndicatorsResponse {
  trlYear: string;
  trlMonth: string;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}

/** QueryBurnTaxExemptionListRequest is the request type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListRequest {
  pagination?: PageRequest;
}

/** QueryBurnTaxExemptionListResponse is response type for the Query/BurnTaxExemptionList RPC method. */
export interface QueryBurnTaxExemptionListResponse {
  addresses: string[];
  pagination?: PageResponse;
}

function createBaseQueryTaxRateRequest(): QueryTaxRateRequest {
  return {};
}

export const QueryTaxRateRequest = {
  encode(_: QueryTaxRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxRateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxRateRequest();
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

  fromJSON(_: any): QueryTaxRateRequest {
    return {};
  },

  toJSON(_: QueryTaxRateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTaxRateRequest>, I>>(base?: I): QueryTaxRateRequest {
    return QueryTaxRateRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTaxRateRequest>, I>>(_: I): QueryTaxRateRequest {
    const message = createBaseQueryTaxRateRequest();
    return message;
  },
};

function createBaseQueryTaxRateResponse(): QueryTaxRateResponse {
  return { taxRate: "" };
}

export const QueryTaxRateResponse = {
  encode(message: QueryTaxRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taxRate !== "") {
      writer.uint32(10).string(message.taxRate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxRateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taxRate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTaxRateResponse {
    return { taxRate: isSet(object.taxRate) ? String(object.taxRate) : "" };
  },

  toJSON(message: QueryTaxRateResponse): unknown {
    const obj: any = {};
    message.taxRate !== undefined && (obj.taxRate = message.taxRate);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTaxRateResponse>, I>>(base?: I): QueryTaxRateResponse {
    return QueryTaxRateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTaxRateResponse>, I>>(object: I): QueryTaxRateResponse {
    const message = createBaseQueryTaxRateResponse();
    message.taxRate = object.taxRate ?? "";
    return message;
  },
};

function createBaseQueryTaxCapRequest(): QueryTaxCapRequest {
  return { denom: "" };
}

export const QueryTaxCapRequest = {
  encode(message: QueryTaxCapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxCapRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxCapRequest();
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

  fromJSON(object: any): QueryTaxCapRequest {
    return { denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: QueryTaxCapRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTaxCapRequest>, I>>(base?: I): QueryTaxCapRequest {
    return QueryTaxCapRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTaxCapRequest>, I>>(object: I): QueryTaxCapRequest {
    const message = createBaseQueryTaxCapRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryTaxCapResponse(): QueryTaxCapResponse {
  return { taxCap: "" };
}

export const QueryTaxCapResponse = {
  encode(message: QueryTaxCapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taxCap !== "") {
      writer.uint32(10).string(message.taxCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxCapResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxCapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryTaxCapResponse {
    return { taxCap: isSet(object.taxCap) ? String(object.taxCap) : "" };
  },

  toJSON(message: QueryTaxCapResponse): unknown {
    const obj: any = {};
    message.taxCap !== undefined && (obj.taxCap = message.taxCap);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTaxCapResponse>, I>>(base?: I): QueryTaxCapResponse {
    return QueryTaxCapResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTaxCapResponse>, I>>(object: I): QueryTaxCapResponse {
    const message = createBaseQueryTaxCapResponse();
    message.taxCap = object.taxCap ?? "";
    return message;
  },
};

function createBaseQueryTaxCapsRequest(): QueryTaxCapsRequest {
  return {};
}

export const QueryTaxCapsRequest = {
  encode(_: QueryTaxCapsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxCapsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxCapsRequest();
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

  fromJSON(_: any): QueryTaxCapsRequest {
    return {};
  },

  toJSON(_: QueryTaxCapsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTaxCapsRequest>, I>>(base?: I): QueryTaxCapsRequest {
    return QueryTaxCapsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTaxCapsRequest>, I>>(_: I): QueryTaxCapsRequest {
    const message = createBaseQueryTaxCapsRequest();
    return message;
  },
};

function createBaseQueryTaxCapsResponseItem(): QueryTaxCapsResponseItem {
  return { denom: "", taxCap: "" };
}

export const QueryTaxCapsResponseItem = {
  encode(message: QueryTaxCapsResponseItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.taxCap !== "") {
      writer.uint32(18).string(message.taxCap);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxCapsResponseItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxCapsResponseItem();
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

  fromJSON(object: any): QueryTaxCapsResponseItem {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      taxCap: isSet(object.taxCap) ? String(object.taxCap) : "",
    };
  },

  toJSON(message: QueryTaxCapsResponseItem): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.taxCap !== undefined && (obj.taxCap = message.taxCap);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTaxCapsResponseItem>, I>>(base?: I): QueryTaxCapsResponseItem {
    return QueryTaxCapsResponseItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTaxCapsResponseItem>, I>>(object: I): QueryTaxCapsResponseItem {
    const message = createBaseQueryTaxCapsResponseItem();
    message.denom = object.denom ?? "";
    message.taxCap = object.taxCap ?? "";
    return message;
  },
};

function createBaseQueryTaxCapsResponse(): QueryTaxCapsResponse {
  return { taxCaps: [] };
}

export const QueryTaxCapsResponse = {
  encode(message: QueryTaxCapsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.taxCaps) {
      QueryTaxCapsResponseItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxCapsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxCapsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taxCaps.push(QueryTaxCapsResponseItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTaxCapsResponse {
    return {
      taxCaps: Array.isArray(object?.taxCaps)
        ? object.taxCaps.map((e: any) => QueryTaxCapsResponseItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryTaxCapsResponse): unknown {
    const obj: any = {};
    if (message.taxCaps) {
      obj.taxCaps = message.taxCaps.map((e) => e ? QueryTaxCapsResponseItem.toJSON(e) : undefined);
    } else {
      obj.taxCaps = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTaxCapsResponse>, I>>(base?: I): QueryTaxCapsResponse {
    return QueryTaxCapsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTaxCapsResponse>, I>>(object: I): QueryTaxCapsResponse {
    const message = createBaseQueryTaxCapsResponse();
    message.taxCaps = object.taxCaps?.map((e) => QueryTaxCapsResponseItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryRewardWeightRequest(): QueryRewardWeightRequest {
  return {};
}

export const QueryRewardWeightRequest = {
  encode(_: QueryRewardWeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardWeightRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardWeightRequest();
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

  fromJSON(_: any): QueryRewardWeightRequest {
    return {};
  },

  toJSON(_: QueryRewardWeightRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRewardWeightRequest>, I>>(base?: I): QueryRewardWeightRequest {
    return QueryRewardWeightRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRewardWeightRequest>, I>>(_: I): QueryRewardWeightRequest {
    const message = createBaseQueryRewardWeightRequest();
    return message;
  },
};

function createBaseQueryRewardWeightResponse(): QueryRewardWeightResponse {
  return { rewardWeight: "" };
}

export const QueryRewardWeightResponse = {
  encode(message: QueryRewardWeightResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rewardWeight !== "") {
      writer.uint32(10).string(message.rewardWeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRewardWeightResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardWeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rewardWeight = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryRewardWeightResponse {
    return { rewardWeight: isSet(object.rewardWeight) ? String(object.rewardWeight) : "" };
  },

  toJSON(message: QueryRewardWeightResponse): unknown {
    const obj: any = {};
    message.rewardWeight !== undefined && (obj.rewardWeight = message.rewardWeight);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRewardWeightResponse>, I>>(base?: I): QueryRewardWeightResponse {
    return QueryRewardWeightResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRewardWeightResponse>, I>>(object: I): QueryRewardWeightResponse {
    const message = createBaseQueryRewardWeightResponse();
    message.rewardWeight = object.rewardWeight ?? "";
    return message;
  },
};

function createBaseQueryTaxProceedsRequest(): QueryTaxProceedsRequest {
  return {};
}

export const QueryTaxProceedsRequest = {
  encode(_: QueryTaxProceedsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxProceedsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxProceedsRequest();
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

  fromJSON(_: any): QueryTaxProceedsRequest {
    return {};
  },

  toJSON(_: QueryTaxProceedsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTaxProceedsRequest>, I>>(base?: I): QueryTaxProceedsRequest {
    return QueryTaxProceedsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTaxProceedsRequest>, I>>(_: I): QueryTaxProceedsRequest {
    const message = createBaseQueryTaxProceedsRequest();
    return message;
  },
};

function createBaseQueryTaxProceedsResponse(): QueryTaxProceedsResponse {
  return { taxProceeds: [] };
}

export const QueryTaxProceedsResponse = {
  encode(message: QueryTaxProceedsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.taxProceeds) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTaxProceedsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTaxProceedsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taxProceeds.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTaxProceedsResponse {
    return {
      taxProceeds: Array.isArray(object?.taxProceeds) ? object.taxProceeds.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryTaxProceedsResponse): unknown {
    const obj: any = {};
    if (message.taxProceeds) {
      obj.taxProceeds = message.taxProceeds.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.taxProceeds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTaxProceedsResponse>, I>>(base?: I): QueryTaxProceedsResponse {
    return QueryTaxProceedsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryTaxProceedsResponse>, I>>(object: I): QueryTaxProceedsResponse {
    const message = createBaseQueryTaxProceedsResponse();
    message.taxProceeds = object.taxProceeds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQuerySeigniorageProceedsRequest(): QuerySeigniorageProceedsRequest {
  return {};
}

export const QuerySeigniorageProceedsRequest = {
  encode(_: QuerySeigniorageProceedsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySeigniorageProceedsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySeigniorageProceedsRequest();
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

  fromJSON(_: any): QuerySeigniorageProceedsRequest {
    return {};
  },

  toJSON(_: QuerySeigniorageProceedsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySeigniorageProceedsRequest>, I>>(base?: I): QuerySeigniorageProceedsRequest {
    return QuerySeigniorageProceedsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuerySeigniorageProceedsRequest>, I>>(_: I): QuerySeigniorageProceedsRequest {
    const message = createBaseQuerySeigniorageProceedsRequest();
    return message;
  },
};

function createBaseQuerySeigniorageProceedsResponse(): QuerySeigniorageProceedsResponse {
  return { seigniorageProceeds: "" };
}

export const QuerySeigniorageProceedsResponse = {
  encode(message: QuerySeigniorageProceedsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seigniorageProceeds !== "") {
      writer.uint32(10).string(message.seigniorageProceeds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySeigniorageProceedsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySeigniorageProceedsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.seigniorageProceeds = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySeigniorageProceedsResponse {
    return { seigniorageProceeds: isSet(object.seigniorageProceeds) ? String(object.seigniorageProceeds) : "" };
  },

  toJSON(message: QuerySeigniorageProceedsResponse): unknown {
    const obj: any = {};
    message.seigniorageProceeds !== undefined && (obj.seigniorageProceeds = message.seigniorageProceeds);
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySeigniorageProceedsResponse>, I>>(
    base?: I,
  ): QuerySeigniorageProceedsResponse {
    return QuerySeigniorageProceedsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QuerySeigniorageProceedsResponse>, I>>(
    object: I,
  ): QuerySeigniorageProceedsResponse {
    const message = createBaseQuerySeigniorageProceedsResponse();
    message.seigniorageProceeds = object.seigniorageProceeds ?? "";
    return message;
  },
};

function createBaseQueryIndicatorsRequest(): QueryIndicatorsRequest {
  return {};
}

export const QueryIndicatorsRequest = {
  encode(_: QueryIndicatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndicatorsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIndicatorsRequest();
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

  fromJSON(_: any): QueryIndicatorsRequest {
    return {};
  },

  toJSON(_: QueryIndicatorsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryIndicatorsRequest>, I>>(base?: I): QueryIndicatorsRequest {
    return QueryIndicatorsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryIndicatorsRequest>, I>>(_: I): QueryIndicatorsRequest {
    const message = createBaseQueryIndicatorsRequest();
    return message;
  },
};

function createBaseQueryIndicatorsResponse(): QueryIndicatorsResponse {
  return { trlYear: "", trlMonth: "" };
}

export const QueryIndicatorsResponse = {
  encode(message: QueryIndicatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trlYear !== "") {
      writer.uint32(10).string(message.trlYear);
    }
    if (message.trlMonth !== "") {
      writer.uint32(18).string(message.trlMonth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndicatorsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIndicatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trlYear = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.trlMonth = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryIndicatorsResponse {
    return {
      trlYear: isSet(object.trlYear) ? String(object.trlYear) : "",
      trlMonth: isSet(object.trlMonth) ? String(object.trlMonth) : "",
    };
  },

  toJSON(message: QueryIndicatorsResponse): unknown {
    const obj: any = {};
    message.trlYear !== undefined && (obj.trlYear = message.trlYear);
    message.trlMonth !== undefined && (obj.trlMonth = message.trlMonth);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryIndicatorsResponse>, I>>(base?: I): QueryIndicatorsResponse {
    return QueryIndicatorsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryIndicatorsResponse>, I>>(object: I): QueryIndicatorsResponse {
    const message = createBaseQueryIndicatorsResponse();
    message.trlYear = object.trlYear ?? "";
    message.trlMonth = object.trlMonth ?? "";
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

function createBaseQueryBurnTaxExemptionListRequest(): QueryBurnTaxExemptionListRequest {
  return { pagination: undefined };
}

export const QueryBurnTaxExemptionListRequest = {
  encode(message: QueryBurnTaxExemptionListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnTaxExemptionListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnTaxExemptionListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBurnTaxExemptionListRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryBurnTaxExemptionListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBurnTaxExemptionListRequest>, I>>(
    base?: I,
  ): QueryBurnTaxExemptionListRequest {
    return QueryBurnTaxExemptionListRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBurnTaxExemptionListRequest>, I>>(
    object: I,
  ): QueryBurnTaxExemptionListRequest {
    const message = createBaseQueryBurnTaxExemptionListRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryBurnTaxExemptionListResponse(): QueryBurnTaxExemptionListResponse {
  return { addresses: [], pagination: undefined };
}

export const QueryBurnTaxExemptionListResponse = {
  encode(message: QueryBurnTaxExemptionListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBurnTaxExemptionListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBurnTaxExemptionListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.addresses.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.pagination = PageResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBurnTaxExemptionListResponse {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryBurnTaxExemptionListResponse): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBurnTaxExemptionListResponse>, I>>(
    base?: I,
  ): QueryBurnTaxExemptionListResponse {
    return QueryBurnTaxExemptionListResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryBurnTaxExemptionListResponse>, I>>(
    object: I,
  ): QueryBurnTaxExemptionListResponse {
    const message = createBaseQueryBurnTaxExemptionListResponse();
    message.addresses = object.addresses?.map((e) => e) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** TaxRate return the current tax rate */
  TaxRate(request: DeepPartial<QueryTaxRateRequest>, metadata?: grpc.Metadata): Promise<QueryTaxRateResponse>;
  /** TaxCap returns the tax cap of a denom */
  TaxCap(request: DeepPartial<QueryTaxCapRequest>, metadata?: grpc.Metadata): Promise<QueryTaxCapResponse>;
  /** TaxCaps returns the all tax caps */
  TaxCaps(request: DeepPartial<QueryTaxCapsRequest>, metadata?: grpc.Metadata): Promise<QueryTaxCapsResponse>;
  /** RewardWeight return the current reward weight */
  RewardWeight(
    request: DeepPartial<QueryRewardWeightRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRewardWeightResponse>;
  /** SeigniorageProceeds return the current seigniorage proceeds */
  SeigniorageProceeds(
    request: DeepPartial<QuerySeigniorageProceedsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySeigniorageProceedsResponse>;
  /** TaxProceeds return the current tax proceeds */
  TaxProceeds(
    request: DeepPartial<QueryTaxProceedsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTaxProceedsResponse>;
  /** Indicators return the current trl informations */
  Indicators(request: DeepPartial<QueryIndicatorsRequest>, metadata?: grpc.Metadata): Promise<QueryIndicatorsResponse>;
  /** BurnTaxExemptionList returns all registered burn tax exemption addresses */
  BurnTaxExemptionList(
    request: DeepPartial<QueryBurnTaxExemptionListRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryBurnTaxExemptionListResponse>;
  /** Params queries all parameters. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.TaxRate = this.TaxRate.bind(this);
    this.TaxCap = this.TaxCap.bind(this);
    this.TaxCaps = this.TaxCaps.bind(this);
    this.RewardWeight = this.RewardWeight.bind(this);
    this.SeigniorageProceeds = this.SeigniorageProceeds.bind(this);
    this.TaxProceeds = this.TaxProceeds.bind(this);
    this.Indicators = this.Indicators.bind(this);
    this.BurnTaxExemptionList = this.BurnTaxExemptionList.bind(this);
    this.Params = this.Params.bind(this);
  }

  TaxRate(request: DeepPartial<QueryTaxRateRequest>, metadata?: grpc.Metadata): Promise<QueryTaxRateResponse> {
    return this.rpc.unary(QueryTaxRateDesc, QueryTaxRateRequest.fromPartial(request), metadata);
  }

  TaxCap(request: DeepPartial<QueryTaxCapRequest>, metadata?: grpc.Metadata): Promise<QueryTaxCapResponse> {
    return this.rpc.unary(QueryTaxCapDesc, QueryTaxCapRequest.fromPartial(request), metadata);
  }

  TaxCaps(request: DeepPartial<QueryTaxCapsRequest>, metadata?: grpc.Metadata): Promise<QueryTaxCapsResponse> {
    return this.rpc.unary(QueryTaxCapsDesc, QueryTaxCapsRequest.fromPartial(request), metadata);
  }

  RewardWeight(
    request: DeepPartial<QueryRewardWeightRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRewardWeightResponse> {
    return this.rpc.unary(QueryRewardWeightDesc, QueryRewardWeightRequest.fromPartial(request), metadata);
  }

  SeigniorageProceeds(
    request: DeepPartial<QuerySeigniorageProceedsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QuerySeigniorageProceedsResponse> {
    return this.rpc.unary(QuerySeigniorageProceedsDesc, QuerySeigniorageProceedsRequest.fromPartial(request), metadata);
  }

  TaxProceeds(
    request: DeepPartial<QueryTaxProceedsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryTaxProceedsResponse> {
    return this.rpc.unary(QueryTaxProceedsDesc, QueryTaxProceedsRequest.fromPartial(request), metadata);
  }

  Indicators(request: DeepPartial<QueryIndicatorsRequest>, metadata?: grpc.Metadata): Promise<QueryIndicatorsResponse> {
    return this.rpc.unary(QueryIndicatorsDesc, QueryIndicatorsRequest.fromPartial(request), metadata);
  }

  BurnTaxExemptionList(
    request: DeepPartial<QueryBurnTaxExemptionListRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryBurnTaxExemptionListResponse> {
    return this.rpc.unary(
      QueryBurnTaxExemptionListDesc,
      QueryBurnTaxExemptionListRequest.fromPartial(request),
      metadata,
    );
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "terra.treasury.v1beta1.Query" };

export const QueryTaxRateDesc: UnaryMethodDefinitionish = {
  methodName: "TaxRate",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTaxRateRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTaxRateResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryTaxCapDesc: UnaryMethodDefinitionish = {
  methodName: "TaxCap",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTaxCapRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTaxCapResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryTaxCapsDesc: UnaryMethodDefinitionish = {
  methodName: "TaxCaps",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTaxCapsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTaxCapsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryRewardWeightDesc: UnaryMethodDefinitionish = {
  methodName: "RewardWeight",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryRewardWeightRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryRewardWeightResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QuerySeigniorageProceedsDesc: UnaryMethodDefinitionish = {
  methodName: "SeigniorageProceeds",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QuerySeigniorageProceedsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QuerySeigniorageProceedsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryTaxProceedsDesc: UnaryMethodDefinitionish = {
  methodName: "TaxProceeds",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryTaxProceedsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryTaxProceedsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryIndicatorsDesc: UnaryMethodDefinitionish = {
  methodName: "Indicators",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryIndicatorsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryIndicatorsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryBurnTaxExemptionListDesc: UnaryMethodDefinitionish = {
  methodName: "BurnTaxExemptionList",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryBurnTaxExemptionListRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryBurnTaxExemptionListResponse.decode(data);
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
