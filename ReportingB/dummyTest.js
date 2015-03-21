/** This javascript file is used to test the functions for the ReportingB module with dummy values. */


function testGetThreadsSats()
{

}

function testGetThreadAppraisal()
{

}

/** Tests the ExportThreadAppraisal function by creating a dummy JSON object and sending it to the function. */
function testExportThreadAppraisal()
{
    /** Create dummy object*/
    var items = [
        { "parentID": "1", "Author": "Dummy1", "Timestamp": "1426872319922", "Content":"Bla Bla", "Status":"On", "memeberID":"1", "appraisalID":"1", "appraisalValue":"1" },
        { "parentID": "2", "Author": "Dummy2", "Timestamp": "1426872319924", "Content":"Bla Bla ble", "Status":"Off", "memeberID":"2", "appraisalID":"2", "appraisalValue":"2" }];

    /** Convert object to JSON*/
    var jsonObject = JSON.stringify(items);
    /** Send JSONObject as well as the name of the file to be saved */
    exportThreadAppraisal(jsonObject,"Yes.csv");
}

function testImportThreadAppraisal()
{

}

function testExportThread()
{

}

function testImportThread()
{

}