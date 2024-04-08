import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Input() {
    return (
        <div className='w-[60%] h-[25%] border-t absolute bottom-0 py-5'>
            <div className='w-full flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-3' src="../../icons/plus.png" alt="" />
                    <div className='ml-2 text-sm font-semibold hover:text-primary cursor-pointer'>New chat</div>
                </div>
                <div className='w-[8rem] h-[2rem] flex justify-center items-center border rounded-lg cursor-pointer hover:bg-gray-50'>
                    <div className='text-xs font-semibold'><span className='mr-1'>&#x25A0;</span> Stop generating</div>
                </div>
            </div>
            <div className='relative flex justify-center'>
                <textarea
                    placeholder='Ask me anything...'
                    className='w-full mt-3 border rounded-lg text-sm pl-4 pt-4 focus:border-primary foucs:border-2'
                    name="input"
                    rows="4" />
                <div className='absolute bottom-2 w-[98%] flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img className='w-4 mr-4 ml-2 cursor-pointer' src="../../icons/check.png" alt="" onMouseOver={(e) => {e.currentTarget.src = "../../icons/check-hover.png"}} onMouseOut={(e) => e.currentTarget.src = "../../icons/check.png"}/>
                        <img className='w-4 cursor-pointer' src="../../icons/attach.png" alt="" onMouseOver={(e) => {e.currentTarget.src = "../../icons/attach-hover.png"}} onMouseOut={(e) => e.currentTarget.src = "../../icons/attach.png"}/>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-4 mr-4 cursor-pointer' src="../../icons/mic.png" alt="" />
                        <div className='bg-primary flex justify-center items-center w-8 h-8 rounded-md hover:bg-primary-hover cursor-pointer'>
                            <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
