import { gql } from '@apollo/client';

export const OPERATION_FRAGMENT = gql`
  fragment OperationFragment on TransactionOperation {
    id
    amount
    createdAt
  }
`;
