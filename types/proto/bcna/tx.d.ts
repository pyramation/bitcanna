import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface MsgCreateBitcannaid {
    creator: string;
    bcnaid: string;
    address: string;
}
export interface MsgCreateBitcannaidResponse {
    id: Long;
}
export interface MsgUpdateBitcannaid {
    creator: string;
    id: Long;
    bcnaid: string;
    address: string;
}
export interface MsgUpdateBitcannaidResponse {
}
export interface MsgDeleteBitcannaid {
    creator: string;
    id: Long;
}
export interface MsgDeleteBitcannaidResponse {
}
export interface MsgCreateSupplychain {
    creator: string;
    product: string;
    info: string;
    supplyinfo: string;
}
export interface MsgCreateSupplychainResponse {
    id: Long;
}
export interface MsgUpdateSupplychain {
    creator: string;
    id: Long;
    product: string;
    info: string;
    supplyinfo: string;
}
export interface MsgUpdateSupplychainResponse {
}
export interface MsgDeleteSupplychain {
    creator: string;
    id: Long;
}
export interface MsgDeleteSupplychainResponse {
}
export declare const MsgCreateBitcannaid: {
    encode(message: MsgCreateBitcannaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBitcannaid;
    fromJSON(object: any): MsgCreateBitcannaid;
    toJSON(message: MsgCreateBitcannaid): unknown;
    fromPartial<I extends {
        creator?: string;
        bcnaid?: string;
        address?: string;
    } & {
        creator?: string;
        bcnaid?: string;
        address?: string;
    } & Record<Exclude<keyof I, keyof MsgCreateBitcannaid>, never>>(object: I): MsgCreateBitcannaid;
};
export declare const MsgCreateBitcannaidResponse: {
    encode(message: MsgCreateBitcannaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBitcannaidResponse;
    fromJSON(object: any): MsgCreateBitcannaidResponse;
    toJSON(message: MsgCreateBitcannaidResponse): unknown;
    fromPartial<I extends {
        id?: any;
    } & {
        id?: any;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): MsgCreateBitcannaidResponse;
};
export declare const MsgUpdateBitcannaid: {
    encode(message: MsgUpdateBitcannaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBitcannaid;
    fromJSON(object: any): MsgUpdateBitcannaid;
    toJSON(message: MsgUpdateBitcannaid): unknown;
    fromPartial<I extends {
        creator?: string;
        id?: any;
        bcnaid?: string;
        address?: string;
    } & {
        creator?: string;
        id?: any;
        bcnaid?: string;
        address?: string;
    } & Record<Exclude<keyof I, keyof MsgUpdateBitcannaid>, never>>(object: I): MsgUpdateBitcannaid;
};
export declare const MsgUpdateBitcannaidResponse: {
    encode(_: MsgUpdateBitcannaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBitcannaidResponse;
    fromJSON(_: any): MsgUpdateBitcannaidResponse;
    toJSON(_: MsgUpdateBitcannaidResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateBitcannaidResponse;
};
export declare const MsgDeleteBitcannaid: {
    encode(message: MsgDeleteBitcannaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBitcannaid;
    fromJSON(object: any): MsgDeleteBitcannaid;
    toJSON(message: MsgDeleteBitcannaid): unknown;
    fromPartial<I extends {
        creator?: string;
        id?: any;
    } & {
        creator?: string;
        id?: any;
    } & Record<Exclude<keyof I, keyof MsgDeleteBitcannaid>, never>>(object: I): MsgDeleteBitcannaid;
};
export declare const MsgDeleteBitcannaidResponse: {
    encode(_: MsgDeleteBitcannaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBitcannaidResponse;
    fromJSON(_: any): MsgDeleteBitcannaidResponse;
    toJSON(_: MsgDeleteBitcannaidResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDeleteBitcannaidResponse;
};
export declare const MsgCreateSupplychain: {
    encode(message: MsgCreateSupplychain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSupplychain;
    fromJSON(object: any): MsgCreateSupplychain;
    toJSON(message: MsgCreateSupplychain): unknown;
    fromPartial<I extends {
        creator?: string;
        product?: string;
        info?: string;
        supplyinfo?: string;
    } & {
        creator?: string;
        product?: string;
        info?: string;
        supplyinfo?: string;
    } & Record<Exclude<keyof I, keyof MsgCreateSupplychain>, never>>(object: I): MsgCreateSupplychain;
};
export declare const MsgCreateSupplychainResponse: {
    encode(message: MsgCreateSupplychainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSupplychainResponse;
    fromJSON(object: any): MsgCreateSupplychainResponse;
    toJSON(message: MsgCreateSupplychainResponse): unknown;
    fromPartial<I extends {
        id?: any;
    } & {
        id?: any;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): MsgCreateSupplychainResponse;
};
export declare const MsgUpdateSupplychain: {
    encode(message: MsgUpdateSupplychain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSupplychain;
    fromJSON(object: any): MsgUpdateSupplychain;
    toJSON(message: MsgUpdateSupplychain): unknown;
    fromPartial<I extends {
        creator?: string;
        id?: any;
        product?: string;
        info?: string;
        supplyinfo?: string;
    } & {
        creator?: string;
        id?: any;
        product?: string;
        info?: string;
        supplyinfo?: string;
    } & Record<Exclude<keyof I, keyof MsgUpdateSupplychain>, never>>(object: I): MsgUpdateSupplychain;
};
export declare const MsgUpdateSupplychainResponse: {
    encode(_: MsgUpdateSupplychainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSupplychainResponse;
    fromJSON(_: any): MsgUpdateSupplychainResponse;
    toJSON(_: MsgUpdateSupplychainResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateSupplychainResponse;
};
export declare const MsgDeleteSupplychain: {
    encode(message: MsgDeleteSupplychain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSupplychain;
    fromJSON(object: any): MsgDeleteSupplychain;
    toJSON(message: MsgDeleteSupplychain): unknown;
    fromPartial<I extends {
        creator?: string;
        id?: any;
    } & {
        creator?: string;
        id?: any;
    } & Record<Exclude<keyof I, keyof MsgDeleteSupplychain>, never>>(object: I): MsgDeleteSupplychain;
};
export declare const MsgDeleteSupplychainResponse: {
    encode(_: MsgDeleteSupplychainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSupplychainResponse;
    fromJSON(_: any): MsgDeleteSupplychainResponse;
    toJSON(_: MsgDeleteSupplychainResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDeleteSupplychainResponse;
};
