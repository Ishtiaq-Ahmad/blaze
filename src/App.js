import './App.css';
import Dashboard from './View/Dashboard'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div >
    <Routes>
      <Route path ="/" element={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
