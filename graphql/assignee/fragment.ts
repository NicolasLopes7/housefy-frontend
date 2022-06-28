import { gql } from '@apollo/client';
import { USER_FRAGMENT } from 'graphql/user/fragment';

export const ASSIGNEE_FRAGMENT = gql`
  fragment AssigneeFragment on TransactionAssignee {
    id
    user {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`;
