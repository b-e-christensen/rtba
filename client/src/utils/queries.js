import { gql } from '@apollo/client';

export const GET_USER_ALL = gql`
query Query {
    getUser {
      name
    }
  }
`;
