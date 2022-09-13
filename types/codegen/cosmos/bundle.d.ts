import * as _8 from "./app/v1alpha1/config";
import * as _9 from "./app/v1alpha1/module";
import * as _10 from "./app/v1alpha1/query";
import * as _11 from "./auth/v1beta1/auth";
import * as _12 from "./auth/v1beta1/genesis";
import * as _13 from "./auth/v1beta1/query";
import * as _14 from "./authz/v1beta1/authz";
import * as _15 from "./authz/v1beta1/event";
import * as _16 from "./authz/v1beta1/genesis";
import * as _17 from "./authz/v1beta1/query";
import * as _18 from "./authz/v1beta1/tx";
import * as _19 from "./bank/v1beta1/authz";
import * as _20 from "./bank/v1beta1/bank";
import * as _21 from "./bank/v1beta1/genesis";
import * as _22 from "./bank/v1beta1/query";
import * as _23 from "./bank/v1beta1/tx";
import * as _24 from "./base/abci/v1beta1/abci";
import * as _25 from "./base/kv/v1beta1/kv";
import * as _26 from "./base/query/v1beta1/pagination";
import * as _27 from "./base/reflection/v1beta1/reflection";
import * as _28 from "./base/reflection/v2alpha1/reflection";
import * as _29 from "./base/snapshots/v1beta1/snapshot";
import * as _30 from "./base/store/v1beta1/commit_info";
import * as _31 from "./base/store/v1beta1/listening";
import * as _32 from "./base/tendermint/v1beta1/query";
import * as _33 from "./base/v1beta1/coin";
import * as _34 from "./capability/v1beta1/capability";
import * as _35 from "./capability/v1beta1/genesis";
import * as _36 from "./crisis/v1beta1/genesis";
import * as _37 from "./crisis/v1beta1/tx";
import * as _38 from "./crypto/ed25519/keys";
import * as _39 from "./crypto/hd/v1/hd";
import * as _40 from "./crypto/keyring/v1/record";
import * as _41 from "./crypto/multisig/keys";
import * as _42 from "./crypto/secp256k1/keys";
import * as _43 from "./crypto/secp256r1/keys";
import * as _44 from "./distribution/v1beta1/distribution";
import * as _45 from "./distribution/v1beta1/genesis";
import * as _46 from "./distribution/v1beta1/query";
import * as _47 from "./distribution/v1beta1/tx";
import * as _48 from "./evidence/v1beta1/evidence";
import * as _49 from "./evidence/v1beta1/genesis";
import * as _50 from "./evidence/v1beta1/query";
import * as _51 from "./evidence/v1beta1/tx";
import * as _52 from "./feegrant/v1beta1/feegrant";
import * as _53 from "./feegrant/v1beta1/genesis";
import * as _54 from "./feegrant/v1beta1/query";
import * as _55 from "./feegrant/v1beta1/tx";
import * as _56 from "./genutil/v1beta1/genesis";
import * as _57 from "./gov/v1/genesis";
import * as _58 from "./gov/v1/gov";
import * as _59 from "./gov/v1/query";
import * as _60 from "./gov/v1/tx";
import * as _61 from "./gov/v1beta1/genesis";
import * as _62 from "./gov/v1beta1/gov";
import * as _63 from "./gov/v1beta1/query";
import * as _64 from "./gov/v1beta1/tx";
import * as _65 from "./group/v1/events";
import * as _66 from "./group/v1/genesis";
import * as _67 from "./group/v1/query";
import * as _68 from "./group/v1/tx";
import * as _69 from "./group/v1/types";
import * as _70 from "./mint/v1beta1/genesis";
import * as _71 from "./mint/v1beta1/mint";
import * as _72 from "./mint/v1beta1/query";
import * as _74 from "./nft/v1beta1/event";
import * as _75 from "./nft/v1beta1/genesis";
import * as _76 from "./nft/v1beta1/nft";
import * as _77 from "./nft/v1beta1/query";
import * as _78 from "./nft/v1beta1/tx";
import * as _79 from "./orm/v1/orm";
import * as _80 from "./orm/v1alpha1/schema";
import * as _81 from "./params/v1beta1/params";
import * as _82 from "./params/v1beta1/query";
import * as _83 from "./slashing/v1beta1/genesis";
import * as _84 from "./slashing/v1beta1/query";
import * as _85 from "./slashing/v1beta1/slashing";
import * as _86 from "./slashing/v1beta1/tx";
import * as _87 from "./staking/v1beta1/authz";
import * as _88 from "./staking/v1beta1/genesis";
import * as _89 from "./staking/v1beta1/query";
import * as _90 from "./staking/v1beta1/staking";
import * as _91 from "./staking/v1beta1/tx";
import * as _92 from "./tx/signing/v1beta1/signing";
import * as _93 from "./tx/v1beta1/service";
import * as _94 from "./tx/v1beta1/tx";
import * as _95 from "./upgrade/v1beta1/query";
import * as _96 from "./upgrade/v1beta1/tx";
import * as _97 from "./upgrade/v1beta1/upgrade";
import * as _98 from "./vesting/v1beta1/tx";
import * as _99 from "./vesting/v1beta1/vesting";
import * as _179 from "./auth/v1beta1/query.lcd";
import * as _180 from "./authz/v1beta1/query.lcd";
import * as _181 from "./bank/v1beta1/query.lcd";
import * as _182 from "./distribution/v1beta1/query.lcd";
import * as _183 from "./evidence/v1beta1/query.lcd";
import * as _184 from "./feegrant/v1beta1/query.lcd";
import * as _185 from "./gov/v1/query.lcd";
import * as _186 from "./gov/v1beta1/query.lcd";
import * as _187 from "./group/v1/query.lcd";
import * as _188 from "./mint/v1beta1/query.lcd";
import * as _189 from "./nft/v1beta1/query.lcd";
import * as _190 from "./params/v1beta1/query.lcd";
import * as _191 from "./slashing/v1beta1/query.lcd";
import * as _192 from "./staking/v1beta1/query.lcd";
import * as _193 from "./upgrade/v1beta1/query.lcd";
import * as _194 from "./app/v1alpha1/query.rpc.query";
import * as _195 from "./auth/v1beta1/query.rpc.query";
import * as _196 from "./authz/v1beta1/query.rpc.query";
import * as _197 from "./bank/v1beta1/query.rpc.query";
import * as _198 from "./base/tendermint/v1beta1/query.rpc.svc";
import * as _199 from "./distribution/v1beta1/query.rpc.query";
import * as _200 from "./evidence/v1beta1/query.rpc.query";
import * as _201 from "./feegrant/v1beta1/query.rpc.query";
import * as _202 from "./gov/v1/query.rpc.query";
import * as _203 from "./gov/v1beta1/query.rpc.query";
import * as _204 from "./group/v1/query.rpc.query";
import * as _205 from "./mint/v1beta1/query.rpc.query";
import * as _206 from "./nft/v1beta1/query.rpc.query";
import * as _207 from "./params/v1beta1/query.rpc.query";
import * as _208 from "./slashing/v1beta1/query.rpc.query";
import * as _209 from "./staking/v1beta1/query.rpc.query";
import * as _210 from "./tx/v1beta1/service.rpc.svc";
import * as _211 from "./upgrade/v1beta1/query.rpc.query";
import * as _212 from "./authz/v1beta1/tx.rpc.msg";
import * as _213 from "./bank/v1beta1/tx.rpc.msg";
import * as _214 from "./crisis/v1beta1/tx.rpc.msg";
import * as _215 from "./distribution/v1beta1/tx.rpc.msg";
import * as _216 from "./evidence/v1beta1/tx.rpc.msg";
import * as _217 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _218 from "./gov/v1/tx.rpc.msg";
import * as _219 from "./gov/v1beta1/tx.rpc.msg";
import * as _220 from "./group/v1/tx.rpc.msg";
import * as _221 from "./nft/v1beta1/tx.rpc.msg";
import * as _222 from "./slashing/v1beta1/tx.rpc.msg";
import * as _223 from "./staking/v1beta1/tx.rpc.msg";
import * as _224 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _225 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _194.QueryClientImpl;
            QueryConfigRequest: {
                encode(_: _10.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryConfigRequest;
                fromJSON(_: any): _10.QueryConfigRequest;
                toJSON(_: _10.QueryConfigRequest): unknown;
                fromPartial(_: {}): _10.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _10.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryConfigResponse;
                fromJSON(object: any): _10.QueryConfigResponse;
                toJSON(message: _10.QueryConfigResponse): unknown;
                fromPartial(object: {
                    config?: {
                        modules?: {
                            name?: string;
                            config?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    };
                }): _10.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _9.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.ModuleDescriptor;
                fromJSON(object: any): _9.ModuleDescriptor;
                toJSON(message: _9.ModuleDescriptor): unknown;
                fromPartial(object: {
                    goImport?: string;
                    usePackage?: {
                        name?: string;
                        revision?: number;
                    }[];
                    canMigrateFrom?: {
                        module?: string;
                    }[];
                }): _9.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _9.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.PackageReference;
                fromJSON(object: any): _9.PackageReference;
                toJSON(message: _9.PackageReference): unknown;
                fromPartial(object: {
                    name?: string;
                    revision?: number;
                }): _9.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _9.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MigrateFromInfo;
                fromJSON(object: any): _9.MigrateFromInfo;
                toJSON(message: _9.MigrateFromInfo): unknown;
                fromPartial(object: {
                    module?: string;
                }): _9.MigrateFromInfo;
            };
            Config: {
                encode(message: _8.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Config;
                fromJSON(object: any): _8.Config;
                toJSON(message: _8.Config): unknown;
                fromPartial(object: {
                    modules?: {
                        name?: string;
                        config?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _8.Config;
            };
            ModuleConfig: {
                encode(message: _8.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.ModuleConfig;
                fromJSON(object: any): _8.ModuleConfig;
                toJSON(message: _8.ModuleConfig): unknown;
                fromPartial(object: {
                    name?: string;
                    config?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _8.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _195.QueryClientImpl;
            LCDQueryClient: typeof _179.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _13.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAccountsRequest;
                fromJSON(object: any): _13.QueryAccountsRequest;
                toJSON(message: _13.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _13.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _13.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAccountsResponse;
                fromJSON(object: any): _13.QueryAccountsResponse;
                toJSON(message: _13.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _13.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _13.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAccountRequest;
                fromJSON(object: any): _13.QueryAccountRequest;
                toJSON(message: _13.QueryAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _13.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _13.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryModuleAccountsRequest;
                fromJSON(_: any): _13.QueryModuleAccountsRequest;
                toJSON(_: _13.QueryModuleAccountsRequest): unknown;
                fromPartial(_: {}): _13.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _13.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsResponse;
                fromJSON(object: any): _13.QueryParamsResponse;
                toJSON(message: _13.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                }): _13.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _13.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAccountResponse;
                fromJSON(object: any): _13.QueryAccountResponse;
                toJSON(message: _13.QueryAccountResponse): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _13.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _13.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsRequest;
                fromJSON(_: any): _13.QueryParamsRequest;
                toJSON(_: _13.QueryParamsRequest): unknown;
                fromPartial(_: {}): _13.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _13.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryModuleAccountsResponse;
                fromJSON(object: any): _13.QueryModuleAccountsResponse;
                toJSON(message: _13.QueryModuleAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _13.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _13.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Bech32PrefixRequest;
                fromJSON(_: any): _13.Bech32PrefixRequest;
                toJSON(_: _13.Bech32PrefixRequest): unknown;
                fromPartial(_: {}): _13.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _13.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Bech32PrefixResponse;
                fromJSON(object: any): _13.Bech32PrefixResponse;
                toJSON(message: _13.Bech32PrefixResponse): unknown;
                fromPartial(object: {
                    bech32Prefix?: string;
                }): _13.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _13.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.AddressBytesToStringRequest;
                fromJSON(object: any): _13.AddressBytesToStringRequest;
                toJSON(message: _13.AddressBytesToStringRequest): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _13.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _13.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.AddressBytesToStringResponse;
                fromJSON(object: any): _13.AddressBytesToStringResponse;
                toJSON(message: _13.AddressBytesToStringResponse): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _13.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _13.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.AddressStringToBytesRequest;
                fromJSON(object: any): _13.AddressStringToBytesRequest;
                toJSON(message: _13.AddressStringToBytesRequest): unknown;
                fromPartial(object: {
                    addressString?: string;
                }): _13.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _13.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.AddressStringToBytesResponse;
                fromJSON(object: any): _13.AddressStringToBytesResponse;
                toJSON(message: _13.AddressStringToBytesResponse): unknown;
                fromPartial(object: {
                    addressBytes?: Uint8Array;
                }): _13.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
                fromJSON(object: any): _12.GenesisState;
                toJSON(message: _12.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: any;
                        txSigLimit?: any;
                        txSizeCostPerByte?: any;
                        sigVerifyCostEd25519?: any;
                        sigVerifyCostSecp256k1?: any;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _12.GenesisState;
            };
            BaseAccount: {
                encode(message: _11.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.BaseAccount;
                fromJSON(object: any): _11.BaseAccount;
                toJSON(message: _11.BaseAccount): unknown;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: any;
                    sequence?: any;
                }): _11.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _11.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.ModuleAccount;
                fromJSON(object: any): _11.ModuleAccount;
                toJSON(message: _11.ModuleAccount): unknown;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    name?: string;
                    permissions?: string[];
                }): _11.ModuleAccount;
            };
            Params: {
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Params;
                fromJSON(object: any): _11.Params;
                toJSON(message: _11.Params): unknown;
                fromPartial(object: {
                    maxMemoCharacters?: any;
                    txSigLimit?: any;
                    txSizeCostPerByte?: any;
                    sigVerifyCostEd25519?: any;
                    sigVerifyCostSecp256k1?: any;
                }): _11.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _212.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            LCDQueryClient: typeof _180.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _18.MsgGrant): {
                        typeUrl: string;
                        value: _18.MsgGrant;
                    };
                    exec(value: _18.MsgExec): {
                        typeUrl: string;
                        value: _18.MsgExec;
                    };
                    revoke(value: _18.MsgRevoke): {
                        typeUrl: string;
                        value: _18.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _18.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _18.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _18.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _18.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _18.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _18.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _18.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgGrant;
                fromJSON(object: any): _18.MsgGrant;
                toJSON(message: _18.MsgGrant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _18.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _18.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgExecResponse;
                fromJSON(object: any): _18.MsgExecResponse;
                toJSON(message: _18.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _18.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _18.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgExec;
                fromJSON(object: any): _18.MsgExec;
                toJSON(message: _18.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _18.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _18.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgGrantResponse;
                fromJSON(_: any): _18.MsgGrantResponse;
                toJSON(_: _18.MsgGrantResponse): unknown;
                fromPartial(_: {}): _18.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _18.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgRevoke;
                fromJSON(object: any): _18.MsgRevoke;
                toJSON(message: _18.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _18.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _18.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgRevokeResponse;
                fromJSON(_: any): _18.MsgRevokeResponse;
                toJSON(_: _18.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _18.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _17.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGrantsRequest;
                fromJSON(object: any): _17.QueryGrantsRequest;
                toJSON(message: _17.QueryGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _17.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGrantsResponse;
                fromJSON(object: any): _17.QueryGrantsResponse;
                toJSON(message: _17.QueryGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _17.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _17.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranterGrantsRequest;
                fromJSON(object: any): _17.QueryGranterGrantsRequest;
                toJSON(message: _17.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _17.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranterGrantsResponse;
                fromJSON(object: any): _17.QueryGranterGrantsResponse;
                toJSON(message: _17.QueryGranterGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _17.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _17.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranteeGrantsRequest;
                fromJSON(object: any): _17.QueryGranteeGrantsRequest;
                toJSON(message: _17.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _17.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _17.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryGranteeGrantsResponse;
                fromJSON(object: any): _17.QueryGranteeGrantsResponse;
                toJSON(message: _17.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _17.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _16.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.GenesisState;
                fromJSON(object: any): _16.GenesisState;
                toJSON(message: _16.GenesisState): unknown;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _16.GenesisState;
            };
            EventGrant: {
                encode(message: _15.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EventGrant;
                fromJSON(object: any): _15.EventGrant;
                toJSON(message: _15.EventGrant): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _15.EventGrant;
            };
            EventRevoke: {
                encode(message: _15.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.EventRevoke;
                fromJSON(object: any): _15.EventRevoke;
                toJSON(message: _15.EventRevoke): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _15.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _14.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GenericAuthorization;
                fromJSON(object: any): _14.GenericAuthorization;
                toJSON(message: _14.GenericAuthorization): unknown;
                fromPartial(object: {
                    msg?: string;
                }): _14.GenericAuthorization;
            };
            Grant: {
                encode(message: _14.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Grant;
                fromJSON(object: any): _14.Grant;
                toJSON(message: _14.Grant): unknown;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _14.Grant;
            };
            GrantAuthorization: {
                encode(message: _14.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GrantAuthorization;
                fromJSON(object: any): _14.GrantAuthorization;
                toJSON(message: _14.GrantAuthorization): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _14.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _14.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GrantQueueItem;
                fromJSON(object: any): _14.GrantQueueItem;
                toJSON(message: _14.GrantQueueItem): unknown;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _14.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _213.MsgClientImpl;
            QueryClientImpl: typeof _197.QueryClientImpl;
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _23.MsgSend): {
                        typeUrl: string;
                        value: _23.MsgSend;
                    };
                    multiSend(value: _23.MsgMultiSend): {
                        typeUrl: string;
                        value: _23.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _23.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _23.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _23.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _23.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _23.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgSend;
                fromJSON(object: any): _23.MsgSend;
                toJSON(message: _23.MsgSend): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _23.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _23.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgSendResponse;
                fromJSON(_: any): _23.MsgSendResponse;
                toJSON(_: _23.MsgSendResponse): unknown;
                fromPartial(_: {}): _23.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _23.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgMultiSend;
                fromJSON(object: any): _23.MsgMultiSend;
                toJSON(message: _23.MsgMultiSend): unknown;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _23.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _23.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.MsgMultiSendResponse;
                fromJSON(_: any): _23.MsgMultiSendResponse;
                toJSON(_: _23.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _23.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _22.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryBalanceRequest;
                fromJSON(object: any): _22.QueryBalanceRequest;
                toJSON(message: _22.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _22.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _22.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryBalanceResponse;
                fromJSON(object: any): _22.QueryBalanceResponse;
                toJSON(message: _22.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _22.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _22.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryAllBalancesRequest;
                fromJSON(object: any): _22.QueryAllBalancesRequest;
                toJSON(message: _22.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _22.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryAllBalancesResponse;
                fromJSON(object: any): _22.QueryAllBalancesResponse;
                toJSON(message: _22.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _22.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _22.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySpendableBalancesRequest;
                fromJSON(object: any): _22.QuerySpendableBalancesRequest;
                toJSON(message: _22.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _22.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySpendableBalancesResponse;
                fromJSON(object: any): _22.QuerySpendableBalancesResponse;
                toJSON(message: _22.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _22.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _22.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryTotalSupplyRequest;
                fromJSON(object: any): _22.QueryTotalSupplyRequest;
                toJSON(message: _22.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _22.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryTotalSupplyResponse;
                fromJSON(object: any): _22.QueryTotalSupplyResponse;
                toJSON(message: _22.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _22.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _22.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySupplyOfRequest;
                fromJSON(object: any): _22.QuerySupplyOfRequest;
                toJSON(message: _22.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _22.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _22.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QuerySupplyOfResponse;
                fromJSON(object: any): _22.QuerySupplyOfResponse;
                toJSON(message: _22.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _22.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _22.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsRequest;
                fromJSON(_: any): _22.QueryParamsRequest;
                toJSON(_: _22.QueryParamsRequest): unknown;
                fromPartial(_: {}): _22.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _22.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryParamsResponse;
                fromJSON(object: any): _22.QueryParamsResponse;
                toJSON(message: _22.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _22.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _22.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomsMetadataRequest;
                fromJSON(object: any): _22.QueryDenomsMetadataRequest;
                toJSON(message: _22.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _22.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomsMetadataResponse;
                fromJSON(object: any): _22.QueryDenomsMetadataResponse;
                toJSON(message: _22.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _22.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _22.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomMetadataRequest;
                fromJSON(object: any): _22.QueryDenomMetadataRequest;
                toJSON(message: _22.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _22.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _22.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomMetadataResponse;
                fromJSON(object: any): _22.QueryDenomMetadataResponse;
                toJSON(message: _22.QueryDenomMetadataResponse): unknown;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _22.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _22.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomOwnersRequest;
                fromJSON(object: any): _22.QueryDenomOwnersRequest;
                toJSON(message: _22.QueryDenomOwnersRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _22.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _22.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DenomOwner;
                fromJSON(object: any): _22.DenomOwner;
                toJSON(message: _22.DenomOwner): unknown;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _22.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _22.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.QueryDenomOwnersResponse;
                fromJSON(object: any): _22.QueryDenomOwnersResponse;
                toJSON(message: _22.QueryDenomOwnersResponse): unknown;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _22.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _21.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.GenesisState;
                fromJSON(object: any): _21.GenesisState;
                toJSON(message: _21.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _21.GenesisState;
            };
            Balance: {
                encode(message: _21.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Balance;
                fromJSON(object: any): _21.Balance;
                toJSON(message: _21.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _21.Balance;
            };
            Params: {
                encode(message: _20.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Params;
                fromJSON(object: any): _20.Params;
                toJSON(message: _20.Params): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _20.Params;
            };
            SendEnabled: {
                encode(message: _20.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.SendEnabled;
                fromJSON(object: any): _20.SendEnabled;
                toJSON(message: _20.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _20.SendEnabled;
            };
            Input: {
                encode(message: _20.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Input;
                fromJSON(object: any): _20.Input;
                toJSON(message: _20.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _20.Input;
            };
            Output: {
                encode(message: _20.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Output;
                fromJSON(object: any): _20.Output;
                toJSON(message: _20.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _20.Output;
            };
            Supply: {
                encode(message: _20.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Supply;
                fromJSON(object: any): _20.Supply;
                toJSON(message: _20.Supply): unknown;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _20.Supply;
            };
            DenomUnit: {
                encode(message: _20.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.DenomUnit;
                fromJSON(object: any): _20.DenomUnit;
                toJSON(message: _20.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _20.DenomUnit;
            };
            Metadata: {
                encode(message: _20.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Metadata;
                fromJSON(object: any): _20.Metadata;
                toJSON(message: _20.Metadata): unknown;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _20.Metadata;
            };
            SendAuthorization: {
                encode(message: _19.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SendAuthorization;
                fromJSON(object: any): _19.SendAuthorization;
                toJSON(message: _19.SendAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _19.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _24.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.TxResponse;
                    fromJSON(object: any): _24.TxResponse;
                    toJSON(message: _24.TxResponse): unknown;
                    fromPartial(object: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _24.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _24.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.ABCIMessageLog;
                    fromJSON(object: any): _24.ABCIMessageLog;
                    toJSON(message: _24.ABCIMessageLog): unknown;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _24.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _24.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.StringEvent;
                    fromJSON(object: any): _24.StringEvent;
                    toJSON(message: _24.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _24.StringEvent;
                };
                Attribute: {
                    encode(message: _24.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Attribute;
                    fromJSON(object: any): _24.Attribute;
                    toJSON(message: _24.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _24.Attribute;
                };
                GasInfo: {
                    encode(message: _24.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GasInfo;
                    fromJSON(object: any): _24.GasInfo;
                    toJSON(message: _24.GasInfo): unknown;
                    fromPartial(object: {
                        gasWanted?: any;
                        gasUsed?: any;
                    }): _24.GasInfo;
                };
                Result: {
                    encode(message: _24.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Result;
                    fromJSON(object: any): _24.Result;
                    toJSON(message: _24.Result): unknown;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _24.Result;
                };
                SimulationResponse: {
                    encode(message: _24.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SimulationResponse;
                    fromJSON(object: any): _24.SimulationResponse;
                    toJSON(message: _24.SimulationResponse): unknown;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: any;
                            gasUsed?: any;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _24.SimulationResponse;
                };
                MsgData: {
                    encode(message: _24.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.MsgData;
                    fromJSON(object: any): _24.MsgData;
                    toJSON(message: _24.MsgData): unknown;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _24.MsgData;
                };
                TxMsgData: {
                    encode(message: _24.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.TxMsgData;
                    fromJSON(object: any): _24.TxMsgData;
                    toJSON(message: _24.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _24.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _24.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.SearchTxsResult;
                    fromJSON(object: any): _24.SearchTxsResult;
                    toJSON(message: _24.SearchTxsResult): unknown;
                    fromPartial(object: {
                        totalCount?: any;
                        count?: any;
                        pageNumber?: any;
                        pageTotal?: any;
                        limit?: any;
                        txs?: {
                            height?: any;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: any;
                            gasUsed?: any;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _24.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _25.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Pairs;
                    fromJSON(object: any): _25.Pairs;
                    toJSON(message: _25.Pairs): unknown;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _25.Pairs;
                };
                Pair: {
                    encode(message: _25.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Pair;
                    fromJSON(object: any): _25.Pair;
                    toJSON(message: _25.Pair): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _25.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _26.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.PageRequest;
                    fromJSON(object: any): _26.PageRequest;
                    toJSON(message: _26.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _26.PageRequest;
                };
                PageResponse: {
                    encode(message: _26.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.PageResponse;
                    fromJSON(object: any): _26.PageResponse;
                    toJSON(message: _26.PageResponse): unknown;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: any;
                    }): _26.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _27.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListAllInterfacesRequest;
                    fromJSON(_: any): _27.ListAllInterfacesRequest;
                    toJSON(_: _27.ListAllInterfacesRequest): unknown;
                    fromPartial(_: {}): _27.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _27.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListAllInterfacesResponse;
                    fromJSON(object: any): _27.ListAllInterfacesResponse;
                    toJSON(message: _27.ListAllInterfacesResponse): unknown;
                    fromPartial(object: {
                        interfaceNames?: string[];
                    }): _27.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _27.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListImplementationsRequest;
                    fromJSON(object: any): _27.ListImplementationsRequest;
                    toJSON(message: _27.ListImplementationsRequest): unknown;
                    fromPartial(object: {
                        interfaceName?: string;
                    }): _27.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _27.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ListImplementationsResponse;
                    fromJSON(object: any): _27.ListImplementationsResponse;
                    toJSON(message: _27.ListImplementationsResponse): unknown;
                    fromPartial(object: {
                        implementationMessageNames?: string[];
                    }): _27.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _28.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.AppDescriptor;
                    fromJSON(object: any): _28.AppDescriptor;
                    toJSON(message: _28.AppDescriptor): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _28.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _28.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.TxDescriptor;
                    fromJSON(object: any): _28.TxDescriptor;
                    toJSON(message: _28.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _28.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _28.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.AuthnDescriptor;
                    fromJSON(object: any): _28.AuthnDescriptor;
                    toJSON(message: _28.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _28.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _28.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.SigningModeDescriptor;
                    fromJSON(object: any): _28.SigningModeDescriptor;
                    toJSON(message: _28.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _28.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _28.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ChainDescriptor;
                    fromJSON(object: any): _28.ChainDescriptor;
                    toJSON(message: _28.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _28.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _28.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.CodecDescriptor;
                    fromJSON(object: any): _28.CodecDescriptor;
                    toJSON(message: _28.CodecDescriptor): unknown;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _28.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _28.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.InterfaceDescriptor;
                    fromJSON(object: any): _28.InterfaceDescriptor;
                    toJSON(message: _28.InterfaceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _28.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _28.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _28.InterfaceImplementerDescriptor;
                    toJSON(message: _28.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _28.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _28.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _28.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _28.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _28.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _28.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.ConfigurationDescriptor;
                    fromJSON(object: any): _28.ConfigurationDescriptor;
                    toJSON(message: _28.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _28.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _28.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgDescriptor;
                    fromJSON(object: any): _28.MsgDescriptor;
                    toJSON(message: _28.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _28.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _28.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _28.GetAuthnDescriptorRequest;
                    toJSON(_: _28.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _28.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _28.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _28.GetAuthnDescriptorResponse;
                    toJSON(message: _28.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _28.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _28.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetChainDescriptorRequest;
                    fromJSON(_: any): _28.GetChainDescriptorRequest;
                    toJSON(_: _28.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _28.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _28.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetChainDescriptorResponse;
                    fromJSON(object: any): _28.GetChainDescriptorResponse;
                    toJSON(message: _28.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _28.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _28.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetCodecDescriptorRequest;
                    fromJSON(_: any): _28.GetCodecDescriptorRequest;
                    toJSON(_: _28.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _28.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _28.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetCodecDescriptorResponse;
                    fromJSON(object: any): _28.GetCodecDescriptorResponse;
                    toJSON(message: _28.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _28.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _28.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _28.GetConfigurationDescriptorRequest;
                    toJSON(_: _28.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _28.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _28.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _28.GetConfigurationDescriptorResponse;
                    toJSON(message: _28.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _28.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _28.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _28.GetQueryServicesDescriptorRequest;
                    toJSON(_: _28.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _28.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _28.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _28.GetQueryServicesDescriptorResponse;
                    toJSON(message: _28.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _28.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _28.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetTxDescriptorRequest;
                    fromJSON(_: any): _28.GetTxDescriptorRequest;
                    toJSON(_: _28.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _28.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _28.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.GetTxDescriptorResponse;
                    fromJSON(object: any): _28.GetTxDescriptorResponse;
                    toJSON(message: _28.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _28.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _28.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryServicesDescriptor;
                    fromJSON(object: any): _28.QueryServicesDescriptor;
                    toJSON(message: _28.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _28.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _28.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryServiceDescriptor;
                    fromJSON(object: any): _28.QueryServiceDescriptor;
                    toJSON(message: _28.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _28.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _28.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryMethodDescriptor;
                    fromJSON(object: any): _28.QueryMethodDescriptor;
                    toJSON(message: _28.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _28.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _29.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Snapshot;
                    fromJSON(object: any): _29.Snapshot;
                    toJSON(message: _29.Snapshot): unknown;
                    fromPartial(object: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunkHashes?: Uint8Array[];
                        };
                    }): _29.Snapshot;
                };
                Metadata: {
                    encode(message: _29.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Metadata;
                    fromJSON(object: any): _29.Metadata;
                    toJSON(message: _29.Metadata): unknown;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[];
                    }): _29.Metadata;
                };
                SnapshotItem: {
                    encode(message: _29.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotItem;
                    fromJSON(object: any): _29.SnapshotItem;
                    toJSON(message: _29.SnapshotItem): unknown;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: any;
                            height?: number;
                        };
                        extension?: {
                            name?: string;
                            format?: number;
                        };
                        extensionPayload?: {
                            payload?: Uint8Array;
                        };
                        kv?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        };
                        schema?: {
                            keys?: Uint8Array[];
                        };
                    }): _29.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _29.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotStoreItem;
                    fromJSON(object: any): _29.SnapshotStoreItem;
                    toJSON(message: _29.SnapshotStoreItem): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _29.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _29.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotIAVLItem;
                    fromJSON(object: any): _29.SnapshotIAVLItem;
                    toJSON(message: _29.SnapshotIAVLItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: any;
                        height?: number;
                    }): _29.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _29.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotExtensionMeta;
                    fromJSON(object: any): _29.SnapshotExtensionMeta;
                    toJSON(message: _29.SnapshotExtensionMeta): unknown;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _29.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _29.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotExtensionPayload;
                    fromJSON(object: any): _29.SnapshotExtensionPayload;
                    toJSON(message: _29.SnapshotExtensionPayload): unknown;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _29.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _29.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotKVItem;
                    fromJSON(object: any): _29.SnapshotKVItem;
                    toJSON(message: _29.SnapshotKVItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _29.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _29.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SnapshotSchema;
                    fromJSON(object: any): _29.SnapshotSchema;
                    toJSON(message: _29.SnapshotSchema): unknown;
                    fromPartial(object: {
                        keys?: Uint8Array[];
                    }): _29.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _31.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.StoreKVPair;
                    fromJSON(object: any): _31.StoreKVPair;
                    toJSON(message: _31.StoreKVPair): unknown;
                    fromPartial(object: {
                        storeKey?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _31.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _30.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.CommitInfo;
                    fromJSON(object: any): _30.CommitInfo;
                    toJSON(message: _30.CommitInfo): unknown;
                    fromPartial(object: {
                        version?: any;
                        storeInfos?: {
                            name?: string;
                            commitId?: {
                                version?: any;
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _30.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _30.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.StoreInfo;
                    fromJSON(object: any): _30.StoreInfo;
                    toJSON(message: _30.StoreInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        commitId?: {
                            version?: any;
                            hash?: Uint8Array;
                        };
                    }): _30.StoreInfo;
                };
                CommitID: {
                    encode(message: _30.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.CommitID;
                    fromJSON(object: any): _30.CommitID;
                    toJSON(message: _30.CommitID): unknown;
                    fromPartial(object: {
                        version?: any;
                        hash?: Uint8Array;
                    }): _30.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _198.ServiceClientImpl;
                GetValidatorSetByHeightRequest: {
                    encode(message: _32.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _32.GetValidatorSetByHeightRequest;
                    toJSON(message: _32.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: any;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _32.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _32.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _32.GetValidatorSetByHeightResponse;
                    toJSON(message: _32.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _32.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _32.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _32.GetLatestValidatorSetRequest;
                    toJSON(message: _32.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: any;
                            limit?: any;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _32.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _32.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _32.GetLatestValidatorSetResponse;
                    toJSON(message: _32.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: {
                        blockHeight?: any;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: any;
                        };
                    }): _32.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _32.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Validator;
                    fromJSON(object: any): _32.Validator;
                    toJSON(message: _32.Validator): unknown;
                    fromPartial(object: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }): _32.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _32.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetBlockByHeightRequest;
                    fromJSON(object: any): _32.GetBlockByHeightRequest;
                    toJSON(message: _32.GetBlockByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: any;
                    }): _32.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _32.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetBlockByHeightResponse;
                    fromJSON(object: any): _32.GetBlockByHeightResponse;
                    toJSON(message: _32.GetBlockByHeightResponse): unknown;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _32.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _32.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestBlockRequest;
                    fromJSON(_: any): _32.GetLatestBlockRequest;
                    toJSON(_: _32.GetLatestBlockRequest): unknown;
                    fromPartial(_: {}): _32.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _32.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetLatestBlockResponse;
                    fromJSON(object: any): _32.GetLatestBlockResponse;
                    toJSON(message: _32.GetLatestBlockResponse): unknown;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
                            header?: {
                                version?: {
                                    block?: any;
                                    app?: any;
                                };
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: any;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: any;
                                        validatorPower?: any;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
                                            signedHeader?: {
                                                header?: {
                                                    version?: {
                                                        block?: any;
                                                        app?: any;
                                                    };
                                                    chainId?: string;
                                                    height?: any;
                                                    time?: Date;
                                                    lastBlockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    lastCommitHash?: Uint8Array;
                                                    dataHash?: Uint8Array;
                                                    validatorsHash?: Uint8Array;
                                                    nextValidatorsHash?: Uint8Array;
                                                    consensusHash?: Uint8Array;
                                                    appHash?: Uint8Array;
                                                    lastResultsHash?: Uint8Array;
                                                    evidenceHash?: Uint8Array;
                                                    proposerAddress?: Uint8Array;
                                                };
                                                commit?: {
                                                    height?: any;
                                                    round?: number;
                                                    blockId?: {
                                                        hash?: Uint8Array;
                                                        partSetHeader?: {
                                                            total?: number;
                                                            hash?: Uint8Array;
                                                        };
                                                    };
                                                    signatures?: {
                                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                        validatorAddress?: Uint8Array;
                                                        timestamp?: Date;
                                                        signature?: Uint8Array;
                                                    }[];
                                                };
                                            };
                                            validatorSet?: {
                                                validators?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                }[];
                                                proposer?: {
                                                    address?: Uint8Array;
                                                    pubKey?: {
                                                        ed25519?: Uint8Array;
                                                        secp256k1?: Uint8Array;
                                                    };
                                                    votingPower?: any;
                                                    proposerPriority?: any;
                                                };
                                                totalVotingPower?: any;
                                            };
                                        };
                                        commonHeight?: any;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: any;
                                            proposerPriority?: any;
                                        }[];
                                        totalVotingPower?: any;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                    }): _32.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _32.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetSyncingRequest;
                    fromJSON(_: any): _32.GetSyncingRequest;
                    toJSON(_: _32.GetSyncingRequest): unknown;
                    fromPartial(_: {}): _32.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _32.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetSyncingResponse;
                    fromJSON(object: any): _32.GetSyncingResponse;
                    toJSON(message: _32.GetSyncingResponse): unknown;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _32.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _32.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetNodeInfoRequest;
                    fromJSON(_: any): _32.GetNodeInfoRequest;
                    toJSON(_: _32.GetNodeInfoRequest): unknown;
                    fromPartial(_: {}): _32.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _32.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.GetNodeInfoResponse;
                    fromJSON(object: any): _32.GetNodeInfoResponse;
                    toJSON(message: _32.GetNodeInfoResponse): unknown;
                    fromPartial(object: {
                        nodeInfo?: {
                            protocolVersion?: {
                                p2p?: any;
                                block?: any;
                                app?: any;
                            };
                            nodeId?: string;
                            listenAddr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                txIndex?: string;
                                rpcAddress?: string;
                            };
                        };
                        applicationVersion?: {
                            name?: string;
                            appName?: string;
                            version?: string;
                            gitCommit?: string;
                            buildTags?: string;
                            goVersion?: string;
                            buildDeps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmosSdkVersion?: string;
                        };
                    }): _32.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _32.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.VersionInfo;
                    fromJSON(object: any): _32.VersionInfo;
                    toJSON(message: _32.VersionInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        appName?: string;
                        version?: string;
                        gitCommit?: string;
                        buildTags?: string;
                        goVersion?: string;
                        buildDeps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmosSdkVersion?: string;
                    }): _32.VersionInfo;
                };
                Module: {
                    encode(message: _32.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Module;
                    fromJSON(object: any): _32.Module;
                    toJSON(message: _32.Module): unknown;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _32.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _33.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Coin;
                fromJSON(object: any): _33.Coin;
                toJSON(message: _33.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _33.Coin;
            };
            DecCoin: {
                encode(message: _33.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DecCoin;
                fromJSON(object: any): _33.DecCoin;
                toJSON(message: _33.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _33.DecCoin;
            };
            IntProto: {
                encode(message: _33.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.IntProto;
                fromJSON(object: any): _33.IntProto;
                toJSON(message: _33.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _33.IntProto;
            };
            DecProto: {
                encode(message: _33.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DecProto;
                fromJSON(object: any): _33.DecProto;
                toJSON(message: _33.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _33.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _35.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisOwners;
                fromJSON(object: any): _35.GenesisOwners;
                toJSON(message: _35.GenesisOwners): unknown;
                fromPartial(object: {
                    index?: any;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _35.GenesisOwners;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisState;
                fromJSON(object: any): _35.GenesisState;
                toJSON(message: _35.GenesisState): unknown;
                fromPartial(object: {
                    index?: any;
                    owners?: {
                        index?: any;
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _35.GenesisState;
            };
            Capability: {
                encode(message: _34.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Capability;
                fromJSON(object: any): _34.Capability;
                toJSON(message: _34.Capability): unknown;
                fromPartial(object: {
                    index?: any;
                }): _34.Capability;
            };
            Owner: {
                encode(message: _34.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Owner;
                fromJSON(object: any): _34.Owner;
                toJSON(message: _34.Owner): unknown;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _34.Owner;
            };
            CapabilityOwners: {
                encode(message: _34.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.CapabilityOwners;
                fromJSON(object: any): _34.CapabilityOwners;
                toJSON(message: _34.CapabilityOwners): unknown;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _34.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _214.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _37.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _37.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _37.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _37.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _37.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgVerifyInvariant;
                fromJSON(object: any): _37.MsgVerifyInvariant;
                toJSON(message: _37.MsgVerifyInvariant): unknown;
                fromPartial(object: {
                    sender?: string;
                    invariantModuleName?: string;
                    invariantRoute?: string;
                }): _37.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _37.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgVerifyInvariantResponse;
                fromJSON(_: any): _37.MsgVerifyInvariantResponse;
                toJSON(_: _37.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: {}): _37.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _36.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.GenesisState;
                fromJSON(object: any): _36.GenesisState;
                toJSON(message: _36.GenesisState): unknown;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _36.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _38.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PubKey;
                fromJSON(object: any): _38.PubKey;
                toJSON(message: _38.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _38.PubKey;
            };
            PrivKey: {
                encode(message: _38.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.PrivKey;
                fromJSON(object: any): _38.PrivKey;
                toJSON(message: _38.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _38.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _39.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.BIP44Params;
                    fromJSON(object: any): _39.BIP44Params;
                    toJSON(message: _39.BIP44Params): unknown;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _39.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _40.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Record;
                    fromJSON(object: any): _40.Record;
                    toJSON(message: _40.Record): unknown;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _40.Record;
                };
                Record_Local: {
                    encode(message: _40.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Record_Local;
                    fromJSON(object: any): _40.Record_Local;
                    toJSON(message: _40.Record_Local): unknown;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _40.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _40.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Record_Ledger;
                    fromJSON(object: any): _40.Record_Ledger;
                    toJSON(message: _40.Record_Ledger): unknown;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _40.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _40.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Record_Multi;
                    fromJSON(_: any): _40.Record_Multi;
                    toJSON(_: _40.Record_Multi): unknown;
                    fromPartial(_: {}): _40.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _40.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Record_Offline;
                    fromJSON(_: any): _40.Record_Offline;
                    toJSON(_: _40.Record_Offline): unknown;
                    fromPartial(_: {}): _40.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _41.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.LegacyAminoPubKey;
                fromJSON(object: any): _41.LegacyAminoPubKey;
                toJSON(message: _41.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _41.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _42.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.PubKey;
                fromJSON(object: any): _42.PubKey;
                toJSON(message: _42.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _42.PubKey;
            };
            PrivKey: {
                encode(message: _42.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.PrivKey;
                fromJSON(object: any): _42.PrivKey;
                toJSON(message: _42.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _42.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _43.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.PubKey;
                fromJSON(object: any): _43.PubKey;
                toJSON(message: _43.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _43.PubKey;
            };
            PrivKey: {
                encode(message: _43.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.PrivKey;
                fromJSON(object: any): _43.PrivKey;
                toJSON(message: _43.PrivKey): unknown;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _43.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _215.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _47.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _47.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _47.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _47.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _47.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _47.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _47.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _47.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _47.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _47.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _47.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _47.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _47.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _47.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _47.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _47.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _47.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _47.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _47.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _47.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _47.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _47.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _47.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _47.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _47.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _47.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _47.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _47.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _47.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _47.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _47.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _47.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _47.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _47.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _47.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _47.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _47.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSetWithdrawAddress;
                fromJSON(object: any): _47.MsgSetWithdrawAddress;
                toJSON(message: _47.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _47.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _47.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _47.MsgSetWithdrawAddressResponse;
                toJSON(_: _47.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _47.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _47.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _47.MsgWithdrawDelegatorReward;
                toJSON(message: _47.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _47.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _47.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _47.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _47.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _47.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _47.MsgWithdrawValidatorCommission;
                toJSON(message: _47.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _47.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _47.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _47.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _47.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _47.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgFundCommunityPool;
                fromJSON(object: any): _47.MsgFundCommunityPool;
                toJSON(message: _47.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _47.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _47.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _47.MsgFundCommunityPoolResponse;
                toJSON(_: _47.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _47.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _46.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryParamsRequest;
                fromJSON(_: any): _46.QueryParamsRequest;
                toJSON(_: _46.QueryParamsRequest): unknown;
                fromPartial(_: {}): _46.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _46.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryParamsResponse;
                fromJSON(object: any): _46.QueryParamsResponse;
                toJSON(message: _46.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _46.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _46.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _46.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _46.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _46.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _46.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _46.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _46.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _46.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _46.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorCommissionRequest;
                fromJSON(object: any): _46.QueryValidatorCommissionRequest;
                toJSON(message: _46.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _46.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _46.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorCommissionResponse;
                fromJSON(object: any): _46.QueryValidatorCommissionResponse;
                toJSON(message: _46.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _46.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _46.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorSlashesRequest;
                fromJSON(object: any): _46.QueryValidatorSlashesRequest;
                toJSON(message: _46.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: any;
                    endingHeight?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _46.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _46.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryValidatorSlashesResponse;
                fromJSON(object: any): _46.QueryValidatorSlashesResponse;
                toJSON(message: _46.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _46.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _46.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegationRewardsRequest;
                fromJSON(object: any): _46.QueryDelegationRewardsRequest;
                toJSON(message: _46.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _46.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _46.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegationRewardsResponse;
                fromJSON(object: any): _46.QueryDelegationRewardsResponse;
                toJSON(message: _46.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _46.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _46.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _46.QueryDelegationTotalRewardsRequest;
                toJSON(message: _46.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _46.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _46.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _46.QueryDelegationTotalRewardsResponse;
                toJSON(message: _46.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _46.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _46.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _46.QueryDelegatorValidatorsRequest;
                toJSON(message: _46.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _46.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _46.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _46.QueryDelegatorValidatorsResponse;
                toJSON(message: _46.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _46.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _46.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _46.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _46.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _46.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _46.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _46.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _46.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _46.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _46.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryCommunityPoolRequest;
                fromJSON(_: any): _46.QueryCommunityPoolRequest;
                toJSON(_: _46.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _46.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _46.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryCommunityPoolResponse;
                fromJSON(object: any): _46.QueryCommunityPoolResponse;
                toJSON(message: _46.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _46.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _45.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.DelegatorWithdrawInfo;
                fromJSON(object: any): _45.DelegatorWithdrawInfo;
                toJSON(message: _45.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _45.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _45.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _45.ValidatorOutstandingRewardsRecord;
                toJSON(message: _45.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _45.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _45.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _45.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _45.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _45.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _45.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _45.ValidatorHistoricalRewardsRecord;
                toJSON(message: _45.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: any;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _45.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _45.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _45.ValidatorCurrentRewardsRecord;
                toJSON(message: _45.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: any;
                    };
                }): _45.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _45.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.DelegatorStartingInfoRecord;
                fromJSON(object: any): _45.DelegatorStartingInfoRecord;
                toJSON(message: _45.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: any;
                        stake?: string;
                        height?: any;
                    };
                }): _45.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _45.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ValidatorSlashEventRecord;
                fromJSON(object: any): _45.ValidatorSlashEventRecord;
                toJSON(message: _45.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: any;
                    period?: any;
                    validatorSlashEvent?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    };
                }): _45.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState;
                fromJSON(object: any): _45.GenesisState;
                toJSON(message: _45.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: any;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: any;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: any;
                            stake?: string;
                            height?: any;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: any;
                        period?: any;
                        validatorSlashEvent?: {
                            validatorPeriod?: any;
                            fraction?: string;
                        };
                    }[];
                }): _45.GenesisState;
            };
            Params: {
                encode(message: _44.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Params;
                fromJSON(object: any): _44.Params;
                toJSON(message: _44.Params): unknown;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _44.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _44.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ValidatorHistoricalRewards;
                fromJSON(object: any): _44.ValidatorHistoricalRewards;
                toJSON(message: _44.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _44.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _44.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ValidatorCurrentRewards;
                fromJSON(object: any): _44.ValidatorCurrentRewards;
                toJSON(message: _44.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: any;
                }): _44.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _44.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ValidatorAccumulatedCommission;
                fromJSON(object: any): _44.ValidatorAccumulatedCommission;
                toJSON(message: _44.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _44.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _44.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ValidatorOutstandingRewards;
                fromJSON(object: any): _44.ValidatorOutstandingRewards;
                toJSON(message: _44.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _44.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _44.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ValidatorSlashEvent;
                fromJSON(object: any): _44.ValidatorSlashEvent;
                toJSON(message: _44.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validatorPeriod?: any;
                    fraction?: string;
                }): _44.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _44.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ValidatorSlashEvents;
                fromJSON(object: any): _44.ValidatorSlashEvents;
                toJSON(message: _44.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                }): _44.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _44.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.FeePool;
                fromJSON(object: any): _44.FeePool;
                toJSON(message: _44.FeePool): unknown;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _44.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _44.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CommunityPoolSpendProposal;
                fromJSON(object: any): _44.CommunityPoolSpendProposal;
                toJSON(message: _44.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _44.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _44.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.DelegatorStartingInfo;
                fromJSON(object: any): _44.DelegatorStartingInfo;
                toJSON(message: _44.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previousPeriod?: any;
                    stake?: string;
                    height?: any;
                }): _44.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _44.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.DelegationDelegatorReward;
                fromJSON(object: any): _44.DelegationDelegatorReward;
                toJSON(message: _44.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _44.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _44.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _44.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _44.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _44.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _216.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            LCDQueryClient: typeof _183.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _51.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _51.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _51.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _51.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _51.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _51.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _51.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _51.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _51.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _51.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgSubmitEvidence;
                fromJSON(object: any): _51.MsgSubmitEvidence;
                toJSON(message: _51.MsgSubmitEvidence): unknown;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _51.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _51.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _51.MsgSubmitEvidenceResponse;
                toJSON(message: _51.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _51.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _50.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryEvidenceRequest;
                fromJSON(object: any): _50.QueryEvidenceRequest;
                toJSON(message: _50.QueryEvidenceRequest): unknown;
                fromPartial(object: {
                    evidenceHash?: Uint8Array;
                }): _50.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _50.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryEvidenceResponse;
                fromJSON(object: any): _50.QueryEvidenceResponse;
                toJSON(message: _50.QueryEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _50.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _50.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllEvidenceRequest;
                fromJSON(object: any): _50.QueryAllEvidenceRequest;
                toJSON(message: _50.QueryAllEvidenceRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _50.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _50.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.QueryAllEvidenceResponse;
                fromJSON(object: any): _50.QueryAllEvidenceResponse;
                toJSON(message: _50.QueryAllEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _50.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _49.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.GenesisState;
                fromJSON(object: any): _49.GenesisState;
                toJSON(message: _49.GenesisState): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _49.GenesisState;
            };
            Equivocation: {
                encode(message: _48.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.Equivocation;
                fromJSON(object: any): _48.Equivocation;
                toJSON(message: _48.Equivocation): unknown;
                fromPartial(object: {
                    height?: any;
                    time?: Date;
                    power?: any;
                    consensusAddress?: string;
                }): _48.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _217.MsgClientImpl;
            QueryClientImpl: typeof _201.QueryClientImpl;
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _55.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _55.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _55.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _55.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _55.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _55.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _55.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _55.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _55.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _55.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _55.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _55.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _55.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _55.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _55.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _55.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _55.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _55.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _55.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgGrantAllowance;
                fromJSON(object: any): _55.MsgGrantAllowance;
                toJSON(message: _55.MsgGrantAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _55.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _55.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgGrantAllowanceResponse;
                fromJSON(_: any): _55.MsgGrantAllowanceResponse;
                toJSON(_: _55.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: {}): _55.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _55.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgRevokeAllowance;
                fromJSON(object: any): _55.MsgRevokeAllowance;
                toJSON(message: _55.MsgRevokeAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _55.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _55.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _55.MsgRevokeAllowanceResponse;
                toJSON(_: _55.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: {}): _55.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _54.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryAllowanceRequest;
                fromJSON(object: any): _54.QueryAllowanceRequest;
                toJSON(message: _54.QueryAllowanceRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _54.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _54.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryAllowanceResponse;
                fromJSON(object: any): _54.QueryAllowanceResponse;
                toJSON(message: _54.QueryAllowanceResponse): unknown;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _54.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _54.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryAllowancesRequest;
                fromJSON(object: any): _54.QueryAllowancesRequest;
                toJSON(message: _54.QueryAllowancesRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _54.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _54.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryAllowancesResponse;
                fromJSON(object: any): _54.QueryAllowancesResponse;
                toJSON(message: _54.QueryAllowancesResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _54.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _54.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _54.QueryAllowancesByGranterRequest;
                toJSON(message: _54.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _54.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _54.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _54.QueryAllowancesByGranterResponse;
                toJSON(message: _54.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _54.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _53.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GenesisState;
                fromJSON(object: any): _53.GenesisState;
                toJSON(message: _53.GenesisState): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _53.GenesisState;
            };
            BasicAllowance: {
                encode(message: _52.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.BasicAllowance;
                fromJSON(object: any): _52.BasicAllowance;
                toJSON(message: _52.BasicAllowance): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: Date;
                }): _52.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _52.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.PeriodicAllowance;
                fromJSON(object: any): _52.PeriodicAllowance;
                toJSON(message: _52.PeriodicAllowance): unknown;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: Date;
                    };
                    period?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: Date;
                }): _52.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _52.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.AllowedMsgAllowance;
                fromJSON(object: any): _52.AllowedMsgAllowance;
                toJSON(message: _52.AllowedMsgAllowance): unknown;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedMessages?: string[];
                }): _52.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _52.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Grant;
                fromJSON(object: any): _52.Grant;
                toJSON(message: _52.Grant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _52.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _56.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.GenesisState;
                fromJSON(object: any): _56.GenesisState;
                toJSON(message: _56.GenesisState): unknown;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                }): _56.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            QueryClientImpl: typeof _202.QueryClientImpl;
            LCDQueryClient: typeof _185.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _60.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _60.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _60.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _60.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _60.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _60.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _60.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _60.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _60.MsgExecLegacyContent;
                    };
                    vote(value: _60.MsgVote): {
                        typeUrl: string;
                        value: _60.MsgVote;
                    };
                    voteWeighted(value: _60.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _60.MsgVoteWeighted;
                    };
                    deposit(value: _60.MsgDeposit): {
                        typeUrl: string;
                        value: _60.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _60.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _60.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _60.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _60.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _60.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _60.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _60.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _60.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _60.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _60.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _60.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _60.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _60.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _60.MsgExecLegacyContent;
                    };
                    vote(value: _60.MsgVote): {
                        typeUrl: string;
                        value: _60.MsgVote;
                    };
                    voteWeighted(value: _60.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _60.MsgVoteWeighted;
                    };
                    deposit(value: _60.MsgDeposit): {
                        typeUrl: string;
                        value: _60.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _60.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _60.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _60.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _60.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _60.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _60.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _60.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _60.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _60.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _60.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _60.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSubmitProposal;
                fromJSON(object: any): _60.MsgSubmitProposal;
                toJSON(message: _60.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                }): _60.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _60.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgSubmitProposalResponse;
                fromJSON(object: any): _60.MsgSubmitProposalResponse;
                toJSON(message: _60.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _60.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _60.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgExecLegacyContent;
                fromJSON(object: any): _60.MsgExecLegacyContent;
                toJSON(message: _60.MsgExecLegacyContent): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _60.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _60.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgExecLegacyContentResponse;
                fromJSON(_: any): _60.MsgExecLegacyContentResponse;
                toJSON(_: _60.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: {}): _60.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _60.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgVote;
                fromJSON(object: any): _60.MsgVote;
                toJSON(message: _60.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _58.VoteOption;
                    metadata?: string;
                }): _60.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _60.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgVoteResponse;
                fromJSON(_: any): _60.MsgVoteResponse;
                toJSON(_: _60.MsgVoteResponse): unknown;
                fromPartial(_: {}): _60.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _60.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgVoteWeighted;
                fromJSON(object: any): _60.MsgVoteWeighted;
                toJSON(message: _60.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _58.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _60.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _60.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgVoteWeightedResponse;
                fromJSON(_: any): _60.MsgVoteWeightedResponse;
                toJSON(_: _60.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _60.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _60.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgDeposit;
                fromJSON(object: any): _60.MsgDeposit;
                toJSON(message: _60.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _60.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _60.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MsgDepositResponse;
                fromJSON(_: any): _60.MsgDepositResponse;
                toJSON(_: _60.MsgDepositResponse): unknown;
                fromPartial(_: {}): _60.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _59.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryProposalRequest;
                fromJSON(object: any): _59.QueryProposalRequest;
                toJSON(message: _59.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _59.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _59.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryProposalResponse;
                fromJSON(object: any): _59.QueryProposalResponse;
                toJSON(message: _59.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _58.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    };
                }): _59.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _59.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryProposalsRequest;
                fromJSON(object: any): _59.QueryProposalsRequest;
                toJSON(message: _59.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _58.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _59.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _59.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryProposalsResponse;
                fromJSON(object: any): _59.QueryProposalsResponse;
                toJSON(message: _59.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _58.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _59.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _59.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryVoteRequest;
                fromJSON(object: any): _59.QueryVoteRequest;
                toJSON(message: _59.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _59.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _59.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryVoteResponse;
                fromJSON(object: any): _59.QueryVoteResponse;
                toJSON(message: _59.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _58.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _59.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _59.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryVotesRequest;
                fromJSON(object: any): _59.QueryVotesRequest;
                toJSON(message: _59.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _59.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _59.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryVotesResponse;
                fromJSON(object: any): _59.QueryVotesResponse;
                toJSON(message: _59.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _58.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _59.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _59.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsRequest;
                fromJSON(object: any): _59.QueryParamsRequest;
                toJSON(message: _59.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _59.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _59.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryParamsResponse;
                fromJSON(object: any): _59.QueryParamsResponse;
                toJSON(message: _59.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _59.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _59.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDepositRequest;
                fromJSON(object: any): _59.QueryDepositRequest;
                toJSON(message: _59.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _59.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _59.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDepositResponse;
                fromJSON(object: any): _59.QueryDepositResponse;
                toJSON(message: _59.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _59.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _59.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDepositsRequest;
                fromJSON(object: any): _59.QueryDepositsRequest;
                toJSON(message: _59.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _59.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _59.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryDepositsResponse;
                fromJSON(object: any): _59.QueryDepositsResponse;
                toJSON(message: _59.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _59.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _59.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryTallyResultRequest;
                fromJSON(object: any): _59.QueryTallyResultRequest;
                toJSON(message: _59.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _59.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _59.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.QueryTallyResultResponse;
                fromJSON(object: any): _59.QueryTallyResultResponse;
                toJSON(message: _59.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _59.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _58.VoteOption;
            voteOptionToJSON(object: _58.VoteOption): string;
            proposalStatusFromJSON(object: any): _58.ProposalStatus;
            proposalStatusToJSON(object: _58.ProposalStatus): string;
            VoteOption: typeof _58.VoteOption;
            ProposalStatus: typeof _58.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _58.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.WeightedVoteOption;
                fromJSON(object: any): _58.WeightedVoteOption;
                toJSON(message: _58.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _58.VoteOption;
                    weight?: string;
                }): _58.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _58.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Deposit;
                fromJSON(object: any): _58.Deposit;
                toJSON(message: _58.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _58.Deposit;
            };
            Proposal: {
                encode(message: _58.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Proposal;
                fromJSON(object: any): _58.Proposal;
                toJSON(message: _58.Proposal): unknown;
                fromPartial(object: {
                    id?: any;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _58.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                    metadata?: string;
                }): _58.Proposal;
            };
            TallyResult: {
                encode(message: _58.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.TallyResult;
                fromJSON(object: any): _58.TallyResult;
                toJSON(message: _58.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _58.TallyResult;
            };
            Vote: {
                encode(message: _58.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Vote;
                fromJSON(object: any): _58.Vote;
                toJSON(message: _58.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _58.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _58.Vote;
            };
            DepositParams: {
                encode(message: _58.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.DepositParams;
                fromJSON(object: any): _58.DepositParams;
                toJSON(message: _58.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _58.DepositParams;
            };
            VotingParams: {
                encode(message: _58.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.VotingParams;
                fromJSON(object: any): _58.VotingParams;
                toJSON(message: _58.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _58.VotingParams;
            };
            TallyParams: {
                encode(message: _58.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.TallyParams;
                fromJSON(object: any): _58.TallyParams;
                toJSON(message: _58.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _58.TallyParams;
            };
            GenesisState: {
                encode(message: _57.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GenesisState;
                fromJSON(object: any): _57.GenesisState;
                toJSON(message: _57.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _58.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _58.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _57.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _203.QueryClientImpl;
            LCDQueryClient: typeof _186.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _64.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _64.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _64.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _64.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _64.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _64.MsgSubmitProposal;
                    };
                    vote(value: _64.MsgVote): {
                        typeUrl: string;
                        value: _64.MsgVote;
                    };
                    voteWeighted(value: _64.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _64.MsgVoteWeighted;
                    };
                    deposit(value: _64.MsgDeposit): {
                        typeUrl: string;
                        value: _64.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _64.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _64.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _64.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _64.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _64.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _64.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _64.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _64.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _64.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _64.MsgSubmitProposal;
                    };
                    vote(value: _64.MsgVote): {
                        typeUrl: string;
                        value: _64.MsgVote;
                    };
                    voteWeighted(value: _64.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _64.MsgVoteWeighted;
                    };
                    deposit(value: _64.MsgDeposit): {
                        typeUrl: string;
                        value: _64.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _64.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _64.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _64.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _64.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _64.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _64.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _64.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _64.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _64.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgSubmitProposal;
                fromJSON(object: any): _64.MsgSubmitProposal;
                toJSON(message: _64.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _64.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _64.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgSubmitProposalResponse;
                fromJSON(object: any): _64.MsgSubmitProposalResponse;
                toJSON(message: _64.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _64.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _64.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgVote;
                fromJSON(object: any): _64.MsgVote;
                toJSON(message: _64.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _62.VoteOption;
                }): _64.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _64.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgVoteResponse;
                fromJSON(_: any): _64.MsgVoteResponse;
                toJSON(_: _64.MsgVoteResponse): unknown;
                fromPartial(_: {}): _64.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _64.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgVoteWeighted;
                fromJSON(object: any): _64.MsgVoteWeighted;
                toJSON(message: _64.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _62.VoteOption;
                        weight?: string;
                    }[];
                }): _64.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _64.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgVoteWeightedResponse;
                fromJSON(_: any): _64.MsgVoteWeightedResponse;
                toJSON(_: _64.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _64.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _64.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgDeposit;
                fromJSON(object: any): _64.MsgDeposit;
                toJSON(message: _64.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _64.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _64.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.MsgDepositResponse;
                fromJSON(_: any): _64.MsgDepositResponse;
                toJSON(_: _64.MsgDepositResponse): unknown;
                fromPartial(_: {}): _64.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _63.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryProposalRequest;
                fromJSON(object: any): _63.QueryProposalRequest;
                toJSON(message: _63.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _63.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _63.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryProposalResponse;
                fromJSON(object: any): _63.QueryProposalResponse;
                toJSON(message: _63.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _62.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _63.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _63.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryProposalsRequest;
                fromJSON(object: any): _63.QueryProposalsRequest;
                toJSON(message: _63.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _62.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _63.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _63.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryProposalsResponse;
                fromJSON(object: any): _63.QueryProposalsResponse;
                toJSON(message: _63.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _62.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _63.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _63.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryVoteRequest;
                fromJSON(object: any): _63.QueryVoteRequest;
                toJSON(message: _63.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _63.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _63.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryVoteResponse;
                fromJSON(object: any): _63.QueryVoteResponse;
                toJSON(message: _63.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _62.VoteOption;
                        options?: {
                            option?: _62.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _63.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _63.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryVotesRequest;
                fromJSON(object: any): _63.QueryVotesRequest;
                toJSON(message: _63.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _63.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _63.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryVotesResponse;
                fromJSON(object: any): _63.QueryVotesResponse;
                toJSON(message: _63.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _62.VoteOption;
                        options?: {
                            option?: _62.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _63.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _63.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryParamsRequest;
                fromJSON(object: any): _63.QueryParamsRequest;
                toJSON(message: _63.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _63.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _63.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryParamsResponse;
                fromJSON(object: any): _63.QueryParamsResponse;
                toJSON(message: _63.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _63.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _63.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDepositRequest;
                fromJSON(object: any): _63.QueryDepositRequest;
                toJSON(message: _63.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _63.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _63.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDepositResponse;
                fromJSON(object: any): _63.QueryDepositResponse;
                toJSON(message: _63.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _63.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _63.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDepositsRequest;
                fromJSON(object: any): _63.QueryDepositsRequest;
                toJSON(message: _63.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _63.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _63.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryDepositsResponse;
                fromJSON(object: any): _63.QueryDepositsResponse;
                toJSON(message: _63.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _63.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _63.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTallyResultRequest;
                fromJSON(object: any): _63.QueryTallyResultRequest;
                toJSON(message: _63.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _63.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _63.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.QueryTallyResultResponse;
                fromJSON(object: any): _63.QueryTallyResultResponse;
                toJSON(message: _63.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _63.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _62.VoteOption;
            voteOptionToJSON(object: _62.VoteOption): string;
            proposalStatusFromJSON(object: any): _62.ProposalStatus;
            proposalStatusToJSON(object: _62.ProposalStatus): string;
            VoteOption: typeof _62.VoteOption;
            ProposalStatus: typeof _62.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _62.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.WeightedVoteOption;
                fromJSON(object: any): _62.WeightedVoteOption;
                toJSON(message: _62.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _62.VoteOption;
                    weight?: string;
                }): _62.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _62.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.TextProposal;
                fromJSON(object: any): _62.TextProposal;
                toJSON(message: _62.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _62.TextProposal;
            };
            Deposit: {
                encode(message: _62.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Deposit;
                fromJSON(object: any): _62.Deposit;
                toJSON(message: _62.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _62.Deposit;
            };
            Proposal: {
                encode(message: _62.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Proposal;
                fromJSON(object: any): _62.Proposal;
                toJSON(message: _62.Proposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _62.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _62.Proposal;
            };
            TallyResult: {
                encode(message: _62.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.TallyResult;
                fromJSON(object: any): _62.TallyResult;
                toJSON(message: _62.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _62.TallyResult;
            };
            Vote: {
                encode(message: _62.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Vote;
                fromJSON(object: any): _62.Vote;
                toJSON(message: _62.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _62.VoteOption;
                    options?: {
                        option?: _62.VoteOption;
                        weight?: string;
                    }[];
                }): _62.Vote;
            };
            DepositParams: {
                encode(message: _62.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DepositParams;
                fromJSON(object: any): _62.DepositParams;
                toJSON(message: _62.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _62.DepositParams;
            };
            VotingParams: {
                encode(message: _62.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.VotingParams;
                fromJSON(object: any): _62.VotingParams;
                toJSON(message: _62.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _62.VotingParams;
            };
            TallyParams: {
                encode(message: _62.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.TallyParams;
                fromJSON(object: any): _62.TallyParams;
                toJSON(message: _62.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _62.TallyParams;
            };
            GenesisState: {
                encode(message: _61.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.GenesisState;
                fromJSON(object: any): _61.GenesisState;
                toJSON(message: _61.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _62.VoteOption;
                        options?: {
                            option?: _62.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _62.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _61.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _220.MsgClientImpl;
            QueryClientImpl: typeof _204.QueryClientImpl;
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _68.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _68.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _68.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _68.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _68.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _68.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _68.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _68.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _68.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _68.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _68.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _68.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _68.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _68.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _68.MsgCreateGroup): {
                        typeUrl: string;
                        value: _68.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _68.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _68.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _68.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _68.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _68.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _68.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _68.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _68.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _68.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _68.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _68.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _68.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _68.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _68.MsgWithdrawProposal;
                    };
                    vote(value: _68.MsgVote): {
                        typeUrl: string;
                        value: _68.MsgVote;
                    };
                    exec(value: _68.MsgExec): {
                        typeUrl: string;
                        value: _68.MsgExec;
                    };
                    leaveGroup(value: _68.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _68.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _68.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _68.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _68.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _68.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _68.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _68.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _68.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _68.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _68.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _68.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _68.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _68.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _68.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _68.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _68.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _68.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _68.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _68.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _68.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _68.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _68.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _68.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _68.MsgCreateGroup): {
                        typeUrl: string;
                        value: _68.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _68.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _68.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _68.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _68.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _68.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _68.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _68.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _68.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _68.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _68.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _68.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _68.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _68.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _68.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _68.MsgWithdrawProposal;
                    };
                    vote(value: _68.MsgVote): {
                        typeUrl: string;
                        value: _68.MsgVote;
                    };
                    exec(value: _68.MsgExec): {
                        typeUrl: string;
                        value: _68.MsgExec;
                    };
                    leaveGroup(value: _68.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _68.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _68.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _68.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _68.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _68.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _68.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _68.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _68.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _68.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _68.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _68.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _68.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _68.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _68.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _68.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _68.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _68.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _68.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _68.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _68.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _68.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _68.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _68.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _68.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _68.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _68.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _68.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _68.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _68.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _69.VoteOption;
            voteOptionToJSON(object: _69.VoteOption): string;
            proposalStatusFromJSON(object: any): _69.ProposalStatus;
            proposalStatusToJSON(object: _69.ProposalStatus): string;
            proposalResultFromJSON(object: any): _69.ProposalResult;
            proposalResultToJSON(object: _69.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _69.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _69.ProposalExecutorResult): string;
            VoteOption: typeof _69.VoteOption;
            ProposalStatus: typeof _69.ProposalStatus;
            ProposalResult: typeof _69.ProposalResult;
            ProposalExecutorResult: typeof _69.ProposalExecutorResult;
            Member: {
                encode(message: _69.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Member;
                fromJSON(object: any): _69.Member;
                toJSON(message: _69.Member): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                    metadata?: string;
                    addedAt?: Date;
                }): _69.Member;
            };
            Members: {
                encode(message: _69.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Members;
                fromJSON(object: any): _69.Members;
                toJSON(message: _69.Members): unknown;
                fromPartial(object: {
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _69.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _69.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.ThresholdDecisionPolicy;
                fromJSON(object: any): _69.ThresholdDecisionPolicy;
                toJSON(message: _69.ThresholdDecisionPolicy): unknown;
                fromPartial(object: {
                    threshold?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _69.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _69.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.PercentageDecisionPolicy;
                fromJSON(object: any): _69.PercentageDecisionPolicy;
                toJSON(message: _69.PercentageDecisionPolicy): unknown;
                fromPartial(object: {
                    percentage?: string;
                    windows?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        minExecutionPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                }): _69.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _69.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.DecisionPolicyWindows;
                fromJSON(object: any): _69.DecisionPolicyWindows;
                toJSON(message: _69.DecisionPolicyWindows): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    minExecutionPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _69.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _69.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GroupInfo;
                fromJSON(object: any): _69.GroupInfo;
                toJSON(message: _69.GroupInfo): unknown;
                fromPartial(object: {
                    id?: any;
                    admin?: string;
                    metadata?: string;
                    version?: any;
                    totalWeight?: string;
                    createdAt?: Date;
                }): _69.GroupInfo;
            };
            GroupMember: {
                encode(message: _69.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GroupMember;
                fromJSON(object: any): _69.GroupMember;
                toJSON(message: _69.GroupMember): unknown;
                fromPartial(object: {
                    groupId?: any;
                    member?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    };
                }): _69.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _69.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.GroupPolicyInfo;
                fromJSON(object: any): _69.GroupPolicyInfo;
                toJSON(message: _69.GroupPolicyInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                    admin?: string;
                    metadata?: string;
                    version?: any;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    createdAt?: Date;
                }): _69.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _69.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Proposal;
                fromJSON(object: any): _69.Proposal;
                toJSON(message: _69.Proposal): unknown;
                fromPartial(object: {
                    id?: any;
                    address?: string;
                    metadata?: string;
                    proposers?: string[];
                    submitTime?: Date;
                    groupVersion?: any;
                    groupPolicyVersion?: any;
                    status?: _69.ProposalStatus;
                    result?: _69.ProposalResult;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    votingPeriodEnd?: Date;
                    executorResult?: _69.ProposalExecutorResult;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _69.Proposal;
            };
            TallyResult: {
                encode(message: _69.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.TallyResult;
                fromJSON(object: any): _69.TallyResult;
                toJSON(message: _69.TallyResult): unknown;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _69.TallyResult;
            };
            Vote: {
                encode(message: _69.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Vote;
                fromJSON(object: any): _69.Vote;
                toJSON(message: _69.Vote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _69.VoteOption;
                    metadata?: string;
                    submitTime?: Date;
                }): _69.Vote;
            };
            execFromJSON(object: any): _68.Exec;
            execToJSON(object: _68.Exec): string;
            Exec: typeof _68.Exec;
            MsgCreateGroup: {
                encode(message: _68.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgCreateGroup;
                fromJSON(object: any): _68.MsgCreateGroup;
                toJSON(message: _68.MsgCreateGroup): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    metadata?: string;
                }): _68.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _68.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgCreateGroupResponse;
                fromJSON(object: any): _68.MsgCreateGroupResponse;
                toJSON(message: _68.MsgCreateGroupResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _68.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _68.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupMembers;
                fromJSON(object: any): _68.MsgUpdateGroupMembers;
                toJSON(message: _68.MsgUpdateGroupMembers): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    memberUpdates?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                }): _68.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _68.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _68.MsgUpdateGroupMembersResponse;
                toJSON(_: _68.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: {}): _68.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _68.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupAdmin;
                fromJSON(object: any): _68.MsgUpdateGroupAdmin;
                toJSON(message: _68.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    newAdmin?: string;
                }): _68.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _68.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _68.MsgUpdateGroupAdminResponse;
                toJSON(_: _68.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: {}): _68.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _68.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupMetadata;
                fromJSON(object: any): _68.MsgUpdateGroupMetadata;
                toJSON(message: _68.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: string;
                }): _68.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _68.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _68.MsgUpdateGroupMetadataResponse;
                toJSON(_: _68.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: {}): _68.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _68.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgCreateGroupPolicy;
                fromJSON(object: any): _68.MsgCreateGroupPolicy;
                toJSON(message: _68.MsgCreateGroupPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    groupId?: any;
                    metadata?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _68.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _68.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _68.MsgCreateGroupPolicyResponse;
                toJSON(message: _68.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _68.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _68.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _68.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _68.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    newAdmin?: string;
                }): _68.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _68.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _68.MsgCreateGroupWithPolicy;
                toJSON(message: _68.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    members?: {
                        address?: string;
                        weight?: string;
                        metadata?: string;
                        addedAt?: Date;
                    }[];
                    groupMetadata?: string;
                    groupPolicyMetadata?: string;
                    groupPolicyAsAdmin?: boolean;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _68.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _68.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _68.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _68.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: {
                    groupId?: any;
                    groupPolicyAddress?: string;
                }): _68.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _68.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _68.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _68.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: {}): _68.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _68.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _68.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _68.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    decisionPolicy?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _68.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _68.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _68.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _68.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: {}): _68.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _68.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _68.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _68.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                    address?: string;
                    metadata?: string;
                }): _68.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _68.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _68.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _68.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: {}): _68.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _68.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgSubmitProposal;
                fromJSON(object: any): _68.MsgSubmitProposal;
                toJSON(message: _68.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    address?: string;
                    proposers?: string[];
                    metadata?: string;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    exec?: _68.Exec;
                }): _68.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _68.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgSubmitProposalResponse;
                fromJSON(object: any): _68.MsgSubmitProposalResponse;
                toJSON(message: _68.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _68.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _68.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgWithdrawProposal;
                fromJSON(object: any): _68.MsgWithdrawProposal;
                toJSON(message: _68.MsgWithdrawProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    address?: string;
                }): _68.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _68.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgWithdrawProposalResponse;
                fromJSON(_: any): _68.MsgWithdrawProposalResponse;
                toJSON(_: _68.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: {}): _68.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _68.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgVote;
                fromJSON(object: any): _68.MsgVote;
                toJSON(message: _68.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _69.VoteOption;
                    metadata?: string;
                    exec?: _68.Exec;
                }): _68.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _68.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgVoteResponse;
                fromJSON(_: any): _68.MsgVoteResponse;
                toJSON(_: _68.MsgVoteResponse): unknown;
                fromPartial(_: {}): _68.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _68.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgExec;
                fromJSON(object: any): _68.MsgExec;
                toJSON(message: _68.MsgExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    signer?: string;
                }): _68.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _68.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgExecResponse;
                fromJSON(_: any): _68.MsgExecResponse;
                toJSON(_: _68.MsgExecResponse): unknown;
                fromPartial(_: {}): _68.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _68.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgLeaveGroup;
                fromJSON(object: any): _68.MsgLeaveGroup;
                toJSON(message: _68.MsgLeaveGroup): unknown;
                fromPartial(object: {
                    address?: string;
                    groupId?: any;
                }): _68.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _68.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.MsgLeaveGroupResponse;
                fromJSON(_: any): _68.MsgLeaveGroupResponse;
                toJSON(_: _68.MsgLeaveGroupResponse): unknown;
                fromPartial(_: {}): _68.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _67.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupInfoRequest;
                fromJSON(object: any): _67.QueryGroupInfoRequest;
                toJSON(message: _67.QueryGroupInfoRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _67.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _67.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupInfoResponse;
                fromJSON(object: any): _67.QueryGroupInfoResponse;
                toJSON(message: _67.QueryGroupInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    };
                }): _67.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _67.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _67.QueryGroupPolicyInfoRequest;
                toJSON(message: _67.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _67.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _67.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _67.QueryGroupPolicyInfoResponse;
                toJSON(message: _67.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    };
                }): _67.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _67.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupMembersRequest;
                fromJSON(object: any): _67.QueryGroupMembersRequest;
                toJSON(message: _67.QueryGroupMembersRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _67.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _67.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupMembersResponse;
                fromJSON(object: any): _67.QueryGroupMembersResponse;
                toJSON(message: _67.QueryGroupMembersResponse): unknown;
                fromPartial(object: {
                    members?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _67.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _67.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupsByAdminRequest;
                fromJSON(object: any): _67.QueryGroupsByAdminRequest;
                toJSON(message: _67.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _67.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _67.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupsByAdminResponse;
                fromJSON(object: any): _67.QueryGroupsByAdminResponse;
                toJSON(message: _67.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _67.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _67.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _67.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _67.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: {
                    groupId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _67.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _67.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _67.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _67.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _67.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _67.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _67.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _67.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: {
                    admin?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _67.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _67.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _67.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _67.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: {
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _67.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _67.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryProposalRequest;
                fromJSON(object: any): _67.QueryProposalRequest;
                toJSON(message: _67.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _67.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _67.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryProposalResponse;
                fromJSON(object: any): _67.QueryProposalResponse;
                toJSON(message: _67.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _69.ProposalStatus;
                        result?: _69.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _69.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _67.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _67.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _67.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _67.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _67.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _67.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _67.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _67.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _69.ProposalStatus;
                        result?: _69.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _69.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _67.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _67.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _67.QueryVoteByProposalVoterRequest;
                toJSON(message: _67.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _67.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _67.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _67.QueryVoteByProposalVoterResponse;
                toJSON(message: _67.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _69.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    };
                }): _67.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _67.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryVotesByProposalRequest;
                fromJSON(object: any): _67.QueryVotesByProposalRequest;
                toJSON(message: _67.QueryVotesByProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _67.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _67.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryVotesByProposalResponse;
                fromJSON(object: any): _67.QueryVotesByProposalResponse;
                toJSON(message: _67.QueryVotesByProposalResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _69.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _67.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _67.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryVotesByVoterRequest;
                fromJSON(object: any): _67.QueryVotesByVoterRequest;
                toJSON(message: _67.QueryVotesByVoterRequest): unknown;
                fromPartial(object: {
                    voter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _67.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _67.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryVotesByVoterResponse;
                fromJSON(object: any): _67.QueryVotesByVoterResponse;
                toJSON(message: _67.QueryVotesByVoterResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _69.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _67.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _67.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupsByMemberRequest;
                fromJSON(object: any): _67.QueryGroupsByMemberRequest;
                toJSON(message: _67.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _67.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _67.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryGroupsByMemberResponse;
                fromJSON(object: any): _67.QueryGroupsByMemberResponse;
                toJSON(message: _67.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: {
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _67.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _67.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryTallyResultRequest;
                fromJSON(object: any): _67.QueryTallyResultRequest;
                toJSON(message: _67.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _67.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _67.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryTallyResultResponse;
                fromJSON(object: any): _67.QueryTallyResultResponse;
                toJSON(message: _67.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _67.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _66.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GenesisState;
                fromJSON(object: any): _66.GenesisState;
                toJSON(message: _66.GenesisState): unknown;
                fromPartial(object: {
                    groupSeq?: any;
                    groups?: {
                        id?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        totalWeight?: string;
                        createdAt?: Date;
                    }[];
                    groupMembers?: {
                        groupId?: any;
                        member?: {
                            address?: string;
                            weight?: string;
                            metadata?: string;
                            addedAt?: Date;
                        };
                    }[];
                    groupPolicySeq?: any;
                    groupPolicies?: {
                        address?: string;
                        groupId?: any;
                        admin?: string;
                        metadata?: string;
                        version?: any;
                        decisionPolicy?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        createdAt?: Date;
                    }[];
                    proposalSeq?: any;
                    proposals?: {
                        id?: any;
                        address?: string;
                        metadata?: string;
                        proposers?: string[];
                        submitTime?: Date;
                        groupVersion?: any;
                        groupPolicyVersion?: any;
                        status?: _69.ProposalStatus;
                        result?: _69.ProposalResult;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        votingPeriodEnd?: Date;
                        executorResult?: _69.ProposalExecutorResult;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _69.VoteOption;
                        metadata?: string;
                        submitTime?: Date;
                    }[];
                }): _66.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _65.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.EventCreateGroup;
                fromJSON(object: any): _65.EventCreateGroup;
                toJSON(message: _65.EventCreateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _65.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _65.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.EventUpdateGroup;
                fromJSON(object: any): _65.EventUpdateGroup;
                toJSON(message: _65.EventUpdateGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                }): _65.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _65.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.EventCreateGroupPolicy;
                fromJSON(object: any): _65.EventCreateGroupPolicy;
                toJSON(message: _65.EventCreateGroupPolicy): unknown;
                fromPartial(object: {
                    address?: string;
                }): _65.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _65.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.EventUpdateGroupPolicy;
                fromJSON(object: any): _65.EventUpdateGroupPolicy;
                toJSON(message: _65.EventUpdateGroupPolicy): unknown;
                fromPartial(object: {
                    address?: string;
                }): _65.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _65.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.EventSubmitProposal;
                fromJSON(object: any): _65.EventSubmitProposal;
                toJSON(message: _65.EventSubmitProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _65.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _65.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.EventWithdrawProposal;
                fromJSON(object: any): _65.EventWithdrawProposal;
                toJSON(message: _65.EventWithdrawProposal): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _65.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _65.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.EventVote;
                fromJSON(object: any): _65.EventVote;
                toJSON(message: _65.EventVote): unknown;
                fromPartial(object: {
                    proposalId?: any;
                }): _65.EventVote;
            };
            EventExec: {
                encode(message: _65.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.EventExec;
                fromJSON(object: any): _65.EventExec;
                toJSON(message: _65.EventExec): unknown;
                fromPartial(object: {
                    proposalId?: any;
                    result?: _69.ProposalExecutorResult;
                }): _65.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _65.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.EventLeaveGroup;
                fromJSON(object: any): _65.EventLeaveGroup;
                toJSON(message: _65.EventLeaveGroup): unknown;
                fromPartial(object: {
                    groupId?: any;
                    address?: string;
                }): _65.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _205.QueryClientImpl;
            LCDQueryClient: typeof _188.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _72.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryParamsRequest;
                fromJSON(_: any): _72.QueryParamsRequest;
                toJSON(_: _72.QueryParamsRequest): unknown;
                fromPartial(_: {}): _72.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _72.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryParamsResponse;
                fromJSON(object: any): _72.QueryParamsResponse;
                toJSON(message: _72.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _72.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _72.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryInflationRequest;
                fromJSON(_: any): _72.QueryInflationRequest;
                toJSON(_: _72.QueryInflationRequest): unknown;
                fromPartial(_: {}): _72.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _72.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryInflationResponse;
                fromJSON(object: any): _72.QueryInflationResponse;
                toJSON(message: _72.QueryInflationResponse): unknown;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _72.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _72.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _72.QueryAnnualProvisionsRequest;
                toJSON(_: _72.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _72.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _72.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _72.QueryAnnualProvisionsResponse;
                toJSON(message: _72.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _72.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _71.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Minter;
                fromJSON(object: any): _71.Minter;
                toJSON(message: _71.Minter): unknown;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _71.Minter;
            };
            Params: {
                encode(message: _71.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Params;
                fromJSON(object: any): _71.Params;
                toJSON(message: _71.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: any;
                }): _71.Params;
            };
            GenesisState: {
                encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisState;
                fromJSON(object: any): _70.GenesisState;
                toJSON(message: _70.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: any;
                    };
                }): _70.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _221.MsgClientImpl;
            QueryClientImpl: typeof _206.QueryClientImpl;
            LCDQueryClient: typeof _189.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _78.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _78.MsgSend): {
                        typeUrl: string;
                        value: _78.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _78.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _78.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _78.MsgSend): {
                        typeUrl: string;
                        value: _78.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _78.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _78.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _78.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgSend;
                fromJSON(object: any): _78.MsgSend;
                toJSON(message: _78.MsgSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _78.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _78.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgSendResponse;
                fromJSON(_: any): _78.MsgSendResponse;
                toJSON(_: _78.MsgSendResponse): unknown;
                fromPartial(_: {}): _78.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _77.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryBalanceRequest;
                fromJSON(object: any): _77.QueryBalanceRequest;
                toJSON(message: _77.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                }): _77.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _77.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryBalanceResponse;
                fromJSON(object: any): _77.QueryBalanceResponse;
                toJSON(message: _77.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _77.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _77.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryOwnerRequest;
                fromJSON(object: any): _77.QueryOwnerRequest;
                toJSON(message: _77.QueryOwnerRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _77.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _77.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryOwnerResponse;
                fromJSON(object: any): _77.QueryOwnerResponse;
                toJSON(message: _77.QueryOwnerResponse): unknown;
                fromPartial(object: {
                    owner?: string;
                }): _77.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _77.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySupplyRequest;
                fromJSON(object: any): _77.QuerySupplyRequest;
                toJSON(message: _77.QuerySupplyRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _77.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _77.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QuerySupplyResponse;
                fromJSON(object: any): _77.QuerySupplyResponse;
                toJSON(message: _77.QuerySupplyResponse): unknown;
                fromPartial(object: {
                    amount?: any;
                }): _77.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _77.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryNFTsRequest;
                fromJSON(object: any): _77.QueryNFTsRequest;
                toJSON(message: _77.QueryNFTsRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    owner?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _77.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _77.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryNFTsResponse;
                fromJSON(object: any): _77.QueryNFTsResponse;
                toJSON(message: _77.QueryNFTsResponse): unknown;
                fromPartial(object: {
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _77.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _77.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryNFTRequest;
                fromJSON(object: any): _77.QueryNFTRequest;
                toJSON(message: _77.QueryNFTRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                }): _77.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _77.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryNFTResponse;
                fromJSON(object: any): _77.QueryNFTResponse;
                toJSON(message: _77.QueryNFTResponse): unknown;
                fromPartial(object: {
                    nft?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _77.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _77.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryClassRequest;
                fromJSON(object: any): _77.QueryClassRequest;
                toJSON(message: _77.QueryClassRequest): unknown;
                fromPartial(object: {
                    classId?: string;
                }): _77.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _77.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryClassResponse;
                fromJSON(object: any): _77.QueryClassResponse;
                toJSON(message: _77.QueryClassResponse): unknown;
                fromPartial(object: {
                    class?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _77.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _77.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryClassesRequest;
                fromJSON(object: any): _77.QueryClassesRequest;
                toJSON(message: _77.QueryClassesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _77.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _77.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryClassesResponse;
                fromJSON(object: any): _77.QueryClassesResponse;
                toJSON(message: _77.QueryClassesResponse): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _77.QueryClassesResponse;
            };
            Class: {
                encode(message: _76.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Class;
                fromJSON(object: any): _76.Class;
                toJSON(message: _76.Class): unknown;
                fromPartial(object: {
                    id?: string;
                    name?: string;
                    symbol?: string;
                    description?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _76.Class;
            };
            NFT: {
                encode(message: _76.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.NFT;
                fromJSON(object: any): _76.NFT;
                toJSON(message: _76.NFT): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    uri?: string;
                    uriHash?: string;
                    data?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _76.NFT;
            };
            GenesisState: {
                encode(message: _75.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GenesisState;
                fromJSON(object: any): _75.GenesisState;
                toJSON(message: _75.GenesisState): unknown;
                fromPartial(object: {
                    classes?: {
                        id?: string;
                        name?: string;
                        symbol?: string;
                        description?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    entries?: {
                        owner?: string;
                        nfts?: {
                            classId?: string;
                            id?: string;
                            uri?: string;
                            uriHash?: string;
                            data?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }[];
                }): _75.GenesisState;
            };
            Entry: {
                encode(message: _75.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Entry;
                fromJSON(object: any): _75.Entry;
                toJSON(message: _75.Entry): unknown;
                fromPartial(object: {
                    owner?: string;
                    nfts?: {
                        classId?: string;
                        id?: string;
                        uri?: string;
                        uriHash?: string;
                        data?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _75.Entry;
            };
            EventSend: {
                encode(message: _74.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.EventSend;
                fromJSON(object: any): _74.EventSend;
                toJSON(message: _74.EventSend): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    sender?: string;
                    receiver?: string;
                }): _74.EventSend;
            };
            EventMint: {
                encode(message: _74.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.EventMint;
                fromJSON(object: any): _74.EventMint;
                toJSON(message: _74.EventMint): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _74.EventMint;
            };
            EventBurn: {
                encode(message: _74.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.EventBurn;
                fromJSON(object: any): _74.EventBurn;
                toJSON(message: _74.EventBurn): unknown;
                fromPartial(object: {
                    classId?: string;
                    id?: string;
                    owner?: string;
                }): _74.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _79.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.TableDescriptor;
                fromJSON(object: any): _79.TableDescriptor;
                toJSON(message: _79.TableDescriptor): unknown;
                fromPartial(object: {
                    primaryKey?: {
                        fields?: string;
                        autoIncrement?: boolean;
                    };
                    index?: {
                        fields?: string;
                        id?: number;
                        unique?: boolean;
                    }[];
                    id?: number;
                }): _79.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _79.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.PrimaryKeyDescriptor;
                fromJSON(object: any): _79.PrimaryKeyDescriptor;
                toJSON(message: _79.PrimaryKeyDescriptor): unknown;
                fromPartial(object: {
                    fields?: string;
                    autoIncrement?: boolean;
                }): _79.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _79.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.SecondaryIndexDescriptor;
                fromJSON(object: any): _79.SecondaryIndexDescriptor;
                toJSON(message: _79.SecondaryIndexDescriptor): unknown;
                fromPartial(object: {
                    fields?: string;
                    id?: number;
                    unique?: boolean;
                }): _79.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _79.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.SingletonDescriptor;
                fromJSON(object: any): _79.SingletonDescriptor;
                toJSON(message: _79.SingletonDescriptor): unknown;
                fromPartial(object: {
                    id?: number;
                }): _79.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _80.StorageType;
            storageTypeToJSON(object: _80.StorageType): string;
            StorageType: typeof _80.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _80.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ModuleSchemaDescriptor;
                fromJSON(object: any): _80.ModuleSchemaDescriptor;
                toJSON(message: _80.ModuleSchemaDescriptor): unknown;
                fromPartial(object: {
                    schemaFile?: {
                        id?: number;
                        protoFileName?: string;
                        storageType?: _80.StorageType;
                    }[];
                    prefix?: Uint8Array;
                }): _80.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _80.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _80.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _80.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: {
                    id?: number;
                    protoFileName?: string;
                    storageType?: _80.StorageType;
                }): _80.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _207.QueryClientImpl;
            LCDQueryClient: typeof _190.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _82.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsRequest;
                fromJSON(object: any): _82.QueryParamsRequest;
                toJSON(message: _82.QueryParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _82.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _82.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryParamsResponse;
                fromJSON(object: any): _82.QueryParamsResponse;
                toJSON(message: _82.QueryParamsResponse): unknown;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _82.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _82.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QuerySubspacesRequest;
                fromJSON(_: any): _82.QuerySubspacesRequest;
                toJSON(_: _82.QuerySubspacesRequest): unknown;
                fromPartial(_: {}): _82.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _82.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QuerySubspacesResponse;
                fromJSON(object: any): _82.QuerySubspacesResponse;
                toJSON(message: _82.QuerySubspacesResponse): unknown;
                fromPartial(object: {
                    subspaces?: {
                        subspace?: string;
                        keys?: string[];
                    }[];
                }): _82.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _82.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Subspace;
                fromJSON(object: any): _82.Subspace;
                toJSON(message: _82.Subspace): unknown;
                fromPartial(object: {
                    subspace?: string;
                    keys?: string[];
                }): _82.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _81.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ParameterChangeProposal;
                fromJSON(object: any): _81.ParameterChangeProposal;
                toJSON(message: _81.ParameterChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _81.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _81.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.ParamChange;
                fromJSON(object: any): _81.ParamChange;
                toJSON(message: _81.ParamChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _81.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _222.MsgClientImpl;
            QueryClientImpl: typeof _208.QueryClientImpl;
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _86.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _86.MsgUnjail): {
                        typeUrl: string;
                        value: _86.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _86.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _86.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _86.MsgUnjail): {
                        typeUrl: string;
                        value: _86.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _86.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _86.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _86.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUnjail;
                fromJSON(object: any): _86.MsgUnjail;
                toJSON(message: _86.MsgUnjail): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _86.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _86.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.MsgUnjailResponse;
                fromJSON(_: any): _86.MsgUnjailResponse;
                toJSON(_: _86.MsgUnjailResponse): unknown;
                fromPartial(_: {}): _86.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _85.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorSigningInfo;
                fromJSON(object: any): _85.ValidatorSigningInfo;
                toJSON(message: _85.ValidatorSigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    startHeight?: any;
                    indexOffset?: any;
                    jailedUntil?: Date;
                    tombstoned?: boolean;
                    missedBlocksCounter?: any;
                }): _85.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                fromJSON(object: any): _85.Params;
                toJSON(message: _85.Params): unknown;
                fromPartial(object: {
                    signedBlocksWindow?: any;
                    minSignedPerWindow?: Uint8Array;
                    downtimeJailDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    slashFractionDoubleSign?: Uint8Array;
                    slashFractionDowntime?: Uint8Array;
                }): _85.Params;
            };
            QueryParamsRequest: {
                encode(_: _84.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsRequest;
                fromJSON(_: any): _84.QueryParamsRequest;
                toJSON(_: _84.QueryParamsRequest): unknown;
                fromPartial(_: {}): _84.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _84.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QueryParamsResponse;
                fromJSON(object: any): _84.QueryParamsResponse;
                toJSON(message: _84.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                }): _84.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _84.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QuerySigningInfoRequest;
                fromJSON(object: any): _84.QuerySigningInfoRequest;
                toJSON(message: _84.QuerySigningInfoRequest): unknown;
                fromPartial(object: {
                    consAddress?: string;
                }): _84.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _84.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QuerySigningInfoResponse;
                fromJSON(object: any): _84.QuerySigningInfoResponse;
                toJSON(message: _84.QuerySigningInfoResponse): unknown;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _84.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _84.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QuerySigningInfosRequest;
                fromJSON(object: any): _84.QuerySigningInfosRequest;
                toJSON(message: _84.QuerySigningInfosRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _84.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _84.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.QuerySigningInfosResponse;
                fromJSON(object: any): _84.QuerySigningInfosResponse;
                toJSON(message: _84.QuerySigningInfosResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _84.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _83.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GenesisState;
                fromJSON(object: any): _83.GenesisState;
                toJSON(message: _83.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: any;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                    signingInfos?: {
                        address?: string;
                        validatorSigningInfo?: {
                            address?: string;
                            startHeight?: any;
                            indexOffset?: any;
                            jailedUntil?: Date;
                            tombstoned?: boolean;
                            missedBlocksCounter?: any;
                        };
                    }[];
                    missedBlocks?: {
                        address?: string;
                        missedBlocks?: {
                            index?: any;
                            missed?: boolean;
                        }[];
                    }[];
                }): _83.GenesisState;
            };
            SigningInfo: {
                encode(message: _83.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.SigningInfo;
                fromJSON(object: any): _83.SigningInfo;
                toJSON(message: _83.SigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    validatorSigningInfo?: {
                        address?: string;
                        startHeight?: any;
                        indexOffset?: any;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: any;
                    };
                }): _83.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _83.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ValidatorMissedBlocks;
                fromJSON(object: any): _83.ValidatorMissedBlocks;
                toJSON(message: _83.ValidatorMissedBlocks): unknown;
                fromPartial(object: {
                    address?: string;
                    missedBlocks?: {
                        index?: any;
                        missed?: boolean;
                    }[];
                }): _83.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _83.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MissedBlock;
                fromJSON(object: any): _83.MissedBlock;
                toJSON(message: _83.MissedBlock): unknown;
                fromPartial(object: {
                    index?: any;
                    missed?: boolean;
                }): _83.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _209.QueryClientImpl;
            LCDQueryClient: typeof _192.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _91.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _91.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _91.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _91.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _91.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _91.MsgCreateValidator): {
                        typeUrl: string;
                        value: _91.MsgCreateValidator;
                    };
                    editValidator(value: _91.MsgEditValidator): {
                        typeUrl: string;
                        value: _91.MsgEditValidator;
                    };
                    delegate(value: _91.MsgDelegate): {
                        typeUrl: string;
                        value: _91.MsgDelegate;
                    };
                    beginRedelegate(value: _91.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _91.MsgBeginRedelegate;
                    };
                    undelegate(value: _91.MsgUndelegate): {
                        typeUrl: string;
                        value: _91.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _91.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _91.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _91.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _91.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _91.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _91.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _91.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _91.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _91.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _91.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _91.MsgCreateValidator): {
                        typeUrl: string;
                        value: _91.MsgCreateValidator;
                    };
                    editValidator(value: _91.MsgEditValidator): {
                        typeUrl: string;
                        value: _91.MsgEditValidator;
                    };
                    delegate(value: _91.MsgDelegate): {
                        typeUrl: string;
                        value: _91.MsgDelegate;
                    };
                    beginRedelegate(value: _91.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _91.MsgBeginRedelegate;
                    };
                    undelegate(value: _91.MsgUndelegate): {
                        typeUrl: string;
                        value: _91.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _91.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _91.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _91.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _91.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _91.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _91.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _91.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _91.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _91.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _91.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _91.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCreateValidator;
                fromJSON(object: any): _91.MsgCreateValidator;
                toJSON(message: _91.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _91.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _91.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgCreateValidatorResponse;
                fromJSON(_: any): _91.MsgCreateValidatorResponse;
                toJSON(_: _91.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _91.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _91.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgEditValidator;
                fromJSON(object: any): _91.MsgEditValidator;
                toJSON(message: _91.MsgEditValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _91.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _91.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgEditValidatorResponse;
                fromJSON(_: any): _91.MsgEditValidatorResponse;
                toJSON(_: _91.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _91.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _91.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgDelegate;
                fromJSON(object: any): _91.MsgDelegate;
                toJSON(message: _91.MsgDelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _91.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _91.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgDelegateResponse;
                fromJSON(_: any): _91.MsgDelegateResponse;
                toJSON(_: _91.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _91.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _91.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgBeginRedelegate;
                fromJSON(object: any): _91.MsgBeginRedelegate;
                toJSON(message: _91.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _91.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _91.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgBeginRedelegateResponse;
                fromJSON(object: any): _91.MsgBeginRedelegateResponse;
                toJSON(message: _91.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _91.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _91.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUndelegate;
                fromJSON(object: any): _91.MsgUndelegate;
                toJSON(message: _91.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _91.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _91.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.MsgUndelegateResponse;
                fromJSON(object: any): _91.MsgUndelegateResponse;
                toJSON(message: _91.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _91.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _90.BondStatus;
            bondStatusToJSON(object: _90.BondStatus): string;
            BondStatus: typeof _90.BondStatus;
            HistoricalInfo: {
                encode(message: _90.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.HistoricalInfo;
                fromJSON(object: any): _90.HistoricalInfo;
                toJSON(message: _90.HistoricalInfo): unknown;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _90.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _90.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _90.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.CommissionRates;
                fromJSON(object: any): _90.CommissionRates;
                toJSON(message: _90.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _90.CommissionRates;
            };
            Commission: {
                encode(message: _90.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Commission;
                fromJSON(object: any): _90.Commission;
                toJSON(message: _90.Commission): unknown;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _90.Commission;
            };
            Description: {
                encode(message: _90.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Description;
                fromJSON(object: any): _90.Description;
                toJSON(message: _90.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _90.Description;
            };
            Validator: {
                encode(message: _90.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Validator;
                fromJSON(object: any): _90.Validator;
                toJSON(message: _90.Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _90.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: any;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _90.Validator;
            };
            ValAddresses: {
                encode(message: _90.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ValAddresses;
                fromJSON(object: any): _90.ValAddresses;
                toJSON(message: _90.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _90.ValAddresses;
            };
            DVPair: {
                encode(message: _90.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.DVPair;
                fromJSON(object: any): _90.DVPair;
                toJSON(message: _90.DVPair): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _90.DVPair;
            };
            DVPairs: {
                encode(message: _90.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.DVPairs;
                fromJSON(object: any): _90.DVPairs;
                toJSON(message: _90.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _90.DVPairs;
            };
            DVVTriplet: {
                encode(message: _90.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.DVVTriplet;
                fromJSON(object: any): _90.DVVTriplet;
                toJSON(message: _90.DVVTriplet): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _90.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _90.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.DVVTriplets;
                fromJSON(object: any): _90.DVVTriplets;
                toJSON(message: _90.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _90.DVVTriplets;
            };
            Delegation: {
                encode(message: _90.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Delegation;
                fromJSON(object: any): _90.Delegation;
                toJSON(message: _90.Delegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _90.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _90.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.UnbondingDelegation;
                fromJSON(object: any): _90.UnbondingDelegation;
                toJSON(message: _90.UnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _90.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _90.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.UnbondingDelegationEntry;
                fromJSON(object: any): _90.UnbondingDelegationEntry;
                toJSON(message: _90.UnbondingDelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _90.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _90.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RedelegationEntry;
                fromJSON(object: any): _90.RedelegationEntry;
                toJSON(message: _90.RedelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _90.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _90.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Redelegation;
                fromJSON(object: any): _90.Redelegation;
                toJSON(message: _90.Redelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _90.Redelegation;
            };
            Params: {
                encode(message: _90.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Params;
                fromJSON(object: any): _90.Params;
                toJSON(message: _90.Params): unknown;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _90.Params;
            };
            DelegationResponse: {
                encode(message: _90.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.DelegationResponse;
                fromJSON(object: any): _90.DelegationResponse;
                toJSON(message: _90.DelegationResponse): unknown;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _90.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _90.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RedelegationEntryResponse;
                fromJSON(object: any): _90.RedelegationEntryResponse;
                toJSON(message: _90.RedelegationEntryResponse): unknown;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _90.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _90.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.RedelegationResponse;
                fromJSON(object: any): _90.RedelegationResponse;
                toJSON(message: _90.RedelegationResponse): unknown;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _90.RedelegationResponse;
            };
            Pool: {
                encode(message: _90.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Pool;
                fromJSON(object: any): _90.Pool;
                toJSON(message: _90.Pool): unknown;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _90.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _89.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorsRequest;
                fromJSON(object: any): _89.QueryValidatorsRequest;
                toJSON(message: _89.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _89.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorsResponse;
                fromJSON(object: any): _89.QueryValidatorsResponse;
                toJSON(message: _89.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _90.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _89.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _89.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorRequest;
                fromJSON(object: any): _89.QueryValidatorRequest;
                toJSON(message: _89.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _89.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _89.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorResponse;
                fromJSON(object: any): _89.QueryValidatorResponse;
                toJSON(message: _89.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _90.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _89.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _89.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _89.QueryValidatorDelegationsRequest;
                toJSON(message: _89.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _89.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _89.QueryValidatorDelegationsResponse;
                toJSON(message: _89.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _89.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _89.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _89.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _89.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _89.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _89.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _89.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _89.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _89.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegationRequest;
                fromJSON(object: any): _89.QueryDelegationRequest;
                toJSON(message: _89.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _89.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _89.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegationResponse;
                fromJSON(object: any): _89.QueryDelegationResponse;
                toJSON(message: _89.QueryDelegationResponse): unknown;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _89.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _89.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _89.QueryUnbondingDelegationRequest;
                toJSON(message: _89.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _89.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _89.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _89.QueryUnbondingDelegationResponse;
                toJSON(message: _89.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _89.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _89.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _89.QueryDelegatorDelegationsRequest;
                toJSON(message: _89.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _89.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _89.QueryDelegatorDelegationsResponse;
                toJSON(message: _89.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _89.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _89.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _89.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _89.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _89.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _89.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _89.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _89.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _89.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryRedelegationsRequest;
                fromJSON(object: any): _89.QueryRedelegationsRequest;
                toJSON(message: _89.QueryRedelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _89.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryRedelegationsResponse;
                fromJSON(object: any): _89.QueryRedelegationsResponse;
                toJSON(message: _89.QueryRedelegationsResponse): unknown;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _89.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _89.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _89.QueryDelegatorValidatorsRequest;
                toJSON(message: _89.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _89.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _89.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _89.QueryDelegatorValidatorsResponse;
                toJSON(message: _89.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _90.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _89.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _89.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _89.QueryDelegatorValidatorRequest;
                toJSON(message: _89.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _89.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _89.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _89.QueryDelegatorValidatorResponse;
                toJSON(message: _89.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _90.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _89.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _89.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryHistoricalInfoRequest;
                fromJSON(object: any): _89.QueryHistoricalInfoRequest;
                toJSON(message: _89.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: any;
                }): _89.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _89.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryHistoricalInfoResponse;
                fromJSON(object: any): _89.QueryHistoricalInfoResponse;
                toJSON(message: _89.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _90.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: any;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _89.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _89.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryPoolRequest;
                fromJSON(_: any): _89.QueryPoolRequest;
                toJSON(_: _89.QueryPoolRequest): unknown;
                fromPartial(_: {}): _89.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _89.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryPoolResponse;
                fromJSON(object: any): _89.QueryPoolResponse;
                toJSON(message: _89.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _89.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _89.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryParamsRequest;
                fromJSON(_: any): _89.QueryParamsRequest;
                toJSON(_: _89.QueryParamsRequest): unknown;
                fromPartial(_: {}): _89.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _89.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryParamsResponse;
                fromJSON(object: any): _89.QueryParamsResponse;
                toJSON(message: _89.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _89.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _88.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.GenesisState;
                fromJSON(object: any): _88.GenesisState;
                toJSON(message: _88.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: any;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _90.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _88.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _88.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.LastValidatorPower;
                fromJSON(object: any): _88.LastValidatorPower;
                toJSON(message: _88.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: any;
                }): _88.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _87.AuthorizationType;
            authorizationTypeToJSON(object: _87.AuthorizationType): string;
            AuthorizationType: typeof _87.AuthorizationType;
            StakeAuthorization: {
                encode(message: _87.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.StakeAuthorization;
                fromJSON(object: any): _87.StakeAuthorization;
                toJSON(message: _87.StakeAuthorization): unknown;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _87.AuthorizationType;
                }): _87.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _87.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.StakeAuthorization_Validators;
                fromJSON(object: any): _87.StakeAuthorization_Validators;
                toJSON(message: _87.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _87.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _92.SignMode;
                signModeToJSON(object: _92.SignMode): string;
                SignMode: typeof _92.SignMode;
                SignatureDescriptors: {
                    encode(message: _92.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SignatureDescriptors;
                    fromJSON(object: any): _92.SignatureDescriptors;
                    toJSON(message: _92.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _92.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                    }): _92.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _92.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SignatureDescriptor;
                    fromJSON(object: any): _92.SignatureDescriptor;
                    toJSON(message: _92.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _92.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: any;
                    }): _92.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _92.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SignatureDescriptor_Data;
                    fromJSON(object: any): _92.SignatureDescriptor_Data;
                    toJSON(message: _92.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _92.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _92.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _92.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _92.SignatureDescriptor_Data_Single;
                    toJSON(message: _92.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _92.SignMode;
                        signature?: Uint8Array;
                    }): _92.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _92.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _92.SignatureDescriptor_Data_Multi;
                    toJSON(message: _92.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _92.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _210.ServiceClientImpl;
            Tx: {
                encode(message: _94.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Tx;
                fromJSON(object: any): _94.Tx;
                toJSON(message: _94.Tx): unknown;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: any;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _92.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: any;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _94.Tx;
            };
            TxRaw: {
                encode(message: _94.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.TxRaw;
                fromJSON(object: any): _94.TxRaw;
                toJSON(message: _94.TxRaw): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _94.TxRaw;
            };
            SignDoc: {
                encode(message: _94.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.SignDoc;
                fromJSON(object: any): _94.SignDoc;
                toJSON(message: _94.SignDoc): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: any;
                }): _94.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _94.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.SignDocDirectAux;
                fromJSON(object: any): _94.SignDocDirectAux;
                toJSON(message: _94.SignDocDirectAux): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: any;
                    sequence?: any;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _94.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _94.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.TxBody;
                fromJSON(object: any): _94.TxBody;
                toJSON(message: _94.TxBody): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: any;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _94.TxBody;
            };
            AuthInfo: {
                encode(message: _94.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.AuthInfo;
                fromJSON(object: any): _94.AuthInfo;
                toJSON(message: _94.AuthInfo): unknown;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _92.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: any;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: any;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _94.AuthInfo;
            };
            SignerInfo: {
                encode(message: _94.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.SignerInfo;
                fromJSON(object: any): _94.SignerInfo;
                toJSON(message: _94.SignerInfo): unknown;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _92.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }): _94.SignerInfo;
            };
            ModeInfo: {
                encode(message: _94.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ModeInfo;
                fromJSON(object: any): _94.ModeInfo;
                toJSON(message: _94.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _92.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _94.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _94.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ModeInfo_Single;
                fromJSON(object: any): _94.ModeInfo_Single;
                toJSON(message: _94.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _92.SignMode;
                }): _94.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _94.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.ModeInfo_Multi;
                fromJSON(object: any): _94.ModeInfo_Multi;
                toJSON(message: _94.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _94.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _94.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Fee;
                fromJSON(object: any): _94.Fee;
                toJSON(message: _94.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                }): _94.Fee;
            };
            Tip: {
                encode(message: _94.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Tip;
                fromJSON(object: any): _94.Tip;
                toJSON(message: _94.Tip): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _94.Tip;
            };
            AuxSignerData: {
                encode(message: _94.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.AuxSignerData;
                fromJSON(object: any): _94.AuxSignerData;
                toJSON(message: _94.AuxSignerData): unknown;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: any;
                        sequence?: any;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _92.SignMode;
                    sig?: Uint8Array;
                }): _94.AuxSignerData;
            };
            orderByFromJSON(object: any): _93.OrderBy;
            orderByToJSON(object: _93.OrderBy): string;
            broadcastModeFromJSON(object: any): _93.BroadcastMode;
            broadcastModeToJSON(object: _93.BroadcastMode): string;
            OrderBy: typeof _93.OrderBy;
            BroadcastMode: typeof _93.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _93.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GetTxsEventRequest;
                fromJSON(object: any): _93.GetTxsEventRequest;
                toJSON(message: _93.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _93.OrderBy;
                }): _93.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _93.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GetTxsEventResponse;
                fromJSON(object: any): _93.GetTxsEventResponse;
                toJSON(message: _93.GetTxsEventResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _92.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _93.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _93.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.BroadcastTxRequest;
                fromJSON(object: any): _93.BroadcastTxRequest;
                toJSON(message: _93.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _93.BroadcastMode;
                }): _93.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _93.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.BroadcastTxResponse;
                fromJSON(object: any): _93.BroadcastTxResponse;
                toJSON(message: _93.BroadcastTxResponse): unknown;
                fromPartial(object: {
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _93.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _93.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SimulateRequest;
                fromJSON(object: any): _93.SimulateRequest;
                toJSON(message: _93.SimulateRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _92.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _93.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _93.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.SimulateResponse;
                fromJSON(object: any): _93.SimulateResponse;
                toJSON(message: _93.SimulateResponse): unknown;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: any;
                        gasUsed?: any;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _93.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _93.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GetTxRequest;
                fromJSON(object: any): _93.GetTxRequest;
                toJSON(message: _93.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _93.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _93.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GetTxResponse;
                fromJSON(object: any): _93.GetTxResponse;
                toJSON(message: _93.GetTxResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _92.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _93.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _93.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GetBlockWithTxsRequest;
                fromJSON(object: any): _93.GetBlockWithTxsRequest;
                toJSON(message: _93.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _93.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _93.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.GetBlockWithTxsResponse;
                fromJSON(object: any): _93.GetBlockWithTxsResponse;
                toJSON(message: _93.GetBlockWithTxsResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _92.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: any;
                                    validatorPower?: any;
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: any;
                                                    app?: any;
                                                };
                                                chainId?: string;
                                                height?: any;
                                                time?: Date;
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: any;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            };
                                            totalVotingPower?: any;
                                        };
                                    };
                                    commonHeight?: any;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    totalVotingPower?: any;
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _93.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _224.MsgClientImpl;
            QueryClientImpl: typeof _211.QueryClientImpl;
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _96.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _96.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _96.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _96.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _96.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _96.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _96.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _96.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _96.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _96.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _96.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _96.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _96.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _96.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _96.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _96.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _96.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _96.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _97.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Plan;
                fromJSON(object: any): _97.Plan;
                toJSON(message: _97.Plan): unknown;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: any;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _97.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _97.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.SoftwareUpgradeProposal;
                fromJSON(object: any): _97.SoftwareUpgradeProposal;
                toJSON(message: _97.SoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _97.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _97.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _97.CancelSoftwareUpgradeProposal;
                toJSON(message: _97.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _97.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _97.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.ModuleVersion;
                fromJSON(object: any): _97.ModuleVersion;
                toJSON(message: _97.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: any;
                }): _97.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _96.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgSoftwareUpgrade;
                fromJSON(object: any): _96.MsgSoftwareUpgrade;
                toJSON(message: _96.MsgSoftwareUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _96.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _96.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _96.MsgSoftwareUpgradeResponse;
                toJSON(_: _96.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: {}): _96.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _96.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCancelUpgrade;
                fromJSON(object: any): _96.MsgCancelUpgrade;
                toJSON(message: _96.MsgCancelUpgrade): unknown;
                fromPartial(object: {
                    authority?: string;
                }): _96.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _96.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCancelUpgradeResponse;
                fromJSON(_: any): _96.MsgCancelUpgradeResponse;
                toJSON(_: _96.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: {}): _96.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _95.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryCurrentPlanRequest;
                fromJSON(_: any): _95.QueryCurrentPlanRequest;
                toJSON(_: _95.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _95.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _95.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryCurrentPlanResponse;
                fromJSON(object: any): _95.QueryCurrentPlanResponse;
                toJSON(message: _95.QueryCurrentPlanResponse): unknown;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _95.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _95.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryAppliedPlanRequest;
                fromJSON(object: any): _95.QueryAppliedPlanRequest;
                toJSON(message: _95.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _95.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _95.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryAppliedPlanResponse;
                fromJSON(object: any): _95.QueryAppliedPlanResponse;
                toJSON(message: _95.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: any;
                }): _95.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _95.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _95.QueryUpgradedConsensusStateRequest;
                toJSON(message: _95.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    lastHeight?: any;
                }): _95.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _95.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _95.QueryUpgradedConsensusStateResponse;
                toJSON(message: _95.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _95.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _95.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryModuleVersionsRequest;
                fromJSON(object: any): _95.QueryModuleVersionsRequest;
                toJSON(message: _95.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    moduleName?: string;
                }): _95.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _95.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryModuleVersionsResponse;
                fromJSON(object: any): _95.QueryModuleVersionsResponse;
                toJSON(message: _95.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: any;
                    }[];
                }): _95.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _95.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryAuthorityRequest;
                fromJSON(_: any): _95.QueryAuthorityRequest;
                toJSON(_: _95.QueryAuthorityRequest): unknown;
                fromPartial(_: {}): _95.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _95.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryAuthorityResponse;
                fromJSON(object: any): _95.QueryAuthorityResponse;
                toJSON(message: _95.QueryAuthorityResponse): unknown;
                fromPartial(object: {
                    address?: string;
                }): _95.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _225.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _98.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _98.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _98.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _98.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _98.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _98.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _98.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _98.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _98.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _98.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _98.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _98.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _98.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _98.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _98.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _98.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _98.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _98.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _98.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _98.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _98.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _98.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _98.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _98.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _98.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _98.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _98.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _99.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.BaseVestingAccount;
                fromJSON(object: any): _99.BaseVestingAccount;
                toJSON(message: _99.BaseVestingAccount): unknown;
                fromPartial(object: {
                    baseAccount?: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        accountNumber?: any;
                        sequence?: any;
                    };
                    originalVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedFree?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                }): _99.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _99.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ContinuousVestingAccount;
                fromJSON(object: any): _99.ContinuousVestingAccount;
                toJSON(message: _99.ContinuousVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    startTime?: any;
                }): _99.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _99.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.DelayedVestingAccount;
                fromJSON(object: any): _99.DelayedVestingAccount;
                toJSON(message: _99.DelayedVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                }): _99.DelayedVestingAccount;
            };
            Period: {
                encode(message: _99.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Period;
                fromJSON(object: any): _99.Period;
                toJSON(message: _99.Period): unknown;
                fromPartial(object: {
                    length?: any;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _99.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _99.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.PeriodicVestingAccount;
                fromJSON(object: any): _99.PeriodicVestingAccount;
                toJSON(message: _99.PeriodicVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _99.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _99.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.PermanentLockedAccount;
                fromJSON(object: any): _99.PermanentLockedAccount;
                toJSON(message: _99.PermanentLockedAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: any;
                            sequence?: any;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: any;
                    };
                }): _99.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _98.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCreateVestingAccount;
                fromJSON(object: any): _98.MsgCreateVestingAccount;
                toJSON(message: _98.MsgCreateVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: any;
                    delayed?: boolean;
                }): _98.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _98.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _98.MsgCreateVestingAccountResponse;
                toJSON(_: _98.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: {}): _98.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _98.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _98.MsgCreatePermanentLockedAccount;
                toJSON(message: _98.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _98.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _98.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _98.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _98.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: {}): _98.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _98.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _98.MsgCreatePeriodicVestingAccount;
                toJSON(message: _98.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: any;
                    vestingPeriods?: {
                        length?: any;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _98.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _98.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _98.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _98.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: {}): _98.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _212.MsgClientImpl;
                };
                bank: {
                    v1beta1: _213.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _214.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _215.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _216.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _217.MsgClientImpl;
                };
                gov: {
                    v1: _218.MsgClientImpl;
                    v1beta1: _219.MsgClientImpl;
                };
                group: {
                    v1: _220.MsgClientImpl;
                };
                nft: {
                    v1beta1: _221.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _222.MsgClientImpl;
                };
                staking: {
                    v1beta1: _223.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _224.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _225.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: _194.QueryClientImpl;
                };
                auth: {
                    v1beta1: _195.QueryClientImpl;
                };
                authz: {
                    v1beta1: _196.QueryClientImpl;
                };
                bank: {
                    v1beta1: _197.QueryClientImpl;
                };
                distribution: {
                    v1beta1: _199.QueryClientImpl;
                };
                evidence: {
                    v1beta1: _200.QueryClientImpl;
                };
                feegrant: {
                    v1beta1: _201.QueryClientImpl;
                };
                gov: {
                    v1: _202.QueryClientImpl;
                    v1beta1: _203.QueryClientImpl;
                };
                group: {
                    v1: _204.QueryClientImpl;
                };
                mint: {
                    v1beta1: _205.QueryClientImpl;
                };
                nft: {
                    v1beta1: _206.QueryClientImpl;
                };
                params: {
                    v1beta1: _207.QueryClientImpl;
                };
                slashing: {
                    v1beta1: _208.QueryClientImpl;
                };
                staking: {
                    v1beta1: _209.QueryClientImpl;
                };
                upgrade: {
                    v1beta1: _211.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _179.LCDQueryClient;
                };
                authz: {
                    v1beta1: _180.LCDQueryClient;
                };
                bank: {
                    v1beta1: _181.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _182.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _183.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _184.LCDQueryClient;
                };
                gov: {
                    v1: _185.LCDQueryClient;
                    v1beta1: _186.LCDQueryClient;
                };
                group: {
                    v1: _187.LCDQueryClient;
                };
                mint: {
                    v1beta1: _188.LCDQueryClient;
                };
                nft: {
                    v1beta1: _189.LCDQueryClient;
                };
                params: {
                    v1beta1: _190.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _191.LCDQueryClient;
                };
                staking: {
                    v1beta1: _192.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _193.LCDQueryClient;
                };
            };
        }>;
    };
}
