"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Image = Image;

var _Hotspot = require("./Hotspot.js");

function Image(imgObject, scaledX, scaledY) {

	this.src = imgObject.src;

	this.width = imgObject.width;
	this.height = imgObject.height;

	this.scaledWidth = this.defaultWidth || scaledX;
	this.scaledHeight = this.defaultHeight || scaledY;

	this.hotspots = [];
} /**
   * Created by apizzimenti on 6/2/16.
   */

Image.prototype.addPoint = function (x, y, radius) {
	this.hotspots.push(new this.Point(x, y, radius));
};

_Hotspot.Hotspot.prototype.addImage = Image;
