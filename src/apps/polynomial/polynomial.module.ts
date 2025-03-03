import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { PolynomialContractFactory } from './contracts';
import { PolynomialApiHelper } from './helpers/polynomial.api';
import { OptimismPolynomialCallSellingVaultQueueContractPositionFetcher } from './optimism/polynomial.call-selling-vault-queue.contract-position-fetcher';
import { OptimismPolynomialCallSellingVaultTokenFetcher } from './optimism/polynomial.call-selling-vault.token-fetcher';
import { OptimismPolynomialPutSellingVaultQueueContractPositionFetcher } from './optimism/polynomial.put-selling-vault-queue.contract-position-fetcher';
import { OptimismPolynomialPutSellingVaultTokenFetcher } from './optimism/polynomial.put-selling-vault.token-fetcher';

@Module({
  providers: [
    PolynomialApiHelper,

    PolynomialContractFactory,
    OptimismPolynomialCallSellingVaultTokenFetcher,
    OptimismPolynomialCallSellingVaultQueueContractPositionFetcher,
    OptimismPolynomialPutSellingVaultTokenFetcher,
    OptimismPolynomialPutSellingVaultQueueContractPositionFetcher,
  ],
})
export class PolynomialAppModule extends AbstractApp() {}
