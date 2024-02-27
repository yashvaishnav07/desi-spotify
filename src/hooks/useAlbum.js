import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function useAlbum(albumId) {
  const [album, setalbum] = useState(null);
  const token = useSelector(store => store.user.token)
  const getCategoryPlaylist = async () => {
    if (!token) return;
    const { data } = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    setalbum(data);
  }

  useEffect(() => {
    getCategoryPlaylist();
  }, [albumId]);

  return [album];
}
