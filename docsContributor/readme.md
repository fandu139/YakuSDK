First Create Base Project GraphQL :
1. You can look documentation Graph QL Generator this (link)[https://graphql-code-generator.com/docs/getting-started/]
2. Command `yarn add graphql`
3. Command `yarn add -D @graphql-codegen/cli`
4. Instalation Wizard `yarn graphql-codegen init`' and then auto generate file
5. you can write file `codegen.js`
```javascript
import { generate } from '@graphql-codegen/cli';

async function doSomething() {
  const generatedFiles = await generate(
    {
      schema: 'http://127.0.0.1:3000/graphql',
      documents: './src/**/*.graphql',
      generates: {
        [process.cwd() + '/models/types.d.ts']: {
          plugins: ['typescript'],
        },
      },
    },
    true
  );
}
```
Or You Can Write `codegen.yml`
```javascript
schema: "https://api.spacex.land/graphql/"
documents: 'src/graphql/**/*.graphql'
generates:
  src/getSdk.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-graphql-request
```
But you do not forget install library, if you do not choose when installing `graphql-codegen init`, you can install :
``` javascript
typescript : yarn add -D @graphql-codegen/typescript

typescript-operations : yarn add -D @graphql-codegen/typescript-operations

typescript-graphql-request : yarn add @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-graphql-request
```
6. Create File `.graphql` adjust location file generater on documents (default : src/graphql/**.graphql)
7. Finishing you can modification SDK