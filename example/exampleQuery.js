const Sdk = require('../index.js')

async function checkData(){
    const apa = await Sdk.configure({
      method: 'query',
      query: 
        {
          "limit": 1,
          "nameEq": "fandu pratama Lakuana"
        }
    });
    console.log(apa)
}

checkData();