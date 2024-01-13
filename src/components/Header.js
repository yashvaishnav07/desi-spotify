import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const user = useSelector(store => store.user)
    return (
        <div className='flex flex-row justify-between items-center p-8 top-0 sticky transition-all ease-in-out bg-none'>
            <div className='bg-white w-1/3 rounded-full p-3 flex items-center'>
                <input className='w-full outline-none border-none' type="text" placeholder='What do you want to listen to?' />
            </div>
            <div className='flex flex-row space-x-5 rounded-full bg-black p-2 text-white w-1/12 items-center font-semibold'>
                <img src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png" alt='A' className='w-1/3'/>
                <a href="#">
                    <span>{user?.userInfo?.display_name}</span>
                </a>
            </div>
        </div>
    )
}

export default Header