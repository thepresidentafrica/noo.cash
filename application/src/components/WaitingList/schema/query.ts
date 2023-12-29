import { gql } from "@apollo/client";

export const GET_WAITING_LIST = gql`
query getWaitingList {
  noocash_WailtingList(distinct_on: product, order_by: {product: asc}, limit: 50) {
    created_at
    email
    fullName
    id
    product
    updated_at
  }
}

`