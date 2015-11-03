'use strict'

var defaults = require('defaults')
var Handlebars = require('handlebars')
var walk = require('fs-tools').walk
var path = require('path')

var onFile = function (file, stats, next) {
  var fn = null
  try {
    fn = require(path.resolve(file))
  } catch (err) {
    return next(err)
  }
  var id = path.basename(file, path.extname(file))
  Handlebars.registerHelper(id, fn)
  next()
}

module.exports = function (options) {
  options = defaults(options, {
    directory: 'helpers',
    pattern: /\.js$/
  })
  return function (files, metalsmith, done) {
    walk(metalsmith.path(options.directory), options.pattern, onFile, done)
  }
}
