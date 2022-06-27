import { gql } from '@apollo/client';
import { User } from '@generated/generated-types';
import { USER_FRAGMENT } from './fragment';

export type GetUsersQuery = {
  users: User[];
};
export const GET_USERS = gql`
  query GetUsers {
    users {
      ...UserFragment
    }
  }

  ${USER_FRAGMENT}
`;
