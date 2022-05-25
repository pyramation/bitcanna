import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Bitcannaid } from "./bitcannaid";
import { Supplychain } from "./supplychain";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryGetBitcannaidRequest {
    id: Long;
}
export interface QueryGetBitcannaidResponse {
    Bitcannaid: Bitcannaid;
}
export interface QueryAllBitcannaidRequest {
    pagination: PageRequest;
}
export interface QueryAllBitcannaidResponse {
    Bitcannaid: Bitcannaid[];
    pagination: PageResponse;
}
export interface QueryGetSupplychainRequest {
    id: Long;
}
export interface QueryGetSupplychainResponse {
    Supplychain: Supplychain;
}
export interface QueryAllSupplychainRequest {
    pagination: PageRequest;
}
export interface QueryAllSupplychainResponse {
    Supplychain: Supplychain[];
    pagination: PageResponse;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {};
    } & {
        params?: {} & {} & Record<Exclude<keyof I["params"], never>, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryGetBitcannaidRequest: {
    encode(message: QueryGetBitcannaidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBitcannaidRequest;
    fromJSON(object: any): QueryGetBitcannaidRequest;
    toJSON(message: QueryGetBitcannaidRequest): unknown;
    fromPartial<I extends {
        id?: any;
    } & {
        id?: any;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryGetBitcannaidRequest;
};
export declare const QueryGetBitcannaidResponse: {
    encode(message: QueryGetBitcannaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBitcannaidResponse;
    fromJSON(object: any): QueryGetBitcannaidResponse;
    toJSON(message: QueryGetBitcannaidResponse): unknown;
    fromPartial<I extends {
        Bitcannaid?: {
            id?: any;
            bcnaid?: string;
            address?: string;
            creator?: string;
        };
    } & {
        Bitcannaid?: {
            id?: any;
            bcnaid?: string;
            address?: string;
            creator?: string;
        } & {
            id?: any;
            bcnaid?: string;
            address?: string;
            creator?: string;
        } & Record<Exclude<keyof I["Bitcannaid"], keyof Bitcannaid>, never>;
    } & Record<Exclude<keyof I, "Bitcannaid">, never>>(object: I): QueryGetBitcannaidResponse;
};
export declare const QueryAllBitcannaidRequest: {
    encode(message: QueryAllBitcannaidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBitcannaidRequest;
    fromJSON(object: any): QueryAllBitcannaidRequest;
    toJSON(message: QueryAllBitcannaidRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryAllBitcannaidRequest;
};
export declare const QueryAllBitcannaidResponse: {
    encode(message: QueryAllBitcannaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBitcannaidResponse;
    fromJSON(object: any): QueryAllBitcannaidResponse;
    toJSON(message: QueryAllBitcannaidResponse): unknown;
    fromPartial<I extends {
        Bitcannaid?: {
            id?: any;
            bcnaid?: string;
            address?: string;
            creator?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        Bitcannaid?: {
            id?: any;
            bcnaid?: string;
            address?: string;
            creator?: string;
        }[] & ({
            id?: any;
            bcnaid?: string;
            address?: string;
            creator?: string;
        } & {
            id?: any;
            bcnaid?: string;
            address?: string;
            creator?: string;
        } & Record<Exclude<keyof I["Bitcannaid"][number], keyof Bitcannaid>, never>)[] & Record<Exclude<keyof I["Bitcannaid"], keyof {
            id?: any;
            bcnaid?: string;
            address?: string;
            creator?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryAllBitcannaidResponse>, never>>(object: I): QueryAllBitcannaidResponse;
};
export declare const QueryGetSupplychainRequest: {
    encode(message: QueryGetSupplychainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSupplychainRequest;
    fromJSON(object: any): QueryGetSupplychainRequest;
    toJSON(message: QueryGetSupplychainRequest): unknown;
    fromPartial<I extends {
        id?: any;
    } & {
        id?: any;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryGetSupplychainRequest;
};
export declare const QueryGetSupplychainResponse: {
    encode(message: QueryGetSupplychainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSupplychainResponse;
    fromJSON(object: any): QueryGetSupplychainResponse;
    toJSON(message: QueryGetSupplychainResponse): unknown;
    fromPartial<I extends {
        Supplychain?: {
            id?: any;
            product?: string;
            info?: string;
            supplyinfo?: string;
            creator?: string;
        };
    } & {
        Supplychain?: {
            id?: any;
            product?: string;
            info?: string;
            supplyinfo?: string;
            creator?: string;
        } & {
            id?: any;
            product?: string;
            info?: string;
            supplyinfo?: string;
            creator?: string;
        } & Record<Exclude<keyof I["Supplychain"], keyof Supplychain>, never>;
    } & Record<Exclude<keyof I, "Supplychain">, never>>(object: I): QueryGetSupplychainResponse;
};
export declare const QueryAllSupplychainRequest: {
    encode(message: QueryAllSupplychainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSupplychainRequest;
    fromJSON(object: any): QueryAllSupplychainRequest;
    toJSON(message: QueryAllSupplychainRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryAllSupplychainRequest;
};
export declare const QueryAllSupplychainResponse: {
    encode(message: QueryAllSupplychainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSupplychainResponse;
    fromJSON(object: any): QueryAllSupplychainResponse;
    toJSON(message: QueryAllSupplychainResponse): unknown;
    fromPartial<I extends {
        Supplychain?: {
            id?: any;
            product?: string;
            info?: string;
            supplyinfo?: string;
            creator?: string;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        Supplychain?: {
            id?: any;
            product?: string;
            info?: string;
            supplyinfo?: string;
            creator?: string;
        }[] & ({
            id?: any;
            product?: string;
            info?: string;
            supplyinfo?: string;
            creator?: string;
        } & {
            id?: any;
            product?: string;
            info?: string;
            supplyinfo?: string;
            creator?: string;
        } & Record<Exclude<keyof I["Supplychain"][number], keyof Supplychain>, never>)[] & Record<Exclude<keyof I["Supplychain"], keyof {
            id?: any;
            product?: string;
            info?: string;
            supplyinfo?: string;
            creator?: string;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryAllSupplychainResponse>, never>>(object: I): QueryAllSupplychainResponse;
};
