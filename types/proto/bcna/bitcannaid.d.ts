import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface Bitcannaid {
    id: Long;
    bcnaid: string;
    address: string;
    creator: string;
}
export declare const Bitcannaid: {
    encode(message: Bitcannaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bitcannaid;
    fromJSON(object: any): Bitcannaid;
    toJSON(message: Bitcannaid): unknown;
    fromPartial<I extends {
        id?: any;
        bcnaid?: string;
        address?: string;
        creator?: string;
    } & {
        id?: any;
        bcnaid?: string;
        address?: string;
        creator?: string;
    } & Record<Exclude<keyof I, keyof Bitcannaid>, never>>(object: I): Bitcannaid;
};
