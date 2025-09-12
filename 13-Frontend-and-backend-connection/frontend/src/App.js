import './App.css';
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-employee' element={<EmployeeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
