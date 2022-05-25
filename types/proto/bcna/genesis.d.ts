import { Params } from "./params";
import { Bitcannaid } from "./bitcannaid";
import { Supplychain } from "./supplychain";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** GenesisState defines the bcna module's genesis state. */
export interface GenesisState {
    params: Params;
    bitcannaidList: Bitcannaid[];
    bitcannaidCount: Long;
    supplychainList: Supplychain[];
    supplychainCount: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
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
        params?: {} & {} & Record<Exclude<keyof I["params"], never>, never>;
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
        } & Record<Exclude<keyof I["bitcannaidList"][number], keyof Bitcannaid>, never>)[] & Record<Exclude<keyof I["bitcannaidList"], keyof {
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
        } & Record<Exclude<keyof I["supplychainList"][number], keyof Supplychain>, never>)[] & Record<Exclude<keyof I["supplychainList"], keyof {
            id?: any;
            product?: string;
            info?: string;
            supplyinfo?: string;
            creator?: string;
        }[]>, never>;
        supplychainCount?: any;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
