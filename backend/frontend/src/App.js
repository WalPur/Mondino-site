import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pages from './pages/index'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Pages.Home/>}></Route>
          <Route path="/team" element={<Pages.Team/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
