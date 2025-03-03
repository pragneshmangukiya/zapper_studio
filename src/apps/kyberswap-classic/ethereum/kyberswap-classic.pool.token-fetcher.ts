import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { KyberSwapClassicPoolTokenFetcher } from '../common/kyberswap-classic.pool.token-fetcher';

@PositionTemplate()
export class EthereumKyberSwapClassicPoolTokenFetcher extends KyberSwapClassicPoolTokenFetcher {
  groupLabel = 'Pools';
  factoryAddress = '0x833e4083b7ae46cea85695c4f7ed25cdad8886de';
}
