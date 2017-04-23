'use strict'

const fs = require('fs')
const path = require('path')
const UglifyJS = require('uglify-js')

const file = fs.readFileSync(path.join(__dirname, '../../index.js'), 'utf8')
const noExports = file.split('\n').slice(0, -2).join('\n')
const bound = noExports + `
(function() {
  this.AnimateTypingText = AnimateTypingText
})()
`
const result = UglifyJS.minify(bound, { fromString: true })

fs.writeFileSync(path.join(__dirname, '../dist/animate-typing-text.min.js'), result.code)
