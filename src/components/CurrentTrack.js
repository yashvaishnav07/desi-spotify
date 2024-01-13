import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { addCurrentPlayingTrack } from '../utils/spotifySlice'
import PlayTrack from './PlayTrack';

const CurrentTrack = () => {
    const user = useSelector(store => store.user)
    const spotify = useSelector(store => store.spotify)
    const dispatch = useDispatch();

    const getCurrentTrack = async () => {
        const { data } = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: {
                Authorization: `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
        const { item } = data;
        console.log(item);
        dispatch(addCurrentPlayingTrack(item))
    }

    useEffect(() => {
        getCurrentTrack()
    }, []);
    return (
        <div className='flex gap-4 items-center col-span-1'>
            <img className="rounded-lg" src={spotify.currentPlayingTrack?.album.images[2].url} alt="Track" />
            <div className='flex flex-col'>
                <h1 className='text-lg'>{spotify.currentPlayingTrack?.name}</h1>
                <h6 className='text-sm text-slate-400'>{spotify.currentPlayingTrack?.artists.map((artist, index) => {
                    return artist.name
                }).join(',')}</h6>
            </div>
        </div>
    )
}

export default CurrentTrack