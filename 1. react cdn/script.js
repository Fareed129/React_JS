// injecting html element using js
/*
let h1= document.createElement("h1");
h1.innerHTML= "heading using js";

//select root el:
let rootEl= document.getElementById("root")
rootEl.appendChild(h1);

*/

import React from "react";


// Injecting using react:

/*
let h1= React.createElement("h1", null, "heading using react")
let rootEl= document.getElementById("root")
ReactDOM.render(h1, rootEl)

*/


// Injecting a h1 inside a div:

/*
let rootEl= document.getElementById("root")
let div= React.createElement("div", null, 
    React.createElement("h1", null, "h1 using react inside div")
)
ReactDOM.render(div, rootEl)

*/

// Now this thing will be very confusing to tackle this problem we use jsx:

/*
let jsx= <h1>this is h1 using jsx</h1>;
ReactDOM(jsx, document.getElementById("root"))

*/ 
// Now This thing not work because js does not understand html elements, that's why we need a tool called Babel which converts jsx -> js (Vanilla js)
// Babel--> Compiler--converts--jsx---js


