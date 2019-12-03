const generateFileSchema = require('../dist/index.js')

async function generate(){
  const result = await generateFileSchema.generateFile({
    createFile: `pokemon`,
    method: `query`,
    dataFile: 
    `query users ($limit: Int, $nameEq: String) {
      users(limit: $limit, where: {name: {_eq: $nameEq}}) {
        rocket
        timestamp
        twitter
        id
        name
      }
    }`
  });
  console.log(result)
}

generate();