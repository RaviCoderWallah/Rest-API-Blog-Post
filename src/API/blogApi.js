const BASE_URL = "https://dummyjson.com/posts";

//Get - All Blogs 
export const getAllBlogs = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return await data;
}


//Get - Blogs By ID 
export const getBlogById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
}

//Post - Create New Blog
export const createBlog = async (blog) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog),
  });
  return await res.json();
}

//Put - Update blog
export const updateBlog = async (id, blog) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(blog),
  });
  return await res.json();
}

//Delete - Delete blog by Id
export const deleteBlog = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
}