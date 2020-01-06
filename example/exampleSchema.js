const generateSchema = require('../dist/index.js')

async function generate(){
  const result = await generateSchema.generateSchema({
    url: `https://api.spacex.land/graphql/`
  });
}

generate();