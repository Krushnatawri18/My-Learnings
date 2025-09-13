import './App.css';
import {Toaster} from 'react-hot-toast'
import Home from './components/Home';
import EmployeeForm from './components/EmployeeForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-employee' element={<EmployeeForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
