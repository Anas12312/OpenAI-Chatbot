import React from 'react'
import Bot from './Message/Bot'
import You from './Message/You'

export default function Chat() {
  return (

    <div className='w-[60%] h-[75%] flex flex-col justify-start items-center overflow-y-auto'>
      <div className='text-4xl font-bold'>
        Welcome to AZ-ChatBot
      </div>

      <div className='mt-2 text-lg'>
        Your AI-powered copilot for the web
      </div>


      <div className='h-full w-full mt-14 px-7 pb-4'>

        <div className='w-full flex justify-start mb-5'>

          <div className='bg-blue-700 rounded-full h-10 w-10 mr-4'>

          </div>

          <div className='border border-gray-300 rounded-md max-w-[75%] min-h-14 break-words pr-9 p-3'>
            <p className='font-bold mb-4'>
              How can we help?
            </p>

            <p className='mb-2'>
              You can ask questions like:
            </p>

            <ul className='list-disc pl-8'>
              <li>What's Preline UI?</li>
              <li>How many Starter Pages & Examples are there?</li>
              <li>Is there a PRO version?</li>
            </ul>

          </div>

        </div>


        <You message={'how are you?'}/>

        <Bot message={'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'} />

        <You message={'how are you?'}/>

        <Bot message={'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'} />

      </div>


    </div>
  )
}
