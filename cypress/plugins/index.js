/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/', 'config', `${file}.json`)
  const configFile = fs.readJson(pathToConfigFile)

  configFile.then(o => { console.log(o) }).catch(err => { console.error(err) })

  return configFile
}

// plugins file
module.exports = (on, config) => {
  // optional: register cypress-grep plugin code
  // https://github.com/cypress-io/cypress-grep
  require('cypress-grep/src/plugin')(config)
  // make sure to return the config object
  // as it might have been modified by the plugin

  // accept a configFile value or use dev by default
  const file = config.env.configFile || 'dev'
  config = getConfigurationByFile(file)

  return config
}