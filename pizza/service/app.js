#! /usr/bin/env node
'use strict';

const fetch = require('node-fetch');
const fs = require('fs');
const cheerio = require('cheerio');

const city = 'dortmund';
const organizationUrl = `https://pizza.de/lieferservice/${city}/pizza-pasta-bestellen/`;

getPageData(organizationUrl)
.then(
  function(data) {
    data.text().then((text)=> {
      const result = cheerio.load(text);
      var promise = Promise.resolve(getUniqueNearbyRestaurants(result));
      promise.then(function(nearbyUniqueRestaurants) {
        const restaurantData = getRestaurantData(nearbyUniqueRestaurants);
      });
    });
});

function getUniqueNearbyRestaurants(result){
  const links = result('a[href^="/lieferservice/"]').map((index, element) => {

  return result(element).attr('href');
  }).get();
  const nearbyUniqueRestaurants = [...new Set(links)];

  return nearbyUniqueRestaurants;
}

function getRestaurantData(nearbyUniqueRestaurants){
  for(let restaurant = 0; restaurant < 10; restaurant++){
    var restaurantLink = `https://www.pizza.de${nearbyUniqueRestaurants[restaurant]}`;
    console.log(restaurantLink);
    const restaurantPageData = getPageData(restaurantLink);
    const result = cheerio.load(restaurantPageData);
  }
}

async function getPageData(organizationUrl){
  return await fetch(organizationUrl);
}
