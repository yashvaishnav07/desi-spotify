import React from 'react'
import CurrentTrack from './CurrentTrack'
import PlayTrack from './PlayTrack'
import Volume from './Volume'

const Footerrrr = () => {
  return (
    <div className='flex bg-black text-white h-full w-full justify-between'>
      <CurrentTrack />
      <PlayTrack />
      <Volume />
    </div>
  )
}

export default Footerrrr