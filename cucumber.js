console.log("Testing cucumber.js loaded");

export default {
  paths: ["features/**/*.feature"],
  import: [
    "step-definitions/login.steps.js",
    "hooks/hooks.js"
  ],
  format: [
    "progress",
    "allure-cucumberjs/reporter"
  ]
};