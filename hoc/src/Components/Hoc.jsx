import React from 'react'
import { useState } from 'react'
function main(Original) {
 function Hoc(){
    const [count, setCount] = useState(0)
    const increment =() => {
        setCount(count + 1)
    }
    return <Original increment={increment} count={count}/>
 }
 return Hoc;
}

export default main
