import React from 'react'
import useAlbum from '../hooks/useAlbum';
import DotLoader from './Loader/DotLoader';
import PlaylistHeader from './MediaHeader/PlaylistHeader';
import PlaylistTable from './Layout/PlaylistTable';
import { useParams } from 'react-router-dom';
import AlbumTrackRow from './Layout/AlbumTrackRow';
import AlbumTrackTable from './Layout/AlbumTrackTable';

const Album = () => {
    const { albumId } = useParams();

    const [album] = useAlbum(albumId);

    return (
        <div className="mt-20">
            {!album ? (
                <div className="flex items-center justify-center h-[15rem]">
                    <DotLoader />
                </div>
            ) : (
                <>
                    <PlaylistHeader playlist={album} className="px-7" />

                    <section>
                        <AlbumTrackTable tracks={album.tracks.items} />
                    </section>
                </>
            )}
        </div>
    );
}

export default Album;