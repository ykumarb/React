const User = (props) => {
    return (
      <section>
        <img src={props.img} alt={props.name} />
        <h1> Name: {props.name}</h1>
        <h3> Age: {props.age}</h3>
        <h3> Hobbies: {props.hobbies}</h3>
      </section>
    )
  }


  export default User;