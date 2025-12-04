// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/ui", "@nuxt/eslint"],

  runtimeConfig: {
    openaiApiKey: "hello", // it will be private, not exposed to a frontend
    public: {
      someValue: "on the frontend!", // by default all values in runtimeConfig are private, but there is a "public" property also
    },
  },
});
