
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handelBookmark = blog => {
    console.log("bookmar adding soon");
  }

  return (
    <>

      <Header></Header>
      
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handelBookmark = { handelBookmark}></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App

