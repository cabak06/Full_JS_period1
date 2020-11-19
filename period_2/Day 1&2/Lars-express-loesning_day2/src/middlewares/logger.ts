const winston = require('winston'),
    expressWinston = require('express-winston');

    const requestLogger = (expressWinston.logger({
        transports: [
        new winston.transports.File({ filename: './logs/all.log', level: 'info' })
        ],
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
          ),
          meta: true, // optional: control whether you want to log the meta data about the request (default to true)
          msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
          expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
          colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
        }));
     
       
    const err_Logger = (expressWinston.errorLogger({
        transports: [
        new winston.transports.File({ filename: './logs/error.log', level: 'error' })
        ],
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
            )
          }));
    
export {requestLogger,err_Logger};