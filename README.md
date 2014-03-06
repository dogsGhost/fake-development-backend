Simple CRUD Operations on a JSON file
===

An easy, but **completely insecure** way of persisting JSON data via AJAX.

This was written as a way to have persistant data when developing a javascript application, 
without having to set up any kind of backend or database.

We have one function that handles creating files, writing to files, and retrieving their contents. Currently no setting for physically deleting a file, but its contents can be deleted by posting an empty string/object to it.

Basic Setup
---

Requires a server running PHP.

Add `jsonCrud.php` to your project and configure the `$path` variable to match where you'll be storing the JSON files created, relative to the location of `jsonCrud.php`.

Add `crudRequest.js` to your project. Add a script tag to your page referencing the file. Also set the `path` variable to correspond to the location of `jsonCrud.php`. It can be relative to your app's html file, or as an absolute path from the domain's root.

The demo is fully functional and can be run on a local php server.

Usage
---

See demo code for usage examples.

As this code should be used for development purposes only, data in the created json files can be easily mangled/overwritten if affected by other sources.