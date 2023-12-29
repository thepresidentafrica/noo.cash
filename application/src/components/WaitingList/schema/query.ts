import { gql } from "@apollo/client";

export const GET_WAITING_LIST = gql`
query getWaitingList {
  getWaitingList {
    created_at
    email
    id
    products
    updated_at
  }
}

`