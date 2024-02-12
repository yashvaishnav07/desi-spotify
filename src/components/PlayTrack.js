import React, { useState } from 'react'
import { FiRepeat } from "react-icons/fi";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
    BsFillPlayCircleFill,
    BsFillPauseCircleFill,
    BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { addCurrentPlayingTrack } from '../utils/spotifySlice';
import { millisecondsToMinSec } from '../utils/timeConvert';
import { setIsPlayingTrack } from '../utils/spotifySlice';

const PlayTrack = () => {
    const user = useSelector(store => store.user);
    const spotify = useSelector(store => store.spotify);
    const [startTime, setstartTime] = useState(millisecondsToMinSec(0));
    const [totalDuration, setTotalDuration] = useState(0);
    const dispatch = useDispatch();

    const changeState = async (state) => {
        const response = await axios.put(
            `https://api.spotify.com/v1/me/player/${state}`,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + user.token,
                },
            }
        );
        if (response.status === 204) dispatch(setIsPlayingTrack(!spotify.isPlayingTrack))
    };

    const changeTrack = async (type) => {
        await axios.post(
            `https://api.spotify.com/v1/me/player/${type}`,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + user.token,
                },
            }
        );
        const { data } = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + user.token,
                },
            }
        );
        dispatch(addCurrentPlayingTrack(data.item))
    };

    const handleSeekBar = async (e) => {
        if (!user.token) return;
        const response = await axios.put(`https://api.spotify.com/v1/me/player/seek?position_ms=${e.target.value}`, {
            headers: {
                Authorization: `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
        if (response) {
            
        }
    }

    return (
        <div className='flex flex-col text-4xl items-center justify-center space-y-3'>
            <div className='flex text-2xl space-x-5'>
                <FiRepeat />
                <CgPlayTrackPrev onClick={() => changeTrack('previous')} />
                {spotify.isPlayingTrack ? <BsFillPauseCircleFill onClick={() => changeState('pause')} /> : <BsFillPlayCircleFill onClick={() => changeState('play')} />}
                <CgPlayTrackNext onClick={() => changeTrack('next')} />
                <BsShuffle />
            </div>
            <div className='flex space-x-2'>
                <p className='text-sm'>{startTime}</p>
                <input type="range" className='w-96' onChange={(e) => handleSeekBar(e)} min={0} max={spotify.currentPlayingTrack?.duration_ms}/>
                <p className='text-sm'>{millisecondsToMinSec(spotify.currentPlayingTrack?.duration_ms)}</p>
            </div>
        </div>
    )
}

export default PlayTrack