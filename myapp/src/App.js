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

import Add from './components/Add';
import Greetings from './components/Greetings';
import { Fragment } from 'react';
function App() {

  return (
    <Fragment>
      <Add/>
      <Greetings/>;
    </Fragment>
  )

}


export default App;
