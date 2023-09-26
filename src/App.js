import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the Routes component
import 'bootstrap/dist/css/bootstrap.min.css';

import { UserProvider } from './context/UserContext';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/edit-profile/:id" element={<EditProfile />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
