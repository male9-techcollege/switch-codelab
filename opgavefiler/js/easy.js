/* InputOne, not inputOne! These things are case-sensitive! */
let myAnswerInputEx1ByMariePierreLessard = document.getElementById('InputOne');
let myAnswerButtonEx1ByMariePierreLessard = document.getElementById('answerButtonOne');
/* This is a heading element, not a div! */
let myAnswerFeedbackElementEx1ByMariePierreLessard = document.getElementById('answerFeedbackOne');

/* The following variable does not work. If I want to get the value out of the input, I have to use the variable for the input followed by .value!
let myAnswerByMariePierreLessard = myAnswerInputEx1ByMariePierreLessard.value;
*/

// opgaver 1 og 2

myAnswerButtonEx1ByMariePierreLessard.addEventListener('click', (event) => {
    event.preventDefault();
    // "The warn() method writes a warning to the console." https://www.w3schools.com/jsref/met_console_warn.asp
    console.warn('opgaver 1 og 2');
    /* din kode her.*/

    /* Course notes */
    console.log("Indtastning: "+myAnswerInputEx1ByMariePierreLessard.value);

    /* In parentheses, you can also put a parameter that represents different DOM elements. Each case will represent the DOM element on which the user clicked, for instance... 
    In JS: 
    - function functionName(parameterForElement) {... IF I REMEMBER PROPERLY, see exercise 5: switch (parameterForElement) {... case input: ...}; ...};
    In DOM: 
    - event listener of input: onclick="functionName(input)"
    - event listener of Save button: onclick="functionName(save)"
    - event listener of Delete button: onclick="functionName(delete)"
    - event listener of Cancel button: onclick="functionName(cancel)"
    The exercise below with the numbers is just for the sake of the exercise, to make it simple. */
    switch (myAnswerInputEx1ByMariePierreLessard.value) {
        /* Course notes: another option:
        case variableName = "1";
        The quotation marks are important because the input is a text input in the DOM. Without the quotation marks, the data type is integer.
        */
        case "1":
            // code block
            console.log("Du har valgt: 1.");
            showMessageEx1ByMariePierreLessard();
        break;    

        case "2":
            // code block
            console.log("Du har valgt: 2.");
            showMessageEx1ByMariePierreLessard();
        break;    

        case "3":
            // code block
            console.log("Du har valgt: 3.");
            showMessageEx1ByMariePierreLessard();
        break;    

        case "4":
            // code block
            console.log("Du har valgt: 4.");
            showMessageEx1ByMariePierreLessard();
        break;    

        case "5":
            // code block
            console.log("Du har valgt: 5.");
            showMessageEx1ByMariePierreLessard();
        break;    

        /* The following is based on the solution suggested by Noitidart at https://stackoverflow.com/questions/5464362/javascript-using-a-condition-in-switch-case 
        It doesn't quite work, and Bo said that it is a bit too difficult, so I shouldn't bother with that. He also recommended to use if for that sort of case.
        case myAnswerByMariePierreLessard && (myAnswerByMariePierreLessard > 0 && myAnswerByMariePierreLessard < 6):
            console.log("Dit svar er mellem 1 og 5.");
        break;

        case myAnswerByMariePierreLessard && !(myAnswerByMariePierreLessard > 0 && myAnswerByMariePierreLessard < 6):
            console.log("Dit svar er ikke mellem 1 og 5.");
            break;
        */

        default:
            console.log("Du har valgt et tal, som ikke er mellem 1 og 5.");
            // alert("Din indtasting er forkert!");
            showErrorMsgEx1ByMariePierreLessard();
    };
});

/* skriv evt en view funktion der viser om svaret er korrekt i myAnswerFeedbackElement, brug evt. innerHTML
Actually, the text of the assignment says: "skriv evt. en view funktion der kan vise teksten i elementet "myAnswerFeedbackElement"." */

// view function
function showMessageEx1ByMariePierreLessard(myMessage) {
    myMessage = "Du har valgt: "+myAnswerInputEx1ByMariePierreLessard.value+"."; 
    myAnswerFeedbackElementEx1ByMariePierreLessard.innerHTML=`<p>${myMessage}</p>`;
};

function showErrorMsgEx1ByMariePierreLessard(myError) {
    myError = "Du har valgt: "+myAnswerInputEx1ByMariePierreLessard.value+". Tallet er ikke tilladt."; 
    myAnswerFeedbackElementEx1ByMariePierreLessard.innerHTML=`<p>${myError}</p>`;
};
// Exercises 1 and 2 checked

// opgave 3 og 4
myAnswerInputEx3ByMariePierreLessard = document.getElementById('InputTwo');
myAnswerButtonEx3ByMariePierreLessard = document.getElementById('answerButtonTwo');

myAnswerFeedbackElementEx3ByMariePierreLessard = document.getElementById('answerFeedbackTwo');

let month = "";

myAnswerButtonEx3ByMariePierreLessard.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgaver 3 og 4');
    /* din kode her.*/

    switch (myAnswerInputEx3ByMariePierreLessard.value) {

        case "1":
            // code block
            month = "Januar";
            console.log("1 for januar");
            showMessageEx3ByMariePierreLessard();
        break;    

        case "2":
            // code block
            month = "Februar";
            console.log("2 for februar");
            showMessageEx3ByMariePierreLessard();
        break;    

        case "3":
            // code block
            month = "Marts";
            console.log("3 for marts");
            showMessageEx3ByMariePierreLessard();
        break;    

        case "4":
            // code block
            month = "April";
            console.log("4 for april");
            showMessageEx3ByMariePierreLessard();
        break;    

        case "5":
            // code block
            month = "Maj";
            console.log("5 for maj");
            showMessageEx3ByMariePierreLessard();
        break;    

        case "6":
            // code block
            month = "Juni";
            console.log("6 for juni");
            showMessageEx3ByMariePierreLessard();
        break;    

        case "7":
            // code block
            month = "Juli";
            console.log("7 for juli");
            showMessageEx3ByMariePierreLessard();
        break;    

        case "8":
            // code block
            month = "August";
            console.log("8 for august");
            showMessageEx3ByMariePierreLessard();
        break;    

        case "9":
            // code block
            month = "September";
            console.log("9 for september");
            showMessageEx3ByMariePierreLessard();
        break;    

        case "10":
            // code block
            month = "October";
            console.log("10 for oktober");
            showMessageEx3ByMariePierreLessard();
        break;


        case "11":
            // code block
            month = "November";
            console.log("11 for november");
            showMessageEx3ByMariePierreLessard();
        break;


        case "12":
            // code block
            month = "December";
            console.log("12 for december");
            showMessageEx3ByMariePierreLessard();
        break;

        default:
            console.log("Du har valgt et tal, som ikke er mellem 1 og 12.");
            showErrorMsgEx3ByMariePierreLessard();
    };
});

/* din view function her */
function showMessageEx3ByMariePierreLessard(myMessage) {
    myMessage = month+" er den "+myAnswerInputEx3ByMariePierreLessard.value+". måned af året."; 
    myAnswerFeedbackElementEx3ByMariePierreLessard.innerHTML=`<p>${myMessage}</p>`;
};

function showErrorMsgEx3ByMariePierreLessard(myError) {
    myError = "Du har valgt: "+myAnswerInputEx3ByMariePierreLessard.value+". Tallet svarer ikke til en måned."; 
    myAnswerFeedbackElementEx3ByMariePierreLessard.innerHTML=`<p>${myError}</p>`;
};
// Exercises 3 and 4 checked


// opgave 5
myAnswerInputEx5ByMariePierreLessard = document.getElementById('InputFive');
myAnswerButtonEx5ByMariePierreLessard = document.getElementById('answerButtonFive');

myAnswerFeedbackElementEx5ByMariePierreLessard = document.getElementById('answerFeedbackFive');

let dayOfWeek = "";

myAnswerButtonEx5ByMariePierreLessard.addEventListener('click', (event) => {
   event.preventDefault();

   console.warn('opgave 5');

   workDaysByMariePierreLessard(myAnswerInputEx5ByMariePierreLessard.value);
  
});

/* din kode her.*/

function workDaysByMariePierreLessard(dayofweek) {
    switch (dayofweek) {

        case "mandag":
            // code block
            dayOfWeek = "hverdag";
            console.log("Mandag er en hverdag.");
            showMessageEx5ByMariePierreLessard();
        break; 

        case "Mandag":
            // code block
            dayOfWeek = "hverdag";
            console.log("Mandag er en hverdag.");
            showMessageEx5ByMariePierreLessard();
        break; 

        case "tirsdag":
            // code block
            dayOfWeek = "hverdag";
            console.log("Tirsdag er en hverdag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "Tirsdag":
            // code block
            dayOfWeek = "hverdag";
            console.log("Tirsdag er en hverdag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "onsdag":
            // code block
            dayOfWeek = "hverdag";
            console.log("Onsdag er en hverdag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "Onsdag":
            // code block
            dayOfWeek = "hverdag";
            console.log("Onsdag er en hverdag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "torsdag":
            // code block
            dayOfWeek = "hverdag";
            console.log("Torsdag er en hverdag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "Torsdag":
            // code block
            dayOfWeek = "hverdag";
            console.log("Torsdag er en hverdag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "fredag":
            // code block
            dayOfWeek = "hverdag";
            console.log("Fredag er en hverdag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "Fredag":
            // code block
            dayOfWeek = "hverdag";
            console.log("Fredag er en hverdag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "lørdag":
            // code block
            dayOfWeek = "weekenddag";
            console.log("Lørdag er en weekenddag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "Lørdag":
            // code block
            dayOfWeek = "weekenddag";
            console.log("Lørdag er en weekenddag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "søndag":
            // code block
            dayOfWeek = "weekenddag";
            console.log("Søndag er en weekenddag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        case "Søndag":
            // code block
            dayOfWeek = "weekenddag";
            console.log("Søndag er en weekenddag.");
            showMessageEx5ByMariePierreLessard();
        break;    

        default:
            console.log("Indtastningen er ikke en ugedag.");
            showErrorMsgEx5ByMariePierreLessard();
    };
};

/* din view function her */
function showMessageEx5ByMariePierreLessard(myMessage) {
    myMessage = "Din indtastning, "+myAnswerInputEx5ByMariePierreLessard.value+", er en "+dayOfWeek+"."; 
    myAnswerFeedbackElementEx5ByMariePierreLessard.innerHTML=`<p>${myMessage}</p>`;
};

function showErrorMsgEx5ByMariePierreLessard(myError) {
    myError = "Din indtastning, "+myAnswerInputEx5ByMariePierreLessard.value+", svarer ikke til en ugedag."; 
    myAnswerFeedbackElementEx5ByMariePierreLessard.innerHTML=`<p>${myError}</p>`;
};
/* Exercise 5 checked */