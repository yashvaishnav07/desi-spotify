import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addCategoryPlaylist } from "../utils/spotifySlice";

export default function useCategoryPlaylist(category, token) {
    const dispatch = useDispatch();
    const categoryPlaylist = useSelector(store => store.spotify.categoryPlaylist)
    const getCategoryPlaylist = async () => {
        if (!token) return;
        const { data } = await axios.get(`https://api.spotify.com/v1/browse/categories/${category}/playlists`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        dispatch(addCategoryPlaylist({name: category, data: data.playlists.items}))
    }
    useEffect(() => {
        !categoryPlaylist[category] && getCategoryPlaylist();
    })
}