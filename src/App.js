import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./route and navigation/Nav";
import Home from "./route and navigation/Home";
import Blog from "./route and navigation/Blog";
import About from "./route and navigation/About";
import Error from "./route and navigation/Error";
import BlogValue from "./route and navigation/BlogValue";
import Users from "./route and navigation/Users";
import AddBlog from "./route and navigation/AddBlog";
import { useState } from "react";
import Protected from "./route and navigation/Protected";

function App() {
  // for ptotected routing this state is taking
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {isLogged ? (
          <button onClick={() => setIsLogged(!isLogged)}>log in</button>
        ) : (
          <button onClick={()=>setIsLogged(!isLogged)}>logout</button>
        )}
        <Routes>
          <Route path="/" element={<Home />}>
            Home
          </Route>
          <Route path="/blog" element={<Blog />}>
            blog
          </Route>
          <Route path="/blog/:title" element={<BlogValue />}>
            blog
          </Route>
          <Route path="/about" element={<About />}>
            about
          </Route>
          <Route path="*" element={<Error />}>
            error
          </Route>
          <Route path="/users" element={<Users />}>
            about
          </Route>
          <Route path="/users/:id" element={<Users />}>
            about
          </Route>
          <Route path="/addblog" element={<Protected isLogged={isLogged}><AddBlog/></Protected>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
