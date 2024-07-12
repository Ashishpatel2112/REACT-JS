import React from 'react'
import { useState } from 'react'
import main from './Hoc'
function Person2({count , increment}) {
   
  return (
    <div>
      <h1>priya :-{count}</h1>
      <button onClick={increment}>incress</button>
    </div>
  )
}

export default main(Person2)
