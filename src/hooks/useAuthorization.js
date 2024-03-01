import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

export default function useAuthorization() {
  const [playlists, setPlaylists] = useState(null);

  const handleConnection = () => {
    const clientId = "52494c22e06e447587917219183c7947"
    const scope = ['user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing','user-read-playback-position', 'user-top-read', 'user-read-recently-played', 'user-read-email', 'user-read-private']
    const redirectUrl = "https://desi-spotify.vercel.app/desi-spotify"
    const apiUrl = "https://accounts.spotify.com/authorize"

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&scope=${scope}&show_dialog=true`; 
    setPlaylists(window.location.hash.substring(1).split('&')[0].split('=')[1])
}

  useEffect(() => {
    handleConnection();
  });

  return playlists;
}
