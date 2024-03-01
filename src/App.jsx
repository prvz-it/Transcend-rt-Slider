import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Layout from "./components/root/Layout";

const prvz = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/works" element={<Works/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={prvz}></RouterProvider>
    </>
  )
}

export default App
