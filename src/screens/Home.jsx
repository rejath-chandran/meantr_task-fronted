import React from "react";
import CreateCard from "../components/CreateCard";

import { CreatePost as newpost } from "../services/queries";

function Home() {
  const Post = newpost();
  const CreatePost = (data) => {
    Post.mutate(data);
  };

  return (
    <div>
      <CreateCard CreatePost={CreatePost} />
    </div>
  );
}

export default Home;
