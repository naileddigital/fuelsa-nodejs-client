const fetch = require("node-fetch");
const API_ENDPOINT = 'https://api.fuelsa.co.za/exapi/fuel';

module.exports = {
    async getCurrentFuelPrices(apikey) {
        try {
            const response = await fetch(`${API_ENDPOINT}/current`, {
                headers: { 'key': apikey }
            });
            return await response.json();            
          } catch (error) {
            throw error;
          }        
    },
    async getFuelPriceForYear(apikey, year) {
        try {
            const response = await fetch(`${API_ENDPOINT}/byyear/${year}`, {
                headers: { 'key': apikey }
            });
            return await response.json();            
          } catch (error) {
            throw error;
          }   
    }
}