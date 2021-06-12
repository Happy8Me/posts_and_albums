import { useFavItems } from '../../FavItemsContext';

export const AlbumItem = ( {id, title, isColor} ) => {
    const { favAlbums, setFavAlbums } = useFavItems();
    return (
        <div>
            <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
                <img src="https://picsum.photos/600/400" alt="" className="uk-cover" width="100%" />
                <canvas width="600" height="400"></canvas>
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                    <p> {title} </p>
                </div>
                
                <div className="uk-position-top-right uk-overlay">
                    <a 
                        href="" 
                        className="uk-icon" 
                        uk-icon="icon: heart; ratio: 2"
                        onClick={(e) => {
                            e.preventDefault();
                            favAlbums.filter(el => el.id === id ).length === 0  
                            ? setFavAlbums([...favAlbums, {id, title, userId: Date.now()}])
                            : "";
                          }}
                          style={{'cursor': 'pointer', color: isColor ? 'red' : ''}}
                    ></a>
                </div>
            </div>
        </div>
    )
}