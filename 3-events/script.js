// An Event Listener
// is a call back function.

// an event handler...
// function handleClick() {
    // do something in response to nthe event happening
// }

// REGISITERING EVENT LISTENERS
//  THERE ARE THREE DIFFERENT APPROACHES FOR REGISTERING AN EVENT LISTERNER TO DOM ELEMENT.
//  in html(inline) <botton id ="reset-btn" onclick="reset()">     typically frowned upon.

// assigning to the DOM elements propertires: resetBtn.onclick =reset; this is better does not have to be global scope.

// Calling addEventListener() on a DOM element.
// This option is considered best practice, because it has the flexibility of adding multiple listener functions to a single element!

// The addEventListener Method
//  the syntax for registering an event listener for a given event is
// Element.addEventListener(<event-name>,<callback>, <use-capture>);

// Caching DOM Elements
    const cList = document.getElementById("commentList");
    const cInput = document.getElementById("commentInput");
    const cBtn = document.getElementById("addCommentBtn");
 

    // click is the event
// call back functions is the add comment.
// register a click event on the button
    
cBtn.addEventListener("click", addComment);

//  we are adding a event handler named addComment()  or we could have used... function handleClick(){}

// Read and cache the value of the input element.
// Add the value to the comment list element.
// Clear the input element.
// Focus the input element.

function addComment() {
    console.log("in callback");
    let value = cInput.value;

    // prevent the user from inputting empty comments.
    if (value === "") {
        return;
    }

    // select the comment lst element (done)
    // create an li element
    let comment = document.createElement("li");
    //  give the li the value from the input
    comment.textContent = value;
    //  add the lu to the comment list (ul)
    cList.appendChild(comment);
    // clear the input value 
    cInput.value = "";
    // focus the input element
    cInput.focus();
}

// console.log(cInput);

// now we have to add an event listener to the function/button  and listen for the "click" event.
// Once you have done so, the program should work as intended! shown on line 27.

// EVENT OBJECT
// The event object contains special information about the event that fired,
// which means its structure can change depending on the event that it originated from.
 
// function addComment(event) {  also known as e or evt or ev

// The addComment function responds to a PointerEvent, which is just one of many event types.
// Within the event object's properties, there is a lot of information. Of special interest are the following:

// The type property, which holds the event type ("click" in this case).
// Various ...X and ...Y coordinates that show where the event occurred in reference to the screen, browser, page, and element.
// The target property, which holds a reference to the DOM element that triggered (dispatched) the event.

// Additionally, the JavaScript this keyword inside of the listener function will be set to the DOM element that addEventListener was called on,
// for added convenience.

// the "this" has to have a function declaration. usually object and depends on the context you use it.... usually is tied to the element that is added to  addEventListener
//  an element is an object example. cBtn.addEventListener("click", addComment); and this would be the this.... this.style.border: "3px,black"


//  THE EVENT OJECT
//  USING THESE PROPERTIES, YOU CAN CREAT ANY NUMBER OF PRACTIAL OR INTERESTING USER INTERCATIONS.
// EXPLORE CODE BELOW AND UNCOMMENT.


// const app = document.getElementById("app");

// // Create the initial circle to be attached to the mouse.
// const mouseCircle = createCircle();
// app.appendChild(mouseCircle);

// // Helper function for making circles.
// function createCircle() {
//   const circle = document.createElement("div");
//   circle.classList.add("circle");
//   newColors(circle);
//   return circle;
// }

// // Helper function for placing circles.
// function placeCircle(circle) {
//   const copy = circle.cloneNode(true);
//   app.appendChild(copy);
// }

// // Helper function for generating new colors.
// function newColors(circle) {
//   circle.style.backgroundColor = `rgba(${Math.round(
//     Math.random() * 255
//   )}, ${Math.round(Math.random() * 255)}, ${Math.round(
//     Math.random() * 255
//   )}, 255)`;
// }

// // Place the mouse circle at the current location,
// // and switch the circle to a new color.
// function handleClick() {
//   placeCircle(mouseCircle);
//   newColors(mouseCircle);
// }

// // Create a "painting" effect with pointerdown
// // and pointerup. Cache the interval for cancelling.
// let paintInterval;
// function handleStart() {
//   paintInterval = setInterval(() => placeCircle(mouseCircle), 10);
// }
// function handleEnd() {
//   clearInterval(paintInterval);
//   setTimeout(() => newColors(mouseCircle), 0);
// }

// // Moves the mouse circle alongside the mouse.
// function handleMove(e) {
//   mouseCircle.style.top = e.y - 25 + "px";
//   mouseCircle.style.left = e.x - 25 + "px";
// }

// // Register events!
// app.addEventListener("click", handleClick);
// app.addEventListener("pointerdown", handleStart);
// app.addEventListener("pointerup", handleEnd);
// app.addEventListener("pointermove", handleMove);

// REMOVING EVENT LISTENERS

// cBtn.removeEventListener("click", handleClick);

//  add event listener is a method

// EVENTFLOW

//  EVENT BUBBLING

//  WHEN THE BUTTON IS PRESSED... it also triggers the div,html,and body

// JAVASCRIPT CoDE

// // Using anonymous functions to register event listeners
// on each of the elements we're interested in.

// // The button.
// document.getElementById("myBtn").addEventListener("click", () => {
//   console.log("Clicked the button!");
// });

// // The div containing the button.
// document.querySelector("#myDiv").addEventListener("click", () => {
//   console.log("Clicked the containing div!");
// });

// // The document body (containing the div).
// document.body.addEventListener("click", () => {
//   console.log("Clicked the body!");
// });

// // The document HTML element (containing the body).
// document.documentElement.addEventListener("click", () => {
//   console.log("Clicked the HTML element!");
// });

// // The document itself.
// document.addEventListener("click", () => {
//   console.log("Clicked the document!");
// });

// HTML CoDE

// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Event Bubbling</title>
//     <meta charset="UTF-8" />
//     <link rel="stylesheet" href="src/styles.css" />
//   </head>

//   <body>
//     <h1>Event Bubbling</h1>
//     <div id="myDiv">
//       Click the button below, and inspect the console output. Then, try clicking
//       elsewhere and see what the results are.

//       <br /><br />

//       <button id="myBtn" type="button">Click me!</button>
//     </div>

//     <script src="src/index.js"></script>
//   </body>
// </html>

// Event delegation
// is the prcoess by which a single event listener can handle an event across many elements.
// single event listener that can respond to events triggered by any of its descendants.

// example
// select the parent element and then effect the target element.

                    // Registering an anonymous event listener to the
                    // list of comments.
// cList.addEventListener("click", (e) => {
                    // Using the event object's "target" property
                    // to apply styling to the *actual* element
                    // that fired the event!
//   e.target.classList.toggle("strikethrough");
// });

// example
// Also create a div box with decendeence div boxes


// STOPPING EVENT PROPAGATION
//   is a method of the event object that will prevent it from bubbling up into any additional elements.
// In order to fix this, we need to add stopPropagation() calls to each event handler,
// and create one for the input element to stop it from firing a click event on the body as well.
//EXAMPLE

            // // Registering an anonymous event listener to the
            // list of comments.
// cList.addEventListener("click", (e) => {
//   e.stopPropagation();
            // Using the event object's "target" property
            // to apply styling to the *actual* element
            // that fired the event!
//   e.target.classList.toggle("strikethrough");
// });

// EVENT CAPTURING
// You can also reverse the process of event bubbling, which is called event capturing