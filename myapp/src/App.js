import React from 'react';
// import {Component} from 'react';

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
class App extends React.Component {
  // To show content on the screen.
  render() {
    return <h1>Hello Yupindra</h1>
  }
}

export default App;
