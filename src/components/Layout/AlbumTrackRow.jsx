import { millisecondsToMinSec } from "../../utils/timeConvert";
import PlaylistGrid from "./PlaylistGrid";
import FlatButton from "../Buttons/FlatButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentPlayingTrack } from "../../utils/spotifySlice";

export default function AlbumTrackRow({ number, trackInfo }) {

  const [trackDurationMinutes, trackDurationSeconds] = millisecondsToMinSec(
    trackInfo.duration_ms
  );
  const token = useSelector((store) => store.user.token);
  const dispatch = useDispatch();

  const playTrack = async () => {
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri: trackInfo.uri,
        offset: {
          position: trackInfo.track_number - 1,
        },
        position_ms: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 204) {
      dispatch(addCurrentPlayingTrack(trackInfo));
    }
  };

  return (
    <PlaylistGrid className="px-5 mx-7 py-1 rounded-md hover:bg-neutral-700 items-center gap-x-2 [&:hover_.trackRow-number]:hidden [&:hover_.trackRow-playBtn]:block">
      <td>
        <span className="trackRow-number">{number}</span>
        <FlatButton className="hidden trackRow-playBtn">
          <FontAwesomeIcon icon={faPlay} size="sm" onClick={playTrack} />
        </FlatButton>
      </td>
      <td className="flex gap-3 overflow-hidden">
        <div className="w-full">
          <Link
            to="#"
            className="text-white max-w-[85%] overflow-hidden whitespace-nowrap text-ellipsis hover:underline hover:underline-offset-1"
          >
            {trackInfo.name}
          </Link>
          <p className="text-sm">
            {trackInfo.artists.map((artist, i) => (
              <>
                {artist.name}
                {i !== trackInfo.artists.length - 1 ? ", " : ""}
              </>
            ))}
          </p>
        </div>
      </td>

      <td className="whitespace-nowrap overflow-hidden text-ellipsis">
        {trackInfo.name}
      </td>

      <td>
        {new Date(trackInfo.added_at).toLocaleDateString("en-US", {
          day: "2-digit",
          year: "numeric",
          month: "long",
          weekday: "short",
        })}
      </td>

      <td>
        {trackDurationMinutes}:{trackDurationSeconds < 10 ? "0" : ""}
        {trackDurationSeconds}
      </td>
    </PlaylistGrid>
  );
}
