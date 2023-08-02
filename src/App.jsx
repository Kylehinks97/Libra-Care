import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from './NavigationBar';
import Home from './Home.jsx'

function App() {
  return (
    <BrowserRouter>
    <NavigationBar />
     
      <Home />
    
      
    </BrowserRouter>
  );
}

export default App;
