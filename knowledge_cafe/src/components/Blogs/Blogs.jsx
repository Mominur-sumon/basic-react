import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog =>
                    <Blog blog={blog}
                    key={blog.id}  
                    handelBookmark = {handelBookmark} 
                    handleReadingTime={handleReadingTime}
                    >
                    
                    </Blog>
                )
            }
        </div>
    );
};

Blogs.propTypes = {
    handelBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blogs;