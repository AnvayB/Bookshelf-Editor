import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { useState } from "react";
import axios from "axios";
import './BookModal.css'


function BookModal({ book, onClose }) {

  const [image, setImage] = useState(null); // Changed to store a single image object

  const handleSearch = () => {
    axios.get(`http://localhost:5000/images?query=${book.title}`)
      .then((res) => {
        if (res.data.images_results && res.data.images_results.length > 0) {
          // Get first image
          setImage(res.data.images_results[0]); 
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };



  return (
    <div
      className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
      >
        <AiOutlineClose
          className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
          onClick={onClose}
        />
        <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
          {book.publishYear}
        </h2>
        <h4 className='my-2 text-gray-500 w-40'>{book._id}</h4>
        <div className='flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.title}</h2>
        </div>
        <div className='flex justify-start items-center gap-x-2'>
          <BiUserCircle className='text-red-300 text-2xl' />
          <h2 className='my-1'>{book.author}</h2>
        </div>
        <div className="mt-4">
          <a href={`https://www.google.com/search?q=${book.title}+book`} target="_blank" rel="noopener noreferrer">
            <span className="text-m mr-4 text-blue-500 underline">Learn More</span>
          </a>
        </div>
        <div className="mt-4">
          <button className="search" onClick={handleSearch}>See Image</button>
            {image && <img className="cover" src={image.original} alt={image.title} width={"100px"}/>} {/* Display the first image */}
        </div>
      </div>
    </div>
  )
}

export default BookModal