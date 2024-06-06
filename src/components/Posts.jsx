import Post from "./Post";
import dataBlog from "./data";
function Posts() {
  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {dataBlog.map((item, index) => {
          return <Post key={index} item={item}/>
        })}
      </div>
    </div>
  );
}

export default Posts;
