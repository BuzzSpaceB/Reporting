/**
 * Created by User on 3/24/2015.
 */

var consolePrintCallback = function(data) {
        console.log('got data: '+data);
    };

/**
 * The functions of the reporting module are loaded into each of these variables.
 * Use the variable to call the function.
 * Example : getThreadStats(@parameters);
 * @type {exports}
 */
//var getThreadStats = require('./ReportingB/getThreadStats.js');
//var getThreadAppraisal = require('./ReportingB/getThreadAppraisal.js');
//var exportThreadAppraisal = require('./ReportingB/exportThreadAppraisal.js');
//var importThreadAppraisal = require('./ReportingB/importThreadAppraisal.js');
var exportThread = require('./ReportingB/exportThread.js');
var importThread = require('./ReportingB/importThread.js');

//importThread("C:/New folder","backup.txt",consolePrintCallback);
exportThread('{ "posts" : [{"ParentID":"1","Author":"1","TimeStamp":"xxxxx","Content":"adqwfqfgqfqwfqdasdasqwqwd","Status":"open","Level":"1"},{"ParentID":"3","Author":"2","TimeStamp":"aaaaa","Content":"ad","Status":"hidden","Level":"2"},{"ParentID":"2","Author":"3","TimeStamp":"bbbbb","Content":"adqwfqf","Status":"closed","Level":"3"}]}',"C:/New folder","backup1.txt");

console.log("test");