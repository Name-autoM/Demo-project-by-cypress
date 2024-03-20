const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
      viewportHeight: 720,
      viewportWidth: 1280,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
