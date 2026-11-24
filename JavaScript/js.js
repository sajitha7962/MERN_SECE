
// Login
var password = "admin123";
var username = "admin";

if (username === "admin" && password === "admin123") {
    console.log("Login successful!");
}
else {
    console.log("Login failed. Please check your username and password.");
}

// Named function
function student(name, college = "SECE") {
    console.log("Student function called");
    console.log("Student name: " + name);
    console.log("Student college: " + college);
}

student("John", "MIT");
student("Alice");
student("Bob");

// Employee function
function employee(name, company) {
    let college = "Sri Eshwar College of Engineering";

    console.log("Name: " + name);
    console.log("Company: " + company);
    console.log("College: " + college);
}

employee("Sajitha", "Google");
employee("Sujin", "Microsoft");
employee("Abhisheik", "Amazon");

// Anonymous function
let data1 = function() {
    return "This is a function without a name";
};

console.log(data1());

let data2 = function(name) {
    return "Hello " + name + ", this is a function without a name";
};

console.log(data2("Alice"));

// Arrow function
let mult = () => {
    return "arrow func";
};

console.log(mult());

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 3));

// Callback function
function sece(callback) {
    console.log("Welcome to SECE");
    callback();
}

function stu() {
    console.log("This is a callback function");
}

sece(stu);

// WhatsApp Notification
function notification(name) {
    console.log("WhatsApp notification sent to " + name);
}

notification("Sajitha");
notification("sujin");
notification("Abhisheik");

// Promise
let fetch_api = new Promise((resolve, reject) => {
    let api = false;

    if (api) {
        resolve("Fetched API data");
    }
    else {
        reject("API data not fetched");
    }
});

fetch_api
    .then(data => console.log(data))
    .catch(error => console.log(error));

let fetch_api1 = new Promise((resolve, reject) => {
    let food = false;
    if (food) { 
        resolve("Fetched food data");
    }
    else {
        setTimeout(() => {
            reject("Food data not fetched");
        }, 1000);
    }
});

fetch_api1
    .then(data => console.log(data))
    .catch(error => console.log(error));