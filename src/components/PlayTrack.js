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

const PlayTrack = () => {
    const user = useSelector(store => store.user)
    const [playerState, setplayerState] = useState(false);
    const dispatch = useDispatch();

    const getTrack = async (type) => {
        await axios.post(`https://api.spotify.com/v1/me/player/${type}`, {}, {
            headers: {
                Authorization: `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
    }

    const changeState = async () => {
        setplayerState(!playerState)
        const state = playerState ? "pause" : "play";
        await axios.put(
            `https://api.spotify.com/v1/me/player/${state}`,
            {},
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + user.token,
                },
            }
        );
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

    return (
        <div className='flex items-center justify-center gap-8 text-4xl col-span-2   w-5/6'>
            <div>
                <FiRepeat />
                {/* <FiRepeat onClick={() => getTrack('repeat')} /> */}
            </div>
            <div>
                <CgPlayTrackPrev onClick={() => changeTrack('previous')} />
            </div>
            <div>
                {playerState ? <BsFillPauseCircleFill onClick={changeState} /> : <BsFillPlayCircleFill onClick={changeState} />}
            </div>

            <div>
                <CgPlayTrackNext onClick={() => changeTrack('next')} />
            </div>
            <div>
                <BsShuffle />
                {/* <BiShuffle onClick={() => getTrack('shuffle')}/> */}
            </div>
        </div>
    )
}

export default PlayTrack