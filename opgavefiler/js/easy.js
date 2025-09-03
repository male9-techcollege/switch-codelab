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
    console.warn('opgave 1 og 2');
    /* din kode her.*/

    /* Course notes */
    console.log("Indtastning: "+myAnswerInputEx1ByMariePierreLessard.value);

    /* In parentheses, you can also put a variable that represents different DOM elements. Each case will represent which DOM element was clicked, for instance... 
    The exercise below with the numbers is just for the sake of the exercise, to make it simple. */
    switch (myAnswerInputEx1ByMariePierreLessard.value) {
        /* Course notes: another option:
        case myAnswerByMariePierreLessard = "1";
        The quotation marks are important because the input is a text input in the DOM. Without the quotation marks, the data type is integer.
        */
        case "1":
            // code block
            console.log("Du har valgt: 1.");
        break;    

        case "2":
            // code block
            console.log("Du har valgt: 2.");
        break;    

        case "3":
            // code block
            console.log("Du har valgt: 3.");
        break;    

        case "4":
            // code block
            console.log("Du har valgt: 4.");
        break;    

        case "5":
            // code block
            console.log("Du har valgt: 5.");
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
            alert("Din indtasting er forkert!");
    };

    showMessageByMariePierreLessard();
});

/* skriv evt en view funktion der viser om svaret er korrekt i myAnswerFeedbackElement, brug evt. innerHTML
Actually, the text of the assignment says: "skriv evt. en view funktion der kan vise teksten i elementet "myAnswerFeedbackElement"." */

// view function
function showMessageByMariePierreLessard(myMessage) {
    myMessage = "Du indtastede: "+myAnswerInputEx1ByMariePierreLessard.value; 
    myAnswerFeedbackElementEx1ByMariePierreLessard.innerHTML=`<p>${myMessage}</p>`;
};



// opgave 3 og 4
 myAnswerInputEx3ByMariePierreLessard = document.getElementById('answerTwo');
 myAnswerButtonEx3ByMariePierreLessard = document.getElementById('answerButtonTwo');

 myAnswerFeedbackElementEx3ByMariePierreLessard = document.getElementById('answerFeedbackTwo');

 myAnswerButtonEx3ByMariePierreLessard.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 3 og 4');
    /* din kode her.*/
});

/* din view function her */


// opgave 5
myAnswerInputEx5ByMariePierreLessard = document.getElementById('InputFive');
myAnswerButtonEx5ByMariePierreLessard = document.getElementById('answerButtonFive');

myAnswerFeedbackElementEx5ByMariePierreLessard = document.getElementById('answerFeedbackFive');

myAnswerButtonEx5ByMariePierreLessard.addEventListener('click', (event) => {
   event.preventDefault();

   console.warn('opgave 5');

   workDays(myAnswerInputEx5ByMariePierreLessard.value)
  
});


 /* din kode her.*/



/* din view function her */


