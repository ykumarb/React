// // import Add from './Add';

// import { Data, Data1 } from "../App";

// const Greetings = () => {
//   return (
//     <>
//       <Data.Consumer>
//         {(name) => {
//           // return <h1>My name is: {name}</h1>
//           return (
//             <Data1.Consumer>
//               {(age) => {
//                 return (
//                   <>
//                     <h1>My name is: {name}</h1>
//                     <h2>My age is: {age}</h2>
//                   </>
//                 )
//               }}
//             </Data1.Consumer>
//           )
//         }}

//       </Data.Consumer>
//     </>
//   )
// }

// export default Greetings;

import { useContext } from "react";
import { Data, Data1 } from "../App";
const Greetings = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <>
      <h1> My name is: {name}</h1>
      <h2> My age is: {age}</h2>
    </>
  )
}

export default Greetings;