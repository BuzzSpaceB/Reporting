/**
 * Carla de Beer
 * 95151835
 * COS 301: Reporting B: getThreadStats
 * 27.03.2015
 */

/**
 * The functionality provided by the getThreadStats function is to provide a versatile way to get statistical
 * information of subsets of posts complying with specified restrictions. The set of posts returned by the
 * Threads.queryThread function is analysed according to the specified "action" keyword.
 * @param posts a set of posts returned by the Threads.queryThread function
 * @param action action keyword
 * @param callback function to be called on result
 * @returns {integer or double value corresponding to the action input}
 */

module.exports = function(posts, action, callback)
{
    var JSONtoArray = []; // 1D array to store the number of JSON objects
	var array = []; // 1D array to store all the details of the JSON object
    var arrayParentID = []; // 1D array to store the parent IDs
	var arrayAuthorID = []; // 1D array to store the author IDs

    // Parse the incoming JSON object first
    var parsed = JSON.parse(posts);
	
	//console.log(parsed[0].ParentID);

    // Fill "array" to contain the content of the parsed JSON object
    for(var i = 0; i < parsed.length; ++i){
		array.push(parsed[i].ParentID);
		array.push(parsed[i].Author);
		array.push(parsed[i].TimeStamp);
		array.push(parsed[i].Content);
		array.push(parsed[i].Status);	
    }
	
	//console.log(array[0]);
	//console.log(array.length);

    // Carry out an action based on the value of the "action" keyword:
    // Num: A count of the entries in the dataset that was created
    // MemCount: A count of the number of members who are the creators of posts in the dataset
    // MaxDepth: The maximum depth of a post in the queried thread tree
    // AvgDepth: The average depth of a post in the queried thread tree

    if (action === "Num"){

        callback(getNum(array));
    }
    else if (action === "MemCount"){

        var arrayAuthorID = []; // 1D array to store authorID array

        // Loop through array and get every 5th element (to get author list), starting from index = 1
        for (var i = 1; i < array.length; i+=5){
            arrayAuthorID.push(array[i]);
        }	
			
		// Eliminate duplicated from arrayAuthorID
		arrayAuthorID.unique();

        callback(arrayAuthorID.length);
    }
    else if(action == "MaxDepth"){

        callback(getMaxDepth(array,arrayParentID));

    }
    else if(action === "AvgDepth"){

        callback(getAveDepth(array, arrayParentID, arrayAuthorID));

    }
};

/**
 * Helper function that eliminates duplicates from an array.
 * @returns {this: array without duplicates}
 */
Array.prototype.unique = function() {
    var a = [];
    for (i = 0; i < this.length; i++) {
        var current = this[i];
        if (a.indexOf(current) < 0) a.push(current);
    }

    this.length = 0;
    for (i = 0; i < a.length; i++) {
        this.push(a[i]);
    }

    return this;
}

/**
 * Helper function that counts the number of parentIDs so get a value of the number of items in the dataset.
 * @param array
 * @returns {Integer value that indicates the size of the array = number of items in dataset}
 */
function getNum(arr){

    var countArray = [];

    for(var i = 0; i < arr.length; i+=5){
        countArray.push(arr[i]);
    }

    return countArray.length;
}


/**
 * Helper function that gets the maximum depth of a post.
 * @param array
 * @param arrayParentIDs
 * @returns {Integer value associated with the most frequent element in the array}
 */
function getMaxDepth(array,pID ){

    // Loop through the array to get each 5th element, i.e. create the parentID array
    for (var i = 0; i < array.length; i+=5){
        pID.push(array[i]);
    }

    // Sorting the array first so that the first item can be accessed as the most frequent
    pID.sort();

	// Count the number of occurrences in the array
    var obj = {};
    for (var i = 0, j = pID.length; i < j; ++i) {
        obj[pID[i]] = (obj[pID[i]] || 0) + 1;
    }

	//console.log(obj['0']); 
	
    // Return the count value of the first item (= most frequent) in the object
    return obj[0]; 
}

/**
 * Helper function that gets the average depth of a post.
 * @param array
 * @param pID
 * @param aID
 * @returns {Integer value associated with the average depth of a post}
 */
function getAveDepth(array, pID, aID) {

    // Create parentID array:
    // Loop through main array and get every 5th element, starting from index = 0
    for (var i = 0; i < array.length; i+=5){
        pID.push(array[i]);
    }

    // Create authorID array:
    // Loop through main array and get every 5th element, starting from index = 1
    for (var i = 1; i < array.length; i+=5){
        aID.push(array[i]);
    }

    // Remove duplicates from authorID array
    aID.unique();

    var numParent = pID.length;
    var numAuthor = aID.length;

    return numParent / numAuthor;
}