import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h2",{id:"heading"}, "I am learning React");
const root = ReactDOM.createRoot(document.querySelector(".root"));

// JSX > JS syntax which is easy to creat React element 
// JSX is not HTML, it is diff from HTML it is just like HTML or XML like syntax 

const jsxHeading = <h1 id="jsxHeading">this is JSX </h1>
/* the above line is not a proper JS code and this cannot be understood by the JS engine but still we see 
 in console is bcz of parcel (which transpilled(that means coverted into which JS enginer can understand)
 before it reaches the JS) and Parcel does it using module which is node_module called "Babel"*/

root.render(jsxHeading);    
console.log(jsxHeading)  // this JSX is also a JS object

//NOTE: here jsxHeading is also an object and would console the same as heading object 


    /*  React Component :

    Eg: const Heading = ()=>{
        return <h1>..</h1>;
    }
NOTE:>> try to understand this syntax we have not used braces and niether return keyword bcz this function 
shall return the JSX code which is written and that is wrapped inside () as it is a multi line JSX code */

//  const Heading = ()=>(   // first capital letter should be capital 
//         <div className="container">                            
//             <h1 id="heading">This is a functional component</h1>
//         </div>
//     )

// if you want to render the functional component inside the root then you cannot just do 
// root.render(Heading)
// you have to let the Babale know that this is a functional component and not normal React element 

// root.render(<Heading/>)  // this will render the Heading (functional component inside your React root)

// how to put component inside the other component which is also called component composition 

const Title = ()=> (
<h1>This is the Title </h1>
);

// now you can just write this title inside the Heading funcitonal component like below I am commenting it 
// else it would throw error because we have already used the Heading before 

// Also if you put {} inside JSX code then you run any JS code inside those {}
// using this concept you can put a React element inside the JSX code 

const name = <h3>Tushar Tyagi</h3> // I have taken one React element(JSX) for example

const HeadingComponent = ()=>(
    <div class="main">
        <Title></Title>
        <Title/>
        {Title()}
        {name}
    <h1 id="para">This is H1 inside the functional component</h1>
</div>
);

root.render(<HeadingComponent/>) 

 //or  
// root.render(<Heading></Heading>) 
// or since Heading is at the end of the day it is a JS function so you can also 
        