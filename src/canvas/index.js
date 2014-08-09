"use strict";

module.exports = function(gr) {
  gr.use(require("./canvas"));
  gr.use(require("./getRawData"));
  gr.use(require("./getHeight"));
  gr.use(require("./getWidth"));
  gr.use(require("./getColor"));
  gr.use(require("./setColor"));
  gr.use(require("./getTile"));
  gr.use(require("./setTile"));
  gr.use(require("./getColorIndex"));
  gr.use(require("./getRGB"));
  gr.use(require("./getRGBA"));
  gr.use(require("./stroke"));
  gr.use(require("./noStroke"));
  gr.use(require("./fill"));
  gr.use(require("./noFill"));
  gr.use(require("./clear"));
  gr.use(require("./dot"));
  gr.use(require("./line"));
  gr.use(require("./polygon"));
  gr.use(require("./rect"));
  gr.use(require("./circle"));
  gr.use(require("./ellipse"));
  gr.use(require("./char"));
  gr.use(require("./text"));
  gr.use(require("./paint"));
  gr.use(require("./copy"));
  gr.use(require("./paste"));
  gr.use(require("./clone"));
  gr.use(require("./toIndexedColor"));
  gr.use(require("./toRGB"));
  gr.use(require("./toRGBA"));
};
