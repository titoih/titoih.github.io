import { Route, Routes } from "react-router-dom"
import Blog from "./components/Blog";
import Cv from "./components/Cv";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App h-100">
      <header className="fs-2">
        <Navbar />
      </header>
      <section className="flex-shrink-0 mb-5 pb-5">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Form />} />
        </Routes>
      </section>
      <Footer />
    </div >
  )
}

export default App;
