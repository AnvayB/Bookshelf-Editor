// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react"
import axios from "axios"
import Spinner from "../components/Spinner"
import { Link } from "react-router-dom"
// import AiOutlineEdit from "react-icons/ai"
// import BsInfoCircle from "react-icons/bs"
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'


function Home() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5555/books')
      .then((res) => {
        setBooks(res.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }, [])
  console.log("hello")


  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3x1 my-8">Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className="text-sky-800 text-4x1" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600">No</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      )}
    </div>
  )
}

export default Home