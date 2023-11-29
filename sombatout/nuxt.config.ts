// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-schema-org"],
  site: {
    title: "sombatout",
    description: "Your trusted online payment platform for secure and Hass-free digital transactions."
  },
  app: {
    head: {
      title: "sombatout",
    
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Your trusted online payment platform for secure and Hass-free digital transactions." },
        { name: "format-detection", content: "telephone=no" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-config", content: "/brand/browserconfig.xml" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        { rel: "apple-touch-icon", sizes: "180x180", href: "/brand/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/brand/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/brand/favicon-16x16.png" },
        { rel: "manifest", href: "/brand/site.webmanifest" },
        { rel: "mask-icon", href: "/brand/safari-pinned-tab.svg", color: "#5bbad5" },
        { rel: "shortcut,icon", href: "/brand/favicon.ico" },
      ]
    }
  }

})