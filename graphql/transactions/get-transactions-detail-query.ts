import { gql } from '@apollo/client';
import {
  Transaction,
  TransactionAssignee,
  TransactionOperation,
  User,
} from '@generated/generated-types.d';
import { TRANSACTION_FRAGMENT } from './fragment';

export type GetTransactionDetails = {
  transaction: Transaction & {
    operations: TransactionOperation & {
      user: User;
    };
    assignees: TransactionAssignee & {
      user: User;
    };
  };
};

export const GET_TRANSACTION_DETAILS = gql`
  query GetTransactionDetails($id: Int!) {
    transaction(where: { id: $id }) {
      ...TransactionFragment
    }
  }
  ${TRANSACTION_FRAGMENT}
`;
