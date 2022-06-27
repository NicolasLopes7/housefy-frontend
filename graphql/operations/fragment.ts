import { gql } from '@apollo/client';

export const OPERATION_FRAGMENT = gql`
  fragment OperationFragment on Operation {
    id
    amount
    createdAt
  }
`;
