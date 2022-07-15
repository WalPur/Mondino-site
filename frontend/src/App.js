import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import {
  Home,
  Team,
  Contacts,
  Application,
  Interactions,
  Request,
} from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="" element={<Home/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/interactions" element={<Interactions/>}></Route>
          <Route path="/application" element={<Application/>}></Route>
          <Route path="/request/:id" element={<Request/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
