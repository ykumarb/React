import React from 'react';
// import {Component} from 'react';

// -------------------------Components-----------------------------------
/*
COMPONENTS:
Components are independent and reusable bits of code.
They serve the same purpose as JavaScript functions, 
but work in isolation and return HTML via a render() function.

Types:
1. Class components
2. Functional components
*/

// /* Functional components */
// function App() {
//   return <h1>Hello Yupindra</h1>
// }

/* Class based components */
// class App extends React.Component {
//   // To show content on the screen.
//   render() {
//     return <h1>Hello Yupindra</h1>
//   }
// }

// -------------------------JSX-----------------------------------
/* jsx */

/*
Notes:
1. React can render HTML content. Writing HTML will
be taken care by React in converting to JS code using babel.

Using https://babeljs.io/ you can see the JS code for equivalent
HTML content. Which works same as HTML.

Some pointers:
1. Multiple tags should be wrapped in a single parent tag.
2. Have proper open/close tags. Closing tag is mandatory.
3. For HTML tag if you want to add a class, use className.
4. For HTML tag if you want to add for, use htmlFor.
*/

// function App() {
//   return (
//     <div>
//         <section>
//           <h1>This is the Section</h1>
//         </section>
//         <article>
//           <h2>This is the article</h2>
//         </article>
//     </div>  
//   )
// }

// -------------------------Render Multiple components-----------------------------------
// import Add from './components/Add';
// import Greetings from './components/Greetings'; 
// function App() {
//   return (
//     <section>
//       <Add/>
//       <Greetings/>;
//     </section>
//   ) 
// }

// -------------------------Fragements-----------------------------------

// import Add from './components/Add';
// import Greetings from './components/Greetings';
// import { Fragment } from 'react';
// function App() {

//   return (
//     <Fragment>
//       <Add/>
//       <Greetings/>;
//     </Fragment>
//   )

// }

// -------------------------Expressions in JSX-----------------------------------

// const myName = "Yupindra";
// const multiply = (a, b) => a * b;
// const specialClass = "simple-class";

// function App() {
//   return (
//     <>
//     {/* Rendering a variable value */}
//     <h1> Hello {myName} </h1>
//     {/* Rendering expressions */}
//     <p>2+2 = {2+2}</p>
//     {/* Rendering arrays */}
//     <p>Array: {["Yupindra", "Kumar", "Balaji"]}</p>
//     {/* Rendering Function values */}
//     <p>2*2= {multiply(2, 2)}</p>
//     {/* Rendering Classes */}
//     <p className={specialClass}>This is a special class</p>
//     </>
//   )
// }

//-------------------------Lists-----------------------------------

/*
Lists:
In react, you will render lists with some type of loop.
The Javascript map() array method is generally the preferred
method.
*/

/* Example 1 */
// function App() {
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <>
//     {/* Handle key prop through key in ul tag to avoid console error in browser*/}
//     {numbers.map((number) => (
//       <ul key={Math.random()}>
//         <li>{number}</li>
//       </ul>
//     ))}
//     </>
//   );
// }

/* Example 2 */
// function App() {
//   const userInfo = [
//   {
//     name: "Dhoni",
//     age: 25,
//     location: "Bangalore"
//   },
//   {
//     name: "Bravo",
//     age: 45,
//     location: "Bangalore"
//   },
//   {
//     name: "Alex",
//     age: 15,
//     location: "Bangalore"
//   },
// ]
//   return (
//     <>
//     {userInfo.map(user => (
//       <ul key={Math.random() * 10}>
//         <li>Name: {user.name}</li>
//         <li>Age: {user.age}</li>
//         <li>Location: {user.location}</li>
//       </ul>
//     ))}
//     </>
//   )
// }

// -------------------------Props/Properties-----------------------------------
/*
Props:
Props are arguments pssed into React components.
props are passed to components via HTML attributes.

Every parent component can pass props to its child components by giving them a  prop
you can pass any type of data through a prop — objects, arrays, functions from parent to child.
props are read-only.
*/


// import User from './components/Users';

// function App() {
//   return (
//     <>
//     <User
//       name="Yupindra"
//       img="https://avatars.githubusercontent.com/u/170880041?s=96&v=4"
//       age={18}
//       hobbies= {["Cricket", " ", "Football"]}
//     >
//       <p>This is the children of the User component</p>
//     </User>
//     </>
//   )
// }

// --------------------------conditional rendering-----------------------------------

/*
Conditional rendering:
Conditional rendering in React works the same way 
conditions work in JavaScript.
Use JavaScript operators like if or the conditional 
operator to create elements representing the current state,
and let React update the UI to match them.
*/

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// /* Returning the component based on the condition */
// const Password = ({validPassword}) => {
//   if(validPassword === "12345678") {
//     return <ValidPassword/> /* Return valid password component */
//   }
//   return validPassword === "12345678" ? <ValidPassword/> : <InvalidPassword/>
//   return <InvalidPassword/> /* Return invalid password component */
// }

// /* Main App component */
// function App() {
//   return(
//     <>
//       <Password
//       validPassword="12345678"
//       />
//     </>
//   )
// }

const Cart = () => {
  const items = ["Apple", "Banana", "Orange", "Grapes"];

  return (
    <>
    <h1>Cart 🛒</h1>
    {items.length > 0 && <h3>You have {items.length} items in your cart</h3>}
    <ul>
      <h4>👇 Products</h4>
      {items.map(item => (
        <li key={Math.random() * 10}>
          {item}
        </li>
      ))}
    </ul>
    </>
  );
};

function App() {
  return (
    <>
    <Cart/>
    </>
  );
};
export default App;
