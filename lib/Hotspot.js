/**
 * Created by apizzimenti on 6/2/16.
 */

function Hotspot (width, height) {
	
	this.defaultWidth = width || null;
	this.defaultHeight = height || null;
	this.images = {};
}

Hotspot.prototype.getImages = function () {
	return this.images;
};

Hotspot.prototype.bulk = function (urls) {
	
	if (this.defaultWidth !== null && this.defaultHeight !== null) {
		for (var url of urls) {
			this.images.push(this.addImage(url));
		}
	}
};

Hotspot.prototype.json = function () {
	return JSON.stringify(this, null, 2);
};
