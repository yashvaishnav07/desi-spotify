import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import Section from './Section';
import MediaGrid from './Layout/MediaGrid';
import { useEffect } from 'react';
import { routes } from '../shared/routes';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
    const token = useSelector(store => store.user.token)
    const [searchParams, setSearchParams] = useSearchParams();
    const query = useRef();
    const [searchData, setsearchData] = useState({
        playlistData: null,
        albumData: null,
    })

    function debounce(func, timeout = 400) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    async function searchMusic() {
        if (!token) return;
        const queryString = `q=${query.current.value}&type=playlist,album`
        const newParams = new URLSearchParams(queryString);
        setSearchParams(newParams);
        const finalParams = searchParams.get('q') ? searchParams.toString() : queryString
        const { data } = await axios.get(`https://api.spotify.com/v1/search?${finalParams}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        setsearchData({
            ...searchData,
            playlistData: data.playlists.items,
            albumData: data.albums.items
        })
    }
    const handlechange = debounce(() => searchMusic());

    useEffect(() => {
        const queryParams = searchParams.get('q');
        if (queryParams) {
            handlechange();
        }
    }, [])

    return (
        <div className='mx-4 space-y-8'>
            <input className='focus:outline-none mt-20 bg-white w-[40%] h-12 rounded-3xl text-xl p-2' ref={query} onChange={handlechange}></input>
            {searchData.albumData &&
                <Section heading="Albums">
                    <MediaGrid
                        mediaPageRoute={routes.ALBUM}
                        media={searchData.albumData}
                    />
                </Section>
            }
            {searchData.playlistData &&
                <Section heading="Playlists">
                    <MediaGrid
                        mediaPageRoute={routes.PLAYLIST}
                        media={searchData.playlistData}
                    />
                </Section>
            }
        </div>
    )
}

export default Search