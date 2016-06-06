/**
 * Created by apizzimenti on 6/2/16.
 */

function Image (imgObject, scaledX, scaledY) {
	
	this.src = imgObject.src;
	
	this.width = imgObject.width;
	this.height = imgObject.height;
	
	this.scaledWidth = this.defaultWidth || scaledX;
	this.scaledHeight = this.defaultHeight || scaledY;
	
	this.hotspots = [];
}

Image.prototype.addPoint = function (x, y, radius) {
	this.hotspots.push(new this.Point(x, y, radius));
};

Hotspot.prototype.addImage = Image;
