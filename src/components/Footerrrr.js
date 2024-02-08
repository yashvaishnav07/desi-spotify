import React from 'react'
import CurrentTrack from './CurrentTrack'
import PlayTrack from './PlayTrack'
import Volume from './Volume'

const Footerrrr = () => {
  return (
    <div className='flex justify-around bg-black text-white h-full w-full'>
      <CurrentTrack />
      <PlayTrack />
      <Volume />
    </div>
  )
}

export default Footerrrr