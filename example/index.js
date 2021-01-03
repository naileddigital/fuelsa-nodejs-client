const client = require('../index.js');
const apikey = '[YOUR-API-KEY]';

async function run() {
    console.log(await client.getCurrentFuelPrices(apikey));
    console.log(await client.getFuelPriceForYear(apikey, 2020));
}

run();
