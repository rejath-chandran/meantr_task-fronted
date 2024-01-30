import axios from "axios";
import { BASE_URL } from "../config/config";

let headers = {
  "Content-Type": "application/json",
};

const axioInstance = axios.create({ baseURL: BASE_URL });

export const GetAllPosts = async () => {
  let data = (await axioInstance.get("api/posts", { headers })).data;
  return data;
};

export const PostaPost = async (data) => {
  return await axioInstance.post("api/posts", data, { headers });
};
export const DeletePost = async (id) => {
  return await axioInstance.delete(`api/posts/${id}`, { headers });
};
