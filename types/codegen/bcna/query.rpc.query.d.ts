import { Rpc } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetBitcannaidRequest, QueryGetBitcannaidResponse, QueryAllBitcannaidRequest, QueryAllBitcannaidResponse, QueryGetSupplychainRequest, QueryGetSupplychainResponse, QueryAllSupplychainRequest, QueryAllSupplychainResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
    bitcannaidAll(request: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
    supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
    supplychainAll(request: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    bitcannaid(request: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse>;
    bitcannaidAll(request: QueryAllBitcannaidRequest): Promise<QueryAllBitcannaidResponse>;
    supplychain(request: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse>;
    supplychainAll(request: QueryAllSupplychainRequest): Promise<QueryAllSupplychainResponse>;
}
