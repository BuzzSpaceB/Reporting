/** Function to import a thread or subset of threads that was previously backed up
 *
 * @param fileNameh full file URI
 * @return the JSON string containing the thread or subset of a thread that was backed up
 * */

function importThread(fileName){
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    req.open('GET',fileName,false);
    req.send();
    var result = req.responseText;
    return result;
}