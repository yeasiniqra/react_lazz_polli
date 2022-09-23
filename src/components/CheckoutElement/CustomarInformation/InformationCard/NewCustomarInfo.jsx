import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../../../Sheared/alert/Alert";

const NewCustomarInfo = () => {
  const [alert, setAlert] = useState({ show: false, text: "" });

  const alertCloseHandler = () => {
    setAlert({ show: false, text: "" });
  };

  const checkClickHandler = () => {
    setAlert({
      show: true,
      text: `Your submission has been received. Your order number is "007230090".Our agent will call your number "0172000000" to reconfirm.`,
    });
  };

  return (
    <>
      <div id="Tab1" className="tabcontent">
        <div className="customar-detaits-main">
          <h2>Customer Details</h2>
          <div className="customar-dts-from">
            <form>
              <div className="customar-dts-from-flex">
                <div className="customar-dts-from-inner-flex">
                  <div className="custom-input-resort">
                    <label htmlFor="fname">First name *</label>
                    <input
                      type="text"
                      name=""
                      id="fname"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="custom-input-resort">
                    <label htmlFor="lname">Last name *</label>
                    <input
                      type="text"
                      name=""
                      id="lname"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="custom-input-resort">
                    <label htmlFor="cname">Gender *</label>
                    <select name="" id="cname">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="customar-dts-from-inner-flex">
                  <div className="custom-input-resort">
                    <label htmlFor="ename">Email *</label>
                    <input
                      type="email"
                      name=""
                      id="ename"
                      placeholder="Email"
                    />
                  </div>

                  <div className="custom-input-resort">
                    <label htmlFor="pname">Phone *</label>
                    <input type="text" name="" id="pname" placeholder="Phone" />
                  </div>

                  <div className="custom-input-resort">
                    <label htmlFor="cname">Country *</label>
                    <select name="" id="cname">
                      <option>Bangladesh</option>
                      <option>India</option>
                      <option>Ugenda</option>
                    </select>
                  </div>
                </div>

                <div className="customar-dts-from-inner-flex customar-dts-from-inner-flex2">
                  <div className="custom-input-resort">
                    <label htmlFor="cname">City *</label>
                    <input type="text" name="" id="cname" placeholder="City" />
                  </div>

                  <div className="custom-input-resort">
                    <label htmlFor="stname">State *</label>
                    <input
                      type="text"
                      name=""
                      id="stname"
                      placeholder="State"
                    />
                  </div>

                  <div className="custom-input-resort">
                    <label htmlFor="pname">Postal Code *</label>
                    <input
                      type="text"
                      name=""
                      id="pname"
                      placeholder="Postal Code"
                    />
                  </div>

                  <div className="custom-input-resort">
                    <label htmlFor="faname">Fax *</label>
                    <input type="text" name="" id="fname" placeholder="Fax" />
                  </div>
                </div>

                <div className="custom-input-resort extera-adrs">
                  <label htmlFor="aname">Address *</label>
                  <textarea name="" id="aname" placeholder="Address"></textarea>
                </div>

                <div className="customar-dts-from-inner-flex customar-dts-from-inner-flex2">
                  <div className="custom-input-resort">
                    <label htmlFor="idname">Identity *</label>
                    <select name="" id="idname">
                      <option>Passport</option>
                      <option>Driving License</option>
                      <option>National ID</option>
                    </select>
                  </div>

                  <div className="custom-input-resort">
                    <label htmlFor="noname">No *</label>
                    <input type="text" name="" id="noname" placeholder="No" />
                  </div>

                  <div className="custom-input-resort input-append ">
                    <label htmlFor="exname">Expiry Date *</label>
                    <input
                      type="Date"
                      name=""
                      id="exname"
                      placeholder="Expiry Date"
                    />
                    <button className="add-on" type="button">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                    </button>
                  </div>

                  <div className="custom-input-resort input-append ">
                    <label htmlFor="dbname">Date of Birth *</label>
                    <input
                      type="Date"
                      name=""
                      id="dbname"
                      placeholder="Date of Birth"
                    />
                    <button className="add-on" type="button">
                      <i className="fa fa-calendar" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                <p className="trams-condition">
                  <label>
                    <input
                      className="trams-checkbox"
                      type="checkbox"
                      name="tos"
                      value="1"
                    />
                    I agree with{" "}
                    <Link to="#" target="_blank">
                      Terms and Conditions
                    </Link>
                  </label>
                </p>
                <div className="book_table_item dtl-btn">
                  <button
                    data-modal="modal-one"
                    type="button"
                    onClick={checkClickHandler}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Alert show={alert.show} text={alert.text} onClose={alertCloseHandler} />
    </>
  );
};

export default NewCustomarInfo;
