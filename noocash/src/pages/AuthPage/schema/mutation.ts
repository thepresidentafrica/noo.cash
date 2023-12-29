import { gql } from "@apollo/client";

export const  AUTHENTICATE = gql`
mutation Authenticate {
  authenticate {
    message
    success
  }
}
`