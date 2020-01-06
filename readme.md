1. generete file, if you first generate file, you can write value, example is file `exampleFileGenerate.js` you can write `launchesPast(limit: 1)` adjust schema qraphql. command `node example/exampleFileGenerate.js`
2. generate schema. command `node example/exampleSchema.js` and change code `url`. example :
   ```javascript
    const result = await generateSchema.generateSchema({
     url: `https://api.spacex.land/graphql/`
    });
   ```
3. change code `launchesPast` and `insert_users` adjust with name your schema
   ```javascript
    if (resultMethod === 'query') {
      return await sdk.launchesPast(resultQuery);
    } else if (resultMethod === 'mutation') {
      return await sdk.insert_users(resultQuery);
    }
   ```
   and build typescript. npm run build