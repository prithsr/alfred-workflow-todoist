const shell = require('shelljs')
const zip = require('bestzip')

shell.exec('rollup -c rollup.config.ts', { silent: true })
shell.sed(
  '-i',
  '../vendor/',
  '../../node_modules/node-notifier/vendor/',
  'dist/workflow/alfred-workflow-todoist.js'
)
shell.exec('typedoc --out docs --target es6 --theme minimal --mode file src', { silent: true })
shell.exec('ts-node tools/move-files.ts moveFromTemp', { silent: true })
