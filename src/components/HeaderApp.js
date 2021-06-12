import { Link } from "react-router-dom";
import { useState } from "react";
import { FavItems } from "./NavBar/FavItems";

export const HeaderApp = () => {
    const [activePosts, setActivePosts] = useState("uk-active")
    const [activeAlbums, setActiveAlbums] = useState("")

    const activeLink = () => {
        if( location.pathname === "/albums") {
            setActivePosts("");
            setActiveAlbums("uk-active");
        } else {
            setActivePosts ("uk-active");
            setActiveAlbums("");
        }
    }

    return (
        <nav className="uk-navbar uk-navbar-container" uk-navbar="false" >
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li 
                        onClick={activeLink}
                        className={activePosts}
                    >
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li 
                        onClick={activeLink}
                        className={activeAlbums} 
                    >
                        <Link to="/albums">Albums</Link>
                    </li>
                </ul>
            </div>
            
            <div className="uk-navbar-right">
                <div className="uk-navbar-item">
                    <FavItems/>                
                </div>
            </div>
        </nav>
    )
}