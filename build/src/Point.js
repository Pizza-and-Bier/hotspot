"use strict";

/**
 * Created by apizzimenti on 6/2/16.
 */

function Hotspot_Point(x, y, radius) {
	this.x = x;
	this.y = y;
	this.radius = radius;
}

Hotspot_Image.prototype.Point = Hotspot_Point;

Hotspot_Image.prototype.addPoint = function (x, y, radius) {
	var new_Point = new this.Point(x, y, radius);
	this.hotspots.push(new_Point);
	return new_Point;
};
