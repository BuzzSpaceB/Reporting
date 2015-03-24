/**
 * Created by User on 3/24/2015.
 */

var Reporting = require('./Reporting.js');

var consolePrintCallback = function(data) {
    console.log('got data: '+data);
};

function testExportThread(){
    Reporting.exportThread('{ "posts" : [{"ParentID":"1","Author":"1","TimeStamp":"xxxxx","Content":"adqwfqfgqfqwfqdasdasqwqwd","Status":"open","Level":"1"},{"ParentID":"3","Author":"2","TimeStamp":"aaaaa","Content":"ad","Status":"hidden","Level":"2"},{"ParentID":"2","Author":"3","TimeStamp":"bbbbb","Content":"adqwfqf","Status":"closed","Level":"3"}]}',"C:/New folder","backup1.txt");

}

function testExportThreadAppraisal(){
    var items = [
        { "parentID": "1", "Author": "Dummy1", "Timestamp": "1426872319922", "Content":"Bla Bla", "Status":"On", "memeberID":"1", "appraisalID":"1", "appraisalValue":"1" },
        { "parentID": "2", "Author": "Dummy2", "Timestamp": "1426872319924", "Content":"Bla Bla ble", "Status":"Off", "memeberID":"2", "appraisalID":"2", "appraisalValue":"2" }];

    /** Convert object to JSON*/
    var jsonObject = JSON.stringify(items);
    Reporting.exportThreadAppraisal(jsonObject,"C:/Games","yes.csv");
}

function testGetThreadAppraisal(){

}

function testGetThreadStats(){

}

function testImportThread(){
    Reporting.importThread("C:/New folder","backup.txt",consolePrintCallback);
}

function testImportThreadAppraisal(){
    Reporting.importThreadAppraisal("c:/Games","yes.csv");
}

//Uncomment your function here to test it:

testExportThread();
//testExportThreadAppraisal();
//testGetThreadAppraisal();
//testGetThreadStats();
//testImportThread();
//testImportThreadAppraisal();


