import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Layout from './Pages/Layout';
import Signin from './Pages/Signin'
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  index element={<Homepage />}></Route>
         <Route path="/layout" element={<Layout/>}></Route>
         <Route path = '/signin' element={<Signin/>}></Route>
         <Route path="/login" element={<Login/>}></Route> 
         <Route path="/mens"  element={<Mens/>}></Route>
         <Route path="/women" element={<Womens/>}></Route>
         <Route path="/kids" element={<Kids/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);