
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Products from './Pages/Products';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path='/products' element={<Products/>} />
        

      </Routes>
    </div>
  );
}

export default App;
