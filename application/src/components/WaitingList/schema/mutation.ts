import { gql } from "@apollo/client";

export const JOIN_WAITING_LIST = gql`
mutation MyMutation($email: String = "", $products: [String!] = "") {
  addOneWaitingList(object: {email: $email, products: $products}) {
    created_at
    email
    id
    products
    updated_at
  }
}

`