import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addPlaylist, addCurrentPlayingId } from '../utils/spotifySlice'
import PlaylistCard from './Cards/PlaylistCard'
import { Link } from 'react-router-dom'
import { routes } from '../shared/routes'

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

    useEffect(() => {
        getUserPlaylists()
    }, [user.token]);

    return (
        <div className='overflow-auto'>
            <ul className='flex flex-col space-y-4 overflow-auto'>{spotify.spotifyPlaylist &&
                spotify.spotifyPlaylist.map((playlist) => {
                    return (
                        <Link key={playlist.id} to={`${routes.PLAYLIST}/${playlist.id}`}>
                            <PlaylistCard name={playlist.name} type={playlist?.type} owner={playlist?.owner?.display_name} imgUrl={playlist.images[0].url} key={playlist.id} />
                        </Link>
                    )
                })
            }</ul>
        </div>
    )
}

export default Playlists