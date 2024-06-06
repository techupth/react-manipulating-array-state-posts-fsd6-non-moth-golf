import React from "react";
import { useState } from "react";

const Post = ({item}) => {
    const {id, title, content, likes} = item
    const [like, setLike] = useState(likes)
  return (
    <div class="post-item">
      <div class="post-header">
        <h2>
          ({id}) {title}
        </h2>
        <div class="post-social-media-stats">
          <span class="stats-topic">Likes: </span>
          <span class="post-likes">{like}</span>
        </div>
      </div>
      <p class="post-content">{content}</p>
      <div class="post-actions">
        <button
          class="like-button"
          onClick={() => {
            setLike(like+1)
          }}
        >
          Like
        </button>
        <button
          class="dislike-button"
          onClick={() => {
            if (like > 0) {
              setLike(like-1)
            }
          }}
        >
          Dislike
        </button>
      </div>
    </div>
  );
};

export default Post;
