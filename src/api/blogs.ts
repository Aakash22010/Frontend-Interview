import axios from "axios";
import type { Blog } from "../types/blog";

const BASE_URL = "http://localhost:3001/blogs";

export const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const fetchBlogById = async (id: number): Promise<Blog> => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const createBlog = async (blog: Omit<Blog, "id">) => {
  const res = await axios.post(BASE_URL, blog);
  return res.data;
};
