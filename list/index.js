const fs = require('fs');

fs.readdir('.', (err, filenames) => {
  //EITHER
  //err === an error object, which means something went wrong
  //OR
  //err === null, which means everything is OK

  if (err) {
    // err handling code here
    console.log(err);
  }

  console.log(filenames);
});