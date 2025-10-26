import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "../API/blogApi";
import { useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { GrDislike, GrLike } from "react-icons/gr";
import { FaEdit, FaTrash } from "react-icons/fa";

const BlogByIdPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogsById = async () => {
      try {
        setLoading(true);
        const data = await getBlogById(id);
        setData(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch blog post' + err);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogsById();
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="blog-detail-container">
        <div className="loading-blog-detail-container">
          <div className="loding-heading"></div>
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
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-detail-container">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="blog-detail-container">
      <h1>{data.title}</h1>
      <div className="tags">
        {data.tags?.map((tag) => (
          <span className="tag" key={`${data.id}-${tag}`}>{tag}</span>
        ))}
      </div>
      <div className="user-interaction">
        <div className="user-view">
          <IoMdEye /> {data.views}
        </div>
        <div className="user-like">
          <GrLike /> {data.reactions?.likes || 0}
        </div>
        <div className="user-dislike">
          <GrDislike /> {data.reactions?.dislikes || 0}
        </div>
      </div>
      <hr />
      <p>{data.body}</p>
      <div className="blog-actions">
        <button className="update-btn">Update</button>
      </div>
    </div>
  )
}

export default BlogByIdPage;