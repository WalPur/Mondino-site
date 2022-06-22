import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Pages from './pages/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="" element={<Pages.Home/>}></Route>
          <Route path="/team" element={<Pages.Team/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
