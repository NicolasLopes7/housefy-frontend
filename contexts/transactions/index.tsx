import { useQuery } from '@apollo/client';
import { useAuthProvider } from '@contexts/auth';
import {
  GetTransactionsByUserId,
  GET_TRANSACTIONS_BY_USER_ID,
} from 'graphql/transactions/get-transactions-by-user-id-query';
import { createContext, useContext } from 'react';
import { noop } from 'utils/noop';
import { useTransactionsType } from './types';

export const TransactionsContext = createContext<useTransactionsType>({
  transactions: [],
  isLoading: false,
  refetchTransactions: noop,
});

export const TransactionsProvider = (props) => {
  const { user } = useAuthProvider();

  const {
    data: { transactions } = {},
    loading: isLoading,
    refetch: refetchTransactions,
  } = useQuery<GetTransactionsByUserId>(GET_TRANSACTIONS_BY_USER_ID, {
    skip: !user,
    variables: {
      id: user?.id,
    },
  });

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        isLoading,
        refetchTransactions,
      }}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
};

export const useTransactionsProvider = (): useTransactionsType => {
  const ctx = useContext(TransactionsContext);

  return ctx;
};
