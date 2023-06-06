const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 700,
  viewportHeight: 750,
  video: false,
  pageLoadTimeout: 30000,

  e2e: {
    baseUrl: "https://app2.abtasty.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
