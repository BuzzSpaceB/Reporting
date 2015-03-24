/** Function to import a thread or subset of threads that was previously backed up
 *
 * @param fileName full file URI
 * @return the JSON string containing the thread or subset of a thread that was backed up
 * */

    module.exports = function(directory,fileName,callback){
        var fs = require('fs');
        var path = require('path');
        var filePath = path.join(directory,fileName);
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
            if (!err){
                callback(data);
            }else{
                callback(err);
            }

        });
    };