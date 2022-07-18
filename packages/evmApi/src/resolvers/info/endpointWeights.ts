import { ApiResolver } from '@moralisweb3/api-utils';
import { BASE_URL } from '../../EvmApi';
import { operations } from '../../generated/types';

type operation = 'endpointWeights';

type ApiResult = operations[operation]['responses']['200']['content']['application/json'];

export const endpointWeightsResolver = new ApiResolver({
  name: 'endpointWeights',
  getUrl: () => `${BASE_URL}/info/endpointWeights`,
  apiToResult: (data: ApiResult) => data,
  resultToJson: (data) => data,
  parseParams: (params) => params,
});
