'use strict'

const fs = require('fs')
const path = require('path')
const uglify = require('uglify-js')

const file = fs.readFileSync(path.join(__dirname, '../../index.js'), 'utf8')
const noExports = file.split('\n').slice(0, -2).join('\n')
const bound = noExports + `
  (function() {
    this.AnimateTypingText = AnimateTypingText
  })()
`

fs.writeFileSync(path.join(__dirname, '../dist/animate-typing-text.min.js'), bound)
