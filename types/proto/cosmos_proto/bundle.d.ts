import * as _7 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _7.ScalarType;
    scalarTypeToJSON(object: _7.ScalarType): string;
    ScalarType: typeof _7.ScalarType;
    InterfaceDescriptor: {
        encode(message: _7.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.InterfaceDescriptor;
        fromJSON(object: any): _7.InterfaceDescriptor;
        toJSON(message: _7.InterfaceDescriptor): unknown;
        fromPartial<I extends {
            name?: string;
            description?: string;
        } & {
            name?: string;
            description?: string;
        } & Record<Exclude<keyof I, keyof _7.InterfaceDescriptor>, never>>(object: I): _7.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _7.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ScalarDescriptor;
        fromJSON(object: any): _7.ScalarDescriptor;
        toJSON(message: _7.ScalarDescriptor): unknown;
        fromPartial<I_1 extends {
            name?: string;
            description?: string;
            fieldType?: _7.ScalarType[];
        } & {
            name?: string;
            description?: string;
            fieldType?: _7.ScalarType[] & _7.ScalarType[] & Record<Exclude<keyof I_1["fieldType"], keyof _7.ScalarType[]>, never>;
        } & Record<Exclude<keyof I_1, keyof _7.ScalarDescriptor>, never>>(object: I_1): _7.ScalarDescriptor;
    };
};
