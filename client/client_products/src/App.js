import logo from './logo.svg';
import './App.css';
import Create from './views/Create';
import Dashboard from './views/Dashboard'
import View from './views/View'
import Edit from './views/Edit'
import { Routes, Route, Link } from 'react-router-dom';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <h1>Your Products:</h1>
      <Link to="/create">Create</Link>
      <Routes>
        <Route path='main' element={<Main />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/edit/:id' element={<Edit />} />

      </Routes>
    </div>
  );
}

export default App;
