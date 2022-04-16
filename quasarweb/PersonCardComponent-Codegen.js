const fs = require('fs');
const os = require('os');
const exec = require("child_process").exec;
const errorlog = require('./PersonCardComponent-Codegen-logger').errorlog;
const successlog = require('./PersonCardComponent-Codegen-logger').successlog;
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function execShellCommand(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, 
             { maxBuffer: 1024 * 500 }, 
             (error, stdout, stderr) => {
             if (error) {
                 errorlog.error(`Error Message : ${error}`); 
                 console.warn(error);
             } 
             else if (stdout) {
                 successlog.info(`Success Message and variables: ${stdout}`); 
                 console.log(stdout);
             } 
             else {
                 errorlog.error(`Error Message : ${stderr}`);
                 console.log(stderr);
             }
        resolve(stdout ? true : false);
    });
  });
}

fs.readFile('./empfinancial.json', 'utf8', (err, data) => {
    if (err) {
        errorlog.error(`Error reading file from disk: ${err}`);
        console.log(`Error reading file from disk: ${err}`);
    } else {

        // parse JSON string to JSON object
        const uploadobjects = JSON.parse(data);

        // 
        uploadobjects.forEach(uploadobj => {
               var url = "http://127.0.0.1:3000/empfinancials";
               
               var xhr = new XMLHttpRequest();
               xhr.open("POST", url);
               
               xhr.setRequestHeader("Accept", "application/json");
               xhr.setRequestHeader("Content-Type", "application/json");
               
               xhr.onreadystatechange = function () {
                   if (xhr.readyState === 4) {
                       successlog.info(xhr.status);
                       successlog.info(xhr.responseText);
                }};

               data = JSON.stringify(uploadobj, null, 2);

               xhr.send(data);
        });
    }
});
