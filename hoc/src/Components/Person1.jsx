import React from 'react'
import { useState } from 'react'
import main from './Hoc'
function Person1({count, increment}) {

  return (
    <div>
      <h1>radha:-{count}</h1>
      <button onClick={increment}>incress</button>
    </div>
  )
}

export default main(Person1)
