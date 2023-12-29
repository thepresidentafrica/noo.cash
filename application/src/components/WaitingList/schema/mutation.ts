import { gql } from "@apollo/client";

export const JOIN_WAITING_LIST = gql`
mutation joinWaitingList($product: String = "", $email: String = "", $fullName: String = "") {
  insert_noocash_WailtingList_one(object: {email: $email, fullName: $fullName, product: $product}) {
    email
    fullName
    product
    updated_at
  }
}

`