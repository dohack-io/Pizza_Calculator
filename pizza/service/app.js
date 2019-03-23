#! /usr/bin/env node
'use strict';

const fetch = require('node-fetch');
const fs = require('fs');
const cheerio = require('cheerio');

const city = 'dortmund';
const organizationUrl = `https://pizza.de/lieferservice/${city}/pizza-pasta-bestellen/`;

var data = getPageData(organizationUrl)
.then(
  function(data) {
    data.text().then((text)=> {
      const result = cheerio.load(text);
      // saveDataToFile(result);
      const nearbyUniqueRestaurants = getUniqueNearbyRestaurants(result);
      console.log(nearbyUniqueRestaurants);
      getRestaurantsData(nearbyUniqueRestaurants);
    });
});

async function getUniqueNearbyRestaurants(result){
  const links = result('a[href^="/lieferservice/"]').map((index, element) => {

  return result(element).attr('href');
  }).get();
  const nearbyUniqueRestaurants = [...new Set(links)];

  return nearbyUniqueRestaurants;
}

async function getRestaurantsData(nearbyUniqueRestaurants) {
  const data = `https://www.pizza.de/${nearbyUniqueRestaurants[0]}`;
  console.log(data);
}

async function getPageData(organizationUrl) {
  return await fetch(organizationUrl);
}

function saveDataToFile(data) {
  fs.writeFile('data.txt', data, function(err) {
    if(err) {
      throw (err);
    }
  });
}
