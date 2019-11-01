import { GraphQLClient } from 'graphql-request';
import { getSdk } from './src/getSdk';
import gql from 'graphql-tag';

async function main(dataSchema: {method: string, query: Object}) {
  const client = new GraphQLClient('https://api.spacex.land/graphql/');
  const sdk = getSdk(client);

  const resultMethod = dataSchema.method;
  const resultQuery = dataSchema.query;

  if (resultMethod === 'query') {
    return await sdk.users(resultQuery);
  } else if (resultMethod === 'mutation') {
    return await sdk.insert_users(resultQuery);
  }
}

class Sdk {
  static configure(dataSchema: {method: string, query: Object}) {

    const manipulateData = {
      method : dataSchema.method,
      query : dataSchema.query
    }

    return main(manipulateData).catch(error => {
      return error;
    });
  }
}

export const configure = Sdk.configure;
