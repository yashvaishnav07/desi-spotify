import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const Volume = () => {
    const user = useSelector(store => store.user)
    const setVolume = async (e) => {
        await axios.put(
          "https://api.spotify.com/v1/me/player/volume",
          {},
          {
            params: {
              volume_percent: parseInt(e.target.value),
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + user.token,
            },
          }
        );
      };
  return (
    <div className='col-span-1 flex'>
        <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100}/>
    </div>
  )
}

export default Volume