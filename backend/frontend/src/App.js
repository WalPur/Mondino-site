import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Pages from './pages/index';
import Interactions from './pages/Interactions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="" element={<Pages.Home/>}></Route>
          <Route path="/team" element={<Pages.Team/>}></Route>
          <Route path="/contacts" element={<Pages.Contacts/>}></Route>
          <Route path="/interactions" element={<Interactions />}></Route>
          <Route path="/application" element={<Pages.Application/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
