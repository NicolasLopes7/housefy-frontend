import { Transaction, User } from '../../@generated/generated-types';

export type useTransactionsType = {
  transactions: Transaction[];
  refetchTransactions: () => void;
  isLoading: boolean;
};
