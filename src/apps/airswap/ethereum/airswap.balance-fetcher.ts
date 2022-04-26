import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { presentBalanceFetcherResponse } from '~app-toolkit/helpers/presentation/balance-fetcher-response.present';
import { BalanceFetcher } from '~balance/balance-fetcher.interface';
import { Network } from '~types/network.interface';

import { AIRSWAP_DEFINITION } from '../airswap.definition';

const appId = AIRSWAP_DEFINITION.id;
const groupId = AIRSWAP_DEFINITION.groups.sAST.id;
const network = Network.ETHEREUM_MAINNET;

@Register.BalanceFetcher(AIRSWAP_DEFINITION.id, network)
export class EthereumAirswapBalanceFetcher implements BalanceFetcher {
  constructor(@Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit) {}

  async getAirswapTokenBalances(address: string) {
    return this.appToolkit.helpers.tokenBalanceHelper.getTokenBalances({
      address,
      appId,
      groupId,
      network: Network.ETHEREUM_MAINNET,
    });
  }

  async getBalances(address: string) {
    const [airswapTokenBalances] = await Promise.all([this.getAirswapTokenBalances(address)]);

    return presentBalanceFetcherResponse([
      {
        label: AIRSWAP_DEFINITION.name,
        assets: airswapTokenBalances,
      },
    ]);
  }
}