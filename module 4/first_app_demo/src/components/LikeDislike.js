import React, { useState } from "react";

function LikeDislike() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      <h1>Like Dislike</h1>

      <button onClick={() => setLike(like + 1)}>
        Like
      </button>

      <p>Likes: {like}</p>

      <button onClick={() => setDislike(dislike + 1)}>
        Dislike
      </button>

      <p>Dislikes: {dislike}</p>
    </div>
  );
}

export default LikeDislike;
