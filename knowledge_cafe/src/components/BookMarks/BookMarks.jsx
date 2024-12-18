import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";


const BookMarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300">
            <h2 className="text-3xl text-center ml-4">Total Reading Time : {readingTime} min</h2>+
           <h2 className="text-3xl text-center ml-4">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =>
                    <BookMark bookmark={bookmark} key={bookmark.id}>
                    </BookMark>
                    
                )
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;