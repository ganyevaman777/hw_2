import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header/Header"
import About from "./Pages/about/About"
import BasketList from "./Pages/basket/BasketList";


function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Header/>
              <Routes>
                  <Route path="/" element={<BasketList/>}/>
                  <Route path="/about" element={<About/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
