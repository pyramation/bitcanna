import * as _0 from "../bcna/bitcannaid";
import * as _1 from "../bcna/genesis";
import * as _2 from "../bcna/params";
import * as _3 from "../bcna/query";
import * as _4 from "../bcna/supplychain";
import * as _5 from "../bcna/tx";
import * as _145 from "../bcna/query.lcd";
export declare namespace BitCannaGlobal {
    namespace bcna {
        const bcna: {
            QueryClient: typeof _145.QueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createBitcannaid(value: _5.MsgCreateBitcannaid): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateBitcannaid(value: _5.MsgUpdateBitcannaid): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    deleteBitcannaid(value: _5.MsgDeleteBitcannaid): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    createSupplychain(value: _5.MsgCreateSupplychain): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    updateSupplychain(value: _5.MsgUpdateSupplychain): {
                        type_url: string;
                        value: Uint8Array;
                    };
                    deleteSupplychain(value: _5.MsgDeleteSupplychain): {
                        type_url: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createBitcannaid(value: _5.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: _5.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: _5.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: _5.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: _5.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: _5.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: _5.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: _5.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: _5.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: _5.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: _5.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: _5.MsgDeleteSupplychain;
                    };
                };
                toJSON: {
                    createBitcannaid(value: _5.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateBitcannaid(value: _5.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteBitcannaid(value: _5.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createSupplychain(value: _5.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateSupplychain(value: _5.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deleteSupplychain(value: _5.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createBitcannaid(value: any): {
                        typeUrl: string;
                        value: _5.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: any): {
                        typeUrl: string;
                        value: _5.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: any): {
                        typeUrl: string;
                        value: _5.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: any): {
                        typeUrl: string;
                        value: _5.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: any): {
                        typeUrl: string;
                        value: _5.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: any): {
                        typeUrl: string;
                        value: _5.MsgDeleteSupplychain;
                    };
                };
                fromPartial: {
                    createBitcannaid(value: _5.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: _5.MsgCreateBitcannaid;
                    };
                    updateBitcannaid(value: _5.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: _5.MsgUpdateBitcannaid;
                    };
                    deleteBitcannaid(value: _5.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: _5.MsgDeleteBitcannaid;
                    };
                    createSupplychain(value: _5.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: _5.MsgCreateSupplychain;
                    };
                    updateSupplychain(value: _5.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: _5.MsgUpdateSupplychain;
                    };
                    deleteSupplychain(value: _5.MsgDeleteSupplychain): {
                        typeUrl: string;
                        value: _5.MsgDeleteSupplychain;
                    };
                };
            };
            AminoConverter: {
                "/BitCannaGlobal.bcna.bcna.MsgCreateBitcannaid": {
                    aminoType: string;
                    toAmino: ({ creator, bcnaid, address }: _5.MsgCreateBitcannaid) => {
                        creator: string;
                        bcnaid: string;
                        address: string;
                    };
                    fromAmino: ({ creator, bcnaid, address }: {
                        creator: string;
                        bcnaid: string;
                        address: string;
                    }) => _5.MsgCreateBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgUpdateBitcannaid": {
                    aminoType: string;
                    toAmino: ({ creator, id, bcnaid, address }: _5.MsgUpdateBitcannaid) => {
                        creator: string;
                        id: string;
                        bcnaid: string;
                        address: string;
                    };
                    fromAmino: ({ creator, id, bcnaid, address }: {
                        creator: string;
                        id: string;
                        bcnaid: string;
                        address: string;
                    }) => _5.MsgUpdateBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgDeleteBitcannaid": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _5.MsgDeleteBitcannaid) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _5.MsgDeleteBitcannaid;
                };
                "/BitCannaGlobal.bcna.bcna.MsgCreateSupplychain": {
                    aminoType: string;
                    toAmino: ({ creator, product, info, supplyinfo }: _5.MsgCreateSupplychain) => {
                        creator: string;
                        product: string;
                        info: string;
                        supplyinfo: string;
                    };
                    fromAmino: ({ creator, product, info, supplyinfo }: {
                        creator: string;
                        product: string;
                        info: string;
                        supplyinfo: string;
                    }) => _5.MsgCreateSupplychain;
                };
                "/BitCannaGlobal.bcna.bcna.MsgUpdateSupplychain": {
                    aminoType: string;
                    toAmino: ({ creator, id, product, info, supplyinfo }: _5.MsgUpdateSupplychain) => {
                        creator: string;
                        id: string;
                        product: string;
                        info: string;
                        supplyinfo: string;
                    };
                    fromAmino: ({ creator, id, product, info, supplyinfo }: {
                        creator: string;
                        id: string;
                        product: string;
                        info: string;
                        supplyinfo: string;
                    }) => _5.MsgUpdateSupplychain;
                };
                "/BitCannaGlobal.bcna.bcna.MsgDeleteSupplychain": {
                    aminoType: string;
                    toAmino: ({ creator, id }: _5.MsgDeleteSupplychain) => {
                        creator: string;
                        id: string;
                    };
                    fromAmino: ({ creator, id }: {
                        creator: string;
                        id: string;
                    }) => _5.MsgDeleteSupplychain;
                };
            };
            MsgCreateBitcannaid: {
                encode(message: _5.MsgCreateBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgCreateBitcannaid;
                fromJSON(object: any): _5.MsgCreateBitcannaid;
                toJSON(message: _5.MsgCreateBitcannaid): unknown;
                fromPartial<I extends {
                    creator?: string;
                    bcnaid?: string;
                    address?: string;
                } & {
                    creator?: string;
                    bcnaid?: string;
                    address?: string;
                } & Record<Exclude<keyof I, keyof _5.MsgCreateBitcannaid>, never>>(object: I): _5.MsgCreateBitcannaid;
            };
            MsgCreateBitcannaidResponse: {
                encode(message: _5.MsgCreateBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgCreateBitcannaidResponse;
                fromJSON(object: any): _5.MsgCreateBitcannaidResponse;
                toJSON(message: _5.MsgCreateBitcannaidResponse): unknown;
                fromPartial<I_1 extends {
                    id?: any;
                } & {
                    id?: any;
                } & Record<Exclude<keyof I_1, "id">, never>>(object: I_1): _5.MsgCreateBitcannaidResponse;
            };
            MsgUpdateBitcannaid: {
                encode(message: _5.MsgUpdateBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateBitcannaid;
                fromJSON(object: any): _5.MsgUpdateBitcannaid;
                toJSON(message: _5.MsgUpdateBitcannaid): unknown;
                fromPartial<I_2 extends {
                    creator?: string;
                    id?: any;
                    bcnaid?: string;
                    address?: string;
                } & {
                    creator?: string;
                    id?: any;
                    bcnaid?: string;
                    address?: string;
                } & Record<Exclude<keyof I_2, keyof _5.MsgUpdateBitcannaid>, never>>(object: I_2): _5.MsgUpdateBitcannaid;
            };
            MsgUpdateBitcannaidResponse: {
                encode(_: _5.MsgUpdateBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateBitcannaidResponse;
                fromJSON(_: any): _5.MsgUpdateBitcannaidResponse;
                toJSON(_: _5.MsgUpdateBitcannaidResponse): unknown;
                fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): _5.MsgUpdateBitcannaidResponse;
            };
            MsgDeleteBitcannaid: {
                encode(message: _5.MsgDeleteBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgDeleteBitcannaid;
                fromJSON(object: any): _5.MsgDeleteBitcannaid;
                toJSON(message: _5.MsgDeleteBitcannaid): unknown;
                fromPartial<I_4 extends {
                    creator?: string;
                    id?: any;
                } & {
                    creator?: string;
                    id?: any;
                } & Record<Exclude<keyof I_4, keyof _5.MsgDeleteBitcannaid>, never>>(object: I_4): _5.MsgDeleteBitcannaid;
            };
            MsgDeleteBitcannaidResponse: {
                encode(_: _5.MsgDeleteBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgDeleteBitcannaidResponse;
                fromJSON(_: any): _5.MsgDeleteBitcannaidResponse;
                toJSON(_: _5.MsgDeleteBitcannaidResponse): unknown;
                fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): _5.MsgDeleteBitcannaidResponse;
            };
            MsgCreateSupplychain: {
                encode(message: _5.MsgCreateSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgCreateSupplychain;
                fromJSON(object: any): _5.MsgCreateSupplychain;
                toJSON(message: _5.MsgCreateSupplychain): unknown;
                fromPartial<I_6 extends {
                    creator?: string;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                } & {
                    creator?: string;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                } & Record<Exclude<keyof I_6, keyof _5.MsgCreateSupplychain>, never>>(object: I_6): _5.MsgCreateSupplychain;
            };
            MsgCreateSupplychainResponse: {
                encode(message: _5.MsgCreateSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgCreateSupplychainResponse;
                fromJSON(object: any): _5.MsgCreateSupplychainResponse;
                toJSON(message: _5.MsgCreateSupplychainResponse): unknown;
                fromPartial<I_7 extends {
                    id?: any;
                } & {
                    id?: any;
                } & Record<Exclude<keyof I_7, "id">, never>>(object: I_7): _5.MsgCreateSupplychainResponse;
            };
            MsgUpdateSupplychain: {
                encode(message: _5.MsgUpdateSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateSupplychain;
                fromJSON(object: any): _5.MsgUpdateSupplychain;
                toJSON(message: _5.MsgUpdateSupplychain): unknown;
                fromPartial<I_8 extends {
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
                } & Record<Exclude<keyof I_8, keyof _5.MsgUpdateSupplychain>, never>>(object: I_8): _5.MsgUpdateSupplychain;
            };
            MsgUpdateSupplychainResponse: {
                encode(_: _5.MsgUpdateSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateSupplychainResponse;
                fromJSON(_: any): _5.MsgUpdateSupplychainResponse;
                toJSON(_: _5.MsgUpdateSupplychainResponse): unknown;
                fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): _5.MsgUpdateSupplychainResponse;
            };
            MsgDeleteSupplychain: {
                encode(message: _5.MsgDeleteSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgDeleteSupplychain;
                fromJSON(object: any): _5.MsgDeleteSupplychain;
                toJSON(message: _5.MsgDeleteSupplychain): unknown;
                fromPartial<I_10 extends {
                    creator?: string;
                    id?: any;
                } & {
                    creator?: string;
                    id?: any;
                } & Record<Exclude<keyof I_10, keyof _5.MsgDeleteSupplychain>, never>>(object: I_10): _5.MsgDeleteSupplychain;
            };
            MsgDeleteSupplychainResponse: {
                encode(_: _5.MsgDeleteSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgDeleteSupplychainResponse;
                fromJSON(_: any): _5.MsgDeleteSupplychainResponse;
                toJSON(_: _5.MsgDeleteSupplychainResponse): unknown;
                fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _5.MsgDeleteSupplychainResponse;
            };
            Supplychain: {
                encode(message: _4.Supplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Supplychain;
                fromJSON(object: any): _4.Supplychain;
                toJSON(message: _4.Supplychain): unknown;
                fromPartial<I_12 extends {
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
                } & Record<Exclude<keyof I_12, keyof _4.Supplychain>, never>>(object: I_12): _4.Supplychain;
            };
            QueryParamsRequest: {
                encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsRequest;
                fromJSON(_: any): _3.QueryParamsRequest;
                toJSON(_: _3.QueryParamsRequest): unknown;
                fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): _3.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsResponse;
                fromJSON(object: any): _3.QueryParamsResponse;
                toJSON(message: _3.QueryParamsResponse): unknown;
                fromPartial<I_14 extends {
                    params?: {};
                } & {
                    params?: {} & {} & Record<Exclude<keyof I_14["params"], never>, never>;
                } & Record<Exclude<keyof I_14, "params">, never>>(object: I_14): _3.QueryParamsResponse;
            };
            QueryGetBitcannaidRequest: {
                encode(message: _3.QueryGetBitcannaidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryGetBitcannaidRequest;
                fromJSON(object: any): _3.QueryGetBitcannaidRequest;
                toJSON(message: _3.QueryGetBitcannaidRequest): unknown;
                fromPartial<I_15 extends {
                    id?: any;
                } & {
                    id?: any;
                } & Record<Exclude<keyof I_15, "id">, never>>(object: I_15): _3.QueryGetBitcannaidRequest;
            };
            QueryGetBitcannaidResponse: {
                encode(message: _3.QueryGetBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryGetBitcannaidResponse;
                fromJSON(object: any): _3.QueryGetBitcannaidResponse;
                toJSON(message: _3.QueryGetBitcannaidResponse): unknown;
                fromPartial<I_16 extends {
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
                    } & Record<Exclude<keyof I_16["Bitcannaid"], keyof _0.Bitcannaid>, never>;
                } & Record<Exclude<keyof I_16, "Bitcannaid">, never>>(object: I_16): _3.QueryGetBitcannaidResponse;
            };
            QueryAllBitcannaidRequest: {
                encode(message: _3.QueryAllBitcannaidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAllBitcannaidRequest;
                fromJSON(object: any): _3.QueryAllBitcannaidRequest;
                toJSON(message: _3.QueryAllBitcannaidRequest): unknown;
                fromPartial<I_17 extends {
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
                    } & Record<Exclude<keyof I_17["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_17, "pagination">, never>>(object: I_17): _3.QueryAllBitcannaidRequest;
            };
            QueryAllBitcannaidResponse: {
                encode(message: _3.QueryAllBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAllBitcannaidResponse;
                fromJSON(object: any): _3.QueryAllBitcannaidResponse;
                toJSON(message: _3.QueryAllBitcannaidResponse): unknown;
                fromPartial<I_18 extends {
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
                    } & Record<Exclude<keyof I_18["Bitcannaid"][number], keyof _0.Bitcannaid>, never>)[] & Record<Exclude<keyof I_18["Bitcannaid"], keyof {
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
                    } & Record<Exclude<keyof I_18["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_18, keyof _3.QueryAllBitcannaidResponse>, never>>(object: I_18): _3.QueryAllBitcannaidResponse;
            };
            QueryGetSupplychainRequest: {
                encode(message: _3.QueryGetSupplychainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryGetSupplychainRequest;
                fromJSON(object: any): _3.QueryGetSupplychainRequest;
                toJSON(message: _3.QueryGetSupplychainRequest): unknown;
                fromPartial<I_19 extends {
                    id?: any;
                } & {
                    id?: any;
                } & Record<Exclude<keyof I_19, "id">, never>>(object: I_19): _3.QueryGetSupplychainRequest;
            };
            QueryGetSupplychainResponse: {
                encode(message: _3.QueryGetSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryGetSupplychainResponse;
                fromJSON(object: any): _3.QueryGetSupplychainResponse;
                toJSON(message: _3.QueryGetSupplychainResponse): unknown;
                fromPartial<I_20 extends {
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
                    } & Record<Exclude<keyof I_20["Supplychain"], keyof _4.Supplychain>, never>;
                } & Record<Exclude<keyof I_20, "Supplychain">, never>>(object: I_20): _3.QueryGetSupplychainResponse;
            };
            QueryAllSupplychainRequest: {
                encode(message: _3.QueryAllSupplychainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAllSupplychainRequest;
                fromJSON(object: any): _3.QueryAllSupplychainRequest;
                toJSON(message: _3.QueryAllSupplychainRequest): unknown;
                fromPartial<I_21 extends {
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
                    } & Record<Exclude<keyof I_21["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageRequest>, never>;
                } & Record<Exclude<keyof I_21, "pagination">, never>>(object: I_21): _3.QueryAllSupplychainRequest;
            };
            QueryAllSupplychainResponse: {
                encode(message: _3.QueryAllSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAllSupplychainResponse;
                fromJSON(object: any): _3.QueryAllSupplychainResponse;
                toJSON(message: _3.QueryAllSupplychainResponse): unknown;
                fromPartial<I_22 extends {
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
                    } & Record<Exclude<keyof I_22["Supplychain"][number], keyof _4.Supplychain>, never>)[] & Record<Exclude<keyof I_22["Supplychain"], keyof {
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
                    } & Record<Exclude<keyof I_22["pagination"], keyof import("../cosmos/base/query/v1beta1/pagination").PageResponse>, never>;
                } & Record<Exclude<keyof I_22, keyof _3.QueryAllSupplychainResponse>, never>>(object: I_22): _3.QueryAllSupplychainResponse;
            };
            Params: {
                encode(_: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromJSON(_: any): _2.Params;
                toJSON(_: _2.Params): unknown;
                fromPartial<I_23 extends {} & {} & Record<Exclude<keyof I_23, never>, never>>(_: I_23): _2.Params;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenesisState;
                fromJSON(object: any): _1.GenesisState;
                toJSON(message: _1.GenesisState): unknown;
                fromPartial<I_24 extends {
                    params?: {};
                    bitcannaidList?: {
                        id?: any;
                        bcnaid?: string;
                        address?: string;
                        creator?: string;
                    }[];
                    bitcannaidCount?: any;
                    supplychainList?: {
                        id?: any;
                        product?: string;
                        info?: string;
                        supplyinfo?: string;
                        creator?: string;
                    }[];
                    supplychainCount?: any;
                } & {
                    params?: {} & {} & Record<Exclude<keyof I_24["params"], never>, never>;
                    bitcannaidList?: {
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
                    } & Record<Exclude<keyof I_24["bitcannaidList"][number], keyof _0.Bitcannaid>, never>)[] & Record<Exclude<keyof I_24["bitcannaidList"], keyof {
                        id?: any;
                        bcnaid?: string;
                        address?: string;
                        creator?: string;
                    }[]>, never>;
                    bitcannaidCount?: any;
                    supplychainList?: {
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
                    } & Record<Exclude<keyof I_24["supplychainList"][number], keyof _4.Supplychain>, never>)[] & Record<Exclude<keyof I_24["supplychainList"], keyof {
                        id?: any;
                        product?: string;
                        info?: string;
                        supplyinfo?: string;
                        creator?: string;
                    }[]>, never>;
                    supplychainCount?: any;
                } & Record<Exclude<keyof I_24, keyof _1.GenesisState>, never>>(object: I_24): _1.GenesisState;
            };
            Bitcannaid: {
                encode(message: _0.Bitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Bitcannaid;
                fromJSON(object: any): _0.Bitcannaid;
                toJSON(message: _0.Bitcannaid): unknown;
                fromPartial<I_25 extends {
                    id?: any;
                    bcnaid?: string;
                    address?: string;
                    creator?: string;
                } & {
                    id?: any;
                    bcnaid?: string;
                    address?: string;
                    creator?: string;
                } & Record<Exclude<keyof I_25, keyof _0.Bitcannaid>, never>>(object: I_25): _0.Bitcannaid;
            };
        };
    }
}
