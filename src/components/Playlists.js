import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addPlaylist, addCurrentPlayingId } from '../utils/spotifySlice'
import PlaylistCard from './Cards/PlaylistCard'

const Playlists = () => {

    const user = useSelector(store => store.user)
    const spotify = useSelector(store => store.spotify)
    const dispatch = useDispatch();

    const getUserPlaylists = async () => {
        const { data } = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                Authorization: `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
        const { items } = data;
        console.log(items);
        dispatch(addPlaylist(items))
    }

    useEffect(() => {
        getUserPlaylists()
    }, [user.token]);

    return (
        <div className='overflow-auto'>
            <ul className='flex flex-col space-y-4 overflow-auto'>{spotify.spotifyPlaylist &&
                spotify.spotifyPlaylist.map((playlist) => {
                    return (
                        <PlaylistCard name={playlist.name} description={`${playlist?.type}.${playlist?.owner?.display_name}`} imgUrl={playlist.images[0].url}/>
                    )
                })
            }</ul>
        </div>
    )
}

export default Playlists