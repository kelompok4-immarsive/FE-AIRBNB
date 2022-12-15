import { useState, useEffect } from "react";

//import Head from "next/head";

import Router from "next/router";

import axios from "axios";

import Cookies from "js-cookie";

function Login2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState([]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    await axios
      .post(`http://18.183.239.8:8080/auth`, formData)
      .then((response) => {
        Cookies.set("token", response.data.data.token);

        Router.push("/stays/stays");
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  // useEffect(() => {
  //   // if (Cookies.get("token")) {
  //   //   Router.push("/stays/stays2");

  //   // }
  //   loginHandler();
  // }, []);

  return (
    //
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              <h4 className="fw-bold">HALAMAN LOGIN</h4>
              <hr />
              {validation.message && (
                <div className="alert alert-danger">{validation.message}</div>
              )}
              <form onSubmit={loginHandler}>
                <div className="mb-3">
                  <label className="form-label">ALAMAT EMAIL</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan Alamat Email"
                  />
                </div>
                {validation.email && (
                  <div className="alert alert-danger">
                    {validation.email[0]}
                  </div>
                )}
                <div className="mb-3">
                  <label className="form-label">PASSWORD</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan Password"
                  />
                </div>
                {validation.password && (
                  <div className="alert alert-danger">
                    {validation.password[0]}
                  </div>
                )}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login2;
