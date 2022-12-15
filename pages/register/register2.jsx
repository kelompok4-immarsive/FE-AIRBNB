import { useState } from "react";

//import Head from "next/head";

import Router from "next/router";

import axios from "axios";

function Register2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState([]);

  const registerHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    formData.append("phone", phone);
    formData.append("address", address);

    await axios
      .post(`http://18.183.239.8:8080/user/register`, formData)
      .then(() => {
        Router.push({
          pathname: `/login/login2`,
        });
      })
      .catch((error) => {
        setValidation(error.response);
      });
  };

  return (
    <div
      className="container"
      style={{ marginTop: "80px", marginLeft: "480px" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold">REGISTER</h4>

              <form onSubmit={registerHandler}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">NAME </label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                      />
                    </div>
                    {/* {validation.name && (
                      <div className="alert alert-danger">
                        {validation.name[0]}
                      </div>
                    )} */}
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label"> EMAIL</label>
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                      />
                    </div>
                    {/* {validation.email && (
                      <div className="alert alert-danger">
                        {validation.email[0]}
                      </div>
                    )} */}
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">PHONE</label>
                      <input
                        type="text"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="phone"
                      />
                    </div>
                    {/* {validation.name && (
                      <div className="alert alert-danger">
                        {validation.name[0]}
                      </div>
                    )} */}
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">ADDRESS </label>
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="adreess"
                      />
                    </div>
                    {/* {validation.name && (
                      <div className="alert alert-danger">
                        {validation.name[0]}
                      </div>
                    )} */}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                      />
                    </div>
                    {/* {validation.password && (
                      <div className="alert alert-danger">
                        {validation.password[0]}
                      </div>
                    )} */}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  REGISTER
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register2;
