import { Link } from "react-router-dom";
function Bloglist({ blogs}) {
    return (
        <>
            <div className="container movies">
                <div className=" movie row">
                    {blogs && blogs.map((blog, index) => (
                        <div className='movieimg'>
                            <img className="img" src={blog.image_url} alt='blog' />
                                <h5 className="card-title">Title :&nbsp;{blog.blog_title}</h5>
                                <div className="card-descp card-title">Genre :&nbsp;{blog.blog_descp}</div>
                                <Link className ="read" to={`/Blogdetail/${blog.id}`}>
                                <button className="btn btn-outline-success mb-4"  >
                                 Read More 
                                </button>
                                </Link>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}
export default Bloglist;