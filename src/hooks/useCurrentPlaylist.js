import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";

export default function useCurrentPlaylist() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    fetchData(
      'https://api.spotify.com/v1/me/playlists'
    ).then((data) => {
      setPlaylists(data);
    });
  }, []);

  return [playlists];
}
