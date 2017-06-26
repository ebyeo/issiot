/*
* IoT Hub Raspberry Pi NodeJS - Microsoft Sample Code - Copyright (c) 2017 - Licensed MIT
*/
'use strict';

const PirSensor = require('./pirSensor.js');

function MessageProcessor(option) {
  this.inited = true;
  this.sensor = new PirSensor(option.pirOption);
  this.deviceId = option.deviceId;
  this.inited = true;
}

MessageProcessor.prototype.getMessage = function (messageId, cb) {
  if (!this.inited) { return; }
  this.sensor.read((err, data) => {
    if (err) {
      console.log('[Sensor] Read data failed: ' + err.message);
      return;
    }

    cb(JSON.stringify({
      messageId: messageId,
      deviceId: this.deviceId,
      present: data
    }), data);
  });
}

module.exports = MessageProcessor;
