import axios from "axios";
import { useState } from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

function Addblog(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageurl] = useState('');
    const [blogImage, setBlogimage] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();
    const [selectedFile, setFile] = useState({ name : ""});

    let add = () => {
        // const formData = new FormData();
        // console.log('selectedFile', selectedFile)
        //         formData.append("blog_title", title);
        //         formData.append("blog_descp", description);
        //         formData.append("users_id", 1);
        //         formData.append("file", selectedFile);
                // {
                    //     blog_title: title,
                    //     blog_descp: description,
                    //     users_id: 1
                    // }
    //             axios
    //                 .post("http://127.0.0.1:3000/blogs", formData)
    //                 .then((res) => {
    //                 alert("File Upload success");
    //                 })
    // .catch((err) => alert("File Upload Error"));
    // value={selectedFile.name}
    //       onChange={(e) => { console.log(e); setFile(e.target.files[0])}}
        axios.post("http://127.0.0.1:3000/blogs",{
                blog_title: title,
                blog_descp: description,
                image_url: imageUrl,
                blog_image: blogImage,
                users_id: 1
            } ).then(()=>{
            navigate("/");
        })
    }
    return (
        <>
            <Navbar/>
            <h1 className="text-center heading">Create a Blog</h1>
            <div className="moviedetail container">
                    <div className="card mb-3 addBlog">
                        <div className="blog-title">
                        <label>Title</label>
                        <br></br>
                        <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter your blog title" className="blog-input"/>
                        </div>
                        <div className="blog-descp">
                        <label>Description</label>
                        <br></br>
                        <textarea onChange={(e) => setDescription(e.target.value)} className="desc-text blog-input" id="desc"></textarea>
                        </div>
                        <input  onChange={(e) => setImageurl(e.target.value)} placeholder="Enter your image URL" type="text" className="form-control update" />
                        <button type="button" onClick={() => add()} className="btn btn-outline-success m-2">Add Blog</button>
                    </div>
                </div>
        </>
    );
}
// accept="image/jpeg" 
export default Addblog