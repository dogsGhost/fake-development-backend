<?php
// CONFIG
// If you're storing json files in a sub-folder set the path here, relative to this file.
$path = 'demo/files/';

// Assign the filename.
$filename = $path . $_POST['file'];
// Data variable
$data = false;
// String to write to new files.
$string = '[]';

// If posting data act like a POST
if (isset($_POST['data'])) {
    $data = $_POST['data'];

    // remove magic slash stuff
    $data = stripslashes($data);
    
    // Write it to the file.
    file_put_contents($filename, $data);

} else {
    // Else we act like it was a GET
    if (!file_get_contents($filename)) {
        // If there's no file, create file and write string to it.
        file_put_contents($filename, $string);
        $data = $string;

    } else {
        // Otherwise return the file contents.
        $data = file_get_contents($filename);
    }
}

echo $data;