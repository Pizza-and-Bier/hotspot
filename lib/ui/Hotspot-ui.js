"use strict";

/**
 * Created by apizzimenti on 6/24/16.
 */

function HotspotUi () {}

// add html tag for modal location

HotspotUi.prototype.open = function (config) {

	this.Hotspot = new Hotspot();
	this.modalContainer = document.getElementById(config.modalId);

	this.modalContainer.innerHTML = globals.modal;
};

HotspotUi.prototype.crawl = function () {
	
};

HotspotUi.prototype.close = function (config) {

};

