console.log(exports);
// {}

console.log(require);
// [Function: require] {
//   resolve: [Function: resolve] { paths: [Function: paths] },
//   main: Module {
//     id: '.',
//     path: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node',
//     exports: {},
//     parent: null,
//     filename: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/index.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/node_modules',
//       '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node_modules',
//       '/Users/chester/Desktop/learning/node_modules',
//       '/Users/chester/Desktop/node_modules',
//       '/Users/chester/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   },
//   extensions: [Object: null prototype] {
//     '.js': [Function],
//     '.json': [Function],
//     '.node': [Function],
//     '.mjs': [Function]
//   },
//   cache: [Object: null prototype] {
//     '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/index.js': Module {
//       id: '.',
//       path: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node',
//       exports: {},
//       parent: null,
//       filename: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/index.js',
//       loaded: false,
//       children: [],
//       paths: [Array]
//     }
//   }
// }

console.log(module);
// Module {
//   id: '.',
//   path: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node',
//   exports: {},
//   parent: null,
//   filename: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/index.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/node_modules',
//     '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node_modules',
//     '/Users/chester/Desktop/learning/node_modules',
//     '/Users/chester/Desktop/node_modules',
//     '/Users/chester/node_modules',
//     '/Users/node_modules',
//     '/node_modules'
//   ]
// }

console.log(__filename);
// /Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/index.js

console.log(__dirname);
// /Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node