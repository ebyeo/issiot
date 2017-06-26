/*
* IoT Hub Raspberry Pi NodeJS - Microsoft Sample Code - Copyright (c) 2017 - Licensed MIT
*/
'use strict';

const Gpio = require('onoff').Gpio;

function Sensor(options) {
  this.pir = new Gpio(17, 'in', 'out');
}

Sensor.prototype.read = function (callback) {
	this.pir.watch(function(err, value) {
		callback(err, value);
	});
}

module.exports = Sensor;
