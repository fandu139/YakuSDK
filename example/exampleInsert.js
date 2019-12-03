const Sdk = require('../dist/index.js')

async function checkData(){
    const apa = await Sdk.configure({
      url: 'https://api.spacex.land/graphql/',
      method: 'mutation',
      query: 
        {
          "name": "Azkia Aisyah Lakuana",
          "rocket": "child"
        }
    });
    console.log(apa)
}

checkData();