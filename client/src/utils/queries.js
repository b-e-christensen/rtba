import { gql } from '@apollo/client';

export const GET_MAP = gql`
query Query {
    getUser {
      worldMap
      unlockedBoxes
    }
  }
`;
