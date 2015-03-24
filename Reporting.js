/**
 * Created by User on 3/24/2015.
 */

var myCallback = function(data) {
        console.log('got data: '+data);
    };

var importThread = require('./ReportingB/importThread.js');
importThread("C:/New folder","backup.txt",myCallback);

console.log("test");