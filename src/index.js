#!/usr/bin/env node

var program = require('commander')
var elegantStatus = require('elegant-status')
var chalk = require('chalk')
var fs = require('fs')

var componentTempl = require('./templates/component')
var indexTempl = require('./templates/index')
var babelTempl = require('./templates/babel')
var gitTempl = require('./templates/git')
var indexHTMLTempl = require('./templates/indexHTML')
var packageTempl = require('./templates/package')
var webpackTempl = require('./templates/webpack')

program
  .version('0.0.1')
  .command('react <name>')
  .parse(process.argv)

function init () {
  if (process.argv[process.argv.length-1] === '/usr/local/bin/react') {
    console.log(chalk.red('Please re-run command, name required: react <project name>'))
  } else {
    scaffold(process.argv[process.argv.length-1])
  }
}


function scaffold (name) {
  var gen = elegantStatus(chalk.green('GENERATING PROJECT...'))
  var done = elegantStatus(chalk.green('DONE'))

  if (name) {
    fs.mkdirSync("./" + name)
    fs.mkdirSync("./" + name + "/src")
    fs.mkdirSync("./" + name + "/src/components")

    fs.writeFile("./" + name + "/src/components/Component.js", componentTempl)
    fs.writeFile("./" + name + "/src/index.js", indexTempl)
    fs.writeFile("./" + name + "/.babelrc", babelTempl)
    fs.writeFile("./" + name + "/.gitignore", gitTempl)
    fs.writeFile("./" + name + "/index.html", indexHTMLTempl)
    fs.writeFile("./" + name + "/package.json", packageTempl)
    fs.writeFile("./" + name + "/webpack.config.js", webpackTempl)
  }
  gen(true)
  done(true)
}

init()
