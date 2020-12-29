import React from "react";


import { Jumbotron } from "react-bootstrap";
import Adminheader from "../Admin_Header/adminheader";

const Dashboard = () => {
  return (
    <div>
    <Adminheader/>
     
      <Jumbotron
        style={{ margin: "5rem", background: "white" }}
        className="text-center"
      >
        <h1>Welcome to Admin Dashboard</h1>
      </Jumbotron>
    </div>
  );
};

export default Dashboard;
