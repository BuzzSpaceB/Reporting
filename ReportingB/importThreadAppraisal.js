/**Edited by Mkhabela Phethile 3/19/2015**/
/**the importThreadAppraisal Function gets a csv file as input from the exportThreadAppraisal function, the function then checks that the member and the appraisal are valid, calls assignAppraisalToPost for each field if valid and throws an exception if invalid**/
/**This function requires you to run in on a server like Apache, I used usbwebserver and the file has to be in the same directory as the js project or specify the full to the directory it is saved**/
function importThreadAppraisal(filename)//function gets the name of the file as input same file from exportThreadAppraisal(),this is how i achieved the functionality <a href="#" onclick="importThreadAppraisal('yes.csv')">test</a>
{
    //variable used for request purposes
  var req;
    if (window.XMLHttpRequest) {
        // supported by the following browsers: IE7+, Firefox, Chrome, Opera, Safari
        req = new XMLHttpRequest();
    } else {
        //for IE6, IE5
        req = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //this part loads the file, using GET
    req.open('GET',filename,false);
    req.send();
    //storing the request's response text to the data variable
    var data = req.responseText;
    //alert(data);
    //calling the csvToarray function to populate the array with the csv data from the response text
    var dataArray=csvToarray(data,',');
    //alert(dataArray[0]);

}
//function that converts csv to an array
function csvToarray(csvString,separator)
{
    //creating a temp array to store the csv data
    var dataArray = [];

    if (csvString !== undefined) {
        if (csvString.indexOf(separator) == -1) {
            dataArray.push(csvString);
        } else {
            dataArray = csvString.split(separator);
        }
    }

    return dataArray;

}