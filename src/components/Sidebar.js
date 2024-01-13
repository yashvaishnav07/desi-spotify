import React from 'react'
import { SPOTIFY_IMG_WHITE } from '../utils/Constants'
import Playlists from './Playlists'

const Sidebar = () => {
    return (
        <div className='bg-black text-slate-300 text-xl'>
            <div className='flex items-center justify-center py-3'>
                <img src={SPOTIFY_IMG_WHITE} alt="logo" className='w-3/4' />
            </div>
            <ul className='flex flex-col space-y-3 mx-10 my-10'>
                <li className='cursor-pointer transition ease-in-out hover:text-white'>
                    <span>Home</span>
                </li>
                <li className='cursor-pointer transition ease-in-out hover:text-white'>
                    <span>Search</span>
                </li>
                <li className='cursor-pointer transition ease-in-out hover:text-white'>
                    <span>Your Library</span>
                </li>
            </ul>
            <Playlists/>
        </div>
    )
}

export default Sidebar