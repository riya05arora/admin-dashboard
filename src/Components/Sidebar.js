// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="sidebar">
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/users">Users</Link>
    <Link to="/settings">Settings</Link>
  </div>
);

export default Sidebar;
