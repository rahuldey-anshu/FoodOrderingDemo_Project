import React from "react";
import Layout from "../../components/Layout/index.js";

import { Jumbotron } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Layout></Layout>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6"></div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>0</h3>
                      <h4>Orders</h4>
                    </div>
                    <div className="icon">
                      <i className="fa fa-truck" />
                    </div>
                    <a href="#" className="small-box-footer">
                      All orders here{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>6</h3>
                      <h4>Categories</h4>
                    </div>
                    <div className="icon">
                      <i className="ion fa fa-list-alt" />
                    </div>
                    <a href="#" className="small-box-footer">
                      All Categories here{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>17</h3>
                      <h4>Menu Items</h4>
                    </div>
                    <div className="icon">
                      <i className="ion fa fa-cutlery" />
                    </div>
                    <a href="#" className="small-box-footer">
                      All menu items here{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>0</h3>
                      <h4>Active Members</h4>
                    </div>
                    <div className="icon">
                      <i className="ion fa fa-user" />
                    </div>
                    <a href="#" className="small-box-footer">
                      All members here{" "}
                      <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-7 connectedSortable">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fas fa-chart-pie mr-1" />
                        Sale graph of last 10 orders
                      </h3>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content p-0">
                        {/* Morris chart - Sales */}
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{ position: "relative", height: 250 }}
                        >
                          <Jumbotron
                            style={{ margin: "1rem" }}
                            className="text-center"
                          >
                            <h1>No order yet</h1>
                            <p>Best of Luck for your first order</p>
                          </Jumbotron>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                </section>
                {/* /.Left col */}
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                <section className="col-lg-4 connectedSortable">
                  {/* Map card */}
                 <div className="">
  <div >
    <div className="x_title">
      <h2>Latest Menu Item</h2>
      <div className="clearfix" />
    </div>
    <ul className="list-unstyled top_profiles scroll-view">
   

      
      <li className="media event">
        <img className="pull-left border-aero profile_thumb" src="uploads/primary/717tandoorichiken.jpg" alt="" height={50} />
        <div className="media-body">
          <a className="title" href="#">tandoori chiken</a>
          <p><strong>Available. </strong> </p>
          <p />
        </div>
      </li>
      <li className="media event">
        <img className="pull-left border-aero profile_thumb" src="#" alt="" height={50} />
        <div className="media-body">
          <a className="title" href="viewproductsdetails.php?id=NDU=">Nodels</a>
          <p><strong>Available. </strong> </p>
          <p />
        </div>
      </li>
      <li className="media event">
        <img className="pull-left border-aero profile_thumb" src="#" alt="" height={50} />
        <div className="media-body">
          <a className="title" href="#">Myagi</a>
          <p><strong>Available. </strong> </p>
          <p />
        </div>
      </li>
      <li className="media event">
        <img className="pull-left border-aero profile_thumb" src="uploads/primary/204675juice.jpg" alt="" height={50} />
        <div className="media-body">
          <a className="title" href="viewproductsdetails.php?id=NDI=">Juice</a>
          <p><strong>Available. </strong> </p>
          <p />
        </div>
      </li>
    </ul>
  </div>
</div>

                  {/* /.card */}
                  {/* solid sales graph */}
                </section>
                {/* right col */}
              </div>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
      </div>
    );
  }
}

export default Home;
