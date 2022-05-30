import fs from 'fs';
import os from 'os';
import csv from 'csv-parser';

const cssFile = './css-data.csv';
const breakpointsFile = './breakpoints.csv';
const markerClassFile = './marker-class.csv';

// code gen flags to indicate that all the data has been
// read from the file and the corresponding json has been generated
let cssDataGenFlag = false;
let breakpointscodeGenFlag = false;
let markerClassGenFlag = false;

let cssSectionCode = '';
let breakpointsSectioncode = '';
let markerClassCode = '';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getCssData () {
  // read css data
  let cssData = [];

  cssSectionCode = '"cssData": [ \n';

  fs.createReadStream(cssFile)
    .pipe(csv())
    .on("data", function (data) {
      cssData.push(data);
    })
    .on("end", () => {
      cssData.forEach(function(val,index){
        cssSectionCode += `\t${JSON.stringify(val)}`;

        if (index === (cssData.length - 1)) {
          cssSectionCode += '\n';
        } else {
          cssSectionCode += ', \n';
        }
      });
      
      cssSectionCode += ']';

      cssDataGenFlag = true;
  });
}

async function getBreakpoints () {
  // read breakpoints
  let breakpoints = [];

  breakpointsSectioncode = '"breakpoints": [ \n';

  fs.createReadStream(breakpointsFile)
    .pipe(csv())
    .on("data", function (data) {
      breakpoints.push(data);
    })
    .on("end", () => {
      breakpoints.forEach(function(val,index){
        breakpointsSectioncode += `\t${JSON.stringify(val)}`;

        if (index === (breakpoints.length - 1)) {
          breakpointsSectioncode += '\n';
        } else {
          breakpointsSectioncode += ', \n';
        }
      });
      
      breakpointsSectioncode += ']';

      breakpointscodeGenFlag = true;
  });
}

async function getMarkerClass () {
  // read marker class
  let markerClass = [];

  markerClassCode = '"markerClass": [ \n';

  fs.createReadStream(markerClassFile)
    .pipe(csv())
    .on("data", function (data) {
      markerClass.push(data);
    })
    .on("end", () => {
      markerClass.forEach(function(val,index){
        markerClassCode += `\t${JSON.stringify(val)}`;

        if (index === (markerClass.length - 1)) {
          markerClassCode += '\n';
        } else {
          markerClassCode += ', \n';
        }
      });
      
      markerClassCode += ']';

      markerClassGenFlag = true;
  });
}

async function genCode () {
  // getcssData
  void await getCssData();

  // getBreakpoints
  void await getBreakpoints();

  // get markerClass
  void await getMarkerClass();

  while (!((cssDataGenFlag && breakpointscodeGenFlag) && markerClassGenFlag)) {
    // waiting for codeGenFlags to become true
    void await sleep(100);
  }

  // initialize code
  let code = '{ \n\n';

  // insert cssSectionCode
  // console.log('cssSectionCode = ', cssSectionCode);
  code += cssSectionCode;

  code += ', \n\n';

  // insert breakpointsSectioncode
  // console.log('breakpointsSectioncode = ', breakpointsSectioncode);
  code += breakpointsSectioncode;

  code += ', \n\n';

  // insert markerClassCode
  // console.log('markerClassCode = ', markerClassCode);
  code += markerClassCode;

  code += ' \n\n';

  // end code
  code += '}';

  console.log(code);
}

void genCode();



