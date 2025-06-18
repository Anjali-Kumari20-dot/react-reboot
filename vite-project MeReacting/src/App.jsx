import React, { use, useState } from 'react'

const App = () => {
  
  //  variable declaration in react
  const [name, setName] = useState("Anjali");

  let [num , setNum] = useState(0);

  const changeUser = () => setName("Rupali");

  return (
    <div>
      <h1>Username is {name}</h1>
      <button onClick={changeUser} >Change user</button>
      <h1>{num}</h1>
      <button onClick={() => setNum(num++)}>Increment</button>
      <button onClick={() => setNum(num--)}>Decrement</button>
    </div>
  )
}

export default App