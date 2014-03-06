// This function handles all our requests.
// fileName is the name of the file you want to request from, it is required.
// A callback function to handle our request.
// Optional you can pass data if you want to store instead of retrieve.
function crudRequest(fileName, callback, postData) {
    // CONFIG
    // Set the path to the jsonCrud.php file relative to either your app's page
    // or if used at different levels of a domain, relative to the domain's root.
    var path = '../';

    // All requests are made to the same php file.
    var url = path + 'jsonCrud.php';
    // Prevents issue with cached requests.
    url = url + ((/\?/).test(url) ? "&" : "?") + 'time=' + (new Date()).getTime();
    var request = new XMLHttpRequest();
    // Set up the filename string to send.
    var file = 'file=' + fileName + '.json';

    // If we're posting data and its not a string, stringify it.
    if (postData && typeof postData !== 'string') {
        postData = JSON.stringify(postData, null, '\t');
    }

    // Always Be Posting.
    request.open('POST', url, true);

    // Set content-type if posting data.
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    request.onreadystatechange = function () {
        // If something went wrong quit.
        if (request.readyState !== 4 || request.status !== 200) {
            return;
        }

        // If no callback just log the request.
        if (!callback) {
            callback = function (request) {
                console.log(request.responseText);
            }
        }

        // Otherwise everything went ok and we can send our request to the callback.
        callback(request);
    }

    // Send postData if it was passed initially otherwise just send the file reference.
    postData ? request.send(file + '&data=' + postData) : request.send(file);    
}