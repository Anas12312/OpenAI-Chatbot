import React from 'react'

export default function Bot({message}) {
    return (
        <div className='w-full flex justify-start mb-5'>

            <div className='bg-blue-700 rounded-full h-10 w-10 mr-4'>

            </div>

            <div className='border border-gray-300 rounded-md max-w-[75%] min-h-14 break-words pr-9 p-3'>
                {message}
            </div>

        </div>
    )
}
