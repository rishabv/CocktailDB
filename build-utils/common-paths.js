const path = require('path');
const PROJECT_ROOT = path.resolve(__dirname, '../');
const environments=require("../config/environment.config");

const config={
  env: process.env.NODE_ENV || "development"
}

const overrides=environments[config.env];

const globals={
  __API__: JSON.stringify(overrides(config.env).api),
  __IMG_URL__: JSON.stringify(overrides(config.env).image_url)
}

module.exports = {
  projectRoot: PROJECT_ROOT,
  outputPath: path.join(PROJECT_ROOT, 'dist'),
  appEntry: path.join(PROJECT_ROOT, 'src'),
  globals: globals
};