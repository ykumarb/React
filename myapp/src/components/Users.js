const User = ({name, img, age, hobbies, children}) => {
    return (
      <section>
        <img src={img} alt={name} />
        <h1> Name: {name}</h1>
        <h3> Age: {age}</h3>
        <h3> Hobbies: {hobbies}</h3>
        {children}
      </section>
    )
  }


  export default User;