import { gql } from '@apollo/client';

export const GET_USER_BY_USERNAME_AND_PASSWORD = gql`
  query ($username: String!, $password: String!) {
    users(
      where: {
        username: { equals: $username }
        password: { equals: $password }
      }
    ) {
      id
    }
  }
`;
