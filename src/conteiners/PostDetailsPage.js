import { useState, useEffect } from 'react';
import { getPostDetails, getPostComments } from '../api';
import { Comments } from '../components/PostDetails/Comments';
import { NewComment } from '../components/PostDetails/NewComment';

export const PostDetailsPage = ({
  match: {
    params: { id }
  }
}) => {
  const [currentPost, setCurrentPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPostDetails(id).then(
      post => setCurrentPost(post.data[0])
    )

  }, [id])

  useEffect(() => {
    getPostComments(id).then(
      comments => setComments(comments.data)
    )
  }, [id])

  return (
    <div className="uk-section">
      <div className="uk-container">
        <button
          className="uk-button uk-button-primary"
          onClick={(e) => {
            e.preventDefault();
            history.back()
          }}
        >Back</button>
        <h1 className="uk-heading-bullet uk-margin-medium-bottom">
          <span>{currentPost.title}</span>
          <a className="uk-text-small" href="/">{` Author-${currentPost.userId}`}</a>
        </h1>
        <div className="uk-article uk-dropcap uk-margin-large-bottom">
          <p>{currentPost.body}</p>
        </div>
        <hr />
        <h3 className="uk-margin-remove-top">Comments:</h3>
        <Comments comments={comments} />
        <NewComment 
          comments={comments}
          setComments={setComments}/>
      </div>
    </div>
  )
};