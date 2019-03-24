#! /usr/bin/env node
'use strict';

const fetch = require('node-fetch');
const fs = require('fs');
const cheerio = require('cheerio');

// Pizza sizes in cm (not all restaurants contains a definition for their pizza-sizes)
const smallPizzaSize = 20;
const mediumPizzaSize = 25;
const bigPizzaSize = 30;

const city = 'dortmund';
const organizationUrl = `https://pizza.de/lieferservice/${city}/pizza-pasta-bestellen/`;

main(organizationUrl);

async function main(organizationUrl){
 const localRestaurantsRawData = await Promise.resolve(getPageData(organizationUrl));
 const localRestaurantsDataReadable = await localRestaurantsRawData.text();
 const result = cheerio.load(localRestaurantsDataReadable);
 const nearbyRestaurantsPaths = await Promise.resolve(getNearbyRestaurantsPaths(result));
 const nearbyRestaurantsUrls = getNearbyRestaurantUrls(nearbyRestaurantsPaths);
 const restaurantsData = getRestaurantsData(nearbyRestaurantsUrls;)
 console.log(nearbyRestaurantsUrls);
}

async function getPageData(organizationUrl){
  return await fetch(organizationUrl);
}

function getNearbyRestaurantsPaths(result){
  const nearbyRestaurantsPaths = result('a[href^="/lieferservice/"]').map((index, nearbyRestaurantPath) => {
    return result(nearbyRestaurantPath).attr('href');
  }).get();

  return [...new Set(nearbyRestaurantsPaths)];
}

function getNearbyRestaurantUrls(nearbyRestaurantsPaths){
  const ratedRestaurants = 10;
  let nearbyRestaurantsUrls = [];

  //We just want to compare the first 10 restaurants
  for (let restaurant = 0; restaurant < ratedRestaurants ; restaurant++){
    const nearbyRestaurantUrl = `https://www.pizza.de${nearbyRestaurantsPaths[restaurant]}`;
    nearbyRestaurantsUrls.push(nearbyRestaurantUrl);
  }

  return nearbyRestaurantsUrls;
}

function getRestaurantsData(nearbyRestaurantsUrls){
  nearbyRestaurantsUrls.forEach(restaurant => {
    var restaurantsData = this.getPageData(restaurantLink);
  });
}
