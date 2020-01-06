const Sdk = require('../dist/index.js')

async function checkData(){
    const apa = await Sdk.configure({
      url: 'https://api.spacex.land/graphql/',
      method: 'mutationUpdate',
      query: 
        {
          "where": {
            "name": {
              "_eq": "Azkia Fandu Aisyah Lakuana"
            }, 
            "rocket": {
              "_eq": "child"
            }
          }, 
          "_set": {
            "name": "Azkia Fandu Aisyah Lakuana"
          }
        }
    });
    console.log(apa)
}

checkData();