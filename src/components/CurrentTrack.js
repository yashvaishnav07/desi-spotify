import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { addCurrentPlayingTrack, setIsPlayingTrack } from '../utils/spotifySlice'

const CurrentTrack = () => {
    const user = useSelector(store => store.user)
    const currentPlayingTrack = useSelector(store => store.spotify.currentPlayingTrack)
    const recentlyPlayingTrack = useSelector(store => store.spotify.recentlyPlayingTrack)
    const dispatch = useDispatch();

    const getCurrentTrack = async () => {
        if (!user.token) return
        const { data } = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                Authorization: `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
        const { item } = data;
        if (item) {
            dispatch(addCurrentPlayingTrack(item))
            dispatch(setIsPlayingTrack(true));
        }
    }

    useEffect(() => {
        !currentPlayingTrack && getCurrentTrack()
    });

    return (
        <div className='flex gap-4 items-center col-span-1'>
            <img className="rounded-lg" src={
                currentPlayingTrack?.album.images[2].url} alt="Track" />
            <div className='flex flex-col'>
                <p className='text-nowrap text-lg'>{currentPlayingTrack?.name}</p>
                <p className='text-sm text-slate-400'>{currentPlayingTrack?.artists.map((artist, index) => {
                    return artist.name
                }).join(',')}</p>
            </div>
        </div>
    )
}

export default CurrentTrack