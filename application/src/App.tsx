import { RouterProvider } from "react-router-dom"
import { env, nooCashClient } from "./utils"
import { appRoutes } from "./routes"
import { ApolloProvider } from "@apollo/client"
import { Helmet } from "react-helmet"
import { StructuredData } from "./components"
export const Noocash = () => {
  return (
    <>
      <ApolloProvider client={nooCashClient}>
        <div>
          {/* Structured data */}
          <StructuredData />
          {/* Set the meta tags for SEO and social sharing */}
          <Helmet>
            {/* Standard meta tags for SEO */}
            <title className="capitalize">Noo.Cash | {env.VITE_APP_MODE}</title>
            <meta name="description" content="Your trusted online payment platform for secure and hassle-free digital transactions. Join the cashless revolution with Noo.Cash." />
            <meta name="keywords" content="Noo.Cash, online payments, secure transactions, digital payments, cashless payments" />

            {/* Open Graph (OG) tags for social sharing */}
            <meta property="og:title" content="Noo.Cash - Your Cashless Payment Platform" />
            <meta property="og:description" content="Your trusted online payment platform for secure and hassle-free digital transactions. Join the cashless revolution with Noo.Cash." />
            <meta property="og:image" content="https://www.noo.cash/social/noocash-social.png" />
            <meta property="og:url" content="https://www.noo.cash" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Noo.Cash" />

            {/* Twitter Card tags for Twitter sharing */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@NooCash" />

            <meta name="author" content="noo.cash" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://www.noo.cash" />

          </Helmet>
        </div>
        <RouterProvider router={appRoutes[env.VITE_APP_MODE||"website"]} />
      </ApolloProvider>
    </>
  )
}