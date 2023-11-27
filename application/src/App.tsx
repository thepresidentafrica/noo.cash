import { RouterProvider } from "react-router-dom"
import { env, nooCashClient } from "./utils"
import { appRoutes } from "./routes"
import { ApolloProvider } from "@apollo/client"
import { Helmet } from "react-helmet"
import { StructuredData } from "./components"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
export const Noocash = () => {
 useEffect(() => {
  AOS.init({
    duration: 1000
  })
 })
  return (
    <>
      <ApolloProvider client={nooCashClient}>
        <div>
          {/* Structured data */}
          <StructuredData />
          {/* Set the meta tags for SEO and social sharing */}
          <Helmet>
            {/* Standard meta tags for SEO */}
            <title className="capitalize">{env.VITE_APP_TITLE} | Your trusted online payment platform for secure and hassle-free digital transactions</title>
            

          </Helmet>
        </div>
        <RouterProvider router={appRoutes[env.VITE_APP_MODE||"website"]} />
      </ApolloProvider>
    </>
  )
}