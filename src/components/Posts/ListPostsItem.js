import { Link } from 'react-router-dom';
import { useFavItems } from '../../FavItemsContext';

export const ListPostsItem = ( {title, body, id, isColor} ) => {
  const { favPosts, setFavPosts } = useFavItems();

  return (
    <div>
      <div
        className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin uk-grid"
        uk-grid="true"
      >
        <div className="uk-card-media-left uk-cover-container uk-first-column">
          <img src="https://picsum.photos/600/400" alt="" className="uk-cover" />
          <canvas width="600" height="400"></canvas>
        </div>
        <div className="">
          <div className="uk-card-body">
              <h3 className="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
                {`${title.slice(0, 6)}...`} 
                <a
                  className="uk-icon-link"
                  uk-icon="heart"
                  style={{'cursor': 'pointer', color: isColor ? 'red' : ''}}
                  onClick={(e) => {
                    e.preventDefault();
                    favPosts.filter(el => el.id === id ).length === 0  
                    ? setFavPosts([...favPosts, {id, title, body, userId: Date.now()}])
                    : "";
                }}
                style={{'cursor': 'pointer', color: isColor ? 'red' : ''}}
              > </a>
              </h3>  
            <p>
              {`${body.slice(0, 70)}...`}
            </p>
            <Link
              to={`/posts/${id}`}
              className="uk-button uk-button-text"
            >Read more</Link>
          </div>
        </div>
      </div>
    </div>

    ) 
} 