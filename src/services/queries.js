import { useMutation, useQuery } from "react-query";
import { GetAllPosts, PostaPost, DeletePost } from "./api";
import { toast } from "react-toastify";

export function AllPost() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: GetAllPosts,
  });
}

export function CreatePost() {
  return useMutation({
    mutationFn: (data) => PostaPost(data),
    onError: () => {
      toast.error("failed to create Post");
    },
    onSuccess: () => {
      toast.success("new post added");
    },
  });
}

export function DeletePostByID(client) {
  return useMutation({
    mutationFn: (id) => DeletePost(id),
    onSettled: () => {
      toast.success("post deleted");
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
