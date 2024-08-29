import React from 'react'
import Greet from './components/Greet'
function App() {
  return (
    <div>
    <Greet name="John" age={30} />
    <Greet name="Jane" age={25} />
</div>
  )
}

export default App
