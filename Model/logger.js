const winston = require('winston');
const { combine, timestamp, label, printf } = winston.format;
 
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
  //return `${timestamp} [${label}] ${level}: ${message}`;
});
 

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ 
                                      filename: 'logs/combined.log' ,
                                      colorize : true,
                                      handleExceptions: true,
                                      json: true,
                                    })
    ],
    format: combine(
      label({ label: 'ECOMMERCE' }),
      timestamp(),
      myFormat
    ),
});
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

function logThis(message){

  logger.log({
    level: 'info',
    message: message.message //only shows message
  });
}
module.exports = {logThis};
