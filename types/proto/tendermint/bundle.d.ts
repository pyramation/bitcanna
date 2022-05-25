import * as _132 from "./abci/types";
import * as _133 from "./crypto/keys";
import * as _134 from "./crypto/proof";
import * as _135 from "./libs/bits/types";
import * as _136 from "./p2p/types";
import * as _137 from "./types/block";
import * as _138 from "./types/evidence";
import * as _139 from "./types/params";
import * as _140 from "./types/types";
import * as _141 from "./types/validator";
import * as _142 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _132.CheckTxType;
        checkTxTypeToJSON(object: _132.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _132.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _132.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _132.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _132.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _132.EvidenceType;
        evidenceTypeToJSON(object: _132.EvidenceType): string;
        CheckTxType: typeof _132.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _132.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _132.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _132.EvidenceType;
        Request: {
            encode(message: _132.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Request;
            fromJSON(object: any): _132.Request;
            toJSON(message: _132.Request): unknown;
            fromPartial<I extends {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
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
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _132.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _132.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: any;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            } & {
                echo?: {
                    message?: string;
                } & {
                    message?: string;
                } & Record<Exclude<keyof I["echo"], "message">, never>;
                flush?: {} & {} & Record<Exclude<keyof I["flush"], never>, never>;
                info?: {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                } & {
                    version?: string;
                    blockVersion?: any;
                    p2pVersion?: any;
                } & Record<Exclude<keyof I["info"], keyof _132.RequestInfo>, never>;
                setOption?: {
                    key?: string;
                    value?: string;
                } & {
                    key?: string;
                    value?: string;
                } & Record<Exclude<keyof I["setOption"], keyof _132.RequestSetOption>, never>;
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                } & {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    } & {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        } & {
                            maxBytes?: any;
                            maxGas?: any;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["block"], keyof _132.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["evidence"], keyof _139.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I["initChain"]["consensusParams"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I["initChain"]["consensusParams"], keyof _132.ConsensusParams>, never>;
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I["initChain"]["validators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I["initChain"]["validators"][number], keyof _132.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["initChain"]["validators"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    appStateBytes?: Uint8Array;
                    initialHeight?: any;
                } & Record<Exclude<keyof I["initChain"], keyof _132.RequestInitChain>, never>;
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                } & {
                    data?: Uint8Array;
                    path?: string;
                    height?: any;
                    prove?: boolean;
                } & Record<Exclude<keyof I["query"], keyof _132.RequestQuery>, never>;
                beginBlock?: {
                    hash?: Uint8Array;
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
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _132.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[];
                } & {
                    hash?: Uint8Array;
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
                    } & {
                        version?: {
                            block?: any;
                            app?: any;
                        } & {
                            block?: any;
                            app?: any;
                        } & Record<Exclude<keyof I["beginBlock"]["header"]["version"], keyof _142.Consensus>, never>;
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I["beginBlock"]["header"]["lastBlockId"], keyof _140.BlockID>, never>;
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & Record<Exclude<keyof I["beginBlock"]["header"], keyof _140.Header>, never>;
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    } & {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[] & ({
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        } & {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            } & {
                                address?: Uint8Array;
                                power?: any;
                            } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number]["validator"], keyof _132.Validator>, never>;
                            signedLastBlock?: boolean;
                        } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"][number], keyof _132.VoteInfo>, never>)[] & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"]["votes"], keyof {
                            validator?: {
                                address?: Uint8Array;
                                power?: any;
                            };
                            signedLastBlock?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I["beginBlock"]["lastCommitInfo"], keyof _132.LastCommitInfo>, never>;
                    byzantineValidators?: {
                        type?: _132.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[] & ({
                        type?: _132.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    } & {
                        type?: _132.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        } & {
                            address?: Uint8Array;
                            power?: any;
                        } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number]["validator"], keyof _132.Validator>, never>;
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    } & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"][number], keyof _132.Evidence>, never>)[] & Record<Exclude<keyof I["beginBlock"]["byzantineValidators"], keyof {
                        type?: _132.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        height?: any;
                        time?: Date;
                        totalVotingPower?: any;
                    }[]>, never>;
                } & Record<Exclude<keyof I["beginBlock"], keyof _132.RequestBeginBlock>, never>;
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _132.CheckTxType;
                } & {
                    tx?: Uint8Array;
                    type?: _132.CheckTxType;
                } & Record<Exclude<keyof I["checkTx"], keyof _132.RequestCheckTx>, never>;
                deliverTx?: {
                    tx?: Uint8Array;
                } & {
                    tx?: Uint8Array;
                } & Record<Exclude<keyof I["deliverTx"], "tx">, never>;
                endBlock?: {
                    height?: any;
                } & {
                    height?: any;
                } & Record<Exclude<keyof I["endBlock"], "height">, never>;
                commit?: {} & {} & Record<Exclude<keyof I["commit"], never>, never>;
                listSnapshots?: {} & {} & Record<Exclude<keyof I["listSnapshots"], never>, never>;
                offerSnapshot?: {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                } & {
                    snapshot?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & Record<Exclude<keyof I["offerSnapshot"]["snapshot"], keyof _132.Snapshot>, never>;
                    appHash?: Uint8Array;
                } & Record<Exclude<keyof I["offerSnapshot"], keyof _132.RequestOfferSnapshot>, never>;
                loadSnapshotChunk?: {
                    height?: any;
                    format?: number;
                    chunk?: number;
                } & {
                    height?: any;
                    format?: number;
                    chunk?: number;
                } & Record<Exclude<keyof I["loadSnapshotChunk"], keyof _132.RequestLoadSnapshotChunk>, never>;
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                } & {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                } & Record<Exclude<keyof I["applySnapshotChunk"], keyof _132.RequestApplySnapshotChunk>, never>;
            } & Record<Exclude<keyof I, keyof _132.Request>, never>>(object: I): _132.Request;
        };
        RequestEcho: {
            encode(message: _132.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestEcho;
            fromJSON(object: any): _132.RequestEcho;
            toJSON(message: _132.RequestEcho): unknown;
            fromPartial<I_1 extends {
                message?: string;
            } & {
                message?: string;
            } & Record<Exclude<keyof I_1, "message">, never>>(object: I_1): _132.RequestEcho;
        };
        RequestFlush: {
            encode(_: _132.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestFlush;
            fromJSON(_: any): _132.RequestFlush;
            toJSON(_: _132.RequestFlush): unknown;
            fromPartial<I_2 extends {} & {} & Record<Exclude<keyof I_2, never>, never>>(_: I_2): _132.RequestFlush;
        };
        RequestInfo: {
            encode(message: _132.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestInfo;
            fromJSON(object: any): _132.RequestInfo;
            toJSON(message: _132.RequestInfo): unknown;
            fromPartial<I_3 extends {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            } & {
                version?: string;
                blockVersion?: any;
                p2pVersion?: any;
            } & Record<Exclude<keyof I_3, keyof _132.RequestInfo>, never>>(object: I_3): _132.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _132.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestSetOption;
            fromJSON(object: any): _132.RequestSetOption;
            toJSON(message: _132.RequestSetOption): unknown;
            fromPartial<I_4 extends {
                key?: string;
                value?: string;
            } & {
                key?: string;
                value?: string;
            } & Record<Exclude<keyof I_4, keyof _132.RequestSetOption>, never>>(object: I_4): _132.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _132.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestInitChain;
            fromJSON(object: any): _132.RequestInitChain;
            toJSON(message: _132.RequestInitChain): unknown;
            fromPartial<I_5 extends {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            } & {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                } & {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    } & {
                        maxBytes?: any;
                        maxGas?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["block"], keyof _132.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["evidence"], keyof _139.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_5["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_5["consensusParams"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_5["consensusParams"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_5["consensusParams"], keyof _132.ConsensusParams>, never>;
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_5["validators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_5["validators"][number], keyof _132.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_5["validators"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                appStateBytes?: Uint8Array;
                initialHeight?: any;
            } & Record<Exclude<keyof I_5, keyof _132.RequestInitChain>, never>>(object: I_5): _132.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _132.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestQuery;
            fromJSON(object: any): _132.RequestQuery;
            toJSON(message: _132.RequestQuery): unknown;
            fromPartial<I_6 extends {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            } & {
                data?: Uint8Array;
                path?: string;
                height?: any;
                prove?: boolean;
            } & Record<Exclude<keyof I_6, keyof _132.RequestQuery>, never>>(object: I_6): _132.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _132.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestBeginBlock;
            fromJSON(object: any): _132.RequestBeginBlock;
            toJSON(message: _132.RequestBeginBlock): unknown;
            fromPartial<I_7 extends {
                hash?: Uint8Array;
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
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _132.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[];
            } & {
                hash?: Uint8Array;
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
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_7["header"]["version"], keyof _142.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_7["header"]["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_7["header"]["lastBlockId"], keyof _140.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_7["header"], keyof _140.Header>, never>;
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[];
                } & {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[] & ({
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    } & {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        } & {
                            address?: Uint8Array;
                            power?: any;
                        } & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"][number]["validator"], keyof _132.Validator>, never>;
                        signedLastBlock?: boolean;
                    } & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"][number], keyof _132.VoteInfo>, never>)[] & Record<Exclude<keyof I_7["lastCommitInfo"]["votes"], keyof {
                        validator?: {
                            address?: Uint8Array;
                            power?: any;
                        };
                        signedLastBlock?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7["lastCommitInfo"], keyof _132.LastCommitInfo>, never>;
                byzantineValidators?: {
                    type?: _132.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[] & ({
                    type?: _132.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                } & {
                    type?: _132.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    } & {
                        address?: Uint8Array;
                        power?: any;
                    } & Record<Exclude<keyof I_7["byzantineValidators"][number]["validator"], keyof _132.Validator>, never>;
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                } & Record<Exclude<keyof I_7["byzantineValidators"][number], keyof _132.Evidence>, never>)[] & Record<Exclude<keyof I_7["byzantineValidators"], keyof {
                    type?: _132.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    height?: any;
                    time?: Date;
                    totalVotingPower?: any;
                }[]>, never>;
            } & Record<Exclude<keyof I_7, keyof _132.RequestBeginBlock>, never>>(object: I_7): _132.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _132.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestCheckTx;
            fromJSON(object: any): _132.RequestCheckTx;
            toJSON(message: _132.RequestCheckTx): unknown;
            fromPartial<I_8 extends {
                tx?: Uint8Array;
                type?: _132.CheckTxType;
            } & {
                tx?: Uint8Array;
                type?: _132.CheckTxType;
            } & Record<Exclude<keyof I_8, keyof _132.RequestCheckTx>, never>>(object: I_8): _132.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _132.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestDeliverTx;
            fromJSON(object: any): _132.RequestDeliverTx;
            toJSON(message: _132.RequestDeliverTx): unknown;
            fromPartial<I_9 extends {
                tx?: Uint8Array;
            } & {
                tx?: Uint8Array;
            } & Record<Exclude<keyof I_9, "tx">, never>>(object: I_9): _132.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _132.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestEndBlock;
            fromJSON(object: any): _132.RequestEndBlock;
            toJSON(message: _132.RequestEndBlock): unknown;
            fromPartial<I_10 extends {
                height?: any;
            } & {
                height?: any;
            } & Record<Exclude<keyof I_10, "height">, never>>(object: I_10): _132.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _132.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestCommit;
            fromJSON(_: any): _132.RequestCommit;
            toJSON(_: _132.RequestCommit): unknown;
            fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): _132.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _132.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestListSnapshots;
            fromJSON(_: any): _132.RequestListSnapshots;
            toJSON(_: _132.RequestListSnapshots): unknown;
            fromPartial<I_12 extends {} & {} & Record<Exclude<keyof I_12, never>, never>>(_: I_12): _132.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _132.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestOfferSnapshot;
            fromJSON(object: any): _132.RequestOfferSnapshot;
            toJSON(message: _132.RequestOfferSnapshot): unknown;
            fromPartial<I_13 extends {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            } & {
                snapshot?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & Record<Exclude<keyof I_13["snapshot"], keyof _132.Snapshot>, never>;
                appHash?: Uint8Array;
            } & Record<Exclude<keyof I_13, keyof _132.RequestOfferSnapshot>, never>>(object: I_13): _132.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _132.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestLoadSnapshotChunk;
            fromJSON(object: any): _132.RequestLoadSnapshotChunk;
            toJSON(message: _132.RequestLoadSnapshotChunk): unknown;
            fromPartial<I_14 extends {
                height?: any;
                format?: number;
                chunk?: number;
            } & {
                height?: any;
                format?: number;
                chunk?: number;
            } & Record<Exclude<keyof I_14, keyof _132.RequestLoadSnapshotChunk>, never>>(object: I_14): _132.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _132.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.RequestApplySnapshotChunk;
            fromJSON(object: any): _132.RequestApplySnapshotChunk;
            toJSON(message: _132.RequestApplySnapshotChunk): unknown;
            fromPartial<I_15 extends {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            } & {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            } & Record<Exclude<keyof I_15, keyof _132.RequestApplySnapshotChunk>, never>>(object: I_15): _132.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _132.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Response;
            fromJSON(object: any): _132.Response;
            toJSON(message: _132.Response): unknown;
            fromPartial<I_16 extends {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: any;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _132.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _132.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            } & {
                exception?: {
                    error?: string;
                } & {
                    error?: string;
                } & Record<Exclude<keyof I_16["exception"], "error">, never>;
                echo?: {
                    message?: string;
                } & {
                    message?: string;
                } & Record<Exclude<keyof I_16["echo"], "message">, never>;
                flush?: {} & {} & Record<Exclude<keyof I_16["flush"], never>, never>;
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                } & {
                    data?: string;
                    version?: string;
                    appVersion?: any;
                    lastBlockHeight?: any;
                    lastBlockAppHash?: Uint8Array;
                } & Record<Exclude<keyof I_16["info"], keyof _132.ResponseInfo>, never>;
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                } & {
                    code?: number;
                    log?: string;
                    info?: string;
                } & Record<Exclude<keyof I_16["setOption"], keyof _132.ResponseSetOption>, never>;
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    appHash?: Uint8Array;
                } & {
                    consensusParams?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    } & {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        } & {
                            maxBytes?: any;
                            maxGas?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["block"], keyof _132.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["evidence"], keyof _139.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I_16["initChain"]["consensusParams"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I_16["initChain"]["consensusParams"], keyof _132.ConsensusParams>, never>;
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_16["initChain"]["validators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I_16["initChain"]["validators"][number], keyof _132.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_16["initChain"]["validators"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    appHash?: Uint8Array;
                } & Record<Exclude<keyof I_16["initChain"], keyof _132.ResponseInitChain>, never>;
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: any;
                    codespace?: string;
                } & {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: any;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    } & {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[] & ({
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        } & {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        } & Record<Exclude<keyof I_16["query"]["proofOps"]["ops"][number], keyof _134.ProofOp>, never>)[] & Record<Exclude<keyof I_16["query"]["proofOps"]["ops"], keyof {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["query"]["proofOps"], "ops">, never>;
                    height?: any;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["query"], keyof _132.ResponseQuery>, never>;
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                } & {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["beginBlock"]["events"][number]["attributes"][number], keyof _132.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["beginBlock"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["beginBlock"]["events"][number], keyof _132.Event>, never>)[] & Record<Exclude<keyof I_16["beginBlock"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["beginBlock"], "events">, never>;
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                } & {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["checkTx"]["events"][number]["attributes"][number], keyof _132.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["checkTx"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["checkTx"]["events"][number], keyof _132.Event>, never>)[] & Record<Exclude<keyof I_16["checkTx"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["checkTx"], keyof _132.ResponseCheckTx>, never>;
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                } & {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["deliverTx"]["events"][number]["attributes"][number], keyof _132.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["deliverTx"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["deliverTx"]["events"][number], keyof _132.Event>, never>)[] & Record<Exclude<keyof I_16["deliverTx"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_16["deliverTx"], keyof _132.ResponseDeliverTx>, never>;
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                } & {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[] & ({
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    } & {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"][number]["pubKey"], keyof _133.PublicKey>, never>;
                        power?: any;
                    } & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"][number], keyof _132.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["validatorUpdates"], keyof {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: any;
                    }[]>, never>;
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: any;
                        };
                    } & {
                        block?: {
                            maxBytes?: any;
                            maxGas?: any;
                        } & {
                            maxBytes?: any;
                            maxGas?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["block"], keyof _132.BlockParams>, never>;
                        evidence?: {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & {
                            maxAgeNumBlocks?: any;
                            maxAgeDuration?: string;
                            maxBytes?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["evidence"], keyof _139.EvidenceParams>, never>;
                        validator?: {
                            pubKeyTypes?: string[];
                        } & {
                            pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                        version?: {
                            appVersion?: any;
                        } & {
                            appVersion?: any;
                        } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"]["version"], "appVersion">, never>;
                    } & Record<Exclude<keyof I_16["endBlock"]["consensusParamUpdates"], keyof _132.ConsensusParams>, never>;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_16["endBlock"]["events"][number]["attributes"][number], keyof _132.EventAttribute>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_16["endBlock"]["events"][number], keyof _132.Event>, never>)[] & Record<Exclude<keyof I_16["endBlock"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["endBlock"], keyof _132.ResponseEndBlock>, never>;
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: any;
                } & {
                    data?: Uint8Array;
                    retainHeight?: any;
                } & Record<Exclude<keyof I_16["commit"], keyof _132.ResponseCommit>, never>;
                listSnapshots?: {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                } & {
                    snapshots?: {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[] & ({
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    } & Record<Exclude<keyof I_16["listSnapshots"]["snapshots"][number], keyof _132.Snapshot>, never>)[] & Record<Exclude<keyof I_16["listSnapshots"]["snapshots"], keyof {
                        height?: any;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_16["listSnapshots"], "snapshots">, never>;
                offerSnapshot?: {
                    result?: _132.ResponseOfferSnapshot_Result;
                } & {
                    result?: _132.ResponseOfferSnapshot_Result;
                } & Record<Exclude<keyof I_16["offerSnapshot"], "result">, never>;
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                } & {
                    chunk?: Uint8Array;
                } & Record<Exclude<keyof I_16["loadSnapshotChunk"], "chunk">, never>;
                applySnapshotChunk?: {
                    result?: _132.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                } & {
                    result?: _132.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[] & number[] & Record<Exclude<keyof I_16["applySnapshotChunk"]["refetchChunks"], keyof number[]>, never>;
                    rejectSenders?: string[] & string[] & Record<Exclude<keyof I_16["applySnapshotChunk"]["rejectSenders"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_16["applySnapshotChunk"], keyof _132.ResponseApplySnapshotChunk>, never>;
            } & Record<Exclude<keyof I_16, keyof _132.Response>, never>>(object: I_16): _132.Response;
        };
        ResponseException: {
            encode(message: _132.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseException;
            fromJSON(object: any): _132.ResponseException;
            toJSON(message: _132.ResponseException): unknown;
            fromPartial<I_17 extends {
                error?: string;
            } & {
                error?: string;
            } & Record<Exclude<keyof I_17, "error">, never>>(object: I_17): _132.ResponseException;
        };
        ResponseEcho: {
            encode(message: _132.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseEcho;
            fromJSON(object: any): _132.ResponseEcho;
            toJSON(message: _132.ResponseEcho): unknown;
            fromPartial<I_18 extends {
                message?: string;
            } & {
                message?: string;
            } & Record<Exclude<keyof I_18, "message">, never>>(object: I_18): _132.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _132.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseFlush;
            fromJSON(_: any): _132.ResponseFlush;
            toJSON(_: _132.ResponseFlush): unknown;
            fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): _132.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _132.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseInfo;
            fromJSON(object: any): _132.ResponseInfo;
            toJSON(message: _132.ResponseInfo): unknown;
            fromPartial<I_20 extends {
                data?: string;
                version?: string;
                appVersion?: any;
                lastBlockHeight?: any;
                lastBlockAppHash?: Uint8Array;
            } & {
                data?: string;
                version?: string;
                appVersion?: any;
                lastBlockHeight?: any;
                lastBlockAppHash?: Uint8Array;
            } & Record<Exclude<keyof I_20, keyof _132.ResponseInfo>, never>>(object: I_20): _132.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _132.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseSetOption;
            fromJSON(object: any): _132.ResponseSetOption;
            toJSON(message: _132.ResponseSetOption): unknown;
            fromPartial<I_21 extends {
                code?: number;
                log?: string;
                info?: string;
            } & {
                code?: number;
                log?: string;
                info?: string;
            } & Record<Exclude<keyof I_21, keyof _132.ResponseSetOption>, never>>(object: I_21): _132.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _132.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseInitChain;
            fromJSON(object: any): _132.ResponseInitChain;
            toJSON(message: _132.ResponseInitChain): unknown;
            fromPartial<I_22 extends {
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                appHash?: Uint8Array;
            } & {
                consensusParams?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                } & {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    } & {
                        maxBytes?: any;
                        maxGas?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["block"], keyof _132.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["evidence"], keyof _139.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_22["consensusParams"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_22["consensusParams"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_22["consensusParams"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_22["consensusParams"], keyof _132.ConsensusParams>, never>;
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_22["validators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_22["validators"][number], keyof _132.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_22["validators"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                appHash?: Uint8Array;
            } & Record<Exclude<keyof I_22, keyof _132.ResponseInitChain>, never>>(object: I_22): _132.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _132.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseQuery;
            fromJSON(object: any): _132.ResponseQuery;
            toJSON(message: _132.ResponseQuery): unknown;
            fromPartial<I_23 extends {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: any;
                codespace?: string;
            } & {
                code?: number;
                log?: string;
                info?: string;
                index?: any;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                } & {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[] & ({
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    } & {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    } & Record<Exclude<keyof I_23["proofOps"]["ops"][number], keyof _134.ProofOp>, never>)[] & Record<Exclude<keyof I_23["proofOps"]["ops"], keyof {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_23["proofOps"], "ops">, never>;
                height?: any;
                codespace?: string;
            } & Record<Exclude<keyof I_23, keyof _132.ResponseQuery>, never>>(object: I_23): _132.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _132.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseBeginBlock;
            fromJSON(object: any): _132.ResponseBeginBlock;
            toJSON(message: _132.ResponseBeginBlock): unknown;
            fromPartial<I_24 extends {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            } & {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_24["events"][number]["attributes"][number], keyof _132.EventAttribute>, never>)[] & Record<Exclude<keyof I_24["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_24["events"][number], keyof _132.Event>, never>)[] & Record<Exclude<keyof I_24["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_24, "events">, never>>(object: I_24): _132.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _132.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseCheckTx;
            fromJSON(object: any): _132.ResponseCheckTx;
            toJSON(message: _132.ResponseCheckTx): unknown;
            fromPartial<I_25 extends {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            } & {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_25["events"][number]["attributes"][number], keyof _132.EventAttribute>, never>)[] & Record<Exclude<keyof I_25["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_25["events"][number], keyof _132.Event>, never>)[] & Record<Exclude<keyof I_25["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
                codespace?: string;
            } & Record<Exclude<keyof I_25, keyof _132.ResponseCheckTx>, never>>(object: I_25): _132.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _132.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseDeliverTx;
            fromJSON(object: any): _132.ResponseDeliverTx;
            toJSON(message: _132.ResponseDeliverTx): unknown;
            fromPartial<I_26 extends {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            } & {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: any;
                gasUsed?: any;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_26["events"][number]["attributes"][number], keyof _132.EventAttribute>, never>)[] & Record<Exclude<keyof I_26["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["events"][number], keyof _132.Event>, never>)[] & Record<Exclude<keyof I_26["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
                codespace?: string;
            } & Record<Exclude<keyof I_26, keyof _132.ResponseDeliverTx>, never>>(object: I_26): _132.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _132.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseEndBlock;
            fromJSON(object: any): _132.ResponseEndBlock;
            toJSON(message: _132.ResponseEndBlock): unknown;
            fromPartial<I_27 extends {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            } & {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[] & ({
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                } & {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_27["validatorUpdates"][number]["pubKey"], keyof _133.PublicKey>, never>;
                    power?: any;
                } & Record<Exclude<keyof I_27["validatorUpdates"][number], keyof _132.ValidatorUpdate>, never>)[] & Record<Exclude<keyof I_27["validatorUpdates"], keyof {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: any;
                }[]>, never>;
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: any;
                    };
                } & {
                    block?: {
                        maxBytes?: any;
                        maxGas?: any;
                    } & {
                        maxBytes?: any;
                        maxGas?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["block"], keyof _132.BlockParams>, never>;
                    evidence?: {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & {
                        maxAgeNumBlocks?: any;
                        maxAgeDuration?: string;
                        maxBytes?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["evidence"], keyof _139.EvidenceParams>, never>;
                    validator?: {
                        pubKeyTypes?: string[];
                    } & {
                        pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_27["consensusParamUpdates"]["validator"]["pubKeyTypes"], keyof string[]>, never>;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["validator"], "pubKeyTypes">, never>;
                    version?: {
                        appVersion?: any;
                    } & {
                        appVersion?: any;
                    } & Record<Exclude<keyof I_27["consensusParamUpdates"]["version"], "appVersion">, never>;
                } & Record<Exclude<keyof I_27["consensusParamUpdates"], keyof _132.ConsensusParams>, never>;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[] & ({
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                } & {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[] & ({
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    } & Record<Exclude<keyof I_27["events"][number]["attributes"][number], keyof _132.EventAttribute>, never>)[] & Record<Exclude<keyof I_27["events"][number]["attributes"], keyof {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[]>, never>;
                } & Record<Exclude<keyof I_27["events"][number], keyof _132.Event>, never>)[] & Record<Exclude<keyof I_27["events"], keyof {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[]>, never>;
            } & Record<Exclude<keyof I_27, keyof _132.ResponseEndBlock>, never>>(object: I_27): _132.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _132.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseCommit;
            fromJSON(object: any): _132.ResponseCommit;
            toJSON(message: _132.ResponseCommit): unknown;
            fromPartial<I_28 extends {
                data?: Uint8Array;
                retainHeight?: any;
            } & {
                data?: Uint8Array;
                retainHeight?: any;
            } & Record<Exclude<keyof I_28, keyof _132.ResponseCommit>, never>>(object: I_28): _132.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _132.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseListSnapshots;
            fromJSON(object: any): _132.ResponseListSnapshots;
            toJSON(message: _132.ResponseListSnapshots): unknown;
            fromPartial<I_29 extends {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            } & {
                snapshots?: {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[] & ({
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                } & Record<Exclude<keyof I_29["snapshots"][number], keyof _132.Snapshot>, never>)[] & Record<Exclude<keyof I_29["snapshots"], keyof {
                    height?: any;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_29, "snapshots">, never>>(object: I_29): _132.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _132.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseOfferSnapshot;
            fromJSON(object: any): _132.ResponseOfferSnapshot;
            toJSON(message: _132.ResponseOfferSnapshot): unknown;
            fromPartial<I_30 extends {
                result?: _132.ResponseOfferSnapshot_Result;
            } & {
                result?: _132.ResponseOfferSnapshot_Result;
            } & Record<Exclude<keyof I_30, "result">, never>>(object: I_30): _132.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _132.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _132.ResponseLoadSnapshotChunk;
            toJSON(message: _132.ResponseLoadSnapshotChunk): unknown;
            fromPartial<I_31 extends {
                chunk?: Uint8Array;
            } & {
                chunk?: Uint8Array;
            } & Record<Exclude<keyof I_31, "chunk">, never>>(object: I_31): _132.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _132.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ResponseApplySnapshotChunk;
            fromJSON(object: any): _132.ResponseApplySnapshotChunk;
            toJSON(message: _132.ResponseApplySnapshotChunk): unknown;
            fromPartial<I_32 extends {
                result?: _132.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            } & {
                result?: _132.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[] & number[] & Record<Exclude<keyof I_32["refetchChunks"], keyof number[]>, never>;
                rejectSenders?: string[] & string[] & Record<Exclude<keyof I_32["rejectSenders"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_32, keyof _132.ResponseApplySnapshotChunk>, never>>(object: I_32): _132.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _132.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ConsensusParams;
            fromJSON(object: any): _132.ConsensusParams;
            toJSON(message: _132.ConsensusParams): unknown;
            fromPartial<I_33 extends {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            } & {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                } & {
                    maxBytes?: any;
                    maxGas?: any;
                } & Record<Exclude<keyof I_33["block"], keyof _132.BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I_33["evidence"], keyof _139.EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_33["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_33["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I_33["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I_33, keyof _132.ConsensusParams>, never>>(object: I_33): _132.ConsensusParams;
        };
        BlockParams: {
            encode(message: _132.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.BlockParams;
            fromJSON(object: any): _132.BlockParams;
            toJSON(message: _132.BlockParams): unknown;
            fromPartial<I_34 extends {
                maxBytes?: any;
                maxGas?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
            } & Record<Exclude<keyof I_34, keyof _132.BlockParams>, never>>(object: I_34): _132.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _132.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.LastCommitInfo;
            fromJSON(object: any): _132.LastCommitInfo;
            toJSON(message: _132.LastCommitInfo): unknown;
            fromPartial<I_35 extends {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[];
            } & {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[] & ({
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                } & {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    } & {
                        address?: Uint8Array;
                        power?: any;
                    } & Record<Exclude<keyof I_35["votes"][number]["validator"], keyof _132.Validator>, never>;
                    signedLastBlock?: boolean;
                } & Record<Exclude<keyof I_35["votes"][number], keyof _132.VoteInfo>, never>)[] & Record<Exclude<keyof I_35["votes"], keyof {
                    validator?: {
                        address?: Uint8Array;
                        power?: any;
                    };
                    signedLastBlock?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I_35, keyof _132.LastCommitInfo>, never>>(object: I_35): _132.LastCommitInfo;
        };
        Event: {
            encode(message: _132.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Event;
            fromJSON(object: any): _132.Event;
            toJSON(message: _132.Event): unknown;
            fromPartial<I_36 extends {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            } & {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[] & ({
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                } & Record<Exclude<keyof I_36["attributes"][number], keyof _132.EventAttribute>, never>)[] & Record<Exclude<keyof I_36["attributes"], keyof {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[]>, never>;
            } & Record<Exclude<keyof I_36, keyof _132.Event>, never>>(object: I_36): _132.Event;
        };
        EventAttribute: {
            encode(message: _132.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.EventAttribute;
            fromJSON(object: any): _132.EventAttribute;
            toJSON(message: _132.EventAttribute): unknown;
            fromPartial<I_37 extends {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            } & Record<Exclude<keyof I_37, keyof _132.EventAttribute>, never>>(object: I_37): _132.EventAttribute;
        };
        TxResult: {
            encode(message: _132.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TxResult;
            fromJSON(object: any): _132.TxResult;
            toJSON(message: _132.TxResult): unknown;
            fromPartial<I_38 extends {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            } & {
                height?: any;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                } & {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: any;
                    gasUsed?: any;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[] & ({
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    } & {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[] & ({
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        } & Record<Exclude<keyof I_38["result"]["events"][number]["attributes"][number], keyof _132.EventAttribute>, never>)[] & Record<Exclude<keyof I_38["result"]["events"][number]["attributes"], keyof {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_38["result"]["events"][number], keyof _132.Event>, never>)[] & Record<Exclude<keyof I_38["result"]["events"], keyof {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[]>, never>;
                    codespace?: string;
                } & Record<Exclude<keyof I_38["result"], keyof _132.ResponseDeliverTx>, never>;
            } & Record<Exclude<keyof I_38, keyof _132.TxResult>, never>>(object: I_38): _132.TxResult;
        };
        Validator: {
            encode(message: _132.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Validator;
            fromJSON(object: any): _132.Validator;
            toJSON(message: _132.Validator): unknown;
            fromPartial<I_39 extends {
                address?: Uint8Array;
                power?: any;
            } & {
                address?: Uint8Array;
                power?: any;
            } & Record<Exclude<keyof I_39, keyof _132.Validator>, never>>(object: I_39): _132.Validator;
        };
        ValidatorUpdate: {
            encode(message: _132.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ValidatorUpdate;
            fromJSON(object: any): _132.ValidatorUpdate;
            toJSON(message: _132.ValidatorUpdate): unknown;
            fromPartial<I_40 extends {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: any;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_40["pubKey"], keyof _133.PublicKey>, never>;
                power?: any;
            } & Record<Exclude<keyof I_40, keyof _132.ValidatorUpdate>, never>>(object: I_40): _132.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _132.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.VoteInfo;
            fromJSON(object: any): _132.VoteInfo;
            toJSON(message: _132.VoteInfo): unknown;
            fromPartial<I_41 extends {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                signedLastBlock?: boolean;
            } & {
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                } & {
                    address?: Uint8Array;
                    power?: any;
                } & Record<Exclude<keyof I_41["validator"], keyof _132.Validator>, never>;
                signedLastBlock?: boolean;
            } & Record<Exclude<keyof I_41, keyof _132.VoteInfo>, never>>(object: I_41): _132.VoteInfo;
        };
        Evidence: {
            encode(message: _132.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Evidence;
            fromJSON(object: any): _132.Evidence;
            toJSON(message: _132.Evidence): unknown;
            fromPartial<I_42 extends {
                type?: _132.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                };
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            } & {
                type?: _132.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: any;
                } & {
                    address?: Uint8Array;
                    power?: any;
                } & Record<Exclude<keyof I_42["validator"], keyof _132.Validator>, never>;
                height?: any;
                time?: Date;
                totalVotingPower?: any;
            } & Record<Exclude<keyof I_42, keyof _132.Evidence>, never>>(object: I_42): _132.Evidence;
        };
        Snapshot: {
            encode(message: _132.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Snapshot;
            fromJSON(object: any): _132.Snapshot;
            toJSON(message: _132.Snapshot): unknown;
            fromPartial<I_43 extends {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & {
                height?: any;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            } & Record<Exclude<keyof I_43, keyof _132.Snapshot>, never>>(object: I_43): _132.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _134.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Proof;
            fromJSON(object: any): _134.Proof;
            toJSON(message: _134.Proof): unknown;
            fromPartial<I extends {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            } & {
                total?: any;
                index?: any;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["aunts"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I, keyof _134.Proof>, never>>(object: I): _134.Proof;
        };
        ValueOp: {
            encode(message: _134.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ValueOp;
            fromJSON(object: any): _134.ValueOp;
            toJSON(message: _134.ValueOp): unknown;
            fromPartial<I_1 extends {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                key?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_1["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_1["proof"], keyof _134.Proof>, never>;
            } & Record<Exclude<keyof I_1, keyof _134.ValueOp>, never>>(object: I_1): _134.ValueOp;
        };
        DominoOp: {
            encode(message: _134.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.DominoOp;
            fromJSON(object: any): _134.DominoOp;
            toJSON(message: _134.DominoOp): unknown;
            fromPartial<I_2 extends {
                key?: string;
                input?: string;
                output?: string;
            } & {
                key?: string;
                input?: string;
                output?: string;
            } & Record<Exclude<keyof I_2, keyof _134.DominoOp>, never>>(object: I_2): _134.DominoOp;
        };
        ProofOp: {
            encode(message: _134.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ProofOp;
            fromJSON(object: any): _134.ProofOp;
            toJSON(message: _134.ProofOp): unknown;
            fromPartial<I_3 extends {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            } & Record<Exclude<keyof I_3, keyof _134.ProofOp>, never>>(object: I_3): _134.ProofOp;
        };
        ProofOps: {
            encode(message: _134.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ProofOps;
            fromJSON(object: any): _134.ProofOps;
            toJSON(message: _134.ProofOps): unknown;
            fromPartial<I_4 extends {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            } & {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[] & ({
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                } & {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                } & Record<Exclude<keyof I_4["ops"][number], keyof _134.ProofOp>, never>)[] & Record<Exclude<keyof I_4["ops"], keyof {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_4, "ops">, never>>(object: I_4): _134.ProofOps;
        };
        PublicKey: {
            encode(message: _133.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.PublicKey;
            fromJSON(object: any): _133.PublicKey;
            toJSON(message: _133.PublicKey): unknown;
            fromPartial<I_5 extends {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            } & Record<Exclude<keyof I_5, keyof _133.PublicKey>, never>>(object: I_5): _133.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _135.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.BitArray;
                fromJSON(object: any): _135.BitArray;
                toJSON(message: _135.BitArray): unknown;
                fromPartial<I extends {
                    bits?: any;
                    elems?: any[];
                } & {
                    bits?: any;
                    elems?: any[] & any[] & Record<Exclude<keyof I["elems"], keyof any[]>, never>;
                } & Record<Exclude<keyof I, keyof _135.BitArray>, never>>(object: I): _135.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _136.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ProtocolVersion;
            fromJSON(object: any): _136.ProtocolVersion;
            toJSON(message: _136.ProtocolVersion): unknown;
            fromPartial<I extends {
                p2p?: any;
                block?: any;
                app?: any;
            } & {
                p2p?: any;
                block?: any;
                app?: any;
            } & Record<Exclude<keyof I, keyof _136.ProtocolVersion>, never>>(object: I): _136.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _136.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.NodeInfo;
            fromJSON(object: any): _136.NodeInfo;
            toJSON(message: _136.NodeInfo): unknown;
            fromPartial<I_1 extends {
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
            } & {
                protocolVersion?: {
                    p2p?: any;
                    block?: any;
                    app?: any;
                } & {
                    p2p?: any;
                    block?: any;
                    app?: any;
                } & Record<Exclude<keyof I_1["protocolVersion"], keyof _136.ProtocolVersion>, never>;
                nodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                } & {
                    txIndex?: string;
                    rpcAddress?: string;
                } & Record<Exclude<keyof I_1["other"], keyof _136.NodeInfoOther>, never>;
            } & Record<Exclude<keyof I_1, keyof _136.NodeInfo>, never>>(object: I_1): _136.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _136.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.NodeInfoOther;
            fromJSON(object: any): _136.NodeInfoOther;
            toJSON(message: _136.NodeInfoOther): unknown;
            fromPartial<I_2 extends {
                txIndex?: string;
                rpcAddress?: string;
            } & {
                txIndex?: string;
                rpcAddress?: string;
            } & Record<Exclude<keyof I_2, keyof _136.NodeInfoOther>, never>>(object: I_2): _136.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _136.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PeerInfo;
            fromJSON(object: any): _136.PeerInfo;
            toJSON(message: _136.PeerInfo): unknown;
            fromPartial<I_3 extends {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[];
                lastConnected?: Date;
            } & {
                id?: string;
                addressInfo?: {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[] & ({
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                } & {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                } & Record<Exclude<keyof I_3["addressInfo"][number], keyof _136.PeerAddressInfo>, never>)[] & Record<Exclude<keyof I_3["addressInfo"], keyof {
                    address?: string;
                    lastDialSuccess?: Date;
                    lastDialFailure?: Date;
                    dialFailures?: number;
                }[]>, never>;
                lastConnected?: Date;
            } & Record<Exclude<keyof I_3, keyof _136.PeerInfo>, never>>(object: I_3): _136.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _136.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.PeerAddressInfo;
            fromJSON(object: any): _136.PeerAddressInfo;
            toJSON(message: _136.PeerAddressInfo): unknown;
            fromPartial<I_4 extends {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            } & {
                address?: string;
                lastDialSuccess?: Date;
                lastDialFailure?: Date;
                dialFailures?: number;
            } & Record<Exclude<keyof I_4, keyof _136.PeerAddressInfo>, never>>(object: I_4): _136.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _141.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ValidatorSet;
            fromJSON(object: any): _141.ValidatorSet;
            toJSON(message: _141.ValidatorSet): unknown;
            fromPartial<I extends {
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
            } & {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["validators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I["validators"][number], keyof _141.Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[]>, never>;
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I["proposer"]["pubKey"], keyof _133.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I["proposer"], keyof _141.Validator>, never>;
                totalVotingPower?: any;
            } & Record<Exclude<keyof I, keyof _141.ValidatorSet>, never>>(object: I): _141.ValidatorSet;
        };
        Validator: {
            encode(message: _141.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Validator;
            fromJSON(object: any): _141.Validator;
            toJSON(message: _141.Validator): unknown;
            fromPartial<I_1 extends {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
                proposerPriority?: any;
            } & {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_1["pubKey"], keyof _133.PublicKey>, never>;
                votingPower?: any;
                proposerPriority?: any;
            } & Record<Exclude<keyof I_1, keyof _141.Validator>, never>>(object: I_1): _141.Validator;
        };
        SimpleValidator: {
            encode(message: _141.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.SimpleValidator;
            fromJSON(object: any): _141.SimpleValidator;
            toJSON(message: _141.SimpleValidator): unknown;
            fromPartial<I_2 extends {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: any;
            } & {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                } & Record<Exclude<keyof I_2["pubKey"], keyof _133.PublicKey>, never>;
                votingPower?: any;
            } & Record<Exclude<keyof I_2, keyof _141.SimpleValidator>, never>>(object: I_2): _141.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _140.BlockIDFlag;
        blockIDFlagToJSON(object: _140.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _140.SignedMsgType;
        signedMsgTypeToJSON(object: _140.SignedMsgType): string;
        BlockIDFlag: typeof _140.BlockIDFlag;
        SignedMsgType: typeof _140.SignedMsgType;
        PartSetHeader: {
            encode(message: _140.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.PartSetHeader;
            fromJSON(object: any): _140.PartSetHeader;
            toJSON(message: _140.PartSetHeader): unknown;
            fromPartial<I_3 extends {
                total?: number;
                hash?: Uint8Array;
            } & {
                total?: number;
                hash?: Uint8Array;
            } & Record<Exclude<keyof I_3, keyof _140.PartSetHeader>, never>>(object: I_3): _140.PartSetHeader;
        };
        Part: {
            encode(message: _140.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Part;
            fromJSON(object: any): _140.Part;
            toJSON(message: _140.Part): unknown;
            fromPartial<I_4 extends {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_4["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_4["proof"], keyof _134.Proof>, never>;
            } & Record<Exclude<keyof I_4, keyof _140.Part>, never>>(object: I_4): _140.Part;
        };
        BlockID: {
            encode(message: _140.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BlockID;
            fromJSON(object: any): _140.BlockID;
            toJSON(message: _140.BlockID): unknown;
            fromPartial<I_5 extends {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            } & {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                } & {
                    total?: number;
                    hash?: Uint8Array;
                } & Record<Exclude<keyof I_5["partSetHeader"], keyof _140.PartSetHeader>, never>;
            } & Record<Exclude<keyof I_5, keyof _140.BlockID>, never>>(object: I_5): _140.BlockID;
        };
        Header: {
            encode(message: _140.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Header;
            fromJSON(object: any): _140.Header;
            toJSON(message: _140.Header): unknown;
            fromPartial<I_6 extends {
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
            } & {
                version?: {
                    block?: any;
                    app?: any;
                } & {
                    block?: any;
                    app?: any;
                } & Record<Exclude<keyof I_6["version"], keyof _142.Consensus>, never>;
                chainId?: string;
                height?: any;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_6["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_6["lastBlockId"], keyof _140.BlockID>, never>;
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            } & Record<Exclude<keyof I_6, keyof _140.Header>, never>>(object: I_6): _140.Header;
        };
        Data: {
            encode(message: _140.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Data;
            fromJSON(object: any): _140.Data;
            toJSON(message: _140.Data): unknown;
            fromPartial<I_7 extends {
                txs?: Uint8Array[];
            } & {
                txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_7["txs"], keyof Uint8Array[]>, never>;
            } & Record<Exclude<keyof I_7, "txs">, never>>(object: I_7): _140.Data;
        };
        Vote: {
            encode(message: _140.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Vote;
            fromJSON(object: any): _140.Vote;
            toJSON(message: _140.Vote): unknown;
            fromPartial<I_8 extends {
                type?: _140.SignedMsgType;
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
            } & {
                type?: _140.SignedMsgType;
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_8["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_8["blockId"], keyof _140.BlockID>, never>;
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_8, keyof _140.Vote>, never>>(object: I_8): _140.Vote;
        };
        Commit: {
            encode(message: _140.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Commit;
            fromJSON(object: any): _140.Commit;
            toJSON(message: _140.Commit): unknown;
            fromPartial<I_9 extends {
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
                    blockIdFlag?: _140.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            } & {
                height?: any;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_9["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_9["blockId"], keyof _140.BlockID>, never>;
                signatures?: {
                    blockIdFlag?: _140.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[] & ({
                    blockIdFlag?: _140.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & {
                    blockIdFlag?: _140.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_9["signatures"][number], keyof _140.CommitSig>, never>)[] & Record<Exclude<keyof I_9["signatures"], keyof {
                    blockIdFlag?: _140.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_9, keyof _140.Commit>, never>>(object: I_9): _140.Commit;
        };
        CommitSig: {
            encode(message: _140.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.CommitSig;
            fromJSON(object: any): _140.CommitSig;
            toJSON(message: _140.CommitSig): unknown;
            fromPartial<I_10 extends {
                blockIdFlag?: _140.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & {
                blockIdFlag?: _140.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_10, keyof _140.CommitSig>, never>>(object: I_10): _140.CommitSig;
        };
        Proposal: {
            encode(message: _140.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Proposal;
            fromJSON(object: any): _140.Proposal;
            toJSON(message: _140.Proposal): unknown;
            fromPartial<I_11 extends {
                type?: _140.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            } & {
                type?: _140.SignedMsgType;
                height?: any;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_11["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_11["blockId"], keyof _140.BlockID>, never>;
                timestamp?: Date;
                signature?: Uint8Array;
            } & Record<Exclude<keyof I_11, keyof _140.Proposal>, never>>(object: I_11): _140.Proposal;
        };
        SignedHeader: {
            encode(message: _140.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.SignedHeader;
            fromJSON(object: any): _140.SignedHeader;
            toJSON(message: _140.SignedHeader): unknown;
            fromPartial<I_12 extends {
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
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            } & {
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
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_12["header"]["version"], keyof _142.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_12["header"]["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_12["header"]["lastBlockId"], keyof _140.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_12["header"], keyof _140.Header>, never>;
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
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                } & {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_12["commit"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_12["commit"]["blockId"], keyof _140.BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_12["commit"]["signatures"][number], keyof _140.CommitSig>, never>)[] & Record<Exclude<keyof I_12["commit"]["signatures"], keyof {
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_12["commit"], keyof _140.Commit>, never>;
            } & Record<Exclude<keyof I_12, keyof _140.SignedHeader>, never>>(object: I_12): _140.SignedHeader;
        };
        LightBlock: {
            encode(message: _140.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.LightBlock;
            fromJSON(object: any): _140.LightBlock;
            toJSON(message: _140.LightBlock): unknown;
            fromPartial<I_13 extends {
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
                            blockIdFlag?: _140.BlockIDFlag;
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
            } & {
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
                            blockIdFlag?: _140.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                } & {
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
                    } & {
                        version?: {
                            block?: any;
                            app?: any;
                        } & {
                            block?: any;
                            app?: any;
                        } & Record<Exclude<keyof I_13["signedHeader"]["header"]["version"], keyof _142.Consensus>, never>;
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_13["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_13["signedHeader"]["header"]["lastBlockId"], keyof _140.BlockID>, never>;
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    } & Record<Exclude<keyof I_13["signedHeader"]["header"], keyof _140.Header>, never>;
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
                            blockIdFlag?: _140.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    } & {
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["blockId"], keyof _140.BlockID>, never>;
                        signatures?: {
                            blockIdFlag?: _140.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[] & ({
                            blockIdFlag?: _140.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        } & {
                            blockIdFlag?: _140.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_13["signedHeader"]["commit"]["signatures"][number], keyof _140.CommitSig>, never>)[] & Record<Exclude<keyof I_13["signedHeader"]["commit"]["signatures"], keyof {
                            blockIdFlag?: _140.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_13["signedHeader"]["commit"], keyof _140.Commit>, never>;
                } & Record<Exclude<keyof I_13["signedHeader"], keyof _140.SignedHeader>, never>;
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
                } & {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[] & ({
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_13["validatorSet"]["validators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_13["validatorSet"]["validators"][number], keyof _141.Validator>, never>)[] & Record<Exclude<keyof I_13["validatorSet"]["validators"], keyof {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[]>, never>;
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_13["validatorSet"]["proposer"]["pubKey"], keyof _133.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_13["validatorSet"]["proposer"], keyof _141.Validator>, never>;
                    totalVotingPower?: any;
                } & Record<Exclude<keyof I_13["validatorSet"], keyof _141.ValidatorSet>, never>;
            } & Record<Exclude<keyof I_13, keyof _140.LightBlock>, never>>(object: I_13): _140.LightBlock;
        };
        BlockMeta: {
            encode(message: _140.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.BlockMeta;
            fromJSON(object: any): _140.BlockMeta;
            toJSON(message: _140.BlockMeta): unknown;
            fromPartial<I_14 extends {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: any;
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
                numTxs?: any;
            } & {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                } & {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    } & {
                        total?: number;
                        hash?: Uint8Array;
                    } & Record<Exclude<keyof I_14["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                } & Record<Exclude<keyof I_14["blockId"], keyof _140.BlockID>, never>;
                blockSize?: any;
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
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_14["header"]["version"], keyof _142.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_14["header"]["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_14["header"]["lastBlockId"], keyof _140.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_14["header"], keyof _140.Header>, never>;
                numTxs?: any;
            } & Record<Exclude<keyof I_14, keyof _140.BlockMeta>, never>>(object: I_14): _140.BlockMeta;
        };
        TxProof: {
            encode(message: _140.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.TxProof;
            fromJSON(object: any): _140.TxProof;
            toJSON(message: _140.TxProof): unknown;
            fromPartial<I_15 extends {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            } & {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                } & {
                    total?: any;
                    index?: any;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_15["proof"]["aunts"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_15["proof"], keyof _134.Proof>, never>;
            } & Record<Exclude<keyof I_15, keyof _140.TxProof>, never>>(object: I_15): _140.TxProof;
        };
        ConsensusParams: {
            encode(message: _139.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ConsensusParams;
            fromJSON(object: any): _139.ConsensusParams;
            toJSON(message: _139.ConsensusParams): unknown;
            fromPartial<I_16 extends {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                };
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: any;
                };
            } & {
                block?: {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                } & {
                    maxBytes?: any;
                    maxGas?: any;
                    timeIotaMs?: any;
                } & Record<Exclude<keyof I_16["block"], keyof _139.BlockParams>, never>;
                evidence?: {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & {
                    maxAgeNumBlocks?: any;
                    maxAgeDuration?: string;
                    maxBytes?: any;
                } & Record<Exclude<keyof I_16["evidence"], keyof _139.EvidenceParams>, never>;
                validator?: {
                    pubKeyTypes?: string[];
                } & {
                    pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_16["validator"]["pubKeyTypes"], keyof string[]>, never>;
                } & Record<Exclude<keyof I_16["validator"], "pubKeyTypes">, never>;
                version?: {
                    appVersion?: any;
                } & {
                    appVersion?: any;
                } & Record<Exclude<keyof I_16["version"], "appVersion">, never>;
            } & Record<Exclude<keyof I_16, keyof _139.ConsensusParams>, never>>(object: I_16): _139.ConsensusParams;
        };
        BlockParams: {
            encode(message: _139.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.BlockParams;
            fromJSON(object: any): _139.BlockParams;
            toJSON(message: _139.BlockParams): unknown;
            fromPartial<I_17 extends {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            } & {
                maxBytes?: any;
                maxGas?: any;
                timeIotaMs?: any;
            } & Record<Exclude<keyof I_17, keyof _139.BlockParams>, never>>(object: I_17): _139.BlockParams;
        };
        EvidenceParams: {
            encode(message: _139.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.EvidenceParams;
            fromJSON(object: any): _139.EvidenceParams;
            toJSON(message: _139.EvidenceParams): unknown;
            fromPartial<I_18 extends {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & {
                maxAgeNumBlocks?: any;
                maxAgeDuration?: string;
                maxBytes?: any;
            } & Record<Exclude<keyof I_18, keyof _139.EvidenceParams>, never>>(object: I_18): _139.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _139.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ValidatorParams;
            fromJSON(object: any): _139.ValidatorParams;
            toJSON(message: _139.ValidatorParams): unknown;
            fromPartial<I_19 extends {
                pubKeyTypes?: string[];
            } & {
                pubKeyTypes?: string[] & string[] & Record<Exclude<keyof I_19["pubKeyTypes"], keyof string[]>, never>;
            } & Record<Exclude<keyof I_19, "pubKeyTypes">, never>>(object: I_19): _139.ValidatorParams;
        };
        VersionParams: {
            encode(message: _139.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.VersionParams;
            fromJSON(object: any): _139.VersionParams;
            toJSON(message: _139.VersionParams): unknown;
            fromPartial<I_20 extends {
                appVersion?: any;
            } & {
                appVersion?: any;
            } & Record<Exclude<keyof I_20, "appVersion">, never>>(object: I_20): _139.VersionParams;
        };
        HashedParams: {
            encode(message: _139.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.HashedParams;
            fromJSON(object: any): _139.HashedParams;
            toJSON(message: _139.HashedParams): unknown;
            fromPartial<I_21 extends {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            } & {
                blockMaxBytes?: any;
                blockMaxGas?: any;
            } & Record<Exclude<keyof I_21, keyof _139.HashedParams>, never>>(object: I_21): _139.HashedParams;
        };
        Evidence: {
            encode(message: _138.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Evidence;
            fromJSON(object: any): _138.Evidence;
            toJSON(message: _138.Evidence): unknown;
            fromPartial<I_22 extends {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _140.SignedMsgType;
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
                        type?: _140.SignedMsgType;
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
                                    blockIdFlag?: _140.BlockIDFlag;
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
            } & {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _140.SignedMsgType;
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
                        type?: _140.SignedMsgType;
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
                } & {
                    voteA?: {
                        type?: _140.SignedMsgType;
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
                    } & {
                        type?: _140.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _140.BlockID>, never>;
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteA"], keyof _140.Vote>, never>;
                    voteB?: {
                        type?: _140.SignedMsgType;
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
                    } & {
                        type?: _140.SignedMsgType;
                        height?: any;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        } & {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            } & {
                                total?: number;
                                hash?: Uint8Array;
                            } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                        } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _140.BlockID>, never>;
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_22["duplicateVoteEvidence"]["voteB"], keyof _140.Vote>, never>;
                    totalVotingPower?: any;
                    validatorPower?: any;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_22["duplicateVoteEvidence"], keyof _138.DuplicateVoteEvidence>, never>;
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
                                    blockIdFlag?: _140.BlockIDFlag;
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
                } & {
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
                                    blockIdFlag?: _140.BlockIDFlag;
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
                    } & {
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
                                    blockIdFlag?: _140.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        } & {
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
                            } & {
                                version?: {
                                    block?: any;
                                    app?: any;
                                } & {
                                    block?: any;
                                    app?: any;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _142.Consensus>, never>;
                                chainId?: string;
                                height?: any;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _140.BlockID>, never>;
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _140.Header>, never>;
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
                                    blockIdFlag?: _140.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            } & {
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _140.BlockID>, never>;
                                signatures?: {
                                    blockIdFlag?: _140.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[] & ({
                                    blockIdFlag?: _140.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & {
                                    blockIdFlag?: _140.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _140.CommitSig>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: _140.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[]>, never>;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _140.Commit>, never>;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _140.SignedHeader>, never>;
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
                        } & {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _141.Validator>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _133.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _141.Validator>, never>;
                            totalVotingPower?: any;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _141.ValidatorSet>, never>;
                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["conflictingBlock"], keyof _140.LightBlock>, never>;
                    commonHeight?: any;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[] & ({
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    } & {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                        votingPower?: any;
                        proposerPriority?: any;
                    } & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _141.Validator>, never>)[] & Record<Exclude<keyof I_22["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: any;
                        proposerPriority?: any;
                    }[]>, never>;
                    totalVotingPower?: any;
                    timestamp?: Date;
                } & Record<Exclude<keyof I_22["lightClientAttackEvidence"], keyof _138.LightClientAttackEvidence>, never>;
            } & Record<Exclude<keyof I_22, keyof _138.Evidence>, never>>(object: I_22): _138.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _138.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.DuplicateVoteEvidence;
            fromJSON(object: any): _138.DuplicateVoteEvidence;
            toJSON(message: _138.DuplicateVoteEvidence): unknown;
            fromPartial<I_23 extends {
                voteA?: {
                    type?: _140.SignedMsgType;
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
                    type?: _140.SignedMsgType;
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
            } & {
                voteA?: {
                    type?: _140.SignedMsgType;
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
                } & {
                    type?: _140.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_23["voteA"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_23["voteA"]["blockId"], keyof _140.BlockID>, never>;
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_23["voteA"], keyof _140.Vote>, never>;
                voteB?: {
                    type?: _140.SignedMsgType;
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
                } & {
                    type?: _140.SignedMsgType;
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_23["voteB"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_23["voteB"]["blockId"], keyof _140.BlockID>, never>;
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                } & Record<Exclude<keyof I_23["voteB"], keyof _140.Vote>, never>;
                totalVotingPower?: any;
                validatorPower?: any;
                timestamp?: Date;
            } & Record<Exclude<keyof I_23, keyof _138.DuplicateVoteEvidence>, never>>(object: I_23): _138.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _138.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.LightClientAttackEvidence;
            fromJSON(object: any): _138.LightClientAttackEvidence;
            toJSON(message: _138.LightClientAttackEvidence): unknown;
            fromPartial<I_24 extends {
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
                                blockIdFlag?: _140.BlockIDFlag;
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
            } & {
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
                                blockIdFlag?: _140.BlockIDFlag;
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
                } & {
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
                                blockIdFlag?: _140.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    } & {
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
                        } & {
                            version?: {
                                block?: any;
                                app?: any;
                            } & {
                                block?: any;
                                app?: any;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _142.Consensus>, never>;
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _140.BlockID>, never>;
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["header"], keyof _140.Header>, never>;
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
                                blockIdFlag?: _140.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        } & {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _140.BlockID>, never>;
                            signatures?: {
                                blockIdFlag?: _140.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[] & ({
                                blockIdFlag?: _140.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            } & {
                                blockIdFlag?: _140.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _140.CommitSig>, never>)[] & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                blockIdFlag?: _140.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"]["commit"], keyof _140.Commit>, never>;
                    } & Record<Exclude<keyof I_24["conflictingBlock"]["signedHeader"], keyof _140.SignedHeader>, never>;
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
                    } & {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[] & ({
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"][number], keyof _141.Validator>, never>)[] & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["validators"], keyof {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[]>, never>;
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _133.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"]["proposer"], keyof _141.Validator>, never>;
                        totalVotingPower?: any;
                    } & Record<Exclude<keyof I_24["conflictingBlock"]["validatorSet"], keyof _141.ValidatorSet>, never>;
                } & Record<Exclude<keyof I_24["conflictingBlock"], keyof _140.LightBlock>, never>;
                commonHeight?: any;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[] & ({
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                } & {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    } & Record<Exclude<keyof I_24["byzantineValidators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                    votingPower?: any;
                    proposerPriority?: any;
                } & Record<Exclude<keyof I_24["byzantineValidators"][number], keyof _141.Validator>, never>)[] & Record<Exclude<keyof I_24["byzantineValidators"], keyof {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: any;
                    proposerPriority?: any;
                }[]>, never>;
                totalVotingPower?: any;
                timestamp?: Date;
            } & Record<Exclude<keyof I_24, keyof _138.LightClientAttackEvidence>, never>>(object: I_24): _138.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _138.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.EvidenceList;
            fromJSON(object: any): _138.EvidenceList;
            toJSON(message: _138.EvidenceList): unknown;
            fromPartial<I_25 extends {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _140.SignedMsgType;
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
                            type?: _140.SignedMsgType;
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
                                        blockIdFlag?: _140.BlockIDFlag;
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
            } & {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _140.SignedMsgType;
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
                            type?: _140.SignedMsgType;
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
                                        blockIdFlag?: _140.BlockIDFlag;
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
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _140.SignedMsgType;
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
                            type?: _140.SignedMsgType;
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
                                        blockIdFlag?: _140.BlockIDFlag;
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
                } & {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _140.SignedMsgType;
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
                            type?: _140.SignedMsgType;
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
                    } & {
                        voteA?: {
                            type?: _140.SignedMsgType;
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
                        } & {
                            type?: _140.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _140.BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof _140.Vote>, never>;
                        voteB?: {
                            type?: _140.SignedMsgType;
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
                        } & {
                            type?: _140.SignedMsgType;
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            } & {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & {
                                    total?: number;
                                    hash?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _140.BlockID>, never>;
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof _140.Vote>, never>;
                        totalVotingPower?: any;
                        validatorPower?: any;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_25["evidence"][number]["duplicateVoteEvidence"], keyof _138.DuplicateVoteEvidence>, never>;
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
                                        blockIdFlag?: _140.BlockIDFlag;
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
                    } & {
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
                                        blockIdFlag?: _140.BlockIDFlag;
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
                        } & {
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
                                        blockIdFlag?: _140.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            } & {
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
                                } & {
                                    version?: {
                                        block?: any;
                                        app?: any;
                                    } & {
                                        block?: any;
                                        app?: any;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _142.Consensus>, never>;
                                    chainId?: string;
                                    height?: any;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _140.BlockID>, never>;
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _140.Header>, never>;
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
                                        blockIdFlag?: _140.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                } & {
                                    height?: any;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    } & {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & {
                                            total?: number;
                                            hash?: Uint8Array;
                                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _140.BlockID>, never>;
                                    signatures?: {
                                        blockIdFlag?: _140.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[] & ({
                                        blockIdFlag?: _140.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & {
                                        blockIdFlag?: _140.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _140.CommitSig>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: _140.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _140.Commit>, never>;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _140.SignedHeader>, never>;
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
                            } & {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[] & ({
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _141.Validator>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                }[]>, never>;
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _133.PublicKey>, never>;
                                    votingPower?: any;
                                    proposerPriority?: any;
                                } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _141.Validator>, never>;
                                totalVotingPower?: any;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _141.ValidatorSet>, never>;
                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof _140.LightBlock>, never>;
                        commonHeight?: any;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[] & ({
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        } & {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                            votingPower?: any;
                            proposerPriority?: any;
                        } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _141.Validator>, never>)[] & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: any;
                            proposerPriority?: any;
                        }[]>, never>;
                        totalVotingPower?: any;
                        timestamp?: Date;
                    } & Record<Exclude<keyof I_25["evidence"][number]["lightClientAttackEvidence"], keyof _138.LightClientAttackEvidence>, never>;
                } & Record<Exclude<keyof I_25["evidence"][number], keyof _138.Evidence>, never>)[] & Record<Exclude<keyof I_25["evidence"], keyof {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _140.SignedMsgType;
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
                            type?: _140.SignedMsgType;
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
                                        blockIdFlag?: _140.BlockIDFlag;
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
                }[]>, never>;
            } & Record<Exclude<keyof I_25, "evidence">, never>>(object: I_25): _138.EvidenceList;
        };
        Block: {
            encode(message: _137.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Block;
            fromJSON(object: any): _137.Block;
            toJSON(message: _137.Block): unknown;
            fromPartial<I_26 extends {
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
                                type?: _140.SignedMsgType;
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
                                type?: _140.SignedMsgType;
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
                                            blockIdFlag?: _140.BlockIDFlag;
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
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            } & {
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
                } & {
                    version?: {
                        block?: any;
                        app?: any;
                    } & {
                        block?: any;
                        app?: any;
                    } & Record<Exclude<keyof I_26["header"]["version"], keyof _142.Consensus>, never>;
                    chainId?: string;
                    height?: any;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_26["header"]["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_26["header"]["lastBlockId"], keyof _140.BlockID>, never>;
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                } & Record<Exclude<keyof I_26["header"], keyof _140.Header>, never>;
                data?: {
                    txs?: Uint8Array[];
                } & {
                    txs?: Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I_26["data"]["txs"], keyof Uint8Array[]>, never>;
                } & Record<Exclude<keyof I_26["data"], "txs">, never>;
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _140.SignedMsgType;
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
                                type?: _140.SignedMsgType;
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
                                            blockIdFlag?: _140.BlockIDFlag;
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
                } & {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _140.SignedMsgType;
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
                                type?: _140.SignedMsgType;
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
                                            blockIdFlag?: _140.BlockIDFlag;
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
                    }[] & ({
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _140.SignedMsgType;
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
                                type?: _140.SignedMsgType;
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
                                            blockIdFlag?: _140.BlockIDFlag;
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
                    } & {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _140.SignedMsgType;
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
                                type?: _140.SignedMsgType;
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
                        } & {
                            voteA?: {
                                type?: _140.SignedMsgType;
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
                            } & {
                                type?: _140.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof _140.BlockID>, never>;
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof _140.Vote>, never>;
                            voteB?: {
                                type?: _140.SignedMsgType;
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
                            } & {
                                type?: _140.SignedMsgType;
                                height?: any;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                } & {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & {
                                        total?: number;
                                        hash?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof _140.BlockID>, never>;
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof _140.Vote>, never>;
                            totalVotingPower?: any;
                            validatorPower?: any;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof _138.DuplicateVoteEvidence>, never>;
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
                                            blockIdFlag?: _140.BlockIDFlag;
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
                        } & {
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
                                            blockIdFlag?: _140.BlockIDFlag;
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
                            } & {
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
                                            blockIdFlag?: _140.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                } & {
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
                                    } & {
                                        version?: {
                                            block?: any;
                                            app?: any;
                                        } & {
                                            block?: any;
                                            app?: any;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof _142.Consensus>, never>;
                                        chainId?: string;
                                        height?: any;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        } & {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof _140.BlockID>, never>;
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof _140.Header>, never>;
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
                                            blockIdFlag?: _140.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    } & {
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        } & {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & {
                                                total?: number;
                                                hash?: Uint8Array;
                                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof _140.BlockID>, never>;
                                        signatures?: {
                                            blockIdFlag?: _140.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[] & ({
                                            blockIdFlag?: _140.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        } & {
                                            blockIdFlag?: _140.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof _140.CommitSig>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                            blockIdFlag?: _140.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof _140.Commit>, never>;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof _140.SignedHeader>, never>;
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
                                } & {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[] & ({
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof _141.Validator>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[]>, never>;
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof _133.PublicKey>, never>;
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof _141.Validator>, never>;
                                    totalVotingPower?: any;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof _141.ValidatorSet>, never>;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof _140.LightBlock>, never>;
                            commonHeight?: any;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[] & ({
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            } & {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof _133.PublicKey>, never>;
                                votingPower?: any;
                                proposerPriority?: any;
                            } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof _141.Validator>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: any;
                                proposerPriority?: any;
                            }[]>, never>;
                            totalVotingPower?: any;
                            timestamp?: Date;
                        } & Record<Exclude<keyof I_26["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof _138.LightClientAttackEvidence>, never>;
                    } & Record<Exclude<keyof I_26["evidence"]["evidence"][number], keyof _138.Evidence>, never>)[] & Record<Exclude<keyof I_26["evidence"]["evidence"], keyof {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _140.SignedMsgType;
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
                                type?: _140.SignedMsgType;
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
                                            blockIdFlag?: _140.BlockIDFlag;
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
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["evidence"], "evidence">, never>;
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
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                } & {
                    height?: any;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    } & {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        } & {
                            total?: number;
                            hash?: Uint8Array;
                        } & Record<Exclude<keyof I_26["lastCommit"]["blockId"]["partSetHeader"], keyof _140.PartSetHeader>, never>;
                    } & Record<Exclude<keyof I_26["lastCommit"]["blockId"], keyof _140.BlockID>, never>;
                    signatures?: {
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[] & ({
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & {
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    } & Record<Exclude<keyof I_26["lastCommit"]["signatures"][number], keyof _140.CommitSig>, never>)[] & Record<Exclude<keyof I_26["lastCommit"]["signatures"], keyof {
                        blockIdFlag?: _140.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_26["lastCommit"], keyof _140.Commit>, never>;
            } & Record<Exclude<keyof I_26, keyof _137.Block>, never>>(object: I_26): _137.Block;
        };
    };
    const version: {
        App: {
            encode(message: _142.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.App;
            fromJSON(object: any): _142.App;
            toJSON(message: _142.App): unknown;
            fromPartial<I extends {
                protocol?: any;
                software?: string;
            } & {
                protocol?: any;
                software?: string;
            } & Record<Exclude<keyof I, keyof _142.App>, never>>(object: I): _142.App;
        };
        Consensus: {
            encode(message: _142.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Consensus;
            fromJSON(object: any): _142.Consensus;
            toJSON(message: _142.Consensus): unknown;
            fromPartial<I_1 extends {
                block?: any;
                app?: any;
            } & {
                block?: any;
                app?: any;
            } & Record<Exclude<keyof I_1, keyof _142.Consensus>, never>>(object: I_1): _142.Consensus;
        };
    };
}
