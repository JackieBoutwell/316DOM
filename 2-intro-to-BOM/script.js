// PART ONE BROWSER OBJECT MODEL

// Window object provides access to the method in the BOM either directly or indirectly.
// This is the root object  that is represented in the browers window.
//  all gloabal JavaScript objects functions variables also automatically become members of the window object.

// in console window try some out. window.location, window.closed,window.innerHeight.

// The basic function of the window object is to get information about and modify the actual browsing window. To do so, it allows us access to many properties and methods

// name= name of window
// parent = reference to the window that the current window came from
// there is also.. window.top, window.screenY, window.screenX, windowpageYOffset, window.alert();, window.prompt();, window.confirm();,window.open(),window.focus()
// blur(),close(),print(),scroll(),stop()
// try these in inspec mode  in the console.

// EXAMPLE

// let myWindow;

// function newWindow() {
//   myWindow = window.open(
//     "https://perscholas.org/",
//     "perscholas",
//     "width=800, height=400, resizable=yes, scrollbars=yes, location=yes"
//   );
//   myWindow.focus();
// }

// // Note that the close() method can only
// // affect windows created by the open() method.
// // You cannot close the current browsing window
// // using this method, for example.
// function closeWindow() {
//   myWindow.close();
// }

// // A sneak peek at event handling!
// // This will be covered in depth during a future lesson.
// document.getElementById("openWindowBtn").addEventListener("click", newWindow);
// document
//   .getElementById("closeWindowBtn")
//   .addEventListener("click", closeWindow);

// lOCATION OBJECT PROPERTIES..
// hash,host,hostname,href,pathname,port,protocol,search --- this is how you write it.... window.location.protocol

// SCREEN OBJECT
// width and height color and depth of pixels this can be used with the window  object methods to set the size and postiion.
// a few are screen.availHeight,screen.availWidth,screen.colorDepth,screen.height,screen.width

// EXAMPLE
// import "./styles.css";

// Get information about the user's screen.
// We'll use this information below to create
// a new window that is 75% of the user's screen,
// and place it centered on their screen.
// let availH = window.screen.availHeight;
// let availW = window.screen.availWidth;

// let myWindow;

// function newWindow() {
//   myWindow = window.open(
//     "https://perscholas.org/",
//     "perscholas",
//     `width=${availW * 0.75}, height=${availH * 0.75}, left=${
//       availW * 0.125
//     }, top=${availH * 0.125}, resizable=yes, scrollbars=yes, location=yes`
//   );
//   myWindow.focus();
// }

// function closeWindow() {
//   myWindow.close();
// }

// A sneak peek at event handling!
// This will be covered in depth during a future lesson.
// document.getElementById("openWindowBtn").addEventListener("click", newWindow);
// document
//   .getElementById("closeWindowBtn")
//   .addEventListener("click", closeWindow);

// THE HISTORY OBJECT
// Contains the prrvious browers history
// back(), froward(),go(<index>), length, pushState(<state>,<title>,<url>), replace(<state>,<title>,<url>), state.

// EXAMPLE

// View the current state (which will start as null).
// Notice how none of the URL information
// is NOT included in this state object.
// console.log(window.history.state);

// In order for this example to work, you'll
// need to navigate to https://sxwyw7.csb.app/
// from a browser window that has already been
// visiting other pages.
// const myBtn = document.getElementById("myBtn");
// if (myBtn)
//   myBtn.addEventListener("click", () => {
//     window.history.back();
//   });

// NAVIGATOR OBJECT
//  the navigator object has properties realted to the broswer being used to view a webpage.
// appCodeName, appName, appVersion, mimeTypes, platfroms, userAgent, plugins

// EXAMPLE

// const app = document.getElementById("app");

// const uaData = window.navigator.userAgent;

// Let's use some DOM manipulation to
// create a new structure for holding
// the userAgent data:
// const list = (app
//   .appendChild(document.createElement("ul"))
//   .appendChild(document.createElement("li")).textContent = uaData);
