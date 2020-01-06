require('./myscript.js');

console.log(require.cache);

//[Object: null prototype] {
//   '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/index.js': Module {
//     id: '.',
//     path: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node',
//     exports: {},
//     parent: null,
//     filename: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/index.js',
//     loaded: false,
//     children: [ [Module] ],
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
//   '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/myscript.js': Module {
//     id: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/myscript.js',
//     path: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node',
//     exports: 'hi there',
//     parent: Module {
//       id: '.',
//       path: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node',
//       exports: {},
//       parent: null,
//       filename: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/index.js',
//       loaded: false,
//       children: [Array],
//       paths: [Array]
//     },
//     filename: '/Users/chester/Desktop/learning/SSED_The_New_Modern_JavaScript_Bootcamp/node/myscript.js',
//     loaded: true,
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
//   }
// }