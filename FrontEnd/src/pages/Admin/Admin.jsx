
import React from 'react';
import './Admin.scss';
import Sidebar from './Sidebar';
import Header from './Header';
import Table from './Table';
import Form from './Form';


const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="main">
        <Header />
        <Table />
        <Form />
      </div>
    </div>
  );
};

export default Admin;

