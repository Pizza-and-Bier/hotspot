/**
 * Created by apizzimenti on 6/2/16.
 */

import {Image} from "./Image.js";

function Point (x, y, radius) {
	this.x = x;
	this.y = y;
	this.radius = radius;
}

Image.prototype.Point = Point;