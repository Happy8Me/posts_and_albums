
import { useFavItems } from '../../FavItemsContext';

export const FavItems = () => {
    const { favPosts, favAlbums, deleteFavItem, setFavPosts, setFavAlbums } = useFavItems();

    let favItems, setFavItem;
    if(location.pathname === "/posts"){
        favItems = favPosts;
        setFavItem = setFavPosts
    } else {
        favItems = favAlbums;
        setFavItem = setFavAlbums
    }

    return (
        <>
            <button 
                className="uk-button uk-open uk-icon" 
                type="button" 
                uk-icon="icon: heart; ratio: 2"
            >
            </button>
            <div className="uk-width-large uk-dropdown" uk-dropdown="mode: click">
                <div className="uk-dropdown-grid uk-child-width-1-1@m">
                    <div>
                        <table className="uk-table uk-table-divider uk-table-justify">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th className="uk-text-right">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {favItems.map(el=> {
                                    return (
                                        <tr key={el.userId}>
                                            <td>{el.title}</td>
                                            <td className="uk-text-right">
                                                <button 
                                                    className="uk-button" 
                                                    type="button" 
                                                    uk-icon="icon: close;"
                                                    onClick={() => {deleteFavItem(favItems, el.userId, setFavItem)}}
                                                >
                                                </button>
                                            </td>
                                        </tr>
                                    )    
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
   
} 