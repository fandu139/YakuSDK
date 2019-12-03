import { generate } from '@graphql-codegen/cli';

async function doSomething() {
  await generate(
    {
      schema: 'https://api.spacex.land/graphql/',
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

doSomething();