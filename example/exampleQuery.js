const Sdk = require('../dist/index.js')

async function checkData(){
  const result = await Sdk.configure({
    url: 'https://api.spacex.land/graphql/',
    method: 'query',
    query: 
      {
        name: "Azkia Aisyah Pratama Lakuana",
        child: "child"
      }
  });
  console.log(result)
}

checkData();