import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/users">List Users</Link>
      <Link to="/create-user">Create User</Link>
    </div>
  );
};

export default Dashboard;
