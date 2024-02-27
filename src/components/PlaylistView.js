import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentPlaylist } from '../utils/spotifySlice'

const PlaylistView = () => {
    const spotify = useSelector(store => store.spotify)
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()

    const getPlaylistData = async () => {
        const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${spotify.currentPlaylistId}`, {
            headers: {
                Authorization: `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
        dispatch(addCurrentPlaylist(data));
    }

    useEffect(() => {
        getPlaylistData();
    }, [spotify.currentPlaylistId])

    return (
        <div className=''>
            <div className='flex flex-row mx-8 space-x-8 '>
                {spotify.currentPlaylist &&
                    <div>
                        {spotify.currentPlaylist?.images && <img src={spotify.currentPlaylist?.images[1]?.url} alt="Image is in you way" />}
                    </div>
                }
                <div className='text-white flex flex-col mt-8 space-y-4'>
                    <span className='text-sm'>Playlist</span>
                    <h1 className='text-7xl font-medium'>{spotify.currentPlaylist?.name}</h1>
                    <h1 className='text-slate-300'>{spotify.currentPlaylist?.description}</h1>
                </div>
            </div>
            <div className='text-white ms-14 mt-12'>
                <div className='grid grid-cols-12 sticky transition ease-in-out'>
                    <div className='col-span-1'>
                        <span>#</span>
                    </div>
                    <div className='col-span-7'>
                        <span>Title</span>
                    </div>
                    <div className='col-span-3'>
                        <span>Album</span>
                    </div>
                    <div className='col-span-1'>
                        <span>Time</span>
                    </div>
                </div>
                <hr class="solid mt-2" />
                {spotify.currentPlaylist && spotify.currentPlaylist?.tracks.items.map((track, index) => {
                    return (
                        <div className='grid grid-cols-12 mt-4 hover:bg-zinc-900 transition ease-in-out items-center'>
                            <div className='col col-span-1'>
                                <span>{index + 1}</span>
                            </div>
                            <div className='flex col-span-7 items-center' key={track.track.id}>
                                <div>
                                    <img src={track?.track?.album?.images[2].url} alt="Track" />
                                </div>
                                <div className='flex flex-col ms-5'>
                                    <span className='truncate'>{track?.track.name}</span>
                                    <span className=' truncate text-slate-400'>{track.track.artists.map((artist, index) => {
                                        return artist.name
                                    }).join(',')}</span>
                                </div>
                            </div>
                            <div className='truncate col-span-3'>
                                <span>{track.track.album.name}</span>i
                            </div>
                            <div className='truncate col-span-1'>
                                <span>{track.track?.duration_ms}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlaylistView