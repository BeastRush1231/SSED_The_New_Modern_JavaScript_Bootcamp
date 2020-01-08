#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
  //EITHER
  //err === an error object, which means something went wrong
  //OR
  //err === null, which means everything is OK

  if (err) {
    // err handling code here
    console.log(err);
  }

  // console.log(filenames);

  // Bad CODE
    for (let filename of filenames){
      fs.lstat(filename, (err, stats) => {
        if (err) {
          console.log(err);
        }

        console.log(filename, stats.isFile());
      })
    }
  // BAD CODE
});