
/** Function to import a thread or subset of threads that was previously backed up
 *
 * @param threadObject the JSON string containing the information on the thread to be backed up
 * @param filename the name that the backup file is to be given (does not include type)
 * */

module.exports = function(threadObject,directory,fileName){
    var fs = require('fs');
    var path = require('path');
    var filePath = path.join(directory,fileName);
    fs.writeFile(filePath, threadObject, function (err) {
        if (err) return console.log(err);
    });
};

