import { gql } from '@apollo/client';

export const COMPLETE_TRANSACTION = gql`
  mutation CompleteTransaction($id: Int!, $amount: Int!, $userId: Int!) {
    updateTransaction(
      where: { id: $id }
      data: {
        status: { set: PAID }
        operations: {
          create: { amount: $amount, user: { connect: { id: $userId } } }
        }
      }
    ) {
      id
    }
  }
`;
