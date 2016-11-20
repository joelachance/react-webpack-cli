#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _elegantStatus = require('elegant-status');

var _elegantStatus2 = _interopRequireDefault(_elegantStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.1').command('react <name>').parse(process.argv);

var name = process.argv[process.argv.length - 1];

var scaffold = function scaffold() {
  var done = (0, _elegantStatus2.default)('Generating commands');
  _fs2.default.mkdirSync('../' + name);
  _fs2.default.writeFileSync('../' + name + '/index.js');
  done(true);
};

scaffold();
