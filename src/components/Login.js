import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToken } from '../utils/userSlice'
import { SPOTIFY_IMG_BLACK } from '../utils/Constants'

const Login = () => {
    const dispatch = useDispatch()

    const handleConnection = () => {
        const clientId = "52494c22e06e447587917219183c7947"
        const scope = ['user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing','user-read-playback-position', 'user-top-read', 'user-read-recently-played', 'user-read-email', 'user-read-private']
        const redirectUrl = "http://localhost:3000/"
        const apiUrl = "https://accounts.spotify.com/authorize"

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&scope=${scope}&show_dialog=true`; 
    }
    
    useEffect(() => {
        const token = window.location.hash.substring(1).split('&')[0].split('=')[1]
        dispatch(addToken(token))
    })

    return (
        <div className="flex flex-col items-center justify-center gap-10 bg-green-500 h-screen">
            <img className="w-3/4 mx-auto" src={SPOTIFY_IMG_BLACK} alt="Logo" />
            <button className="py-2 px-4 bg-black text-green-200 rounded-2xl" onClick={handleConnection}>Connect To Spotify</button>
        </div>
    )
}

export default Login