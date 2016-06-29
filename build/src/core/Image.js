"use strict";

/**
 * Created by apizzimenti on 6/2/16.
 */

/**
 *
 * @param name
 * @param src
 * @param scale
 * @param ratio
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

	if (scale) {
		if (scale.length > 2) {
			throw new Error("Must be of the format [width, height].");
		} else {
			this.scaledWidth = scale[0];
			this.scaledHeight = scale[1];
		}
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
