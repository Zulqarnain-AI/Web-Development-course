import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from './img.jfif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-black  text-white'>hello world...</h1>
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
      <div className='bg-green-200 max-w-100 w-100'>hi there how are you!</div>
      <div className='bg-green-300 w-1/2'>hi there how are you!</div>
      <div className='bg-green-400 w-1/3'>hi there how are you!</div>
      <div className='bg-green-500 w-1/4'>hi there how are you!</div> */}

      {/* <div className=' bg-green-300 h-[50dvh]'>50% dinamic view port height</div>
      <div className="bg-red-300 h-full ">h-full</div>
      <div className="bg-green-300 h-9/10 ">h-9/10</div>
      <div className="bg-red-300 h-3/4">h-3/4</div>
      <div className="bg-green-300 h-1/2 ">h-1/2</div>
      <div className="bg-red-300 h-20 ">h-1/3</div> */}
      {/* <div className='h-screen'>
        <div className='bg-green-400 h-1/2'></div>
        <div className='bg-red-400 size-1/2'></div>
      </div> */}


      {/* Position class */}
      {/* <div className='bg-red-200 h-dvh '>
        <h1 className='bg-black text-white fixed z-5 w-full'>this is heading ok</h1>
      <div className='bg-red-400 h-1/2 border-2 relative top-10'>
      <div className='bg-green-400 size-1/4 absolute bottom-1 right-1 border-2'></div>
      <div className='bg-green-400 size-1/4 absolute top-1 right-1 border-2'></div>
      <div className='bg-green-400 size-1/4 absolute top-1 left-1 border-2'></div>
      <div className='bg-green-400 size-1/4 absolute bottom-1 left-1 border-2'></div>
      </div>

      <div className='bg-yellow-500 h-1/2 border-2 relative mt-20'>
      <div className='bg-green-400 size-1/4 absolute bottom-1 right-1 border-2'></div>
      <div className='bg-green-400 size-1/4 absolute top-1 right-1 border-2'></div>
      <div className='bg-green-400 size-1/4 absolute top-1 left-1 border-2'></div>
      <div className='bg-green-400 size-1/4 absolute bottom-1 left-1 border-2'></div>
      </div>

      <div className='bg-blue-600 h-1/2 border-2 relative mt-10'>

      <div className='bg-green-400 size-1/4 absolute bottom-1 right-1 border-2'></div>
      <div className='bg-green-400 size-1/4 absolute top-1 right-1 border-2'></div>
      <div className='bg-green-400 size-1/4 absolute top-1 left-1 border-2'></div>
      <div className='bg-green-400 size-1/4 absolute bottom-1 left-1 border-2'></div>
      </div>
      </div> */}

      {/* container */}
      {/* <div className='bg-green-300 h-screen'>
        <div className="bg-white container mx-auto text-3xl ">container</div>
      </div> */}

      {/* background class */}
      {/* <div className='h-30 bg-red-200  ' style={{ backgroundImage: `url(${img}) ` }}>
        helllo..

      </div> */}
      {/* <img src={img} alt="image is loading..." className='m-0' /> */}
      {/* <div className='size-50 gradient bg-gradient-to-b to-blue-500 from-red-500'>hi</div> */}
      {/* <div className='size-50 gradient bg-gradient-to-t to-green-900 from-red-300'></div> */}
      {/* <div className='flex flex-wrap'>
        
        <img src={img} alt="" className='blur-[1.5px] rounded-[15px]'/>
        <img src={img} alt="" className='blur-sm'/>
        <img src={img} alt="" className='blur-md'/>
        <img src={img} alt="" className='blur-3xl'/>
        <img src={img} alt="" className='blur-lg'/>
        
        <img src={img} alt="" className='brightness-50'/>
        <img src={img} alt="" className='brightness-100'/>
        <img src={img} alt="" className='brightness-125'/>
        <img src={img} alt="" className='brightness-200'/>

        <img src={img} alt="" className='contrast-50'/>
        <img src={img} alt="" className='contrast-100'/>
        <img src={img} alt="" className='contrast-125'/>
        <img src={img} alt="" className='contrast-200'/>

      </div> */}

    </>
  )
}

export default App
