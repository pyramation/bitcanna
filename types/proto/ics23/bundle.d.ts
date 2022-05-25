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
        fromPartial<I extends {
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
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _6.HashOp;
                prehashKey?: _6.HashOp;
                prehashValue?: _6.HashOp;
                length?: _6.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _6.HashOp;
                prehashKey?: _6.HashOp;
                prehashValue?: _6.HashOp;
                length?: _6.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I["leaf"], keyof _6.LeafOp>, never>;
            path?: {
                hash?: _6.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[] & ({
                hash?: _6.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & {
                hash?: _6.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & Record<Exclude<keyof I["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I["path"], keyof {
                hash?: _6.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I, keyof _6.ExistenceProof>, never>>(object: I): _6.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _6.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.NonExistenceProof;
        fromJSON(object: any): _6.NonExistenceProof;
        toJSON(message: _6.NonExistenceProof): unknown;
        fromPartial<I_1 extends {
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
        } & {
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
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_1["left"]["leaf"], keyof _6.LeafOp>, never>;
                path?: {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_1["left"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_1["left"]["path"], keyof {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_1["left"], keyof _6.ExistenceProof>, never>;
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
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_1["right"]["leaf"], keyof _6.LeafOp>, never>;
                path?: {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_1["right"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_1["right"]["path"], keyof {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_1["right"], keyof _6.ExistenceProof>, never>;
        } & Record<Exclude<keyof I_1, keyof _6.NonExistenceProof>, never>>(object: I_1): _6.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _6.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CommitmentProof;
        fromJSON(object: any): _6.CommitmentProof;
        toJSON(message: _6.CommitmentProof): unknown;
        fromPartial<I_2 extends {
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
        } & {
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
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_2["exist"]["leaf"], keyof _6.LeafOp>, never>;
                path?: {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_2["exist"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_2["exist"]["path"], keyof {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_2["exist"], keyof _6.ExistenceProof>, never>;
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
            } & {
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
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["left"]["leaf"], keyof _6.LeafOp>, never>;
                    path?: {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["left"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_2["nonexist"]["left"]["path"], keyof {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_2["nonexist"]["left"], keyof _6.ExistenceProof>, never>;
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
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["right"]["leaf"], keyof _6.LeafOp>, never>;
                    path?: {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_2["nonexist"]["right"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_2["nonexist"]["right"]["path"], keyof {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_2["nonexist"]["right"], keyof _6.ExistenceProof>, never>;
            } & Record<Exclude<keyof I_2["nonexist"], keyof _6.NonExistenceProof>, never>;
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
            } & {
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
                }[] & ({
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
                } & {
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
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["leaf"], keyof _6.LeafOp>, never>;
                        path?: {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"]["path"], keyof {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_2["batch"]["entries"][number]["exist"], keyof _6.ExistenceProof>, never>;
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
                    } & {
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
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof _6.LeafOp>, never>;
                            path?: {
                                hash?: _6.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[] & ({
                                hash?: _6.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & {
                                hash?: _6.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                hash?: _6.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["left"], keyof _6.ExistenceProof>, never>;
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
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof _6.LeafOp>, never>;
                            path?: {
                                hash?: _6.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[] & ({
                                hash?: _6.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & {
                                hash?: _6.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                hash?: _6.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[]>, never>;
                        } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"]["right"], keyof _6.ExistenceProof>, never>;
                    } & Record<Exclude<keyof I_2["batch"]["entries"][number]["nonexist"], keyof _6.NonExistenceProof>, never>;
                } & Record<Exclude<keyof I_2["batch"]["entries"][number], keyof _6.BatchEntry>, never>)[] & Record<Exclude<keyof I_2["batch"]["entries"], keyof {
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
                }[]>, never>;
            } & Record<Exclude<keyof I_2["batch"], "entries">, never>;
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
            } & {
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
                }[] & ({
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
                } & {
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
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"]["leaf"], keyof _6.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["exist"], keyof _6.CompressedExistenceProof>, never>;
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
                    } & {
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
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof _6.LeafOp>, never>;
                            path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["left"], keyof _6.CompressedExistenceProof>, never>;
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
                        } & {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            } & {
                                hash?: _6.HashOp;
                                prehashKey?: _6.HashOp;
                                prehashValue?: _6.HashOp;
                                length?: _6.LengthOp;
                                prefix?: Uint8Array;
                            } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof _6.LeafOp>, never>;
                            path?: number[] & number[] & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                        } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"]["right"], keyof _6.CompressedExistenceProof>, never>;
                    } & Record<Exclude<keyof I_2["compressed"]["entries"][number]["nonexist"], keyof _6.CompressedNonExistenceProof>, never>;
                } & Record<Exclude<keyof I_2["compressed"]["entries"][number], keyof _6.CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_2["compressed"]["entries"], keyof {
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
                }[]>, never>;
                lookupInners?: {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_2["compressed"]["lookupInners"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_2["compressed"]["lookupInners"], keyof {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_2["compressed"], keyof _6.CompressedBatchProof>, never>;
        } & Record<Exclude<keyof I_2, keyof _6.CommitmentProof>, never>>(object: I_2): _6.CommitmentProof;
    };
    LeafOp: {
        encode(message: _6.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.LeafOp;
        fromJSON(object: any): _6.LeafOp;
        toJSON(message: _6.LeafOp): unknown;
        fromPartial<I_3 extends {
            hash?: _6.HashOp;
            prehashKey?: _6.HashOp;
            prehashValue?: _6.HashOp;
            length?: _6.LengthOp;
            prefix?: Uint8Array;
        } & {
            hash?: _6.HashOp;
            prehashKey?: _6.HashOp;
            prehashValue?: _6.HashOp;
            length?: _6.LengthOp;
            prefix?: Uint8Array;
        } & Record<Exclude<keyof I_3, keyof _6.LeafOp>, never>>(object: I_3): _6.LeafOp;
    };
    InnerOp: {
        encode(message: _6.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.InnerOp;
        fromJSON(object: any): _6.InnerOp;
        toJSON(message: _6.InnerOp): unknown;
        fromPartial<I_4 extends {
            hash?: _6.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        } & {
            hash?: _6.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        } & Record<Exclude<keyof I_4, keyof _6.InnerOp>, never>>(object: I_4): _6.InnerOp;
    };
    ProofSpec: {
        encode(message: _6.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ProofSpec;
        fromJSON(object: any): _6.ProofSpec;
        toJSON(message: _6.ProofSpec): unknown;
        fromPartial<I_5 extends {
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
        } & {
            leafSpec?: {
                hash?: _6.HashOp;
                prehashKey?: _6.HashOp;
                prehashValue?: _6.HashOp;
                length?: _6.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _6.HashOp;
                prehashKey?: _6.HashOp;
                prehashValue?: _6.HashOp;
                length?: _6.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I_5["leafSpec"], keyof _6.LeafOp>, never>;
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _6.HashOp;
            } & {
                childOrder?: number[] & number[] & Record<Exclude<keyof I_5["innerSpec"]["childOrder"], keyof number[]>, never>;
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _6.HashOp;
            } & Record<Exclude<keyof I_5["innerSpec"], keyof _6.InnerSpec>, never>;
            maxDepth?: number;
            minDepth?: number;
        } & Record<Exclude<keyof I_5, keyof _6.ProofSpec>, never>>(object: I_5): _6.ProofSpec;
    };
    InnerSpec: {
        encode(message: _6.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.InnerSpec;
        fromJSON(object: any): _6.InnerSpec;
        toJSON(message: _6.InnerSpec): unknown;
        fromPartial<I_6 extends {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _6.HashOp;
        } & {
            childOrder?: number[] & number[] & Record<Exclude<keyof I_6["childOrder"], keyof number[]>, never>;
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _6.HashOp;
        } & Record<Exclude<keyof I_6, keyof _6.InnerSpec>, never>>(object: I_6): _6.InnerSpec;
    };
    BatchProof: {
        encode(message: _6.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.BatchProof;
        fromJSON(object: any): _6.BatchProof;
        toJSON(message: _6.BatchProof): unknown;
        fromPartial<I_7 extends {
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
        } & {
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
            }[] & ({
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
            } & {
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
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_7["entries"][number]["exist"]["leaf"], keyof _6.LeafOp>, never>;
                    path?: {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_7["entries"][number]["exist"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["exist"]["path"], keyof {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_7["entries"][number]["exist"], keyof _6.ExistenceProof>, never>;
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
                } & {
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
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["leaf"], keyof _6.LeafOp>, never>;
                        path?: {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"]["path"], keyof {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["left"], keyof _6.ExistenceProof>, never>;
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
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["leaf"], keyof _6.LeafOp>, never>;
                        path?: {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[] & ({
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"]["path"], keyof {
                            hash?: _6.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[]>, never>;
                    } & Record<Exclude<keyof I_7["entries"][number]["nonexist"]["right"], keyof _6.ExistenceProof>, never>;
                } & Record<Exclude<keyof I_7["entries"][number]["nonexist"], keyof _6.NonExistenceProof>, never>;
            } & Record<Exclude<keyof I_7["entries"][number], keyof _6.BatchEntry>, never>)[] & Record<Exclude<keyof I_7["entries"], keyof {
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
            }[]>, never>;
        } & Record<Exclude<keyof I_7, "entries">, never>>(object: I_7): _6.BatchProof;
    };
    BatchEntry: {
        encode(message: _6.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.BatchEntry;
        fromJSON(object: any): _6.BatchEntry;
        toJSON(message: _6.BatchEntry): unknown;
        fromPartial<I_8 extends {
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
        } & {
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
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_8["exist"]["leaf"], keyof _6.LeafOp>, never>;
                path?: {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[] & ({
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                } & Record<Exclude<keyof I_8["exist"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_8["exist"]["path"], keyof {
                    hash?: _6.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[]>, never>;
            } & Record<Exclude<keyof I_8["exist"], keyof _6.ExistenceProof>, never>;
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
            } & {
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
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["left"]["leaf"], keyof _6.LeafOp>, never>;
                    path?: {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["left"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_8["nonexist"]["left"]["path"], keyof {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_8["nonexist"]["left"], keyof _6.ExistenceProof>, never>;
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
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["right"]["leaf"], keyof _6.LeafOp>, never>;
                    path?: {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[] & ({
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    } & Record<Exclude<keyof I_8["nonexist"]["right"]["path"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_8["nonexist"]["right"]["path"], keyof {
                        hash?: _6.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[]>, never>;
                } & Record<Exclude<keyof I_8["nonexist"]["right"], keyof _6.ExistenceProof>, never>;
            } & Record<Exclude<keyof I_8["nonexist"], keyof _6.NonExistenceProof>, never>;
        } & Record<Exclude<keyof I_8, keyof _6.BatchEntry>, never>>(object: I_8): _6.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _6.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CompressedBatchProof;
        fromJSON(object: any): _6.CompressedBatchProof;
        toJSON(message: _6.CompressedBatchProof): unknown;
        fromPartial<I_9 extends {
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
        } & {
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
            }[] & ({
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
            } & {
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
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_9["entries"][number]["exist"]["leaf"], keyof _6.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["exist"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_9["entries"][number]["exist"], keyof _6.CompressedExistenceProof>, never>;
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
                } & {
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
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"]["leaf"], keyof _6.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["left"], keyof _6.CompressedExistenceProof>, never>;
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
                    } & {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & {
                            hash?: _6.HashOp;
                            prehashKey?: _6.HashOp;
                            prehashValue?: _6.HashOp;
                            length?: _6.LengthOp;
                            prefix?: Uint8Array;
                        } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"]["leaf"], keyof _6.LeafOp>, never>;
                        path?: number[] & number[] & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>;
                    } & Record<Exclude<keyof I_9["entries"][number]["nonexist"]["right"], keyof _6.CompressedExistenceProof>, never>;
                } & Record<Exclude<keyof I_9["entries"][number]["nonexist"], keyof _6.CompressedNonExistenceProof>, never>;
            } & Record<Exclude<keyof I_9["entries"][number], keyof _6.CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I_9["entries"], keyof {
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
            }[]>, never>;
            lookupInners?: {
                hash?: _6.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[] & ({
                hash?: _6.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & {
                hash?: _6.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            } & Record<Exclude<keyof I_9["lookupInners"][number], keyof _6.InnerOp>, never>)[] & Record<Exclude<keyof I_9["lookupInners"], keyof {
                hash?: _6.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I_9, keyof _6.CompressedBatchProof>, never>>(object: I_9): _6.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _6.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CompressedBatchEntry;
        fromJSON(object: any): _6.CompressedBatchEntry;
        toJSON(message: _6.CompressedBatchEntry): unknown;
        fromPartial<I_10 extends {
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
        } & {
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
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_10["exist"]["leaf"], keyof _6.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_10["exist"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_10["exist"], keyof _6.CompressedExistenceProof>, never>;
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
            } & {
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
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_10["nonexist"]["left"]["leaf"], keyof _6.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_10["nonexist"]["left"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_10["nonexist"]["left"], keyof _6.CompressedExistenceProof>, never>;
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
                } & {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & {
                        hash?: _6.HashOp;
                        prehashKey?: _6.HashOp;
                        prehashValue?: _6.HashOp;
                        length?: _6.LengthOp;
                        prefix?: Uint8Array;
                    } & Record<Exclude<keyof I_10["nonexist"]["right"]["leaf"], keyof _6.LeafOp>, never>;
                    path?: number[] & number[] & Record<Exclude<keyof I_10["nonexist"]["right"]["path"], keyof number[]>, never>;
                } & Record<Exclude<keyof I_10["nonexist"]["right"], keyof _6.CompressedExistenceProof>, never>;
            } & Record<Exclude<keyof I_10["nonexist"], keyof _6.CompressedNonExistenceProof>, never>;
        } & Record<Exclude<keyof I_10, keyof _6.CompressedBatchEntry>, never>>(object: I_10): _6.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _6.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CompressedExistenceProof;
        fromJSON(object: any): _6.CompressedExistenceProof;
        toJSON(message: _6.CompressedExistenceProof): unknown;
        fromPartial<I_11 extends {
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
        } & {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _6.HashOp;
                prehashKey?: _6.HashOp;
                prehashValue?: _6.HashOp;
                length?: _6.LengthOp;
                prefix?: Uint8Array;
            } & {
                hash?: _6.HashOp;
                prehashKey?: _6.HashOp;
                prehashValue?: _6.HashOp;
                length?: _6.LengthOp;
                prefix?: Uint8Array;
            } & Record<Exclude<keyof I_11["leaf"], keyof _6.LeafOp>, never>;
            path?: number[] & number[] & Record<Exclude<keyof I_11["path"], keyof number[]>, never>;
        } & Record<Exclude<keyof I_11, keyof _6.CompressedExistenceProof>, never>>(object: I_11): _6.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _6.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.CompressedNonExistenceProof;
        fromJSON(object: any): _6.CompressedNonExistenceProof;
        toJSON(message: _6.CompressedNonExistenceProof): unknown;
        fromPartial<I_12 extends {
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
        } & {
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
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_12["left"]["leaf"], keyof _6.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_12["left"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_12["left"], keyof _6.CompressedExistenceProof>, never>;
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
            } & {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & {
                    hash?: _6.HashOp;
                    prehashKey?: _6.HashOp;
                    prehashValue?: _6.HashOp;
                    length?: _6.LengthOp;
                    prefix?: Uint8Array;
                } & Record<Exclude<keyof I_12["right"]["leaf"], keyof _6.LeafOp>, never>;
                path?: number[] & number[] & Record<Exclude<keyof I_12["right"]["path"], keyof number[]>, never>;
            } & Record<Exclude<keyof I_12["right"], keyof _6.CompressedExistenceProof>, never>;
        } & Record<Exclude<keyof I_12, keyof _6.CompressedNonExistenceProof>, never>>(object: I_12): _6.CompressedNonExistenceProof;
    };
};
