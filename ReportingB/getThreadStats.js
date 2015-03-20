/**
 * Carla de Beer
 * 95151835
 * COS 301: Reporting B: getThreadStats
 * 20.03.2015
 */

/**
 * The functionality provided by the getThreadStats function is to provide a versatile way to get statistical
 * information of subsets of posts complying with specfied restrictions. The set of posts returned by the
 * Threads.queryThread function is analysed according to the specfied action keyword.
 * @param posts a set of posts returned by the Threads.queryThread function
 * @param action action keyword
 * @returns {integer or double value corresponding to the action input}
 */

function getThreadStats(posts, action){

    // Num: A count of the entries in the dataset that was created
    // MemCount: A count of the number of members who are the creators of posts in the dataset
    // MaxDepth: The maximum depth of a post in the queried thread tree
    // AvgDepth: The average depth of a post in the queried thread tree

    var parsed = JSON.parse(posts);

    var array = [];

    var n = 0; // temporary variable to store number of posts
    var mc = 0; // temporary variable to store member count
    var mc = 0; // temporary variable to store member count
    var md = 0; // temporary variable to store max depth
    var ad = 0; // temporary variable to store average depth

    for(var x in parsed){
        array.push(parsed[x]);
        n += x;
    }


    if (action === "Num"){
        return n;
    }
    else if (action === "MemCount"){
        return mc;
    }
    else if(action == "MaxDepth"){
        return md;
    }
    else if(action === "AvgDepth"){
        return ad;
    }
}
