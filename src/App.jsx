import React, { useState } from 'react'

const App = () => {

  const [color, setColor] = useState()

// function changeColor(color){
// setColor(color)
// }


  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-full shadow-lg'>

  <button
  onClick = {() => setColor('red')}
   className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
    style={{backgroundColor:'red'}}>Red</button>

  <button
  onClick = {() => setColor('green')}
  
  className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'green'}}>Green </button>

  <button
  onClick = {() => setColor('yellow')}
  className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'yellow'}}>Yellow </button>

  <button
  onClick = {() => setColor('orange')}
  className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'orange'}}>Orange </button>

  <button
  onClick = {() => setColor('purple')}
  className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'purple'}}>Purple </button>

  <button
  onClick = {() => setColor('pink')}
  className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:'pink'}}>Pink </button>


</div>

      </div>
    </div>
  )
}

export default App