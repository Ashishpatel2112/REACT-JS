import React from 'react'

function Todo() {
    const [todo,settodo] = usestate('')
  return (
    <>
      <div className="hero h-[100vh] w-[100vw] border border-red-600 flex">
            <div className="todo  h-full w-[40%] border flex justify-center items-center">
                <div className="todoinp text-center h-[50%] w-[100%] border border-transparent rounded-full shadow-2xl">
                    <h1 className=' font-semibold text-4xl drop-shadow-2xl font-serif py-10'>YOUR TODO</h1>
                        <input type="text" placeholder='Add Your Todo' value={todo}  className='h-10 w-[80%] rounded-full text-center font-semibold font-mono '   />
                    
<button class="bookmarkBtn ms-[40%] mt-10 ">
  <span class="IconContainer">
    <svg viewBox="0 0 384 512" height="0.9em" class="icon">
      <path
        d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
      ></path>
    </svg>
  </span>
  <p class="text">ADD</p>
</button>
                </div>
            </div>
            <div className="todos h-full w-[60%] border flex ms-10  items-center justify-center">
                <div className="list h-[80%] w-[50%]  border border-gray-600 rounded-3xl text-center backdrop-blur-md  ">
                    <h1 className='text-3xl  font-semibold border-black border-b-8'>Todo-List</h1>

                </div>
            </div>
      </div>
    </>
  )
}

export default Todo
