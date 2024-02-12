import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function usePlaylist(playlistId) {
  const [playlist, setPlaylist] = useState(null);
  const token = useSelector(store => store.user.token)
  const getCategoryPlaylist = async () => {
    if (!token) return;
    const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    setPlaylist(data);
  }

  useEffect(() => {
    getCategoryPlaylist();
  }, [playlistId]);

  return [playlist];
}
