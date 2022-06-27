import { gql } from '@apollo/client';
import { Transaction, TransactionStatus } from '@generated/generated-types.d';
import { TINY_TRANSACTION_FRAGMENT } from './fragment';

export type GetTransactionsByUserId = {
  transactions: Transaction[];
};

export const GET_TRANSACTIONS_BY_USER_ID = gql`
  query GetTransactionsByUserId($id: Int!) {
    transactions(
      where: {
        assignees: { every: { userId: { equals: $id } } }
        status: { notIn: [${TransactionStatus.Cancelled}, ${TransactionStatus.Paid}] }
      }
      orderBy: { dueDate: asc }
    ) {
      ...TinyTransactionFragment
    }
  }
  ${TINY_TRANSACTION_FRAGMENT}
`;
