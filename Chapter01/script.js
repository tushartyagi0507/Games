
// const heading = document.querySelector(".root")
// heading.innerHTML = "<h1>Hello World</h1>"

// now again add heading this time by creating the h1 element 

// const Heading = document.createElement("h1")
// Heading.innerText = "Tushar Tyagi"
// heading.appendChild(Heading)


//Now lets write Hello World using React 
// React: This is just a Javascript library and we just have to include the CDN links in the script tag in 
// out HTML code to include the power of React JS in out web app 

// .createelement method takes three arguments first ( tagName, {} , "content" )
// the {} is used to give attributes to the tag like id,class etc.

const heading = React.createElement("h1",{id: "heading"},"Namaste React");

// this is the part of ReactDOM 
const root = ReactDOM.createRoot(document.querySelector(".root"));

// root.render(heading);
// render takes the object 'heading' and convert into HTML element and push it inside root 

// this heading is a JS object so if you do console of heading it will not be a HTML code it is object 
// there is something called props inside the object which has all the attributes and child inside it


/* Now lets discuss the nested HTML elements and how do we create it using react like the below 
   <div id="heading">
      <div id="child">
        <h1></h1>
      </div>
    </div>
*/

const parent = React.createElement("div",{id:"parent"}, 
React.createElement("div",{id:"child"},
React.createElement("h1",{},"TUSHAR TYAGI")
)
)
// NOTE: again this parent is a JS object with different properties using render we convert into HTML code

// If I wanted another H2 tag lets say as sibling of H1 inside chile then you would have to pass it as 
// the third argument inside the child along with H1 in the form of array as below 

// Example: React.createElement("div",{id: "child"}
            // [ React.createElement("h1",{},"TUSHAR TYAGI"),
            // React.createElement("h1",{},"I will make something big for sure") ]
// )

// we have already cretated the root using the ReactDOM so we will render it inside that 
root.render(parent);