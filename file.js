
// Create a telephone class
class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    // Creating 3 public methods for adding, removing and dialing phone numbers
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        const index = this.phoneNumbers.indexOf(phoneNumber);
        if (index !== -1) {
            this.phoneNumbers.splice(index, 1);
        }
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            this.observers.forEach(observer => observer.notify(phoneNumber));
        } else {
            console.log(`Phone number ${phoneNumber} not found`);
        }
    }

    // observer pattern
    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
}

// Define the observer class
class PhoneObserver {
    notify(phoneNumber) {
        console.log(`The phone number: ${phoneNumber}`);
    }
}

const telephone = new Telephone();
const observer1 = new PhoneObserver();
const observer2 = {
    notify: function(phoneNumber) {
        console.log(`Now Dialing ${phoneNumber}`);
    }
};

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("2347023232");

telephone.dialPhoneNumber("2347023232");
