
//Email Object
class EmailContact {
    constructor(firstName, lastName, email) {
        this.firstName = firstName,
        this.lastName = lastName, 
        this.email = email
    }
}

//UI Functions
class UI {
    getInputFields() {

    }
}

//LocalStorage Functions
class Store {
    static addContacttoLocal() {

    }
}

document.getElementById('email-form-column').addEventListener('submit', function(e) {
    const   firstName = document.getElementById('first-name'),
            lastName = document.getElementById('last-name'),
            email = document.getElementById('email');

    //Instantiate EmailContact
    const emailCont = new EmailContact(firstName, lastName, email);
    //Instantiate UI Functions
    const ui = new UI();

    e.preventDefault();
});

