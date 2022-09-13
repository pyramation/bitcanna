import * as _6 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _6.HashOp;
    hashOpToJSON(object: _6.HashOp): string;
    lengthOpFromJSON(object: any): _6.LengthOp;
    lengthOpToJSON(object: _6.LengthOp): string;
    HashOp: typeof _6.HashOp;
    LengthOp: typeof _6.LengthOp;
    ExistenceProof: {
        encode(message: _6.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ExistenceProof;
        fromJSON(object: any): _6.ExistenceProof;
        toJSON(message: _6.ExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _6.HashOp;
                prehashKey?: _6.HashOp;
                prehashValue?: _6.HashOp;
                length?: _6.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _6.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _6.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _6.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.NonExistenceProof;
        fromJSON(object: any): _6.NonExistenceProof;
        toJSON(message: _6.NonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _6.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _6.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CommitmentProof;
        fromJSON(object: any): _6.CommitmentProof;
        toJSON(message: _6.CommitmentProof): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _6.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _6.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _6.CommitmentProof;
    };
    LeafOp: {
        encode(message: _6.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.LeafOp;
        fromJSON(object: any): _6.LeafOp;
        toJSON(message: _6.LeafOp): unknown;
        fromPartial(object: {
            hash?: _6.HashOp;
            prehashKey?: _6.HashOp;
            prehashValue?: _6.HashOp;
            length?: _6.LengthOp;
            prefix?: Uint8Array;
        }): _6.LeafOp;
    };
    InnerOp: {
        encode(message: _6.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.InnerOp;
        fromJSON(object: any): _6.InnerOp;
        toJSON(message: _6.InnerOp): unknown;
        fromPartial(object: {
            hash?: _6.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _6.InnerOp;
    };
    ProofSpec: {
        encode(message: _6.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ProofSpec;
        fromJSON(object: any): _6.ProofSpec;
        toJSON(message: _6.ProofSpec): unknown;
        fromPartial(object: {
            leafSpec?: {
                hash?: _6.HashOp;
                prehashKey?: _6.HashOp;
                prehashValue?: _6.HashOp;
                length?: _6.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _6.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _6.ProofSpec;
    };
    InnerSpec: {
        encode(message: _6.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.InnerSpec;
        fromJSON(object: any): _6.InnerSpec;
        toJSON(message: _6.InnerSpec): unknown;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _6.HashOp;
        }): _6.InnerSpec;
    };
    BatchProof: {
        encode(message: _6.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.BatchProof;
        fromJSON(object: any): _6.BatchProof;
        toJSON(message: _6.BatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _6.BatchProof;
    };
    BatchEntry: {
        encode(message: _6.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.BatchEntry;
        fromJSON(object: any): _6.BatchEntry;
        toJSON(message: _6.BatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _6.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _6.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CompressedBatchProof;
        fromJSON(object: any): _6.CompressedBatchProof;
        toJSON(message: _6.CompressedBatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _6.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _6.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _6.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CompressedBatchEntry;
        fromJSON(object: any): _6.CompressedBatchEntry;
        toJSON(message: _6.CompressedBatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _6.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _6.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CompressedExistenceProof;
        fromJSON(object: any): _6.CompressedExistenceProof;
        toJSON(message: _6.CompressedExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _6.HashOp;
                prehashKey?: _6.HashOp;
                prehashValue?: _6.HashOp;
                length?: _6.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _6.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _6.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CompressedNonExistenceProof;
        fromJSON(object: any): _6.CompressedNonExistenceProof;
        toJSON(message: _6.CompressedNonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _6.CompressedNonExistenceProof;
    };
};
