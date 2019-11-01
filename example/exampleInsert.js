const Sdk = require('../index.js')

async function checkData(){
    const apa = await Sdk.configure({
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