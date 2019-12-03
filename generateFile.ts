// include node fs module
var fs = require('fs');

class generateFileSchema {

    static generateFile (generate: { createFile: string, method: string, dataFile: string}) {

      const filename = `${generate.createFile}.${generate.method}`;

      // writeFile function with filename, content and callback function
      fs.writeFile('src/graphql/'+filename+'.graphql', generate.dataFile, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      }); 
    }
}

export const generateFile = generateFileSchema.generateFile;
