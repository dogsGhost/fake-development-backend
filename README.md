CRUD Operations on a JSON File
===

An easy, but **completely insecure** way of persisting JSON data via AJAX.

This was written as a way to have persistant data when developing a javascript application, without having to set up any kind of backend or database.

We have one function that handles creating files, writing to files, and retrieving their contents. Currently no setting for physically deleting a file, but its contents can be deleted by posting an empty string/object to it.

Assumptions
---

Your application will have some unique identifier to each user, most likely a username.  
All data to be stored can be done so inside one object.  
Sharing of data between users is not a priority (this method does allow it, but to a limited degree).

How It Works
---

When data is posted via AJAX, the php code it posts to creates/updates a literal `*.json` file. Whatever unique identifier you're using is used to name the file. Get requests simply locate the file and return its contents. Requests always return the complete data object, so any filtering required as part of a get has to be done on the client side.

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