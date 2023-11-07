import { RouterProvider } from "react-router-dom"
import { env, nooCashClient } from "./utils"
import { appRoutes } from "./routes"
import { ApolloProvider } from "@apollo/client"
export const Noocash = () => {
  return (
    <>
      <ApolloProvider client={nooCashClient}>
        <RouterProvider router={appRoutes[env.VITE_APP_MODE]} />
      </ApolloProvider>
    </>
  )
}