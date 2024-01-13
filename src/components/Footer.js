import React from 'react'
import CurrentTrack from './CurrentTrack'
import PlayTrack from './PlayTrack'
import Volume from './Volume'

const Footer = () => {
  return (
    <div className='flex justify-around bg-black text-white h-full border-t-2 border-t-gray-800 w-full'>
      <CurrentTrack />
      <PlayTrack />
      <Volume />
    </div>
  )
}

export default Footer