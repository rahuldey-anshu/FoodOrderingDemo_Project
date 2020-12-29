import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../../components/Layout";
import './main.style.css'

class Main_Settings extends React.Component {
  render() {
    return (
      <div>
        <Layout />
         <div className="container-fluid">
        <div className="content-wrapper">
        <div className="settings">
        <h3>All Settings</h3></div>
            <div className="title_left">
              
              <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="x_panel">
                    <div className="x_title">
                      <h4> App Settings</h4>
                      <div className="clearfix" />
                    </div>
                    <div className="x_content">
                      <form
                        className="forms-sample"
                        method="POST"
                        action="processappsettings.php"
                      >
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            No. of images
                          </label>{" "}
                          <i
                            className="fa fa-question-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Maximum no. of images you want to add per item."
                          />
                          <input
                            type="number"
                            className="form-control p-input"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Maximum no. of images you want to add per item."
                            name="imagehandel"
                            defaultValue={13}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Tax %</label>{" "}
                          <i
                            className="fa fa-question-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Enter tax in percentage."
                          />
                          <input
                            type="number"
                            className="form-control p-input"
                            id="exampleInputEmail1"
                            placeholder="Enter tax in percentage."
                            name="restax"
                            required="required"
                            defaultValue={6}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Currency </label>{" "}
                          <i
                            className="fa fa-question-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Choose your currency"
                          />
                          <select
                            name="currency"
                            className="form-control"
                            required
                          >
                            <option value="INR" selected="YES">
                              INR
                            </option>
                            <option value="USD">USD</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Minimum price per order
                          </label>{" "}
                          <i
                            className="fa fa-question-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Enter minimum price per order."
                          />
                          <input
                            type="number"
                            className="form-control p-input"
                            id="exampleInputEmail1"
                            placeholder="Enter minimum price per order."
                            name="resminorder"
                            required="required"
                            defaultValue={500}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Delivery Charges
                          </label>{" "}
                          <i
                            className="fa fa-question-circle"
                            data-toggle="tooltip"
                            data-placement="top"
                            title
                            data-original-title="Enter delivery charges."
                          />
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter delivery charges."
                            name="delivery"
                            required="required"
                            defaultValue={500}
                          />
                        </div>
                        <br />
                        <label>Delivery Pin-Code:</label>{" "}
                        <i
                          className="fa fa-question-circle"
                          data-toggle="tooltip"
                          data-placement="top"
                          title
                          data-original-title="Enter all delivery pin code for your restaurant."
                        />
                        <div className="col-xs-12 table">
                          <table
                            id="employee_table"
                            align="center"
                            className="table table-striped"
                          >
                            <tbody>
                              <tr>
                                <th>Pin-code</th>
                                <th>Manage Pin code</th>
                              </tr>
                              <tr id="row1">
                                <td>
                                  <input
                                    type="text"
                                    name="pin[]"
                                    placeholder="Enter delivery pincode value."
                                    className="form-control"
                                    defaultValue={123456}
                                    required
                                  />
                                </td>
                                <td>
                                  <input
                                    type="button"
                                    className="fa fa-plus fa-4 btn btn-primary"
                                    defaultValue="DELETE"
                                    disabled
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <a
                            type="button"
                            onclick="add_row();"
                            className="fa fa-plus-circle btn btn-primary"
                          >
                            {" "}
                            Add More Pincode
                          </a>
                        </div>
                        <div className="modal-footer">
                          <input
                            type="Submit"
                            defaultValue="Update Setting"
                            className="btn btn-primary mr-2"
                            name="update"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          
          

      </div>
    );
  }
}

export default Main_Settings;
