import React from 'react'

function Greet(props) {
  return (
    <div>
             <h1>Hello, {props.name}!</h1>
             <p>You are {props.age} years old.</p>
    </div>
  )
}

export default Greet
