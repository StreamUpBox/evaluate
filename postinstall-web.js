// Allow angular using electron module (native node modules)
const fs = require('fs');
const f = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';
 
fs.readFile(f, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let result = data.replace(/node: false/g, "node: {crypto: true, stream: true, fs: 'empty', net: 'empty'}");
 
  fs.writeFile(f, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
// const fs = require('fs');
// const f_angular = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

// fs.readFile(f_angular, 'utf8', function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   var result = data.replace(/target: "electron-renderer",/g, '');
//   var result = result.replace(/target: "web",/g, '');
//   var result = result.replace(/return \{/g, 'return {target: "web",');

//   fs.writeFile(f_angular, result, 'utf8', function (err) {
//     if (err) return console.log(err);
//   });
// });