import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './container/auth/register';
import Login from './container/auth/login';
import PrivateRoute from './utils/privateRoute';
import Contacts from './container/contacts/contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={< Login />}></Route>
          <Route path='/register' element={< Register />}></Route>
          <Route path='/contacts' element={<PrivateRoute> <Contacts /></PrivateRoute>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
