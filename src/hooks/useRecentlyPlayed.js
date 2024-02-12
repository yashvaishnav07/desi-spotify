import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addRecentlyPlayedTrack } from "../utils/spotifySlice";

export default function useRecentlyPlayed(token) {
    const dispatch = useDispatch();
    const recentlyPlayedTrack = useSelector(store => store.spotify.recentlyPlayedTrack)
    const getRecentlyPlayed = async () => {
        if(!token) return;
        const { data } = await axios.get(`https://api.spotify.com/v1/me/player/recently-played`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        dispatch(addRecentlyPlayedTrack(data.items));
    }
    useEffect(() => {
        !recentlyPlayedTrack && getRecentlyPlayed();
    })
}