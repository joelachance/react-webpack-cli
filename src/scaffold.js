import fs from 'fs'
import elegantStatus from 'elegant-status'
// import templ from './templates/temp.js'

export const scaffold = (name) => {
  const done = elegantStatus(`Generating commands`)
  fs.mkdirSync(`../${name}`)
  fs.writeFileSync(`../${name}/index.js`)
  done(true)
}
