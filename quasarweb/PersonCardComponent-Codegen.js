import fs from 'fs';
import os from 'os';
import _ from 'lodash';

import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';

function reportError (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log('error.response.data = ', error.response.data);
    console.log('error.response.status = ', error.response.status);
    console.log('error.response.headers = ', error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('error.request = ', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('error.message = ', error.message);
  }
  console.log('error.config = ', error.config);
  console.log('error = ', error);

  // *************************
}


async function getData (db) {
  // lowdb read operation

  try { 
    
    await db.read();

    const out = db.data;

    // console.log("out = ", out);
    return out;

  } catch (error) {
    
    console.log('Read db file Error!');
    void reportError(error);

  }
}

async function genCssOutput (db) {
  // generate css code output

  try {

    // get data from file
    const data = await getData(db);

    let cssClassDataArray = [];
    let breakpointsDataArray = [];

    // getBreakpointsArray

    const breakpoints = _
      .chain(data.breakpoints)
      .map('name')
      .uniq()
      .value();

    // console.log('Breakpoints = ', breakpoints);

    // getCssClassesArray

    const cssClasses = _
      .chain(data.cssData)
      .map('cssClass')
      .uniq()
      .value();

    // console.log('cssClasses = ', cssClasses);

    // genDeclarationsSection & varsApplySection

    let declerationsSection = declerationsStart;
    let varsApplySection = varsApplyStart;

    cssClasses.forEach(function(cssClass) {
      
      // get the css data for this css class
      cssClassDataArray = _
        .chain(data.cssData)
        .filter({ 'cssClass': cssClass })
        .value();

      // console.log('cssClassDataArray = ', cssClassDataArray);
      
      // skipping __base_parameter class

      if (cssClass !== '__base_parameter') {
      
        // gen cssClass declerations block

        declerationsSection += `
        .${cssClass} {
          `;

        let cssVariableValue = '';

        cssClassDataArray.forEach(function(cssClassData) {  
          cssVariableValue = cssClassData.dataset0.split(',')[0];  
          declerationsSection += `${cssClassData.cssVariable}: ${cssVariableValue}rem;
          `;
        });
        
        declerationsSection += `}
          `;

        // end gen cssClass declerations block

        // gen cssClass vars apply block

        varsApplySection += `
        .${cssClass} {
          `;

        cssClassDataArray.forEach(function(cssClassData) {  
          varsApplySection += `${cssClassData.cssProperty}: var(${cssClassData.cssVariable});
          `;
        });
        
        varsApplySection += `}
          `;

        // end gen cssClass vars apply block

      }

    });

    // finalize the decleration and var apply sections
    declerationsSection += declerationsEnd;
    varsApplySection += varsApplyEnd;

    // ------------------

    // genBreakpointDefinitions

    let breakpointDefinitions = '';

    breakpoints.forEach(function(breakpoint) {
      // get breakpoint data for the current breakpoint
      breakpointsDataArray = _
        .chain(data.breakpoints)
        .filter({ 'name': breakpoint })
        .value();
      
      // breakpoint condition start
      breakpointDefinitions += `
      /* ****** start structure definition for ${breakpoint} */

      `;

      // skip media condition block for default
      if (breakpoint !== 'default') {
        breakpointDefinitions += `@media only screen and (min-width: ${breakpointsDataArray[0].minWidth}rem) {
        `;
      }

      // insert the dataset
      breakpointDefinitions += `
      .persons-card::before {
        content: '${breakpointsDataArray[0].dataset}';
        display: none;
      }
      `;

      // breakpoint css structure 

      breakpointDefinitions += `
      /* insert your css structure for breakpoint ${breakpoint} here! ****** */

      @import "breakpoint-${breakpoint}-custom-css";

      /* end css structure for breakpoint ${breakpoint} ****** */

      `;

      // breakpoint condition end
      // skip media condition block for default
      if (breakpoint !== 'default') {
        breakpointDefinitions += `}
        `;
      }
      
      breakpointDefinitions += `
      /* ****** end breakpoint definition for ${breakpoint} */
      `;

    });

    // console.log('declerationsSection = ', declerationsSection);
    // console.log('varsApplySection = ', varsApplySection);
    // console.log('breakpointDefinitions = ', breakpointDefinitions);

    // gen css code
    const cssCode = `
    ${declerationsSection}
    ${breakpointDefinitions}
    ${varsApplySection}
    `;

    console.log(cssCode);

  } catch (error) {
    
    console.log('Generate css code Error!');
    void reportError(error);

  }
}

// setup lowdb

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'cssStructure.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);

// end setup lowdb ***************

// common constants

const declerationsStart = `
/* ***** Variables Declaration Start ***** */
`;

const varsApplyStart = `
/* ***** Variables Application Start ***** */
`;

const declerationsEnd = `
/* ***** Variables Declaration End ***** */
`;

const varsApplyEnd = `
/* ***** Variables Application End ***** */
`;

// end common constants ***************

void genCssOutput(db);



