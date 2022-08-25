import { BigNumber, BigNumberish, DateInput } from '@moralisweb3/core';
import { EvmAddressish, EvmAddress } from '../EvmAddress';
import { EvmChain, EvmChainish } from '../EvmChain';
import { EvmNativeish, EvmNative } from '../EvmNative';
import { EvmTransactionLogish, EvmTransactionLog } from '../EvmTransactionLog';

/**
 * This can be any object with valid transaction data.
 * @example
 * ```
 * const transactionInput = {
          cumulativeGasUsed: "1340925",
          gasPrice: "20000000000",
          gasUsed: "1340925",
          index: "25",
          contractAddress: "0x1d6a4cf64b52f6c73f201839aded7379ce58059c",
          receiptRoot: "string",
          receiptStatus: "1",
          chain: "1",
          data: transaction.input,
          from: "0xd4a3BebD824189481FC45363602b83C9c7e9cbDf",
          hash: "0x057Ec652A4F150f7FF94f089A38008f49a0DF88e",
          nonce: "326595425",
          value: "650000000000000000",
          blockHash: transaction.block_hash,
          blockNumber: "12526958",
          blockTimestamp: new Date("2021-04-02T10:07:54.000Z"),
          gas: "6721975",
          to: "0xa71db868318f0a0bae9411347cd4a6fa23d8d4ef",
        }
 * ```
 */
export interface EvmTransacionInput {
  from: EvmAddressish;
  to?: null | EvmAddressish;
  nonce?: null | BigNumberish;
  data?: null | string;
  value?: null | EvmNativeish;
  hash: string;

  type?: null | number;

  chain: EvmChainish;

  gas?: null | BigNumberish;
  gasPrice: BigNumberish;

  index: number | string;
  blockNumber: BigNumberish;
  blockHash: string;
  blockTimestamp: DateInput;

  // After receipt
  cumulativeGasUsed: BigNumberish;
  gasUsed: BigNumberish;
  contractAddress?: null | EvmAddressish;
  receiptRoot?: null | string;
  receiptStatus?: null | string | number;

  logs?: EvmTransactionLogish[];
}

/**
 * This is the return type of the processed EVM transaction
 */
export interface EvmTransactionData {
  from: EvmAddress;
  to?: EvmAddress;
  nonce?: BigNumber;
  data?: string;
  value?: EvmNative;
  hash: string;

  type?: number;

  chain: EvmChain;

  gas?: BigNumber;
  gasPrice: BigNumber;

  index: number;
  blockNumber: BigNumber;
  blockHash: string;
  blockTimestamp: Date;

  // After receipt
  cumulativeGasUsed: BigNumber;
  gasUsed: BigNumber;
  contractAddress?: EvmAddress;
  receiptRoot?: string;
  receiptStatus?: number;

  logs: EvmTransactionLog[];
}
