import { useFavItems } from '../../FavItemsContext';
import { AlbumItem } from "./AlbumItem";

export const ListAlbums = ( {albums} ) => {
    const { favAlbums } = useFavItems();
    const colors = albums.map(album => favAlbums.some(el => (el.id == album.id)));
    return (
        <>
            {albums.map((album, index) => {
                return <AlbumItem 
                    isColor={colors[index]}
                    key={album.id}
                    title={album.title}
                    id={album.id}
                />
            })}
        </>
        )
}