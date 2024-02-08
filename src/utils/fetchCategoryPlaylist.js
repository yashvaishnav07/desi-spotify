import axios from "axios";

export async function getcategoryPlaylist(category, token) {
    const { data } = await axios.get(`https://api.spotify.com/v1/browse/categories/${category}/playlists`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
    });
    return data.playlists.items
}