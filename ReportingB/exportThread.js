
/** Function to import a thread or subset of threads that was previously backed up
 *
 * @param threadObject the JSON string containing the information on the thread to be backed up
 * @param filename the name that the backup file is to be given (does not include type)
 * */

function exportThread(threadObject,filename){
    var el = document.createElement('a');
    el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(threadObject));
    el.setAttribute('download', filename + ".txt");

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        el.dispatchEvent(event);
    }
    else {
        el.click();
    }
}

