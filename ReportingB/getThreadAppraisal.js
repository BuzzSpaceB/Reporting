/**
 * Created by Ephiphania Munava 10624610 on 3/19/2015.
 */

/**getThreadAppraisal
 * Receives parameters which are 3 json object and 1 actionKeyword. Depending on the actionKeyword perfoms certain calculations and return results
 *
 * @param  setOfPosts -     Type JSONObject a set of posts returned by the Threads.queryThread function.
 * @param  setOfMembers -   Type JSONObject a set of members returned by the Threads.queryThread function.
 * @param  setOfAppraisals - Type JSONObject a set of appraisals returned by the Threads.queryThread function.
 * @param  actionKeyword -  Type String determining the result of the function.
 * @returns depending on the actionKeyword returns jsonObject, integer or double value.
 *
 * */
var getThreadAppraisal;

getThreadAppraisal = new function (setOfPosts, setOfMembers, setOfAppraisals, actionKeyword ) {

    var localSetOfPosts = JSON.parse(setOfPosts); //local copy of the set of posts
    var localSetOfMembers = JSON.parse(setOfMembers); //local copy of the set of members
    var localSetOfAppraisals = JSON.parse(setOfAppraisals); //local copy of the set of appraisals
    var localActionKeyword = actionKeyword; //local copy of the set of action keyword

    var dataSet = []; //Array containing objects created using the  member-appraisal-post combination.
    var tmpObject;      //Object used to insert the  member-appraisal-post combination into the data set.
    var tmpAppraisalObject; //Object used to get appraisal value for each member
    var tmpPostObject;  //Object used to get post value for each member

    /**
     * loop to create data set containing entry for each valid member-appraisal-post combination
     */
    for(var member in localSetOfMembers) {
        for (var appraisal in localSetOfAppraisals) {
            if(appraisal.appraisalID == member.appraisalID) {
                tmpAppraisalObject.appraisalID = appraisal.appraisalID;
                tmpAppraisalObject.appraisalValue = appraisal.appraisalValue;
            }
        }

        for (var post in localSetOfPosts) {
            if(member.postID == post.postID)
            {
                tmpPostObject.parentID = post.parentID;
                tmpPostObject.Author = post.Author;
                tmpPostObject.Timestamp = post.Timestamp;
                tmpPostObject.Status = post.Status;
                tmpPostObject.Content = post.Content;
            }
        }

        tmpObject.memberID = member.memberID;
        tmpObject.appraisalID = tmpAppraisalObject.appraisalID;
        tmpObject.appraisalValue = tmpAppraisalObject.appraisalValue;
        tmpObject.parentID = tmpPostObject.parentID;
        tmpObject.Author = tmpPostObject.Author;
        tmpObject.Timestamp = tmpPostObject.Timestamp;
        tmpObject.Status = tmpPostObject.Status;
        tmpObject.Content = tmpPostObject.Content;

        dataSet.push(tmpObject);
    }

    /**
     * Switch statement result returned upon each of the action keywords: ALL, SUM, AVG, MAX, MIN and NUM
     */
    switch(localActionKeyword) {
        case "All":
                return dataSet.toJSON();
            break;

        case "Sum":
                return sum(dataSet);
            break;

        case "Avg":
                return average(dataSet);
            break;

        case "Max":
                return maximum(dataSet);
            break;

        case "Min":
                return minimum(dataSet);
            break;

        case "Num":
                return nonEmpty(dataSet);
            break;

        default:

    }
};

/**
 * Helper Function For Case: "Sum"
 *The sum of all appraisal values for the entries in the dataset that was created.
 */
var sum = new function(dataSet)
{
    var sum = 0;

    for(var i = 0; i < dataSet.length(); i++)
    {
        sum += dataSet[i].appraisalValue;
    }

    return sum;
};

/**
 *  Helper Function For Case: "Avg"
 *  The average of all appraisal values for the entries in the dataset that was created.
 */
var average;
average = new function (dataSet) {
    var sum = 0;
    var number = dataSet.length();

    for (var i = 0; i < number; i++) {
        sum += dataSet[i].appraisalValue;
    }

    return sum / number;
};

/**
 *  Helper Function For Case: "Max"
 *  The maximum of all appraisal values for the entries in the dataset that was created.
 */
var maximum;
maximum = new function (dataSet) {

    var max = 0;

    for (var i = 0; i < dataSet.length(); i++) {

        if (dataSet[i].appraisalValue > max) {
            max = dataSet[i].appraisalValue;
        }
    }

    return max;
};

/**
 * Helper Function For Case: "Min"
 * The minimum of all non-empty appraisal values for the entries in the dataset that was created.
 */
var minimum;
minimum = new function(dataSet){

    var min = 0;

    for (var i = 0; i < dataSet.length(); i++) {

        if (dataSet[i].appraisalValue < min) {
            min = dataSet[i].appraisalValue;
        }
    }

    return min;
};

/**
 * Helper Function For Case: "Num"
 * A count of all non-empty appraisal values for the entries in the dataset that was created.
 */
var nonEmpty;
nonEmpty = new function(dataSet){

    var count = 0;

    for(var i = 0; i < dataSet.length(); i++)
    {
        if(dataSet[i].appraisalValue != 0)
            count += 1;
    }

    return count;
};