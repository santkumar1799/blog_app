import Navbar from "./navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Blogdetail() {
    const params = useParams()
    const [blog, setBlog] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [id, setId] = useState(params.id);
    const navigate = useNavigate();

    const deleteBlog = (my_id) => {
        //   client.delete(`${id}`);
        //   setBlog(
        //      blog.filter((blog) => {
        //         return blog.id !== id;
        //      })
        //   );
        console.log(my_id);
        axios.delete(`http://127.0.0.1:3000/blogs/Blogdetail/${my_id}`, {
            id: my_id,
        }).then(() => {
            navigate("/");
        });

    };
    useEffect(() => {
        const getBlog = async () => {
            const response = await fetch(`http://127.0.0.1:3000/blogs/${id}`);
            const result = await response.json();
            console.log(result);
            if (response.ok) {
                setBlog(result);
            } else {
                setErrorMessage(result.message);
            }
        }
        getBlog();
    }, [])
    return (
        <>
            <Navbar />
            {blog &&
                <div className="moviedetail container">
                    <div className="card mb-3">
                        <img className="card-img-top" src={blog.image_url} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Title :&nbsp;{blog.title}</h5>
                            <h5 className="card-title">Author :&nbsp;{blog.blog_title}</h5>
                            <h5 className="card-title">Description : &nbsp;{blog.blog_descp}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <Link to={`/Editblog/${id}`}>
                        <button type="button" className="btn btn-warning m-3">
                            Edit
                        </button>
                    </Link>
                    <button type="button" onClick={() => deleteBlog(blog.id)} className="btn btn-danger">Delete</button>
                </div>
            }
        </>
    )
}
export default Blogdetail;