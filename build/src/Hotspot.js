"use strict";

/**
 * Created by apizzimenti on 6/2/16.
 */

function Hotspot(width, height) {

	this.defaultWidth = width || null;
	this.defaultHeight = height || null;
	this.images = [];
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
