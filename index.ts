import { GraphQLClient } from 'graphql-request';
import { getSdk } from './src/getSdk';
var fs = require('fs');

import { generate } from '@graphql-codegen/cli';

async function mainGenerateSchema(dataSchema: {url: string}) {
  const url = dataSchema.url
  await generate(
    {
      schema: url,
      documents: 'src/graphql/**/*.graphql',
      generates: {
        [process.cwd() + '/src/getSdk.ts']: {
          plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
        },
      },
    },
    true
  );
}

async function main(dataSchema: {url: string, method: string, query: Object}) {
  const client = new GraphQLClient(dataSchema.url);
  const sdk = getSdk(client);

  const resultMethod = dataSchema.method;
  const resultQuery = dataSchema.query;

  if (resultMethod === 'query') {
    return await sdk.launchesPast(resultQuery);
  } else if (resultMethod === 'mutation') {
    return await sdk.insert_users(resultQuery);
  } else if (resultMethod === 'mutationUpdate') {
    return await sdk.update_users(resultQuery);
  }
}

class Sdk {
  static configure(dataSchema: {url: string, method: string, query: Object}) {

    const manipulateData = {
      url: dataSchema.url,
      method : dataSchema.method,
      query : dataSchema.query
    }

    return main(manipulateData).catch(error => {
      return error;
    });
  }

  static generateSchema(dataSchema: {url: string}) {

    const manipulateData = {
      url: dataSchema.url
    }

    return mainGenerateSchema(manipulateData).catch(error => {
      return error;
    });
  }

  static generateFile (generate: { createFile: string, method: string, dataFile: string}) {

    const filename = `${generate.createFile}.${generate.method}`;

    // writeFile function with filename, content and callback function
    fs.writeFile('src/graphql/'+filename+'.graphql', generate.dataFile, function (err: any) {
      if (err) throw err;
      console.log('File is created successfully.');
    }); 
  }
}

export const configure = Sdk.configure;
export const generateSchema = Sdk.generateSchema;
export const generateFile = Sdk.generateFile;
