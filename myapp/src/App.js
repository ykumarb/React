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

// const Cart = () => {
//   const items = ["Apple", "Banana", "Orange", "Grapes"];

//   return (
//     <>
//     <h1>Cart 🛒</h1>
//     {items.length > 0 && <h3>You have {items.length} items in your cart</h3>}
//     <ul>
//       <h4>👇 Products</h4>
//       {items.map(item => (
//         <li key={Math.random() * 10}>
//           {item}
//         </li>
//       ))}
//     </ul>
//     </>
//   );
// };

// function App() {
//   return (
//     <>
//     <Cart/>
//     </>
//   );
// };

//-------------------------Style Component-----------------------------------


// function App() {

//   const differentStyles = {
//     color: "white",
//     backgroundColor: "crimson",
//     padding: "10px",
//     borderRadius: "10px"
//   }
//   return(
//     <>
//       {/* Inline styling */}
//       <h1 style={{color: "White", backgroundColor: "Crimson"}}>
//         This is Yupindra Kumar Balaji
//       </h1>
//       {/* External styling */}
//       <h1 style={{color: differentStyles.color, backgroundColor: differentStyles.backgroundColor, padding: differentStyles.padding, borderRadius: differentStyles.borderRadius}}>
//         This is Yupindra Kumar Balaji
//       </h1>
//       {/* External styling */}
//       <h1 style={{...differentStyles}}>
//         This is Yupindra Kumar Balaji
//       </h1>
//       {/* External styling */}
//       <h1 style={differentStyles}>
//         This is Yupindra Kumar Balaji
//       </h1>
//     </>
//   )
// }

// import "./index.css";
// function App() {
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   );
// }

// -------------------------React Bootstrap-----------------------------------

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavbarComponent() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// import Button from 'react-bootstrap/Button';

// function Buttons() {
//   return (
//     <>
//       <Button variant="outline-primary">Primary</Button>
//       <Button variant="outline-secondary">Secondary</Button>
//       <Button variant="outline-success">Success</Button>
//       <Button variant="outline-warning">Warning</Button>
//       <Button variant="outline-danger">Danger</Button>
//       <Button variant="outline-info">Info</Button>
//       <Button variant="outline-light">Light</Button>
//       <Button variant="outline-dark">Dark</Button>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <NavbarComponent/>
//     </>


//   )
// }

// -------------------------Tailwind CSS-----------------------------------

// function App() {
//   return (
//     <>
//       <h1 className="text-3xl font-bold underline">
//         Hello world!
//       </h1>
//     </>
//   );
// }

// -------------------------React Icons-----------------------------------

// import { BsFillCartCheckFill } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";

// function App() {
//   return(
//     <>
//      <BsFillCartCheckFill />
//      <FaGithub />
//     </>
//   );
// };

// -------------------------Events-----------------------------------
/* Button event listener */
// const Button = () => {

//   const handleClick = (a,b) => {
//       console.log(a+b);
//       alert("Clicked!!");
//   };

//   return <button onClick={() => handleClick(2,2)}>Click Me!</button>;
// };

// /* Copy event listener */
// const Copy = () => {

//   const copyHandler = () => {
//     alert("Don't steal!!");
//     console.log("Don't steal!!");
//   };

//   return (
//     <>
//       <p onCopy={copyHandler}>lorem is there!!!</p>
//     </>
//   )
// };

// /* Movie event listener */

// const Move = () => {

//   const moveHandler = () => {
//     //alert("Move!!");
//     console.log("Move!!");
//   };

//   return (
//     <>
//       <p onMouseMove={moveHandler}> Yupindra Kumar Balaji </p>
//     </>
//   )

// };


// function App() {
//   return (
//     <>
//       <Button />
//       <Copy />
//       <Move />
//     </>
//   )
// }

// export default App;

// -------------------------state-----------------------------------
/*
State is a built-in React object that allows us to
track and update the component's state. A component's state
can change over time, and when it changes, the component re-renders.

*/
//-------------------------React Hooks-----------------------------------

/* React hooks are a new addition in React 16.8.
They let you use state and other React features without writing a class.
*/

/* useState() -
The react useState hook allows us to track state in a 
function component. State generally refers to data or properties
that need to be tracking in an application.
*/

// import { useState } from "react";

// const Counter = () => {

//   const [count, setCount] = useState(0);

//   const  increment = () => {
//     setCount(count + 1);
//   }

//   const decrement = () => {
//     setCount(count - 1);
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </>
//   )
// }
// function App() {
//   const [friends, setFriends] = useState(["Yupindra", "Rajesh", "Raju"]);

//   const addOne = () => {
//     setFriends([...friends, "Raji"]);
//   }

//   const removeOne = () => {
//     setFriends(friends.filter((f) => f !== "Raju"));
//   }

//   const updateOne = () => {
//     setFriends(friends.map((f) => f === "Yupindra" ? "Yupindra Kumar" : f));
//   }

//   const [movie, setMovie] = useState({
//     title: "The Matrix",
//     director: "Wachowski"
//   });

//   const handleClick = () => {

//     const copyMovie = {
//       ...movie,
//       director: "Yupindra",
//     };

//     setMovie(copyMovie);
//   }

//   const [movies, setMovies] = useState([
//     {
//       title: "The Matrix",
//       director: "Wachowski"
//     },
//     {
//       title: "The Matrix Reloaded",
//       director: "Wachowski"
//     },
//     {
//       title: "The Matrix Revolutions",
//       director: "Wachowski"
//     }
//   ]);

//   const handleClicks = () => {
//     setMovies(movies.map((m) => m.title === "The Matrix" ? {...m, director: "Yupindra"} : m));
//   }
//   return (
//     <>
//     {/* <Counter /> */}
//     <h1>Friends</h1>
//       {friends.map((f) => (
//         <li key={Math.random()}>{f}</li>
//       ))}

//       <button onClick={addOne}>AddOne</button>
//       <button onClick={removeOne}>RemoveOne</button>
//       <button onClick={updateOne}>updateOne</button>

//       <h1>{movie.title}</h1>
//       <p>Ratings: {movie.director}</p>
//       <button onClick={handleClick}>Change Director</button>
      
//       <h1>Movies</h1>
//       {movies.map((m) => (
//         <li key={Math.random()}>{m.title}
//           <ul>{m.director}</ul>
//         </li>
//       ))}

//       <button onClick={handleClicks}> Change Director </button>
//     </>
//   );
// }

// export default App;

//-------------------------Forms--------------------------------------

import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted: ${username}`);
    setUsername("");
  };

  return (
    <>
      <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;