import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useAuthProvider } from '@contexts/auth';
import { Transaction } from '@generated/generated-types';
import { COMPLETE_TRANSACTION } from 'graphql/transactions/complete-transaction-mutation';
import {
  GetTransactionsByUserId,
  GET_TRANSACTIONS_BY_USER_ID,
} from 'graphql/transactions/get-transactions-by-user-id-query';
import {
  GetTransactionDetails,
  GET_TRANSACTION_DETAILS,
} from 'graphql/transactions/get-transactions-detail-query';
import { createContext, useContext } from 'react';
import { noop } from 'utils/noop';
import { useTransactionsType } from './types';

export const TransactionsContext = createContext<useTransactionsType>({
  transactions: [],
  isLoading: false,
  refetchTransactions: noop,
  completeTransaction: noop as any,
  getTransactionDetails: noop as any,
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

  const [completeTransactionMutation] = useMutation(COMPLETE_TRANSACTION);

  const completeTransaction = async ({ id, amount }: Transaction) => {
    await completeTransactionMutation({
      variables: {
        id,
        amount,
        userId: user.id,
      },
    });

    await refetchTransactions();
  };

  const [getTransactionDetails] = useLazyQuery<GetTransactionDetails>(
    GET_TRANSACTION_DETAILS
  );
  const fetchTransactionDetails = async (id: number) => {
    const {
      data: { transaction } = {},
    } = await getTransactionDetails({
      variables: {
        id,
      },
    });

    return transaction;
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        isLoading,
        refetchTransactions,
        completeTransaction,
        getTransactionDetails: fetchTransactionDetails,
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
