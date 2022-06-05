import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/modals/AuthContext";
import Admin from "./pages/Admin";
import Category from "./pages/Category";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/:categoryName' exact element={<Category />} />
          <Route path='/:categoryName/search' exact element={<Category />} />
          <Route path='/:categoryName/:postId' exact element={<Post />} />
          {user && (
            <Route path='/create' element={<CreatePost />} />
          )}
          {user?.result?.isAdmin && (
            <Route path='/admin' element={<Admin />} />
          )}
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
