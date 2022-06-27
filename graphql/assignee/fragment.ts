import { gql } from '@apollo/client';
import { USER_FRAGMENT } from 'graphql/user/fragment';

export const ASSIGNEE_FRAGMENT = gql`
  fragment AssigneeFragment on Assignee {
    id
    user {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;
