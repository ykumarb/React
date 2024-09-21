import Add from './Add';
const Greetings = ({name}) => {
  console.log(`Greetings ${name}`);
  return (
    <Add name={name} />
    // <div>Greetings Component</div>
  )
}

export default Greetings