import * as _0 from "../bcna/bitcannaid";
import * as _1 from "../bcna/genesis";
import * as _2 from "../bcna/params";
import * as _3 from "../bcna/query";
import * as _4 from "../bcna/supplychain";
import * as _5 from "../bcna/tx";
import * as _148 from "../bcna/query.lcd";
import * as _149 from "../bcna/query.rpc.query";
import * as _150 from "../bcna/tx.rpc.msg";
export declare namespace BitCannaGlobal {
    namespace bcna {
        const bcna: {
            MsgClientImpl: typeof _150.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createBitcannaid(value: _5.MsgCreateBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBitcannaid(value: _5.MsgUpdateBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteBitcannaid(value: _5.MsgDeleteBitcannaid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createSupplychain(value: _5.MsgCreateSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateSupplychain(value: _5.MsgUpdateSupplychain): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteSupplychain(value: _5.MsgDeleteSupplychain): {
                        typeUrl: string;
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
                fromPartial(object: {
                    creator?: string;
                    bcnaid?: string;
                    address?: string;
                }): _5.MsgCreateBitcannaid;
            };
            MsgCreateBitcannaidResponse: {
                encode(message: _5.MsgCreateBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgCreateBitcannaidResponse;
                fromJSON(object: any): _5.MsgCreateBitcannaidResponse;
                toJSON(message: _5.MsgCreateBitcannaidResponse): unknown;
                fromPartial(object: {
                    id?: any;
                }): _5.MsgCreateBitcannaidResponse;
            };
            MsgUpdateBitcannaid: {
                encode(message: _5.MsgUpdateBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateBitcannaid;
                fromJSON(object: any): _5.MsgUpdateBitcannaid;
                toJSON(message: _5.MsgUpdateBitcannaid): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                    bcnaid?: string;
                    address?: string;
                }): _5.MsgUpdateBitcannaid;
            };
            MsgUpdateBitcannaidResponse: {
                encode(_: _5.MsgUpdateBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateBitcannaidResponse;
                fromJSON(_: any): _5.MsgUpdateBitcannaidResponse;
                toJSON(_: _5.MsgUpdateBitcannaidResponse): unknown;
                fromPartial(_: {}): _5.MsgUpdateBitcannaidResponse;
            };
            MsgDeleteBitcannaid: {
                encode(message: _5.MsgDeleteBitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgDeleteBitcannaid;
                fromJSON(object: any): _5.MsgDeleteBitcannaid;
                toJSON(message: _5.MsgDeleteBitcannaid): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                }): _5.MsgDeleteBitcannaid;
            };
            MsgDeleteBitcannaidResponse: {
                encode(_: _5.MsgDeleteBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgDeleteBitcannaidResponse;
                fromJSON(_: any): _5.MsgDeleteBitcannaidResponse;
                toJSON(_: _5.MsgDeleteBitcannaidResponse): unknown;
                fromPartial(_: {}): _5.MsgDeleteBitcannaidResponse;
            };
            MsgCreateSupplychain: {
                encode(message: _5.MsgCreateSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgCreateSupplychain;
                fromJSON(object: any): _5.MsgCreateSupplychain;
                toJSON(message: _5.MsgCreateSupplychain): unknown;
                fromPartial(object: {
                    creator?: string;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                }): _5.MsgCreateSupplychain;
            };
            MsgCreateSupplychainResponse: {
                encode(message: _5.MsgCreateSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgCreateSupplychainResponse;
                fromJSON(object: any): _5.MsgCreateSupplychainResponse;
                toJSON(message: _5.MsgCreateSupplychainResponse): unknown;
                fromPartial(object: {
                    id?: any;
                }): _5.MsgCreateSupplychainResponse;
            };
            MsgUpdateSupplychain: {
                encode(message: _5.MsgUpdateSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateSupplychain;
                fromJSON(object: any): _5.MsgUpdateSupplychain;
                toJSON(message: _5.MsgUpdateSupplychain): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                }): _5.MsgUpdateSupplychain;
            };
            MsgUpdateSupplychainResponse: {
                encode(_: _5.MsgUpdateSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateSupplychainResponse;
                fromJSON(_: any): _5.MsgUpdateSupplychainResponse;
                toJSON(_: _5.MsgUpdateSupplychainResponse): unknown;
                fromPartial(_: {}): _5.MsgUpdateSupplychainResponse;
            };
            MsgDeleteSupplychain: {
                encode(message: _5.MsgDeleteSupplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgDeleteSupplychain;
                fromJSON(object: any): _5.MsgDeleteSupplychain;
                toJSON(message: _5.MsgDeleteSupplychain): unknown;
                fromPartial(object: {
                    creator?: string;
                    id?: any;
                }): _5.MsgDeleteSupplychain;
            };
            MsgDeleteSupplychainResponse: {
                encode(_: _5.MsgDeleteSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgDeleteSupplychainResponse;
                fromJSON(_: any): _5.MsgDeleteSupplychainResponse;
                toJSON(_: _5.MsgDeleteSupplychainResponse): unknown;
                fromPartial(_: {}): _5.MsgDeleteSupplychainResponse;
            };
            Supplychain: {
                encode(message: _4.Supplychain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Supplychain;
                fromJSON(object: any): _4.Supplychain;
                toJSON(message: _4.Supplychain): unknown;
                fromPartial(object: {
                    id?: any;
                    product?: string;
                    info?: string;
                    supplyinfo?: string;
                    creator?: string;
                }): _4.Supplychain;
            };
            QueryParamsRequest: {
                encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsRequest;
                fromJSON(_: any): _3.QueryParamsRequest;
                toJSON(_: _3.QueryParamsRequest): unknown;
                fromPartial(_: {}): _3.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsResponse;
                fromJSON(object: any): _3.QueryParamsResponse;
                toJSON(message: _3.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {};
                }): _3.QueryParamsResponse;
            };
            QueryGetBitcannaidRequest: {
                encode(message: _3.QueryGetBitcannaidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryGetBitcannaidRequest;
                fromJSON(object: any): _3.QueryGetBitcannaidRequest;
                toJSON(message: _3.QueryGetBitcannaidRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _3.QueryGetBitcannaidRequest;
            };
            QueryGetBitcannaidResponse: {
                encode(message: _3.QueryGetBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryGetBitcannaidResponse;
                fromJSON(object: any): _3.QueryGetBitcannaidResponse;
                toJSON(message: _3.QueryGetBitcannaidResponse): unknown;
                fromPartial(object: {
                    Bitcannaid?: {
                        id?: any;
                        bcnaid?: string;
                        address?: string;
                        creator?: string;
                    };
                }): _3.QueryGetBitcannaidResponse;
            };
            QueryAllBitcannaidRequest: {
                encode(message: _3.QueryAllBitcannaidRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAllBitcannaidRequest;
                fromJSON(object: any): _3.QueryAllBitcannaidRequest;
                toJSON(message: _3.QueryAllBitcannaidRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _3.QueryAllBitcannaidRequest;
            };
            QueryAllBitcannaidResponse: {
                encode(message: _3.QueryAllBitcannaidResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAllBitcannaidResponse;
                fromJSON(object: any): _3.QueryAllBitcannaidResponse;
                toJSON(message: _3.QueryAllBitcannaidResponse): unknown;
                fromPartial(object: {
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
                }): _3.QueryAllBitcannaidResponse;
            };
            QueryGetSupplychainRequest: {
                encode(message: _3.QueryGetSupplychainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryGetSupplychainRequest;
                fromJSON(object: any): _3.QueryGetSupplychainRequest;
                toJSON(message: _3.QueryGetSupplychainRequest): unknown;
                fromPartial(object: {
                    id?: any;
                }): _3.QueryGetSupplychainRequest;
            };
            QueryGetSupplychainResponse: {
                encode(message: _3.QueryGetSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryGetSupplychainResponse;
                fromJSON(object: any): _3.QueryGetSupplychainResponse;
                toJSON(message: _3.QueryGetSupplychainResponse): unknown;
                fromPartial(object: {
                    Supplychain?: {
                        id?: any;
                        product?: string;
                        info?: string;
                        supplyinfo?: string;
                        creator?: string;
                    };
                }): _3.QueryGetSupplychainResponse;
            };
            QueryAllSupplychainRequest: {
                encode(message: _3.QueryAllSupplychainRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAllSupplychainRequest;
                fromJSON(object: any): _3.QueryAllSupplychainRequest;
                toJSON(message: _3.QueryAllSupplychainRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _3.QueryAllSupplychainRequest;
            };
            QueryAllSupplychainResponse: {
                encode(message: _3.QueryAllSupplychainResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryAllSupplychainResponse;
                fromJSON(object: any): _3.QueryAllSupplychainResponse;
                toJSON(message: _3.QueryAllSupplychainResponse): unknown;
                fromPartial(object: {
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
                }): _3.QueryAllSupplychainResponse;
            };
            Params: {
                encode(_: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromJSON(_: any): _2.Params;
                toJSON(_: _2.Params): unknown;
                fromPartial(_: {}): _2.Params;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenesisState;
                fromJSON(object: any): _1.GenesisState;
                toJSON(message: _1.GenesisState): unknown;
                fromPartial(object: {
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
                }): _1.GenesisState;
            };
            Bitcannaid: {
                encode(message: _0.Bitcannaid, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Bitcannaid;
                fromJSON(object: any): _0.Bitcannaid;
                toJSON(message: _0.Bitcannaid): unknown;
                fromPartial(object: {
                    id?: any;
                    bcnaid?: string;
                    address?: string;
                    creator?: string;
                }): _0.Bitcannaid;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            BitCannaGlobal: {
                bcna: {
                    bcna: _150.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            BitCannaGlobal: {
                bcna: {
                    bcna: _149.QueryClientImpl;
                };
            };
            cosmos: {
                app: {
                    v1alpha1: import("../cosmos/app/v1alpha1/query.rpc.query").QueryClientImpl;
                };
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.rpc.query").QueryClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.rpc.query").QueryClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.query").QueryClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.query").QueryClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.query").QueryClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.query").QueryClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.rpc.query").QueryClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.query").QueryClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.rpc.query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.rpc.query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.rpc.query").QueryClientImpl;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.rpc.query").QueryClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.query").QueryClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.query").QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            BitCannaGlobal: {
                bcna: {
                    bcna: _148.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
