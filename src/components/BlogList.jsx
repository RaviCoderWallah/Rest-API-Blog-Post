import { IoMdEye } from "react-icons/io";
import { GrDislike, GrLike } from "react-icons/gr";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getAllBlogs } from "../API/blogApi";
import { useContext, useEffect, useState } from "react";
import {AppProvider}  from "../Context/BlogContext"

const BlogList = () => {

    const [blogs, setBlogs] = useState([]);
    const setId   = useContext(AppProvider);
    
    useEffect(() => {
        const fetchBlogs = async () => {
            const blogs = await getAllBlogs();
            setBlogs(blogs.posts);
        }
        fetchBlogs();
    }, []);

    const handleReadMoreBtn = (id) => {
       console.log("Read more clicked for blog id:", id);
       setId(id)
    }

    return (
        <div className="blog-list-container">
            {
                blogs.map((blog) => {
                    return <>
                        <div className="blog-card-item" key={blog.id}>
                            <h2 className="blog-card-title">{blog.title}</h2>
                            <div className="tags">
                                {
                                    blog.tags.map((tag, index) => {
                                        return <span className="tag" key={index}>{tag}</span>
                                    })
                                }
                            </div>
                            <p className="blog-card-excerpt">{blog.body}</p>
                            <div className="blog-customize">
                                <div className="user-interaction">
                                    <div className="user-view">
                                        <IoMdEye /> {blog.views}
                                    </div>
                                    <div className="user-like">
                                        <GrLike /> {blog.reactions.likes}
                                    </div>
                                    <div className="user-dislike">
                                        <GrDislike /> {blog.reactions.dislikes}
                                    </div>
                                </div>
                                <div className="edit-delete-post">
                                    <div className="edit-post-button">
                                        <FaEdit />
                                    </div>
                                    <div className="delete-post-button">
                                        <FaTrash />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="read-more"
                                onClick={() => handleReadMoreBtn(blog.id)}
                            >
                                Read More..
                            </button>
                        </div>
                    </>
                })
            }

        </div>
    )
}

export default BlogList;