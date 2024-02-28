import MediaHeader from "./MediaHeader";
import { MinToHourMin, millisecondsToMinSec } from "../../utils/timeConvert";
import { Link } from "react-router-dom";

function sumDurations(tracks) {
  return tracks.reduce((total, current) => {
    return total + current.track?.duration_ms;
  }, 0);
}

export default function PlaylistHeader({ className, playlist }) {
  const [minutes, seconds] = millisecondsToMinSec(
    sumDurations(playlist.tracks.items)
  );
  const [hours, mins] = MinToHourMin(minutes);

  return (
    <MediaHeader
      className={className}
      mediaType="Playlist"
      coverImage={playlist.images?.[0].url}
      mediaTitle={playlist.name}
    >
      <p className="opacity-75">{playlist.description}</p>

      <div className="flex flex-wrap gap-1 items-center text-white">
        <div className="flex gap-1">
          <img
            className="w-[20px] aspect-square rounded-full"
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
            alt="owner"
          />
          <Link className="font-bold text-sm hover:underline hover:underline-offset-1">
            {playlist.owner?.display_name}
          </Link>
        </div>
        &#8226;
        <p className="text-sm">
          {playlist.tracks.total} songs,
          {hours > 0 ? (
            <> about {hours} hr</>
          ) : (
            <>
              {minutes}:{seconds}
            </>
          )}
        </p>
      </div>
    </MediaHeader>
  );
}
