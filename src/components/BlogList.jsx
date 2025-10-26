import { IoMdEye } from "react-icons/io";
import { GrDislike, GrLike } from "react-icons/gr";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getAllBlogs } from "../API/blogApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const blogs = await getAllBlogs();
                setBlogs(blogs.posts);
                setError(null);
            } catch (err) {
                setError('Failed to fetch blogs'+ err);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const handleReadMoreBtn = (id) => {
        navigate(`/blog/${id}`);
    }

    if (loading) {
        return (
            <div className="blog-list-container shimmer">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="loading-card" key={index}>
                        <div className="loading-heading"></div>
                        <div className="loading-tags">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="loading-content">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="loading-interactions">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="loading-button"></div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="blog-list-container">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="blog-list-container">
            {blogs.map((blog) => (
                <div className="blog-card-item" key={blog.id}>
                    <h2 className="blog-card-title">{blog.title}</h2>
                    <div className="tags">
                        {blog.tags.map((tag) => (
                            <span className="tag" key={`${blog.id}-${tag}`}>{tag}</span>
                        ))}
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
            ))}
        </div>
    )
}

export default BlogList;