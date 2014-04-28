#!/usr/bin/env node

// setup
var exec = require('child_process').exec;
var args = process.argv.slice(2);

// list of commands 
var transform;

// gitto transform [url1] [url2]

/*

  git clone [url1] .
  rm -r .git
  git init
  git add remote origin [url2]
  git add -A
  git commit -m "transformed from [url1]"
  git push -u origin master

*/

console.log(args)

if(args[0] === 'transform') {

  var url1 = args[1],
      url2 = args[2];

  var command = 'git clone ' + url1 + ' . && rm -r .git && git init && git remote add origin ' + url2 + ' && git add -A && git commit -m "transformed from ' + url1 + '" && git push -u origin master';

  transform = exec(command, function (error, stdout, stderr) {

    if (error) {

      console.log(error.stack);
      console.log('Error code: '+error.code);
      console.log('Signal received: '+error.signal);

    } else {

      console.log('done!');
    }
  });


}

