import React, { useEffect, useState } from 'react'
import { BiShuffle } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";
import { IoPlayCircle } from "react-icons/io5";
import { FiRepeat } from "react-icons/fi";
import { IoPauseCircle } from "react-icons/io5";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getByTestId } from '@testing-library/react';

const PlayTrack = () => {

    const user = useSelector(store => store.user)
    const [isPlaying, setIsPlaying] = useState(false);

    const getTrack = async (type) => {
        await axios.post(`https://api.spotify.com/v1/me/player/${type}`,{}, {
            headers: {
                Authorization: `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })
    }


    const changeState = async (type) => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className='flex items-center justify-center gap-8 text-4xl col-span-2   w-5/6'>
            <div>
                <FiRepeat />
                {/* <FiRepeat onClick={() => getTrack('repeat')} /> */}
            </div>
            <div>
                <BiSkipPrevious onClick={() => getTrack('previous')} />
            </div>
            <div>
                {isPlaying ? <IoPauseCircle onClick={changeState}/> : <IoPlayCircle onClick={changeState}/>}
            </div>

            <div>
                <BiSkipNext onClick={() => getTrack('next')} />
            </div>
            <div>
                <BiShuffle />
                {/* <BiShuffle onClick={() => getTrack('shuffle')}/> */}
            </div>
        </div>
    )
}

export default PlayTrack