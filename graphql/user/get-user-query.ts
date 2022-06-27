import { gql } from '@apollo/client';
import { User } from '@generated/generated-types';
import { USER_FRAGMENT } from './fragment';

export type GetUserQuery = {
  user: User;
};
export const GET_USER_BY_ID = gql`
  query GetUserById($id: Int!) {
    user(where: { id: $id }) {
      ...UserFragment
    }
  }

  ${USER_FRAGMENT}
`;
