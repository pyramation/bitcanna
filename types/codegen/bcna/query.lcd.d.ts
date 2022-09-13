import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QueryGetBitcannaidRequest, QueryGetBitcannaidResponse, QueryAllBitcannaidRequest, QueryAllBitcannaidResponse, QueryGetSupplychainRequest, QueryGetSupplychainResponse, QueryAllSupplychainRequest, QueryAllSupplychainResponse } from "./query";
export declare class LCDQueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: string;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponse>;
    bitcannaid(params: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
    bitcannaidAll(params?: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
    supplychain(params: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
    supplychainAll(params?: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
}
