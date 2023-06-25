import Home from "./Home.tsx"
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Nav from "./Nav.tsx"
import "./styles/index.css"

function App() {

  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
