// import readline from 'readline';

// prompt('Hello World!');
// prompt('What is your name?');
// var myName = readline;
// prompt('It is nice to meet you, ' + myName);
// prompt('The length of your name is:' + myName.length);
// prompt('What is your age?');
// var myAge = readline;
// prompt('You will be ' + (myAge + 1) + ' in a year.');

function myFunction() {
    let person = prompt("What is your name?", "👀");
    if (person == 'Christian') {
        document.getElementById("demo").innerHTML = "jajaja ese wey";
    } else {
        document.getElementById("demo").innerHTML = "Hello " + person + "! How are you today?";
    }
}