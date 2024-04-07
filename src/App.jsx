import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <div
        className='bg-green-500 w-60 h-28 flex justify-center 
                  items-center rounded-lg text-lg text-black 
                  cursor-pointer hover:bg-green-600'
        onClick={() => {
          window.open("https://github.com/login/oauth/authorize?client_id=130852c3924615a25f6c", "_blank")
        }}
      >Github Authentication</div>
    </div>
  )
}

export default App
