'use strict';

// A stand-in for a real tramvaijs/* entrypoint, so the mirror has some
// source to carry across as well as metadata files.
module.exports = function greet(name) {
  return `hello, ${name}`;
};