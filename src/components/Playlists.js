import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addPlaylist, addCurrentPlayingId } from '../utils/spotifySlice'

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
        dispatch(addPlaylist(items))
    }

    const getPlaylist = (id) => {
        console.log(id);
        dispatch(addCurrentPlayingId(id))
    }

    useEffect(() => {
        getUserPlaylists()
    }, []);

    return (
        <div className='h-5/6 overflow-auto'>
            <ul className='flex flex-col space-y-3 ms-10 my-3 overflow-auto h-4/6'>{spotify.spotifyPlaylist &&
                spotify.spotifyPlaylist.map(({ name, id }) => {
                    return (
                        <li className='cursor-pointer transition ease-in-out hover:text-white' key={id} onClick={() => getPlaylist(id)}>{name}</li>
                    )
                })
            }</ul>
        </div>
    )
}

export default Playlists