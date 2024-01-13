import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import WorkSpace from './WorkSpace'
import Sidebar from './Sidebar'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUserInfo } from '../utils/userSlice'

const Spotify = () => {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch();

  const getUserInfo = async () => {
    const {data} = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    })
    dispatch(addUserInfo(data))
  }

  useEffect(() => {
    getUserInfo();
  }, [])
  return (
    <div className='grid grid-rows-[85vh,15vh] overflow-hidden max-h-screen'>
      <div className='grid grid-cols-[15vw,85vw] bg-gradient-to-t from-zinc-950 from-45% to-green-600'>
        <Sidebar />
        <div className='overflow-auto'>
          <Header />
          <div>
            <WorkSpace />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Spotify