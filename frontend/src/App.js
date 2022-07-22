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
  Faq,
  Registration,
} from './pages';
import Topic from './components/topic/topic';
function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', height: '100%', }}>
      <BrowserRouter>
        <Header/>
        <div style={{ flexGrow: 1, height: '100%' }}>
          <Routes>
            <Route path="" element={<Home/>}></Route>
            <Route path="/team" element={<Team/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
            <Route path="/interactions" element={<Interactions/>}></Route>
            <Route path="/application" element={<Application/>}></Route>
            <Route path="/request/:id" element={<Request/>}></Route>
            <Route path="/faq" element={<Faq/>}></Route>
            <Route path="/faq/topic/:id" element={<Topic/>}></Route>
            <Route path="/faq/page/:id" element={<Registration/>}></Route>
          </Routes>
        </div>
        <Footer style={{ justifySelf: "end" }} />
      </BrowserRouter>
    </div>
  );
}

export default App;
