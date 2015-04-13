// ===================================================================================================
// Manual unit testing is done below by calling each of the function calls at the end of this section
// ===================================================================================================

var Reporting = require('./Reporting.js');

var valuesRecieved = '';

var consolePrintCallback = function(data) {
    valuesRecieved = data;
};

/**
 * Manual testing for each of the functions for the project: function testGetThreadStats
 */
function testGetThreadStats(){

    var postList = [
        {"ParentID":"0", "Author":"1", "TimeStamp":"2015.03.15", "Content":"This is the first post I am writing here. My name is Eric.", "Status":"visible"},
        {"ParentID":"1", "Author":"2", "TimeStamp":"2015.03.17", "Content":"Hi! My name is Jonah.", "Status":"visible"},
        {"ParentID":"2", "Author":"3", "TimeStamp":"2015.03.17", "Content":"My name is Sarah. I am studying Computer Science", "Status":"visible"},
        {"ParentID":"2", "Author":"1", "TimeStamp":"2015.03.18", "Content":"I am also studying Computer Science.", "Status":"visible"},
        {"ParentID":"2", "Author":"2", "TimeStamp":"2015.03.18", "Content":"I wrote something that caused my post to be made hidden.", "Status":"hidden"},
        {"ParentID":"2", "Author":"0", "TimeStamp":"2015.03.19", "Content":"I am learning JavaScript.", "Status":"visible"},
        {"ParentID":"2", "Author":"0", "TimeStamp":"2015.03.19", "Content":"I am learning Java.", "Status":"visible"}
    ];

    var jsonObject = JSON.stringify(postList);

    Reporting.getThreadStats(jsonObject, "Num", consolePrintCallback);
    Reporting.getThreadStats(jsonObject, "MemCount", consolePrintCallback);
    Reporting.getThreadStats(jsonObject, "MaxDepth", consolePrintCallback);
    Reporting.getThreadStats(jsonObject, "AvgDepth", consolePrintCallback);

}

/**
 * Manual testing for each of the functions for the project: function testGetThreadAppraisal
 */
function testGetThreadAppraisal(){
    var setOfPosts = [
        {"postID": "1", "parentID": "1", "Author": "Dummy1", "Timestamp": "1426872319922", "Status":"Off", "Content":"Baa"},
        {"postID": "2", "parentID": "2", "Author": "Dummy2", "Timestamp": "1426872319923", "Status":"ON", "Content":"Baa Baa"},
        {"postID": "3", "parentID": "9", "Author": "Dummy3", "Timestamp": "1426872319924", "Status":"Off", "Content":"Baa Baa Black"},
        {"postID": "4", "parentID": "5", "Author": "Dummy4", "Timestamp": "1426872319925", "Status":"ON", "Content":"Baa Baa Black Sheep"},
        {"postID": "5", "parentID": "90", "Author": "Dummy5", "Timestamp": "1426872319926", "Status":"Off", "Content":"Baa Baa Black Sheep, Have you"},
        {"postID": "6", "parentID": "11", "Author": "Dummy6", "Timestamp": "1426872319927", "Status":"ON", "Content":"Baa Baa Black Sheep, Have you any wool?"}];

    var setOfAppraisals = [
        {"appraisalID": "1", "appraisalValue": 1},
        {"appraisalID": "2", "appraisalValue": 4},
        {"appraisalID": "3", "appraisalValue": 6},
        {"appraisalID": "4", "appraisalValue": 9},
        {"appraisalID": "5", "appraisalValue": 10},
        {"appraisalID": "6", "appraisalValue": 9}];

    var setOfMembers = [
        {"memberID": "1", "appraisalID": "1",postID: "1" },
        {"memberID": "2", "appraisalID": "2",postID: "2" },
        {"memberID": "3", "appraisalID": "3",postID: "3" },
        {"memberID": "4", "appraisalID": "4",postID: "4" },
        {"memberID": "5", "appraisalID": "5",postID: "5" },
        {"memberID": "6", "appraisalID": "6",postID: "6" }];


    var post = JSON.stringify(setOfPosts);
    var appraisal = JSON.stringify(setOfAppraisals);
    var member = JSON.stringify(setOfMembers);

    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "All"));
    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "Sum"));
    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "Avg"));
    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "Max"));
    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "Min"));
    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "Num"));
}

/**
 * Manual testing for each of the functions for the project: function testExportThreadAppraisal
 */
function testExportThreadAppraisal(){
    var items = [
        { "parentID": "1", "Author": "Dummy1", "Timestamp": "1426872319922", "Content":"Bla Bla", "Status":"On", "memeberID":"1", "appraisalID":"1", "appraisalValue":"1" },
        { "parentID": "2", "Author": "Dummy2", "Timestamp": "1426872319924", "Content":"Bla Bla ble", "Status":"Off", "memeberID":"2", "appraisalID":"2", "appraisalValue":"2" }];

    /** Convert object to JSON*/
    var jsonObject = JSON.stringify(items);
    Reporting.exportThreadAppraisal(jsonObject,"C:/Users/Diaman/Desktop/Appraisal","appraisal.csv");
}

/**
 * Manual testing for each of the functions for the project: function testImportThread
 */
function testImportThread(){
    Reporting.importThread("C:/Users/Diaman/Desktop/ThreadBackup","backup1.txt",consolePrintCallback);
}

/**
 * Manual testing for each of the functions for the project: function testExportThread
 */
function testExportThread(){
    Reporting.exportThread('{ "posts" : [{"ParentID":"1","Author":"1","TimeStamp":"xxxxx","Content":"adqwfqfgqfqwfqdasdasqwqwd","Status":"open","Level":"1"},{"ParentID":"3","Author":"2","TimeStamp":"aaaaa","Content":"ad","Status":"hidden","Level":"2"},{"ParentID":"2","Author":"3","TimeStamp":"bbbbb","Content":"adqwfqf","Status":"closed","Level":"3"}]}',"C:/Users/Diaman/Desktop/ThreadBackup","backup1.txt");
}

/**
 * Manual testing for each of the functions for the project: function testImportThreadAppraisal
 */
function testImportThreadAppraisal(){
    Reporting.importThreadAppraisal("C:/Users/Diaman/Desktop/Appraisal","appraisal.csv");
}

// Uncomment your function here to test it:

// testGetThreadStats();
// testGetThreadAppraisal();

// testExportThread();
// testExportThreadAppraisal();

// testImportThread();
// testImportThreadAppraisal();


 // ===============================================================================================
 // Automated unit testing is done below by sending results to a request on port 3000 of localhost
 // ===============================================================================================

// Using the express framework
var express = require('express');

// Creating an express object
var app = express();

/**
 * JQuery function call to send links to the request to navigate to different functions
 */
app.get('/', function (req, res) {
  res.end('<a href = "/testGetThreadStats">1-Test the getThreadStats function</a><br/><a href = "/testGetThreadAppraisal">2-Test the getThreadAppraisal function</a><br/>'+
  '<a href = "/testExportThreadAppraisal">3-Test the exportThreadAppraisal function</a><br/><a href = "/testImportThreadAppraisal">4-Test the importThreadAppraisal function</a>' +
  '<br/><a href = "/testExportThread">5-Test the exportThread function</a><br/><a href = "/testImportThread">6-Test the importThread function</a>')
});


/**
 * JQuery function call to automate the testing of the testGetThreadStats functionality
 */
app.get('/testGetThreadStats', function (req, res) {
	var postList = [
    {"ParentID":"0", "Author":"1", "TimeStamp":"2015.03.15", "Content":"This is the first post I am writing here. My name is Eric.", "Status":"visible"},
    {"ParentID":"1", "Author":"2", "TimeStamp":"2015.03.17", "Content":"Hi! My name is Jonah.", "Status":"visible"},
    {"ParentID":"2", "Author":"3", "TimeStamp":"2015.03.17", "Content":"My name is Sarah. I am studying Computer Science", "Status":"visible"},
    {"ParentID":"2", "Author":"1", "TimeStamp":"2015.03.18", "Content":"I am also studying Computer Science.", "Status":"visible"},
    {"ParentID":"2", "Author":"2", "TimeStamp":"2015.03.18", "Content":"I wrote something that caused my post to be made hidden.", "Status":"hidden"},
	{"ParentID":"2", "Author":"0", "TimeStamp":"2015.03.19", "Content":"I am learning JavaScript.", "Status":"visible"},
	{"ParentID":"2", "Author":"0", "TimeStamp":"2015.03.19", "Content":"I am learning Java.", "Status":"visible"}
	];
	
	var jsonObject = JSON.stringify(postList);
	Reporting.getThreadStats(jsonObject, "Num", consolePrintCallback);
	var num = valuesRecieved;
	
	Reporting.getThreadStats(jsonObject, "MemCount", consolePrintCallback);
	var memCount = valuesRecieved;
	
	Reporting.getThreadStats(jsonObject, "MaxDepth", consolePrintCallback);	
	var maxDepth = valuesRecieved;
	
	Reporting.getThreadStats(jsonObject, "AvgDepth", consolePrintCallback);
	var avgDepth = valuesRecieved;
	
  res.end('<a href = "/">Go to main menu</a><br/><br/>' +
  '<h3>The object that we are using</h3>' + jsonObject +
  '<h3>The value that was calculated using the Num keyword</h3>'+ num +
  '<h3>The value that was calculated using the memCount keyword</h3>'+ memCount +
  '<h3>The value that was calculated using the maxDepth keyword</h3>'+ maxDepth +
  '<h3>The value that was calculated using the avgDepth keyword</h3>'+ avgDepth );
});


/**
 * JQuery function call to automate the testing of the testGetThreadAppraisal functionality
 */
app.get('/testGetThreadAppraisal', function (req, res) {
	var setOfPosts = [
        {"postID": "1", "parentID": "1", "Author": "Dummy1", "Timestamp": "1426872319922", "Status":"Off", "Content":"Baa"},
        {"postID": "2", "parentID": "2", "Author": "Dummy2", "Timestamp": "1426872319923", "Status":"ON", "Content":"Baa Baa"},
        {"postID": "3", "parentID": "9", "Author": "Dummy3", "Timestamp": "1426872319924", "Status":"Off", "Content":"Baa Baa Black"},
        {"postID": "4", "parentID": "5", "Author": "Dummy4", "Timestamp": "1426872319925", "Status":"ON", "Content":"Baa Baa Black Sheep"},
        {"postID": "5", "parentID": "90", "Author": "Dummy5", "Timestamp": "1426872319926", "Status":"Off", "Content":"Baa Baa Black Sheep, Have you"},
        {"postID": "6", "parentID": "11", "Author": "Dummy6", "Timestamp": "1426872319927", "Status":"ON", "Content":"Baa Baa Black Sheep, Have you any wool?"}];

    var setOfAppraisals = [
        {"appraisalID": "1", "appraisalValue": 1},
        {"appraisalID": "2", "appraisalValue": 4},
        {"appraisalID": "3", "appraisalValue": 6},
        {"appraisalID": "4", "appraisalValue": 9},
        {"appraisalID": "5", "appraisalValue": 10},
        {"appraisalID": "6", "appraisalValue": 9}];

    var setOfMembers = [
        {"memberID": "1", "appraisalID": "1",postID: "1" },
        {"memberID": "2", "appraisalID": "2",postID: "2" },
        {"memberID": "3", "appraisalID": "3",postID: "3" },
        {"memberID": "4", "appraisalID": "4",postID: "4" },
        {"memberID": "5", "appraisalID": "5",postID: "5" },
        {"memberID": "6", "appraisalID": "6",postID: "6" }];


    var post = JSON.stringify(setOfPosts);
    var appraisal = JSON.stringify(setOfAppraisals);
    var member = JSON.stringify(setOfMembers);

    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "All"));
	var All = valuesRecieved;
	
    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "Sum"));
	var sum = valuesRecieved;
	
    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "Avg"));
	var avg = valuesRecieved;
	
    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "Max"));
	var max = valuesRecieved;
	
    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "Min"));
	var min = valuesRecieved;
	
    consolePrintCallback(Reporting.getThreadAppraisal(post, member, appraisal, "Num"));
	var num = valuesRecieved;
  res.end('<a href = "/">Go to main menu</a><br/><br/>' +
  '<h3>The objects that we are using</h3>'  +
  '<h4>For the set of posts</h4>'+ post +
  '<h4>For the set of members</h4>'+ member +
  '<h4>For the set of appraisals</h4>'+ appraisal +
  '<h3>The value that was calculated using the All keyword</h3>'+ All +
  '<h3>The value that was calculated using the Sum keyword</h3>'+ sum +
  '<h3>The value that was calculated using the Avg keyword</h3>'+ avg +
  '<h3>The value that was calculated using the Max keyword</h3>'+ max +
  '<h3>The value that was calculated using the Min keyword</h3>'+ min +
  '<h3>The value that was calculated using the Num keyword</h3>'+ num)
});

/**
 * JQuery function call to automate the testing of the testExportThreadAppraisal functionality
 */
app.get('/testExportThreadAppraisal', function (req, res) {
	var items = [
        { "parentID": "1", "Author": "Dummy1", "Timestamp": "1426872319922", "Content":"Bla Bla", "Status":"On", "memeberID":"1", "appraisalID":"1", "appraisalValue":"1" },
        { "parentID": "2", "Author": "Dummy2", "Timestamp": "1426872319924", "Content":"Bla Bla ble", "Status":"Off", "memeberID":"2", "appraisalID":"2", "appraisalValue":"2" }];

    /** Convert object to JSON*/
    var jsonObject = JSON.stringify(items);
    Reporting.exportThreadAppraisal(jsonObject,"C:/Games","appraisal.csv");
  res.end('<a href = "/">Go to main menu</a><br/>' + 
  '<h3>The object that we are using</h3>' + jsonObject +
  '<p>The file was saved to \'C:/Games/appraisal.csv\'</p>');
});

/**
 * JQuery function call to automate the testing of the testExportThreadAppraisal functionality
 */

app.get('/testImportThreadAppraisal', function (req, res) {
	Reporting.importThreadAppraisal("C:/Games","appraisal.csv")
  res.end('<a href = "/">Go to main menu</a>')
});

/**
 * JQuery function call to automate the testing of the testExportThread functionality
 */
app.get('/testExportThread', function (req, res) {
	Reporting.exportThread('{ "posts" : [{"ParentID":"1","Author":"1","TimeStamp":"xxxxx","Content":"adqwfqfgqfqwfqdasdasqwqwd","Status":"open","Level":"1"},{"ParentID":"3","Author":"2","TimeStamp":"aaaaa","Content":"ad","Status":"hidden","Level":"2"},{"ParentID":"2","Author":"3","TimeStamp":"bbbbb","Content":"adqwfqf","Status":"closed","Level":"3"}]}',"C:/Games","backup1.txt");
	var posts =  [{"ParentID":"1","Author":"1","TimeStamp":"xxxxx","Content":"adqwfqfgqfqwfqdasdasqwqwd","Status":"open","Level":"1"},{"ParentID":"3","Author":"2","TimeStamp":"aaaaa","Content":"ad","Status":"hidden","Level":"2"},{"ParentID":"2","Author":"3","TimeStamp":"bbbbb","Content":"adqwfqf","Status":"closed","Level":"3"}];
	var postsString = JSON.stringify(posts);
  res.end('<a href = "/">Go to main menu</a><br/>' + 
  '<h3>The object that we are using</h3>' + postsString +
  '<p>The file was saved to \'C:/Games/backup1.txt\'</p>')
});

/**
 * JQuery function call to automate the testing of the testExportThread functionality
 */
app.get('/testImportThread', function (req, res) {
	Reporting.importThread("C:/Games","backup1.txt",consolePrintCallback);
	var theVals = valuesRecieved;
  res.end('<a href = "/">Go to main menu</a><br/>' + 
  '<h3>The object created from the file \'C:/Games/backup1.txt\' </h3>' + theVals);
});

//Start listening for requests on port 3000
app.listen(3000);