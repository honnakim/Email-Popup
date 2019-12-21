const   firstName = document.getElementById('first-name'),
        lastName = document.getElementById('last-name'),
        email = document.getElementById('email');

//Email Object
class EmailContact {
    constructor(firstName, lastName, email) {
        this.firstName = firstName,
        this.lastName = lastName, 
        this.email = email
    }
}

class UI {
    getInputFields() {

    }
}

class Store {
    static addContacttoLocal() {

    }
}

document.getElementById('email-form-column').addEventListener('submit', function(e) {

    e.preventDefault();
});

