import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import PrivateRoute from './utils/privateRoute';
import Contacts from './components/contacts/contacts';
import AddContacts from './components/contacts/addContact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={< Login />}></Route>
          <Route path='/register' element={< Register />}></Route>
          <Route path='/contacts' element={<PrivateRoute> <Contacts /></PrivateRoute>}></Route>
          <Route path='/add-contacts' element={<PrivateRoute> <AddContacts /></PrivateRoute>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
