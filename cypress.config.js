const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    pageLoadTimeout : 120000,
    env:{
      firstName: "Sarah"
    }
  },
});
