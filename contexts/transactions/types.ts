import { GetTransactionDetails } from 'graphql/transactions/get-transactions-detail-query';
import { Transaction } from '../../@generated/generated-types';

export type useTransactionsType = {
  transactions: Transaction[];
  refetchTransactions: () => void;
  completeTransaction: (trx: Transaction) => Promise<void>;
  getTransactionDetails: (id: number) => Promise<GetTransactionDetails['transaction']>;
  isLoading: boolean;
};
