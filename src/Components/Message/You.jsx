import React from 'react'

export default function You({message}) {
  return (
    <div className='w-full flex justify-end mb-5'>

          <div className='bg-[#2563EB] rounded-xl max-w-[75%] min-h-14 break-words text-white p-3'>
            {message}
          </div>

          <div className='bg-[#4B5563] rounded-full h-10 w-10 ml-4'>

          </div>


        </div>
  )
}
