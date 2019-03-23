#! /usr/bin/env node
'use strict';

const fetch = require('node-fetch');
const fs = require('fs');
const HTMLParser = require('node-html-parser');
const cheerio = require('cheerio');
const page = cheerio.load('<div><a class="restaurant-item__cover-link _3cJe _1XRw" data-qa="link" href="/lieferservice/dortmund/restaurant-pizzeria-al-lago2/50500/" target="" title="Pizzeria Al Lago" data-reactid="347"></a><a class="restaurant-item__cover-link _3cJe _1XRw" data-qa="link" href="/lieferservice/dortmund/restaurant-pizzeria-al-lago2/505006/" target="" title="Pizzeria Al Lago" data-reactid="347"></a></div>');

var organizationUrl = "https://pizza.de/lieferservice/dortmund/pizza-pasta-bestellen/";

var data = getPageData(organizationUrl)
  .then(
    function(data) {
      data.text().then((text)=> {
        const result = HTMLParser.parse(text);
        saveDataToFile(result);
      });
  });

const links = page('a[href^="/lieferservice/"]').map((index, element) => {
  return page(element).attr('href');
}).get();

console.log(links);

function getPageData(organizationUrl) {
  return fetch(organizationUrl);
}

function saveDataToFile(data) {
  fs.writeFile('data.txt', data, function(err) {
    if(err) {
      throw (err);
    }
  });
}


