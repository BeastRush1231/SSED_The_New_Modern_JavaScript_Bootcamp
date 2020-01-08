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

  const allStats = Array(filenames.length).fill(null);
  // Bad CODE
    for (let filename of filenames){
      const index = filenames.indexOf(filename);
      fs.lstat(filename, (err, stats) => {
        if (err) {
          console.log(err);
        }

        // console.log(filename, stats.isFile());
        allStats[index] = stats;

        const ready = allStats.every((stats) => {
          return stats;
        });

        if (ready) {
          allStats.forEach((stats, index) => {
            console.log(filenames[index], stats.isFile());
          })
        }
      })
    }
  // BAD CODE
});