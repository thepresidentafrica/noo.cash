import { ApolloClient, InMemoryCache } from "@apollo/client";
export const nooCashClient = new ApolloClient({
    uri: import.meta.env.VITE_NOOCASH_HASURA_API_URL,
    cache: new InMemoryCache(),
    credentials: 'include',
    headers: {
        'x-hasura-admin-secret': import.meta.env.VITE_NOOCASH_HASURA_ADMIN_SECRET
    }
})