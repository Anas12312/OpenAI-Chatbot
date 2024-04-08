import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Chat from './Components/Chat'
import Input from './Components/Input'

function App() {

  return (
    <div className='w-screen h-screen bg-white flex flex-col justify-center items-center text-black overflow-hidden'>
      <Chat />
      <Input />
    </div>
  )
}

export default App
