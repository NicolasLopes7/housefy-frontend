import { gql } from '@apollo/client';

export const CREATE_TRANSACTION = gql`
  mutation ($data: TransactionCreateInput!) {
    createTransaction(data: $data) {
      id
    }
  }
`;
