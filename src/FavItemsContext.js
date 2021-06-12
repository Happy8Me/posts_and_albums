import { createContext, useContext, useEffect, useState } from 'react';

const FavItemsContext = createContext();

function useFavItems(){
    return useContext(FavItemsContext)
};

function FavItemsProvider({ children }) {
    const [favPosts, setFavPosts] = useState([]);
        
    const [favAlbums, setFavAlbums] = useState([]);

    const deleteFavItem = (favItems, id, setUpdated) => {
        setUpdated(favItems.filter(el => el.userId !== id));
    };

    const contextValue = {
        favPosts,
        favAlbums, 
        deleteFavItem,
        setFavPosts,
        setFavAlbums,   
      };

    return ( 
        <FavItemsContext.Provider value={contextValue}>
            {children}
        </FavItemsContext.Provider>
    )
};

export { useFavItems, FavItemsProvider };

