#!/usr/bin/env node

var program = require('commander')
var fs = require('fs')
var elegantStatus = require('elegant-status')
var templ = require('./templates/temp.js')

var mkdir = function (path) {
  return fs.mkdirSync(path)
}

var scaffold = function (appName) {
  var done = elegantStatus(`Generating commands`)
  mkdir('./reactgen')
  done(true)
}

program
  .version('0.0.1')
  .command('react')
  .description('Generates a react app with build tools')
  .option('-h, --help', 'help')
  .action(scaffold())
  .parse(process.argv)
