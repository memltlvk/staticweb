/**
 * Configurations of logger.
 */
const winston = require('winston');
// const winstonRotator = require('winston-daily-rotate-file');

const consoleConfig = [
  new winston.transports.Console({
    'colorize': true
  })
];

const createLogger = new winston.createLogger({
  'transports': consoleConfig
});

const successLogger = createLogger;
successLogger.add(new winston.transports.File({
    'filename': './logs/access.log',
    'level': 'info'
  })
);
// successLogger.add(new winstonRotator, {
//  'filename': './logs/access.log',
//  'json': false,
//  'datePattern': 'yyyy-MM-dd-',
//  'prepend': true
// });

const errorLogger = createLogger;
errorLogger.add(new winston.transports.File({
    'filename': './logs/error.log',
    'level': 'error'
  })
);
// errorLogger.add(new winstonRotator, {
//  'name': 'error-file',
//  'level': 'error',
//  'filename': './logs/error.log',
//  'json': false,
//  'datePattern': 'yyyy-MM-dd-',
//  'prepend': true
//});

module.exports = {
  'successlog': successLogger,
  'errorlog': errorLogger
};
 
