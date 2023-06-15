/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "terra.treasury.v1beta1";

/** proposal request structure for adding burn tax exemption address(es) */
export interface AddBurnTaxExemptionAddressProposal {
  title: string;
  description: string;
  addresses: string[];
}

/** proposal request structure for removing burn tax exemption address(es) */
export interface RemoveBurnTaxExemptionAddressProposal {
  title: string;
  description: string;
  addresses: string[];
}

function createBaseAddBurnTaxExemptionAddressProposal(): AddBurnTaxExemptionAddressProposal {
  return { title: "", description: "", addresses: [] };
}

export const AddBurnTaxExemptionAddressProposal = {
  encode(message: AddBurnTaxExemptionAddressProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.addresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddBurnTaxExemptionAddressProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddBurnTaxExemptionAddressProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.addresses.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddBurnTaxExemptionAddressProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: AddBurnTaxExemptionAddressProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddBurnTaxExemptionAddressProposal>, I>>(
    base?: I,
  ): AddBurnTaxExemptionAddressProposal {
    return AddBurnTaxExemptionAddressProposal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddBurnTaxExemptionAddressProposal>, I>>(
    object: I,
  ): AddBurnTaxExemptionAddressProposal {
    const message = createBaseAddBurnTaxExemptionAddressProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};

function createBaseRemoveBurnTaxExemptionAddressProposal(): RemoveBurnTaxExemptionAddressProposal {
  return { title: "", description: "", addresses: [] };
}

export const RemoveBurnTaxExemptionAddressProposal = {
  encode(message: RemoveBurnTaxExemptionAddressProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.addresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemoveBurnTaxExemptionAddressProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemoveBurnTaxExemptionAddressProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.addresses.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RemoveBurnTaxExemptionAddressProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: RemoveBurnTaxExemptionAddressProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RemoveBurnTaxExemptionAddressProposal>, I>>(
    base?: I,
  ): RemoveBurnTaxExemptionAddressProposal {
    return RemoveBurnTaxExemptionAddressProposal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RemoveBurnTaxExemptionAddressProposal>, I>>(
    object: I,
  ): RemoveBurnTaxExemptionAddressProposal {
    const message = createBaseRemoveBurnTaxExemptionAddressProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
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
