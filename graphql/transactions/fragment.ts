import { gql } from '@apollo/client';
import { ASSIGNEE_FRAGMENT } from 'graphql/assignee/fragment';
import { OPERATION_FRAGMENT } from 'graphql/operations/fragment';
import { USER_FRAGMENT } from 'graphql/user/fragment';

export const TINY_TRANSACTION_FRAGMENT = gql`
  fragment TinyTransactionFragment on Transaction {
    id
    name
    description
    dueDate
    amount
    type
  }
`;

export const TRANSACTION_FRAGMENT = gql`
  fragment TransactionFragment on Transaction {
    ...TinyTransactionFragment
    status
    recurrencyPeriod
    isRecurrent
    operations {
      ...OperationFragment
      user {
        ...UserFragment
      }
    }
    assignees {
      ...AssigneeFragment
    }
  }

  ${TINY_TRANSACTION_FRAGMENT}
  ${OPERATION_FRAGMENT}
  ${USER_FRAGMENT}
  ${ASSIGNEE_FRAGMENT}
`;
