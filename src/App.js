import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>}/>
          <Route path="/exclusivebrands" element={<h1>Exclusive Brands</h1>}/> 
          <Route path="/stores" element={<h1>Stores</h1>}/>
          <Route path="/deals" element={<h1>Deals</h1>}/>
          <Route path="/shopravel" element={<h1>SHOP Travel</h1>}/>
          <Route path="/departments" element={<h1>Departments</h1>}/>
          <Route path="/shopbuddy" element={<h1>shopbuddy</h1>} />
          <Route path="/shopLocal" element={<h1>SHOP Local</h1>}/>

       </Routes>

    </div>
  );
}

export default App;