/**
 * Mkhabela Phethile
 * 12097561
 * COS 301: Reporting B: importThreadAppraisal
 * 3/27/2015
 */
/**
*The importThreadAppraisal Function gets a csv file as input from the exportThreadAppraisal function
*The function then checks that the member and the appraisal are valid
*calls assignAppraisalToPost for each field if valid and throws an exception if invalid
* @param directory where the csv file is saved
* @param fileName the name of the csv file
*/

module.exports = function(directory,fileName)
{
    //variable to store the files content
    var dataRead;
	//variable fs for reading in the file
    var fs = require('fs');
	//variable path to store the path to file
    var path = require('path');
	//variable filepath to store the full path including the directory and filename requested
    var filePath = path.join(directory,fileName);
	//storing the data from the file into dataRead and calling the parseData function to parse the data
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err){
		//storing data into dataread
            dataRead = data;
			//calling parse data
            parseData(dataRead);
        }else{
		//Incase the is an error, shows the error on the console

            console.log(err);
        }
    });


};



 /** Function to parse the csv data
     *@param data - the variable which contains the csv files contents
     * */ 

function parseData(data)
{

//replace UNIX new lines
data = data.replace (/\r\n/g, "\n");
//replace MAC new lines
data = data.replace (/\r/g, "\n");
//split csv data into rows
var rows = data.split("\n");

for (var i = 0; i < rows.length; i++) {

  // this line helps to skip empty rows
    if (rows[i]) {
        //our columns are separated by comma
        var column = rows[i].split(",");
		
		//column is an array now, the first item is the parent id
		var parentId=column[0];
		//The second item is the author 
		var author=column[1];
		//the third item is the timestamp
		var timestamp=column[2];
		//the fourth is the content
		var content=column[3];
		//the fifth is the status
		var status=column[4];
		//the sixth is th memberID
		var memberId=column[5];
		//the seventh is the appraisal id
		var appraisalId=column[6];
		//the eight is the appraisal value
		var appraisalValue=column[7];

	//the isAuthorised function is out of my scope along with the assignAppraisalToPost
	if(isValid(appraisalValue)&&isAuthorised(memberId)) assignAppraisalToPost(appraisalValue);
	}
}
}


 /** function that checks if the appraisal value are valid
     *@param appraisalValue
     * */ 
function isValid(appraisalValue)
{
try {
  //I was not sure what  the highest appraisal value could be so i decided on 10, you may alter this if you wish
    if ((appraisalValue !=="")&&(appraisalValue>0)&&(appraisalValue<10))
    {

        return true;
    }
    else
    {

        return false;
    }
	/*if(appraisalValue == "") throw "empty"; else return true;
        if(isNaN(appraisalValue)) throw "not a number"; else return true;
        if(appraisalValue < 1) throw "too low"; else return true;
        if(appraisalValue > 10) throw "too high"; else return true;*/
   }
catch(err) {
      message.innerHTML = "Appraisal Value is " + err;
    }
}


 /** This function is a dummy one since we dont implement it.
     *@param someData- which is should be the Member ID
     * */ 

function isAuthorised(someData)
{return true;}

function assignAppraisalToPost(postValue) //Dummy Function
{
console.log("Appraisal post value " + postValue);
}


