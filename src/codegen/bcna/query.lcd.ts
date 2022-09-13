import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Bitcannaid } from "./bitcannaid";
import { Supplychain } from "./supplychain";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryGetBitcannaidRequest, QueryGetBitcannaidResponse, QueryAllBitcannaidRequest, QueryAllBitcannaidResponse, QueryGetSupplychainRequest, QueryGetSupplychainResponse, QueryAllSupplychainRequest, QueryAllSupplychainResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `BitCannaGlobal/bcna/bcna/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* Queries a Bitcannaid by id. */
  async bitcannaid(params: QueryGetBitcannaidRequest): Promise<QueryGetBitcannaidResponse> {
    const endpoint = `BitCannaGlobal/bcna/bcna/bitcannaid/${params.id}`;
    return await this.request<QueryGetBitcannaidResponse>(endpoint);
  }

  /* Queries a list of Bitcannaid items. */
  async bitcannaidAll(params: QueryAllBitcannaidRequest = {
    pagination: undefined
  }): Promise<QueryAllBitcannaidResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `BitCannaGlobal/bcna/bcna/bitcannaid`;
    return await this.request<QueryAllBitcannaidResponse>(endpoint, options);
  }

  /* Queries a Supplychain by id. */
  async supplychain(params: QueryGetSupplychainRequest): Promise<QueryGetSupplychainResponse> {
    const endpoint = `BitCannaGlobal/bcna/bcna/supplychain/${params.id}`;
    return await this.request<QueryGetSupplychainResponse>(endpoint);
  }

  /* Queries a list of Supplychain items. */
  async supplychainAll(params: QueryAllSupplychainRequest = {
    pagination: undefined
  }): Promise<QueryAllSupplychainResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `BitCannaGlobal/bcna/bcna/supplychain`;
    return await this.request<QueryAllSupplychainResponse>(endpoint, options);
  }

}