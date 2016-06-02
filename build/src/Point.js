"use strict";

var _Image = require("./Image.js");

function Point(x, y, radius) {
	this.x = x;
	this.y = y;
	this.radius = radius;
} /**
   * Created by apizzimenti on 6/2/16.
   */

_Image.Image.prototype.Point = Point;
