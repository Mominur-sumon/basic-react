
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handelBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleReadingTime = (time) =>{
    setReadingTime(readingTime + time);
  }

  return (
    <>

      <Header></Header>
      
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleReadingTime={handleReadingTime} handelBookmark = { handelBookmark}></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime={readingTime} ></BookMarks>
      </div>
    </>
  )
}

export default App

