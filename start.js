#!/usr/bin/env node

import program from 'commander'
import fs from 'fs'
import elegantStatus from 'elegant-status'

program
  .version('0.0.1')
  .command('react <name>')
  .parse(process.argv)

const name = process.argv[process.argv.length-1]

const scaffold = () => {
  const done = elegantStatus(`Generating commands`)
  fs.mkdirSync(`../${name}`)
  fs.writeFileSync(`../${name}/index.js`)
  done(true)
}

scaffold()
