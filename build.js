var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm"
}, {
  bundleAssets: true,
  uglifyOptions: {
    mangle: {
      reserved: ["translate"]
    }
  }
});
