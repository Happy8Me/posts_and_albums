import { useState, useEffect } from "react";
import React from "react";
import { ListAlbums } from "../components/Albums/ListAlbums";
import { getAlbums } from "../api";
import { Footer } from "../components/Footer";


const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const [limitAlbums, setlimitAlbums] = useState(6);
    const [currentNumOfAlbums, setCurrentNumOfAlbums] = useState(limitAlbums);

    useEffect(() => {
      getAlbums(limitAlbums).then(
        albums => {
          setAlbums(albums.data);
        } 
      )
}, [])

    return (
        <div className="uk-section">
            <div className="uk-container">  
                <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                    <ListAlbums albums={albums}/>
                </div>
            </div>
            <Footer 
              limit={limitAlbums}
              currentNumOfItems={currentNumOfAlbums}
              setCurrentNumOfItems={setCurrentNumOfAlbums}
              data={albums}
              setItems={setAlbums}
            />
        </div>
    );
  }
  
export default React.memo(AlbumsPage);