import postArr from "./Object";
import { useState } from "react";

function Posts() {
  let like = postArr.map((item) => item.likes);
  const [items, setItem] = useState(like);

  const increment = (index) => {
    const newArray = [...items];
    newArray[index] += 1;
    setItem(newArray);
  };

  const handleDislike = (index) => {
    let disLike = [...items];
    if ((disLike[index] -=1 ) <= 0) {
      disLike[index] = 0;
    } else {
      disLike[index] ;
    }
    setItem(disLike);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postArr.map((item, index) => {
          return (
            <>
              <div className="post-item" key={index}>
                <div className="post-header">
                  <h2>{item.title}</h2>
                  <div className="post-social-media-stats">
                    <span className="stats-topic">Likes: </span>
                    <span className="post-likes">{items[index]}</span>
                  </div>
                </div>
                <p className="post-content">{item.content}</p>

                <div className="post-actions">
                  <button
                    className="like-button"
                    onClick={() => {
                      increment(index);
                    }}
                  >
                    Like
                  </button>
                  <button
                    className="dislike-button"
                    onClick={() => {
                      handleDislike(index);
                    }}
                  >
                    Dislike
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
