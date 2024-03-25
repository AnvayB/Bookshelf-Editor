
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBooks from './pages/CreateBooks'
import DeleteBooks from './pages/DeleteBooks'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'
import Intro from './pages/Intro'

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />

    </Routes>
  )
}

export default App