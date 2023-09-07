#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
      // Create an empty object if width or height is invalid
      return "Rectangle {}";
    }
    this.width = w;
    this.height = h;
  }
}
module.exports = Rectangle;