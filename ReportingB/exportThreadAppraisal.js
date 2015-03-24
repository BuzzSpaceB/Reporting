/**
 * Created by Diaman on 3/19/2015.
 */

    /** Function to export a JSON object to a csv file. This function is called by the get thread if the all
     * keyword is used.
     *
     *threadObject - the JSON object created by the getThreadAppraisal
     *filename - The name of the csv file
     * */
function exportThreadAppraisal( threadObject,filename)
{
    /** Turn JSON object into a SCV compatible string */
    var array = typeof threadObject != 'object' ? JSON.parse(threadObject) : threadObject;
    var strCSV = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        strCSV += line + '\r\n';
    }
    return strCSV;
    /** Save to CSV file - Doesn't work in node */
   /* var downloadLink = document.createElement("a");
    var blob = new Blob(["\ufeff", strCSV]);
    var url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = filename;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);*/
}

module.exports = function(threadObject,directory,fileName){
    var fs = require('fs');
    var path = require('path');
    var filePath = path.join(directory,fileName);
    var parseToCsv = exportThreadAppraisal(threadObject);
    fs.writeFile(filePath, parseToCsv, function (err) {
        if (err) return console.log(err);
    });
};