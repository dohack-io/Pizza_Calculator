#! /usr/bin/env node
'use strict';

const fetch = require('node-fetch');
const fs = require('fs');
// const express = require('express');
// const path = require('path');
// const spawn = require('await-spawn');

var organizationUrl = "https://pizza.de/lieferservice/dortmund/44269/?lat=51.50441060000001&lon=7.526894099999999";

var data = getPageData(organizationUrl);
var body = JSON.stringify(data);
fs.writeFile('data.txt', data, function(err) {
  if(err) {
    throw (err);
  }
});

console.log(body);

function getPageData(organizationUrl) {
 fetch(organizationUrl);
}



