import React from 'react'
import Login from './Login'
import { useSelector } from 'react-redux'
import Spotify from './Spotify'

const Body = () => {
    const user = useSelector((store) => store.user)
    return (
        <div>
            {user.token ? <Spotify /> : <Login />}
        </div>
    )
}

export default Body