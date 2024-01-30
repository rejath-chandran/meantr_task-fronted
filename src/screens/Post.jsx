import React from "react";
import PostCard from "../components/PostCard";
import { AllPost, DeletePostByID } from "../services/queries";
import { useQueryClient } from "react-query";

function Post() {
  const client = useQueryClient();

  const { data, isLoading } = AllPost();

  const Postdele = DeletePostByID(client);

  const DeletePostByid = (id) => {
    Postdele.mutate(id);
  };

  return (
    <div>
      {isLoading ? (
        <div className="text-white">fetching.........</div>
      ) : (
        data.map((i) => (
          <PostCard
            key={i._id}
            id={i._id}
            title={i.title}
            content={i.content}
            time={i.createdAt}
            itemdelete={DeletePostByid}
          />
        ))
      )}
    </div>
  );
}

export default Post;
