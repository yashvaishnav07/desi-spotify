import MediaGrid from "../components/Layout/MediaGrid";
import Section from "./Section";
import SkeletonLoader from "../components/Loader/SkeletonLoader";
import useFeaturedPlaylists from "../hooks/useFeaturedPlaylists";
import { routes } from "../shared/routes";
import { useSelector } from "react-redux";
import useCategoryPlaylist from "../hooks/useCategoryPlaylist";

export default function Home() {
  const user = useSelector(store => store.user)
  const spotify = useSelector(store => store.spotify)
  const featuredPlaylists = useFeaturedPlaylists(50);
  useCategoryPlaylist('soul', user.token);
  useCategoryPlaylist('hiphop', user.token);

  return (
    <div className="px-7 mt-20">
      <h1 className="sr-only">Home</h1>

      {!featuredPlaylists ? (
        <SkeletonLoader />
      ) : (
        <>
          <Section heading="Today's biggest hits">
            <MediaGrid
              mediaPageRoute={routes.PLAYLIST}
              media={featuredPlaylists ? featuredPlaylists.items : null}
            />
          </Section>
          {spotify.categoryPlaylist.soul &&
            <Section heading="About the soul">
              <MediaGrid
                mediaPageRoute={routes.PLAYLIST}
                media={spotify.categoryPlaylist.soul ? spotify.categoryPlaylist.soul : null}
              />
            </Section>}
          {spotify.categoryPlaylist.hiphop &&
            <Section heading="Hip Hop Tracks">
              <MediaGrid
                mediaPageRoute={routes.PLAYLIST}
                media={spotify.categoryPlaylist.hiphop ? spotify.categoryPlaylist.hiphop : null}
              />
            </Section>}
        </>
      )}
    </div>
  );
}
