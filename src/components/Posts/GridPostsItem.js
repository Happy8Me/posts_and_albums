import { Link } from 'react-router-dom';
import { useFavItems } from '../../FavItemsContext';

export const GridPostsItem = ( {title, body, id, isColor} ) => {
  const { favPosts, setFavPosts } = useFavItems();

    return (
      <div>
        <div className="uk-card uk-card-default uk-margin-medium-bottom">
          <div className="uk-card-header">
            <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
              {title && `${title.slice(0, 10)}...`}
              <a
                className="uk-icon-link"
                uk-icon="heart"
                onClick={(e) => {
                  e.preventDefault();
                  favPosts.filter(el => el.id === id ).length === 0  
                  ? setFavPosts([...favPosts, {id, title, body, userId: Date.now()}])
                  : "";
                }}
                style={{'cursor': 'pointer', color: isColor ? 'red' : ''}}
              > </a>
            </h3>
          </div>
          <div className="uk-card-body">
            <p>{`${body?.slice(0, 100)}...`}</p>
          </div>
          <div className="uk-card-footer">
            <Link
              to={`/posts/${id}`}
              className="uk-button uk-button-text" 
            >Read more</Link>
          </div>
        </div>
      </div>
    );
} 

