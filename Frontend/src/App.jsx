import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./page/navbar"
import Register from "./page/Register"
import Login from "./page/Login"
import Upload from "./page/uploadMusic"
import CreateAlbum from "./page/createAlbum"
import Home from "./page/home"
import ProtectedRoute from "./Routes/protection.route"
import ArtistSong from "./page/artistSong"

const App = () => {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Home/></>} />
        <Route path="/login" element={<><Login /></>} />
        <Route path="/register" element={<><Register /></>} />
        <Route path="/uploadmusic" element={<><ProtectedRoute><Navbar /><Upload /></ProtectedRoute></>} />
        <Route path="/createAlbum" element={<><ProtectedRoute><Navbar /><CreateAlbum /></ProtectedRoute></>} />
        <Route path="/artist/:id" element={<><Navbar /><ArtistSong /></>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App