import { ApolloClient, InMemoryCache } from "@apollo/client";
export const nooCashClient = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQL_URL,
    cache: new InMemoryCache()
})