/**
 * Created by User on 3/24/2015.
 */

var consolePrintCallback = function(data) {
        console.log('got data: '+data);
    };

var importThread = require('./ReportingB/importThread.js');
importThread("C:/New folder","backup.txt",consolePrintCallback);

console.log("test");