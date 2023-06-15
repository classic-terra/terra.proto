/* eslint-disable */
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import {
  DelegationResponse,
  HistoricalInfo,
  Params,
  Pool,
  RedelegationResponse,
  UnbondingDelegation,
  Validator,
} from "./staking";

export const protobufPackage = "cosmos.staking.v1beta1";

/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
  /** status enables to query for validators matching a given status. */
  status: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
  /** validator defines the the validator info. */
  validator?: Validator;
}

/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
  /** delegation_responses defines the delegation info of a delegation. */
  delegationResponse?: DelegationResponse;
}

/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
  /** unbond defines the unbonding information of a delegation. */
  unbond?: UnbondingDelegation;
}

/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegationResponses: DelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
  unbondingResponses: UnbondingDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** src_validator_addr defines the validator address to redelegate from. */
  srcValidatorAddr: string;
  /** dst_validator_addr defines the validator address to redelegate to. */
  dstValidatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
  redelegationResponses: RedelegationResponse[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the the validators' info of a delegator. */
  validators: Validator[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
  /** delegator_addr defines the delegator address to query for. */
  delegatorAddr: string;
  /** validator_addr defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
  /** validator defines the the validator info. */
  validator?: Validator;
}

/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
  /** height defines at which height to query the historical info. */
  height: Long;
}

/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist?: HistoricalInfo;
}

/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}

/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool defines the pool info. */
  pool?: Pool;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

function createBaseQueryValidatorsRequest(): QueryValidatorsRequest {
  return { status: "", pagination: undefined };
}

export const QueryValidatorsRequest = {
  encode(message: QueryValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = reader.string();
          continue;
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

  fromJSON(object: any): QueryValidatorsRequest {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorsRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorsRequest>, I>>(base?: I): QueryValidatorsRequest {
    return QueryValidatorsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorsRequest>, I>>(object: I): QueryValidatorsRequest {
    const message = createBaseQueryValidatorsRequest();
    message.status = object.status ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return { validators: [], pagination: undefined };
}

export const QueryValidatorsResponse = {
  encode(message: QueryValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validators.push(Validator.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorsResponse>, I>>(base?: I): QueryValidatorsResponse {
    return QueryValidatorsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorsResponse>, I>>(object: I): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return { validatorAddr: "" };
}

export const QueryValidatorRequest = {
  encode(message: QueryValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorRequest();
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

  fromJSON(object: any): QueryValidatorRequest {
    return { validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "" };
  },

  toJSON(message: QueryValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorRequest>, I>>(base?: I): QueryValidatorRequest {
    return QueryValidatorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorRequest>, I>>(object: I): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return { validator: undefined };
}

export const QueryValidatorResponse = {
  encode(message: QueryValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = Validator.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryValidatorResponse {
    return { validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined };
  },

  toJSON(message: QueryValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorResponse>, I>>(base?: I): QueryValidatorResponse {
    return QueryValidatorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorResponse>, I>>(object: I): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.validator = (object.validator !== undefined && object.validator !== null)
      ? Validator.fromPartial(object.validator)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorDelegationsRequest(): QueryValidatorDelegationsRequest {
  return { validatorAddr: "", pagination: undefined };
}

export const QueryValidatorDelegationsRequest = {
  encode(message: QueryValidatorDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
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

  fromJSON(object: any): QueryValidatorDelegationsRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorDelegationsRequest>, I>>(
    base?: I,
  ): QueryValidatorDelegationsRequest {
    return QueryValidatorDelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorDelegationsRequest>, I>>(
    object: I,
  ): QueryValidatorDelegationsRequest {
    const message = createBaseQueryValidatorDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorDelegationsResponse(): QueryValidatorDelegationsResponse {
  return { delegationResponses: [], pagination: undefined };
}

export const QueryValidatorDelegationsResponse = {
  encode(message: QueryValidatorDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegationResponses)
        ? object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorDelegationsResponse>, I>>(
    base?: I,
  ): QueryValidatorDelegationsResponse {
    return QueryValidatorDelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorDelegationsResponse>, I>>(
    object: I,
  ): QueryValidatorDelegationsResponse {
    const message = createBaseQueryValidatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map((e) => DelegationResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorUnbondingDelegationsRequest(): QueryValidatorUnbondingDelegationsRequest {
  return { validatorAddr: "", pagination: undefined };
}

export const QueryValidatorUnbondingDelegationsRequest = {
  encode(message: QueryValidatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validatorAddr = reader.string();
          continue;
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

  fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest {
    return {
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsRequest>, I>>(
    base?: I,
  ): QueryValidatorUnbondingDelegationsRequest {
    return QueryValidatorUnbondingDelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsRequest>, I>>(
    object: I,
  ): QueryValidatorUnbondingDelegationsRequest {
    const message = createBaseQueryValidatorUnbondingDelegationsRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorUnbondingDelegationsResponse(): QueryValidatorUnbondingDelegationsResponse {
  return { unbondingResponses: [], pagination: undefined };
}

export const QueryValidatorUnbondingDelegationsResponse = {
  encode(message: QueryValidatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbondingResponses)
        ? object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsResponse>, I>>(
    base?: I,
  ): QueryValidatorUnbondingDelegationsResponse {
    return QueryValidatorUnbondingDelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorUnbondingDelegationsResponse>, I>>(
    object: I,
  ): QueryValidatorUnbondingDelegationsResponse {
    const message = createBaseQueryValidatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegationRequest(): QueryDelegationRequest {
  return { delegatorAddr: "", validatorAddr: "" };
}

export const QueryDelegationRequest = {
  encode(message: QueryDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryDelegationRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    };
  },

  toJSON(message: QueryDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegationRequest>, I>>(base?: I): QueryDelegationRequest {
    return QueryDelegationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationRequest>, I>>(object: I): QueryDelegationRequest {
    const message = createBaseQueryDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryDelegationResponse(): QueryDelegationResponse {
  return { delegationResponse: undefined };
}

export const QueryDelegationResponse = {
  encode(message: QueryDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegationResponse !== undefined) {
      DelegationResponse.encode(message.delegationResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegationResponse = DelegationResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegationResponse {
    return {
      delegationResponse: isSet(object.delegationResponse)
        ? DelegationResponse.fromJSON(object.delegationResponse)
        : undefined,
    };
  },

  toJSON(message: QueryDelegationResponse): unknown {
    const obj: any = {};
    message.delegationResponse !== undefined && (obj.delegationResponse = message.delegationResponse
      ? DelegationResponse.toJSON(message.delegationResponse)
      : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegationResponse>, I>>(base?: I): QueryDelegationResponse {
    return QueryDelegationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegationResponse>, I>>(object: I): QueryDelegationResponse {
    const message = createBaseQueryDelegationResponse();
    message.delegationResponse = (object.delegationResponse !== undefined && object.delegationResponse !== null)
      ? DelegationResponse.fromPartial(object.delegationResponse)
      : undefined;
    return message;
  },
};

function createBaseQueryUnbondingDelegationRequest(): QueryUnbondingDelegationRequest {
  return { delegatorAddr: "", validatorAddr: "" };
}

export const QueryUnbondingDelegationRequest = {
  encode(message: QueryUnbondingDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryUnbondingDelegationRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    };
  },

  toJSON(message: QueryUnbondingDelegationRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryUnbondingDelegationRequest>, I>>(base?: I): QueryUnbondingDelegationRequest {
    return QueryUnbondingDelegationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnbondingDelegationRequest>, I>>(
    object: I,
  ): QueryUnbondingDelegationRequest {
    const message = createBaseQueryUnbondingDelegationRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryUnbondingDelegationResponse(): QueryUnbondingDelegationResponse {
  return { unbond: undefined };
}

export const QueryUnbondingDelegationResponse = {
  encode(message: QueryUnbondingDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.unbond !== undefined) {
      UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unbond = UnbondingDelegation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryUnbondingDelegationResponse {
    return { unbond: isSet(object.unbond) ? UnbondingDelegation.fromJSON(object.unbond) : undefined };
  },

  toJSON(message: QueryUnbondingDelegationResponse): unknown {
    const obj: any = {};
    message.unbond !== undefined &&
      (obj.unbond = message.unbond ? UnbondingDelegation.toJSON(message.unbond) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryUnbondingDelegationResponse>, I>>(
    base?: I,
  ): QueryUnbondingDelegationResponse {
    return QueryUnbondingDelegationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryUnbondingDelegationResponse>, I>>(
    object: I,
  ): QueryUnbondingDelegationResponse {
    const message = createBaseQueryUnbondingDelegationResponse();
    message.unbond = (object.unbond !== undefined && object.unbond !== null)
      ? UnbondingDelegation.fromPartial(object.unbond)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorDelegationsRequest(): QueryDelegatorDelegationsRequest {
  return { delegatorAddr: "", pagination: undefined };
}

export const QueryDelegatorDelegationsRequest = {
  encode(message: QueryDelegatorDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
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

  fromJSON(object: any): QueryDelegatorDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorDelegationsRequest>, I>>(
    base?: I,
  ): QueryDelegatorDelegationsRequest {
    return QueryDelegatorDelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorDelegationsRequest>, I>>(
    object: I,
  ): QueryDelegatorDelegationsRequest {
    const message = createBaseQueryDelegatorDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorDelegationsResponse(): QueryDelegatorDelegationsResponse {
  return { delegationResponses: [], pagination: undefined };
}

export const QueryDelegatorDelegationsResponse = {
  encode(message: QueryDelegatorDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegationResponses) {
      DelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegationResponses.push(DelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorDelegationsResponse {
    return {
      delegationResponses: Array.isArray(object?.delegationResponses)
        ? object.delegationResponses.map((e: any) => DelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegationResponses) {
      obj.delegationResponses = message.delegationResponses.map((e) => e ? DelegationResponse.toJSON(e) : undefined);
    } else {
      obj.delegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorDelegationsResponse>, I>>(
    base?: I,
  ): QueryDelegatorDelegationsResponse {
    return QueryDelegatorDelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorDelegationsResponse>, I>>(
    object: I,
  ): QueryDelegatorDelegationsResponse {
    const message = createBaseQueryDelegatorDelegationsResponse();
    message.delegationResponses = object.delegationResponses?.map((e) => DelegationResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorUnbondingDelegationsRequest(): QueryDelegatorUnbondingDelegationsRequest {
  return { delegatorAddr: "", pagination: undefined };
}

export const QueryDelegatorUnbondingDelegationsRequest = {
  encode(message: QueryDelegatorUnbondingDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
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

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, I>>(
    base?: I,
  ): QueryDelegatorUnbondingDelegationsRequest {
    return QueryDelegatorUnbondingDelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, I>>(
    object: I,
  ): QueryDelegatorUnbondingDelegationsRequest {
    const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorUnbondingDelegationsResponse(): QueryDelegatorUnbondingDelegationsResponse {
  return { unbondingResponses: [], pagination: undefined };
}

export const QueryDelegatorUnbondingDelegationsResponse = {
  encode(message: QueryDelegatorUnbondingDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondingResponses) {
      UnbondingDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unbondingResponses.push(UnbondingDelegation.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse {
    return {
      unbondingResponses: Array.isArray(object?.unbondingResponses)
        ? object.unbondingResponses.map((e: any) => UnbondingDelegation.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown {
    const obj: any = {};
    if (message.unbondingResponses) {
      obj.unbondingResponses = message.unbondingResponses.map((e) => e ? UnbondingDelegation.toJSON(e) : undefined);
    } else {
      obj.unbondingResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsResponse>, I>>(
    base?: I,
  ): QueryDelegatorUnbondingDelegationsResponse {
    return QueryDelegatorUnbondingDelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorUnbondingDelegationsResponse>, I>>(
    object: I,
  ): QueryDelegatorUnbondingDelegationsResponse {
    const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
    message.unbondingResponses = object.unbondingResponses?.map((e) => UnbondingDelegation.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRedelegationsRequest(): QueryRedelegationsRequest {
  return { delegatorAddr: "", srcValidatorAddr: "", dstValidatorAddr: "", pagination: undefined };
}

export const QueryRedelegationsRequest = {
  encode(message: QueryRedelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.srcValidatorAddr !== "") {
      writer.uint32(18).string(message.srcValidatorAddr);
    }
    if (message.dstValidatorAddr !== "") {
      writer.uint32(26).string(message.dstValidatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.srcValidatorAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dstValidatorAddr = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): QueryRedelegationsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      srcValidatorAddr: isSet(object.srcValidatorAddr) ? String(object.srcValidatorAddr) : "",
      dstValidatorAddr: isSet(object.dstValidatorAddr) ? String(object.dstValidatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRedelegationsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.srcValidatorAddr !== undefined && (obj.srcValidatorAddr = message.srcValidatorAddr);
    message.dstValidatorAddr !== undefined && (obj.dstValidatorAddr = message.dstValidatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRedelegationsRequest>, I>>(base?: I): QueryRedelegationsRequest {
    return QueryRedelegationsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRedelegationsRequest>, I>>(object: I): QueryRedelegationsRequest {
    const message = createBaseQueryRedelegationsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.srcValidatorAddr = object.srcValidatorAddr ?? "";
    message.dstValidatorAddr = object.dstValidatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRedelegationsResponse(): QueryRedelegationsResponse {
  return { redelegationResponses: [], pagination: undefined };
}

export const QueryRedelegationsResponse = {
  encode(message: QueryRedelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegationResponses) {
      RedelegationResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.redelegationResponses.push(RedelegationResponse.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryRedelegationsResponse {
    return {
      redelegationResponses: Array.isArray(object?.redelegationResponses)
        ? object.redelegationResponses.map((e: any) => RedelegationResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRedelegationsResponse): unknown {
    const obj: any = {};
    if (message.redelegationResponses) {
      obj.redelegationResponses = message.redelegationResponses.map((e) =>
        e ? RedelegationResponse.toJSON(e) : undefined
      );
    } else {
      obj.redelegationResponses = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRedelegationsResponse>, I>>(base?: I): QueryRedelegationsResponse {
    return QueryRedelegationsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRedelegationsResponse>, I>>(object: I): QueryRedelegationsResponse {
    const message = createBaseQueryRedelegationsResponse();
    message.redelegationResponses = object.redelegationResponses?.map((e) => RedelegationResponse.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return { delegatorAddr: "", pagination: undefined };
}

export const QueryDelegatorValidatorsRequest = {
  encode(message: QueryDelegatorValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
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

  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(base?: I): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsRequest>, I>>(
    object: I,
  ): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return { validators: [], pagination: undefined };
}

export const QueryDelegatorValidatorsResponse = {
  encode(message: QueryDelegatorValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validators.push(Validator.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>>(
    base?: I,
  ): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorsResponse>, I>>(
    object: I,
  ): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDelegatorValidatorRequest(): QueryDelegatorValidatorRequest {
  return { delegatorAddr: "", validatorAddr: "" };
}

export const QueryDelegatorValidatorRequest = {
  encode(message: QueryDelegatorValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddr !== "") {
      writer.uint32(10).string(message.delegatorAddr);
    }
    if (message.validatorAddr !== "") {
      writer.uint32(18).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.delegatorAddr = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): QueryDelegatorValidatorRequest {
    return {
      delegatorAddr: isSet(object.delegatorAddr) ? String(object.delegatorAddr) : "",
      validatorAddr: isSet(object.validatorAddr) ? String(object.validatorAddr) : "",
    };
  },

  toJSON(message: QueryDelegatorValidatorRequest): unknown {
    const obj: any = {};
    message.delegatorAddr !== undefined && (obj.delegatorAddr = message.delegatorAddr);
    message.validatorAddr !== undefined && (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorValidatorRequest>, I>>(base?: I): QueryDelegatorValidatorRequest {
    return QueryDelegatorValidatorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorRequest>, I>>(
    object: I,
  ): QueryDelegatorValidatorRequest {
    const message = createBaseQueryDelegatorValidatorRequest();
    message.delegatorAddr = object.delegatorAddr ?? "";
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};

function createBaseQueryDelegatorValidatorResponse(): QueryDelegatorValidatorResponse {
  return { validator: undefined };
}

export const QueryDelegatorValidatorResponse = {
  encode(message: QueryDelegatorValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== undefined) {
      Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.validator = Validator.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorValidatorResponse {
    return { validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined };
  },

  toJSON(message: QueryDelegatorValidatorResponse): unknown {
    const obj: any = {};
    message.validator !== undefined &&
      (obj.validator = message.validator ? Validator.toJSON(message.validator) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDelegatorValidatorResponse>, I>>(base?: I): QueryDelegatorValidatorResponse {
    return QueryDelegatorValidatorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorValidatorResponse>, I>>(
    object: I,
  ): QueryDelegatorValidatorResponse {
    const message = createBaseQueryDelegatorValidatorResponse();
    message.validator = (object.validator !== undefined && object.validator !== null)
      ? Validator.fromPartial(object.validator)
      : undefined;
    return message;
  },
};

function createBaseQueryHistoricalInfoRequest(): QueryHistoricalInfoRequest {
  return { height: Long.ZERO };
}

export const QueryHistoricalInfoRequest = {
  encode(message: QueryHistoricalInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = reader.int64() as Long;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoRequest {
    return { height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO };
  },

  toJSON(message: QueryHistoricalInfoRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryHistoricalInfoRequest>, I>>(base?: I): QueryHistoricalInfoRequest {
    return QueryHistoricalInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryHistoricalInfoRequest>, I>>(object: I): QueryHistoricalInfoRequest {
    const message = createBaseQueryHistoricalInfoRequest();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    return message;
  },
};

function createBaseQueryHistoricalInfoResponse(): QueryHistoricalInfoResponse {
  return { hist: undefined };
}

export const QueryHistoricalInfoResponse = {
  encode(message: QueryHistoricalInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hist !== undefined) {
      HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryHistoricalInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryHistoricalInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hist = HistoricalInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryHistoricalInfoResponse {
    return { hist: isSet(object.hist) ? HistoricalInfo.fromJSON(object.hist) : undefined };
  },

  toJSON(message: QueryHistoricalInfoResponse): unknown {
    const obj: any = {};
    message.hist !== undefined && (obj.hist = message.hist ? HistoricalInfo.toJSON(message.hist) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryHistoricalInfoResponse>, I>>(base?: I): QueryHistoricalInfoResponse {
    return QueryHistoricalInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryHistoricalInfoResponse>, I>>(object: I): QueryHistoricalInfoResponse {
    const message = createBaseQueryHistoricalInfoResponse();
    message.hist = (object.hist !== undefined && object.hist !== null)
      ? HistoricalInfo.fromPartial(object.hist)
      : undefined;
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}

export const QueryPoolRequest = {
  encode(_: QueryPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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

  fromJSON(_: any): QueryPoolRequest {
    return {};
  },

  toJSON(_: QueryPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(base?: I): QueryPoolRequest {
    return QueryPoolRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(_: I): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { pool: undefined };
}

export const QueryPoolResponse = {
  encode(message: QueryPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pool = Pool.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return { pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(base?: I): QueryPoolResponse {
    return QueryPoolResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(object: I): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool = (object.pool !== undefined && object.pool !== null) ? Pool.fromPartial(object.pool) : undefined;
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
  /** Validators queries all validators that match the given status. */
  Validators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse>;
  /** Validator queries validator info for given validator address. */
  Validator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse>;
  /** ValidatorDelegations queries delegate info for given validator. */
  ValidatorDelegations(
    request: DeepPartial<QueryValidatorDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorDelegationsResponse>;
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  ValidatorUnbondingDelegations(
    request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /** Delegation queries delegate info for given validator delegator pair. */
  Delegation(request: DeepPartial<QueryDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationResponse>;
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  UnbondingDelegation(
    request: DeepPartial<QueryUnbondingDelegationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUnbondingDelegationResponse>;
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  DelegatorDelegations(
    request: DeepPartial<QueryDelegatorDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorDelegationsResponse>;
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  DelegatorUnbondingDelegations(
    request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /** Redelegations queries redelegations of given address. */
  Redelegations(
    request: DeepPartial<QueryRedelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRedelegationsResponse>;
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  DelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorsResponse>;
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  DelegatorValidator(
    request: DeepPartial<QueryDelegatorValidatorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorResponse>;
  /** HistoricalInfo queries the historical info for given height. */
  HistoricalInfo(
    request: DeepPartial<QueryHistoricalInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryHistoricalInfoResponse>;
  /** Pool queries the pool info. */
  Pool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse>;
  /** Parameters queries the staking parameters. */
  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Validators = this.Validators.bind(this);
    this.Validator = this.Validator.bind(this);
    this.ValidatorDelegations = this.ValidatorDelegations.bind(this);
    this.ValidatorUnbondingDelegations = this.ValidatorUnbondingDelegations.bind(this);
    this.Delegation = this.Delegation.bind(this);
    this.UnbondingDelegation = this.UnbondingDelegation.bind(this);
    this.DelegatorDelegations = this.DelegatorDelegations.bind(this);
    this.DelegatorUnbondingDelegations = this.DelegatorUnbondingDelegations.bind(this);
    this.Redelegations = this.Redelegations.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorValidator = this.DelegatorValidator.bind(this);
    this.HistoricalInfo = this.HistoricalInfo.bind(this);
    this.Pool = this.Pool.bind(this);
    this.Params = this.Params.bind(this);
  }

  Validators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse> {
    return this.rpc.unary(QueryValidatorsDesc, QueryValidatorsRequest.fromPartial(request), metadata);
  }

  Validator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse> {
    return this.rpc.unary(QueryValidatorDesc, QueryValidatorRequest.fromPartial(request), metadata);
  }

  ValidatorDelegations(
    request: DeepPartial<QueryValidatorDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorDelegationsResponse> {
    return this.rpc.unary(
      QueryValidatorDelegationsDesc,
      QueryValidatorDelegationsRequest.fromPartial(request),
      metadata,
    );
  }

  ValidatorUnbondingDelegations(
    request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryValidatorUnbondingDelegationsResponse> {
    return this.rpc.unary(
      QueryValidatorUnbondingDelegationsDesc,
      QueryValidatorUnbondingDelegationsRequest.fromPartial(request),
      metadata,
    );
  }

  Delegation(request: DeepPartial<QueryDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationResponse> {
    return this.rpc.unary(QueryDelegationDesc, QueryDelegationRequest.fromPartial(request), metadata);
  }

  UnbondingDelegation(
    request: DeepPartial<QueryUnbondingDelegationRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryUnbondingDelegationResponse> {
    return this.rpc.unary(QueryUnbondingDelegationDesc, QueryUnbondingDelegationRequest.fromPartial(request), metadata);
  }

  DelegatorDelegations(
    request: DeepPartial<QueryDelegatorDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorDelegationsResponse> {
    return this.rpc.unary(
      QueryDelegatorDelegationsDesc,
      QueryDelegatorDelegationsRequest.fromPartial(request),
      metadata,
    );
  }

  DelegatorUnbondingDelegations(
    request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return this.rpc.unary(
      QueryDelegatorUnbondingDelegationsDesc,
      QueryDelegatorUnbondingDelegationsRequest.fromPartial(request),
      metadata,
    );
  }

  Redelegations(
    request: DeepPartial<QueryRedelegationsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryRedelegationsResponse> {
    return this.rpc.unary(QueryRedelegationsDesc, QueryRedelegationsRequest.fromPartial(request), metadata);
  }

  DelegatorValidators(
    request: DeepPartial<QueryDelegatorValidatorsRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorsResponse> {
    return this.rpc.unary(QueryDelegatorValidatorsDesc, QueryDelegatorValidatorsRequest.fromPartial(request), metadata);
  }

  DelegatorValidator(
    request: DeepPartial<QueryDelegatorValidatorRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryDelegatorValidatorResponse> {
    return this.rpc.unary(QueryDelegatorValidatorDesc, QueryDelegatorValidatorRequest.fromPartial(request), metadata);
  }

  HistoricalInfo(
    request: DeepPartial<QueryHistoricalInfoRequest>,
    metadata?: grpc.Metadata,
  ): Promise<QueryHistoricalInfoResponse> {
    return this.rpc.unary(QueryHistoricalInfoDesc, QueryHistoricalInfoRequest.fromPartial(request), metadata);
  }

  Pool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse> {
    return this.rpc.unary(QueryPoolDesc, QueryPoolRequest.fromPartial(request), metadata);
  }

  Params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}

export const QueryDesc = { serviceName: "cosmos.staking.v1beta1.Query" };

export const QueryValidatorsDesc: UnaryMethodDefinitionish = {
  methodName: "Validators",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryValidatorsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryValidatorsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "Validator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryValidatorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryValidatorResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryValidatorDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorDelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryValidatorDelegationsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryValidatorDelegationsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryValidatorUnbondingDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorUnbondingDelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryValidatorUnbondingDelegationsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryValidatorUnbondingDelegationsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "Delegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDelegationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDelegationResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryUnbondingDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "UnbondingDelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryUnbondingDelegationRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryUnbondingDelegationResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDelegatorDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorDelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDelegatorDelegationsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDelegatorDelegationsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDelegatorUnbondingDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorUnbondingDelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDelegatorUnbondingDelegationsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDelegatorUnbondingDelegationsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryRedelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "Redelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryRedelegationsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryRedelegationsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDelegatorValidatorsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorValidators",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDelegatorValidatorsRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDelegatorValidatorsResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryDelegatorValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorValidator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryDelegatorValidatorRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryDelegatorValidatorResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryHistoricalInfoDesc: UnaryMethodDefinitionish = {
  methodName: "HistoricalInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryHistoricalInfoRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryHistoricalInfoResponse.decode(data);
      return {
        ...value,
        toObject() {
          return value;
        },
      };
    },
  } as any,
};

export const QueryPoolDesc: UnaryMethodDefinitionish = {
  methodName: "Pool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return QueryPoolRequest.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      const value = QueryPoolResponse.decode(data);
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
