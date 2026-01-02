import React from 'react'
import starImg from '../assets/star.png'
import { useNavigate } from 'react-router-dom'

function Online() {
    const navigate = useNavigate();

    return (
        <div className='bg-midnight h-screen flex justify-center items-center'>
            <div className='-translate-y-20 flex'>
                <img src={starImg} alt="star" className='h-4 -translate-y-2 mr-1' />
                <div className='text-center flex justify-center gap-2 font-cosmicrelief text-sm'>
                    <button className='bg-evening/50 text-daylight w-30 cursor-pointer p-1' onClick={() => navigate('/online/create')}>
                        Create
                    </button>
                    <button className='bg-evening/50 text-daylight w-30 cursor-pointer p-1' onClick={() => navigate('/online/join')}>
                        Join
                    </button>
                </div>
                <img src={starImg} alt="star" className='h-4 translate-y-5 ml-1' />
            </div>
        </div>
    )
}

export default Online