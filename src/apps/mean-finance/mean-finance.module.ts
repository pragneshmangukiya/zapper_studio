import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { ArbitrumMeanFinanceDcaPositionContractPositionFetcher } from './arbitrum/mean-finance.dca-position.contract-position-fetcher';
import { MeanFinanceContractFactory } from './contracts';
import { EthereumMeanFinanceDcaPositionContractPositionFetcher } from './ethereum/mean-finance.dca-position.contract-position-fetcher';
import { OptimismMeanFinanceDcaPositionContractPositionFetcher } from './optimism/mean-finance.dca-position.contract-position-fetcher';
import { PolygonMeanFinanceDcaPositionContractPositionFetcher } from './polygon/mean-finance.dca-position.contract-position-fetcher';

@Module({
  providers: [
    MeanFinanceContractFactory,
    OptimismMeanFinanceDcaPositionContractPositionFetcher,
    PolygonMeanFinanceDcaPositionContractPositionFetcher,
    ArbitrumMeanFinanceDcaPositionContractPositionFetcher,
    EthereumMeanFinanceDcaPositionContractPositionFetcher,
  ],
})
export class MeanFinanceAppModule extends AbstractApp() {}
