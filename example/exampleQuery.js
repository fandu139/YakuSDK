const Sdk = require('../dist/index.js')

async function checkData(){
    const apa = await Sdk.configure({
      url: 'https://api.spacex.land/graphql/',
      method: 'query',
      query: 
        {
          "limit": 1,
          "nameEq": "Azkia Aisyah Lakuana"
        }
    });
    console.log(apa)
}

checkData();