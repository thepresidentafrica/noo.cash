import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["auth"]?: typeof import("nuxt-auth-utils").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["nuxt-auth-utils", Exclude<NuxtConfig["auth"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   session: {
      name: string,

      password: string,

      cookie: {
         sameSite: string,
      },
   },

   oauth: {
      github: {
         clientId: string,

         clientSecret: string,
      },

      spotify: {
         clientId: string,

         clientSecret: string,
      },

      google: {
         clientId: string,

         clientSecret: string,
      },

      twitch: {
         clientId: string,

         clientSecret: string,
      },

      auth0: {
         clientId: string,

         clientSecret: string,

         domain: string,

         audience: string,
      },

      microsoft: {
         clientId: string,

         clientSecret: string,

         tenant: string,

         scope: Array<any>,

         authorizationURL: string,

         tokenURL: string,

         userURL: string,
      },

      discord: {
         clientId: string,

         clientSecret: string,
      },

      battledotnet: {
         clientId: string,

         clientSecret: string,
      },

      linkedin: {
         clientId: string,

         clientSecret: string,
      },
   },
  }
  interface PublicRuntimeConfig {

  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }