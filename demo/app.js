/* global crudRequest */
var app = {
    init: function () {
        this.cacheVars();
        this.bindEvents();
    },

    cacheVars: function () {
        this.username = document.querySelector('#username');
        this.login = document.querySelector('#login');
        this.authBtn = document.querySelector('#authBtn');
        this.nameInput = document.querySelector('#nameInput');
        this.age = document.querySelector('#age');
        this.submitBtn = document.querySelector('#submitBtn');
        this.addNames = document.querySelector('#addNames');
        this.namesView = document.querySelector('#storedNamesView');
    },

    bindEvents: function () {
        this.authBtn.addEventListener('click', this.checkUser);
        this.submitBtn.addEventListener('click', this.addUser);
    },

    checkUser: function () {
        // If a value
        if (app.username.value) {
            // Store username.
            app.fileName = app.username.value.replace(/ /gi, '_').toLowerCase();
            // GET request for any content on the user.
            crudRequest(app.fileName, app.setupUser);
        }
    },

    addUser: function () {
        if (app.nameInput.value) {
            var temp = {
                name: app.nameInput.value || 'nonesuch',
                age: parseInt(app.age.value, 10) || 0
            };

            app.userData = app.userData || [];
            app.userData.push(temp);
            crudRequest(app.fileName, app.setupUser, app.userData);
        }
    },

    setupUser: function (request) {
        app.userData = JSON.parse(request.responseText);
        app.updateUserDataView();

        app.nameInput.value = '';
        app.age.value = '';
        app.nameInput.focus();
    },

    updateUserDataView: function () {
        var len = this.userData.length;
        var i = 0;
        var string = '';
        var person;

        // Create items from all the people stored in the data.
        for (; i < len; i++) {
            person = this.userData[i];

            string += '<li>name: ' + person.name + ', age: ' + person.age + '</li>';
        }

        // If no data say so.
        if (!string) {
            string = '<li>No data yet.</li>';
        }

        // Add string to page and show view.
        this.namesView.querySelector('ul').innerHTML = string;
        if (!this.namesView.style.display) {
            this.toggleVis();
        }
    },

    toggleVis: function () {
        this.namesView.style.display = 'block';
        this.addNames.style.display = 'block';
        this.login.style.display = 'none';
    }
};

app.init();