import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
export declare class QueryClient extends LCDClient {
    constructor({ restEndpoint }: {
        restEndpoint: any;
    });
    params(params: QueryParamsRequest): Promise<QueryParamsResponse>;
    subspaces(params: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
