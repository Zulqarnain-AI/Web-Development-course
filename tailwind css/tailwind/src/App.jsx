import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-black  text-white'>hello world...</h1>
      <div className='bg-green-400'>

      <p className='text-red-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni dolor  </p>
      
      <p className='text-red-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni dolor  </p>
      <p className='text-red-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni dolor  </p>
      <p className='text-red-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni dolor  </p>
      <p className='text-red-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni dolor  </p>
      <p className='text-red-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni dolor  </p>
      <p className='text-red-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni dolor  </p>
      <p className='text-red-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni dolor  </p>
      <p className='text-red-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni dolor  </p>
      </div>
      <div className='bg-green-400 w-24 '>hi</div>
      <span>hei</span>

    </>
  )
}

export default App
