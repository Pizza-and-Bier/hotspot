"use strict";

/**
 * Created by apizzimenti on 6/2/16.
 */

function Hotspot(width, height) {

	this.defaultWidth = width || null;
	this.defaultHeight = height || null;
	this.images = {};
}

Hotspot.prototype.getImages = function () {
	return this.images;
};

Hotspot.prototype.bulk = function (urls) {

	if (this.defaultWidth !== null && this.defaultHeight !== null) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = urls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var url = _step.value;

				this.images.push(this.addImage(url));
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}
};

Hotspot.prototype.json = function () {
	return JSON.stringify(this, null, 2);
};

"use strict";

/**
 * Created by apizzimenti on 6/2/16.
 */

/**
 *
 * @param name
 * @param src
 * @param scaledX
 * @param scaledY
 * @returns {Hotspot_Image}
 *
 * @constructor
 *
 * @todo Point validation
 * @todo canvas instead of image object
 */

function Hotspot_Image(name, src, scale, ratio) {

	this.name = name;

	var imgObject = new Image();
	imgObject.src = src;

	this.src = imgObject.src;

	this.width = imgObject.width;
	this.height = imgObject.height;

	if (scale && scale.length > 2) {
		throw new Error("Scale is not an ordered pair.");
	}

	if (scale) {
		this.scaledWidth = scale[0];
		this.scaledHeight = scale[1];
	} else {
		this.determineRatio(ratio);
	}

	this.hotspots = [];

	return this;
}

Hotspot.prototype.Image = Hotspot_Image;

Hotspot_Image.prototype.determineRatio = function (num) {

	this.scaledWidth = this.width * num;
	this.scaledHeight = this.height * num;
};

Hotspot.prototype.addImage = function (name, image, scaledX, scaledY) {
	var new_Image = new this.Image(name, image, scaledX, scaledY);
	this.images[name] = new_Image;
	return new_Image;
};

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
