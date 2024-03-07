import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>
       <Route index element={<Home />}></Route>
       <Route path="/portfolio" element={<Projects />}></Route>
       <Route path="/education" element={<Education />}></Route>
       <Route path="/experience" element={<Experience />}></Route>  
       <Route path="/about" element={<About />}></Route>  
           
    </Route>)
  );


  return (
    <RouterProvider router={router} />
  )
}

export default App
