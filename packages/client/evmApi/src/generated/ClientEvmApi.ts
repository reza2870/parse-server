
// CAUTION: This file is automatically generated. Do not edit it manually!

import { endpointWeightsOperation, EndpointWeightsRequest, EndpointWeightsResponseAdapter, runContractFunctionOperation, RunContractFunctionRequest, RunContractFunctionResponseAdapter, web3ApiVersionOperation, Web3ApiVersionRequest, Web3ApiVersionResponseAdapter, getBlockOperation, GetBlockRequest, GetBlockResponseAdapter, getDateToBlockOperation, GetDateToBlockRequest, GetDateToBlockResponseAdapter, getContractEventsOperation, GetContractEventsRequest, GetContractEventsResponseAdapter, getContractLogsOperation, GetContractLogsRequest, GetContractLogsResponseAdapter, getContractNFTsOperation, GetContractNFTsRequest, GetContractNFTsResponseAdapter, getNFTContractMetadataOperation, GetNFTContractMetadataRequest, GetNFTContractMetadataResponseAdapter, getNFTContractTransfersOperation, GetNFTContractTransfersRequest, GetNFTContractTransfersResponseAdapter, getNFTLowestPriceOperation, GetNFTLowestPriceRequest, GetNFTLowestPriceResponseAdapter, getNFTMetadataOperation, GetNFTMetadataRequest, GetNFTMetadataResponseAdapter, getNFTOwnersOperation, GetNFTOwnersRequest, GetNFTOwnersResponseAdapter, getNFTTokenIdOwnersOperation, GetNFTTokenIdOwnersRequest, GetNFTTokenIdOwnersResponseAdapter, getNFTTradesOperation, GetNFTTradesRequest, GetNFTTradesResponseAdapter, getNFTTransfersByBlockOperation, GetNFTTransfersByBlockRequest, GetNFTTransfersByBlockResponseAdapter, getNFTTransfersFromToBlockOperation, GetNFTTransfersFromToBlockRequest, GetNFTTransfersFromToBlockResponseAdapter, getNFTTransfersOperation, GetNFTTransfersRequest, GetNFTTransfersResponseAdapter, getWalletNFTCollectionsOperation, GetWalletNFTCollectionsRequest, GetWalletNFTCollectionsResponseAdapter, getWalletNFTsOperation, GetWalletNFTsRequest, GetWalletNFTsResponseAdapter, getWalletNFTTransfersOperation, GetWalletNFTTransfersRequest, GetWalletNFTTransfersResponseAdapter, reSyncMetadataOperation, ReSyncMetadataRequest, ReSyncMetadataResponseAdapter, searchNFTsOperation, SearchNFTsRequest, SearchNFTsResponseAdapter, syncNFTContractOperation, SyncNFTContractRequest, SyncNFTContractResponseAdapter, getNativeBalanceOperation, GetNativeBalanceRequest, GetNativeBalanceResponseAdapter, getPairAddressOperation, GetPairAddressRequest, GetPairAddressResponseAdapter, getPairReservesOperation, GetPairReservesRequest, GetPairReservesResponseAdapter, getTokenAllowanceOperation, GetTokenAllowanceRequest, GetTokenAllowanceResponseAdapter, getTokenMetadataBySymbolOperation, GetTokenMetadataBySymbolRequest, GetTokenMetadataBySymbolResponseAdapter, getTokenMetadataOperation, GetTokenMetadataRequest, GetTokenMetadataResponseAdapter, getTokenPriceOperation, GetTokenPriceRequest, GetTokenPriceResponseAdapter, getTokenTransfersOperation, GetTokenTransfersRequest, GetTokenTransfersResponseAdapter, getWalletTokenBalancesOperation, GetWalletTokenBalancesRequest, GetWalletTokenBalancesResponseAdapter, getWalletTokenTransfersOperation, GetWalletTokenTransfersRequest, GetWalletTokenTransfersResponseAdapter, getTransactionOperation, GetTransactionRequest, GetTransactionResponseAdapter, getWalletTransactionsOperation, GetWalletTransactionsRequest, GetWalletTransactionsResponseAdapter, resolveAddressOperation, ResolveAddressRequest, ResolveAddressResponseAdapter, resolveDomainOperation, ResolveDomainRequest, ResolveDomainResponseAdapter, uploadFolderOperation, UploadFolderRequest, UploadFolderResponseAdapter } from '@moralisweb3/common-evm-utils';
import { ClientRequestHandler } from '@moralisweb3/client-api-utils';

export class ClientEvmApi {
  public constructor(
    private readonly requestHandler: ClientRequestHandler) {
  }
  
  public readonly utils = {
   endpointWeights: (request: EndpointWeightsRequest): Promise<EndpointWeightsResponseAdapter> => {
      return this.requestHandler.handle(request, endpointWeightsOperation);
    },
   runContractFunction: (request: RunContractFunctionRequest): Promise<RunContractFunctionResponseAdapter> => {
      return this.requestHandler.handle(request, runContractFunctionOperation);
    },
   web3ApiVersion: (request: Web3ApiVersionRequest): Promise<Web3ApiVersionResponseAdapter> => {
      return this.requestHandler.handle(request, web3ApiVersionOperation);
    },

  };

  public readonly block = {
   getBlock: (request: GetBlockRequest): Promise<GetBlockResponseAdapter | null> => {
      return this.requestHandler.handleNullable(request, getBlockOperation);
    },
   getDateToBlock: (request: GetDateToBlockRequest): Promise<GetDateToBlockResponseAdapter> => {
      return this.requestHandler.handle(request, getDateToBlockOperation);
    },

  };

  public readonly events = {
   getContractEvents: (request: GetContractEventsRequest): Promise<GetContractEventsResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getContractEventsOperation);
    },
   getContractLogs: (request: GetContractLogsRequest): Promise<GetContractLogsResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getContractLogsOperation);
    },

  };

  public readonly nft = {
   getContractNFTs: (request: GetContractNFTsRequest): Promise<GetContractNFTsResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getContractNFTsOperation);
    },
   getNFTContractMetadata: (request: GetNFTContractMetadataRequest): Promise<GetNFTContractMetadataResponseAdapter | null> => {
      return this.requestHandler.handleNullable(request, getNFTContractMetadataOperation);
    },
   getNFTContractTransfers: (request: GetNFTContractTransfersRequest): Promise<GetNFTContractTransfersResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getNFTContractTransfersOperation);
    },
   getNFTLowestPrice: (request: GetNFTLowestPriceRequest): Promise<GetNFTLowestPriceResponseAdapter | null> => {
      return this.requestHandler.handleNullable(request, getNFTLowestPriceOperation);
    },
   getNFTMetadata: (request: GetNFTMetadataRequest): Promise<GetNFTMetadataResponseAdapter | null> => {
      return this.requestHandler.handleNullable(request, getNFTMetadataOperation);
    },
   getNFTOwners: (request: GetNFTOwnersRequest): Promise<GetNFTOwnersResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getNFTOwnersOperation);
    },
   getNFTTokenIdOwners: (request: GetNFTTokenIdOwnersRequest): Promise<GetNFTTokenIdOwnersResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getNFTTokenIdOwnersOperation);
    },
   getNFTTrades: (request: GetNFTTradesRequest): Promise<GetNFTTradesResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getNFTTradesOperation);
    },
   getNFTTransfersByBlock: (request: GetNFTTransfersByBlockRequest): Promise<GetNFTTransfersByBlockResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getNFTTransfersByBlockOperation);
    },
   getNFTTransfersFromToBlock: (request: GetNFTTransfersFromToBlockRequest): Promise<GetNFTTransfersFromToBlockResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getNFTTransfersFromToBlockOperation);
    },
   getNFTTransfers: (request: GetNFTTransfersRequest): Promise<GetNFTTransfersResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getNFTTransfersOperation);
    },
   getWalletNFTCollections: (request: GetWalletNFTCollectionsRequest): Promise<GetWalletNFTCollectionsResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getWalletNFTCollectionsOperation);
    },
   getWalletNFTs: (request: GetWalletNFTsRequest): Promise<GetWalletNFTsResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getWalletNFTsOperation);
    },
   getWalletNFTTransfers: (request: GetWalletNFTTransfersRequest): Promise<GetWalletNFTTransfersResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getWalletNFTTransfersOperation);
    },
   reSyncMetadata: (request: ReSyncMetadataRequest): Promise<ReSyncMetadataResponseAdapter> => {
      return this.requestHandler.handle(request, reSyncMetadataOperation);
    },
   searchNFTs: (request: SearchNFTsRequest): Promise<SearchNFTsResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, searchNFTsOperation);
    },
   syncNFTContract: (request: SyncNFTContractRequest): Promise<SyncNFTContractResponseAdapter> => {
      return this.requestHandler.handle(request, syncNFTContractOperation);
    },

  };

  public readonly balance = {
   getNativeBalance: (request: GetNativeBalanceRequest): Promise<GetNativeBalanceResponseAdapter> => {
      return this.requestHandler.handle(request, getNativeBalanceOperation);
    },

  };

  public readonly defi = {
   getPairAddress: (request: GetPairAddressRequest): Promise<GetPairAddressResponseAdapter> => {
      return this.requestHandler.handle(request, getPairAddressOperation);
    },
   getPairReserves: (request: GetPairReservesRequest): Promise<GetPairReservesResponseAdapter> => {
      return this.requestHandler.handle(request, getPairReservesOperation);
    },

  };

  public readonly token = {
   getTokenAllowance: (request: GetTokenAllowanceRequest): Promise<GetTokenAllowanceResponseAdapter> => {
      return this.requestHandler.handle(request, getTokenAllowanceOperation);
    },
   getTokenMetadataBySymbol: (request: GetTokenMetadataBySymbolRequest): Promise<GetTokenMetadataBySymbolResponseAdapter> => {
      return this.requestHandler.handle(request, getTokenMetadataBySymbolOperation);
    },
   getTokenMetadata: (request: GetTokenMetadataRequest): Promise<GetTokenMetadataResponseAdapter> => {
      return this.requestHandler.handle(request, getTokenMetadataOperation);
    },
   getTokenPrice: (request: GetTokenPriceRequest): Promise<GetTokenPriceResponseAdapter> => {
      return this.requestHandler.handle(request, getTokenPriceOperation);
    },
   getTokenTransfers: (request: GetTokenTransfersRequest): Promise<GetTokenTransfersResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getTokenTransfersOperation);
    },
   getWalletTokenBalances: (request: GetWalletTokenBalancesRequest): Promise<GetWalletTokenBalancesResponseAdapter> => {
      return this.requestHandler.handle(request, getWalletTokenBalancesOperation);
    },
   getWalletTokenTransfers: (request: GetWalletTokenTransfersRequest): Promise<GetWalletTokenTransfersResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getWalletTokenTransfersOperation);
    },

  };

  public readonly transaction = {
   getTransaction: (request: GetTransactionRequest): Promise<GetTransactionResponseAdapter | null> => {
      return this.requestHandler.handleNullable(request, getTransactionOperation);
    },
   getWalletTransactions: (request: GetWalletTransactionsRequest): Promise<GetWalletTransactionsResponseAdapter> => {
      return this.requestHandler.handlePaginated(request, getWalletTransactionsOperation);
    },

  };

  public readonly resolve = {
   resolveAddress: (request: ResolveAddressRequest): Promise<ResolveAddressResponseAdapter | null> => {
      return this.requestHandler.handleNullable(request, resolveAddressOperation);
    },
   resolveDomain: (request: ResolveDomainRequest): Promise<ResolveDomainResponseAdapter | null> => {
      return this.requestHandler.handleNullable(request, resolveDomainOperation);
    },

  };

  public readonly ipfs = {
   uploadFolder: (request: UploadFolderRequest): Promise<UploadFolderResponseAdapter> => {
      return this.requestHandler.handle(request, uploadFolderOperation);
    },

  };

}
