import { useState } from "react";
import Data from "../data/BlogPost";

function Posts() {
  const [isLikes, setLikes] = useState(Data.map((data) => data.likes));

  function handleLikeClick(likeIndex) {
    let newLikes = [...isLikes];
    newLikes[likeIndex] += 1;
    setLikes(newLikes);
  }

  function handleDislikeClick(dislikeIndex) {
    let newLikes = [...isLikes];

    if (newLikes[dislikeIndex] === 0) {
      newLikes[dislikeIndex] = 0;
    } else {
      newLikes[dislikeIndex] -= 1;
    }

    setLikes(newLikes);
  }

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      {Data.map((data, index) => {
        return (
          <div class="post-list">
            <div class="post-item" key={index}>
              <div class="post-header">
                <h2>
                  {data.title} #{data.id}
                </h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{isLikes[index]}</span>
                </div>
              </div>
              <p class="post-content">{data.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => handleLikeClick(index)}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => handleDislikeClick(index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
