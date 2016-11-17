#!/usr/bin/env node

import program from 'commander'
import fs from 'fs'
import elegantStatus from 'elegant-status'
import templ from './templates/temp.js'

var mkdir = function (path) {
  return fs.mkdirSync(path)
}

var scaffold = function (appName) {
  var done = elegantStatus(`Generating commands`)
  mkdir(`${appName}`)
  mkdir(`${appName}/${templ}`)
  done(true)
}

program
  .version('0.0.1')
  .command('react')
  .description('Generates a react app with build tools')
  .option('-h, --help', 'help')
  .action(scaffold())
  .parse(process.argv)
