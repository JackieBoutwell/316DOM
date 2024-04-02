// FORM VALIDAATION
// is the process of ensuring that user input matches desired parameters before that input is handled by associated functions,
// and it can be achieved through either HTML tools or JavaScript interaction with the DOM.


// The required Attribute
// The required attribute is supported by text, search, url, tel, email, password,
//     date, month, week, time, datetime - local, number, checkbox, radio, and file < input > types,
//     along with the < select > and < textarea > form control elements.

// notice how the event listener does not fire if the text input's contents are blank.
// he required attribute prevents submission entirely, including the firing of the submit event.

// IN SCRIPT.JS
// const myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   alert(`You submitted:
//   ${myForm.querySelector("input").value}`);
// });

//INDEX.HTML
// <input type="text" required />


// MIN AND MAX ATTRIBUTE
// The minlength attribute defines the minimum number of characters(as UTF - 16 code units) the user can enter into an < input > or < textarea >.This must be an integer value of 0 or higher.
// If no minlength is specified, or an invalid value is specified, the input has no minimum length.
// The minlength value must be less than or equal to the value of maxlength; otherwise, the value will never be valid, as it is impossible to meet both criteria.
// The maxlength attribute defines the maximum number of characters(as UTF - 16 code units) the user can enter into an < input > or < textarea >.
// This must be an integer value of 0 or higher.

// EXAMPLES IN HTML

//TEXT LENGTH
// <input type="text" minlength="4" maxlength="10" required />
// DATE
//<input type="time" min="09:00:00" max="17:00:00" required />

// PATTERN ATTRIBUTE
// The final validation attribute, pattern, leads to the topic of regular expressions.
// The pattern attribute specifies a regular expression that the form control's value should match.
// If a non - null value does not conform to the constraints set by the pattern value, the ValidityState object's
// read - only patternMismatch property will be true, and the input will be rejected with an error message.
// Using the title attribute in conjunction with the pattern attribute will let you achieve a custom message to help
// users identify what is expected for the current input.Without a title attribute or the appropriate type attribute,
// your input requirements could be difficult to understand.

// REGULAR Expression
// Regular expressions(regex) are patterns used to match character combinations in strings.
// In JavaScript, regular expressions are also objects.
// These patterns are used with the exec() and test() methods of the RegExp object, and with the
//  match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.

// EXAMPLE
// "bob".match(/b/)
//  /b/.test("bob")

// They are composed of sets of characters and symbols that, when put in sequence, describe a specific pattern.

// REGULAR EXPRESSION AKA REGEZ FORM VALIDATION
// The "name" input element has a type attribute of "text" and a pattern attribute with a regular expression value of ^[a-zA-Z]+.

// ^ matches the beginning of the string, or the beginning of a line if the multiline flag is enabled.
// + matches the previous token ([a-zA-Z]) one or more times, as many times as possible.
// a-z matches a single character in the range between a (index 97) and z (index 122)
// (case sensitive), and A - Z handles the uppercase variations.

//JAVASCRIPT FORM VALIDATION

// We Must use the DOM
//Form and input events allow developers
// to work with and validate data in different contexts and
//at different times during the submission process.

//The <form> element and the <input> element have unique events that can be listened
//to and handled for a variety of validation and response options:
// input, change, submit

// input- element changes everytime the element changes.
// change- move the focus to another Input

