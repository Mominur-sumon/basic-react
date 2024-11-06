import PropTypes from 'prop-types';
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({ blog,  handelBookmark }) => {
    const { title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
    console.log(blog);
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`Cover piture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={ handelBookmark} className='ml-2 text-red-600 text-2xl'><IoBookmarkSharp /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) =>  <span key={idx} > <a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;