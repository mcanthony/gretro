"use strict";

var dot = require("./dot");

module.exports = function(self, x, y, dx, dy, sx, sy, color) {
  for (var i = 0; i <= dy; y += sy, i++) {
    dot(self, x, y, color);
  }
};