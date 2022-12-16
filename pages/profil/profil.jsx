import { useState, useEffect } from "react";

import Head from "next/head";

import Router from "next/router";

import axios from "axios";

import Cookies from "js-cookie";

function Dashboard() {
  const token = Cookies.get("token");

  const [user, setUser] = useState({});

  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await axios.get(`http://18.183.239.8:8080/user`).then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const logoutHanlder = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await axios.post(`http://18.183.239.8:8080/user`).then(() => {
      Cookies.remove("token");

      Router.push("/login");
    });
  };

  return (
    <div className="container" style={{ marginTop: "80px" }}>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card border-0 rounded shadow-sm">
            <div className="card-body">
              SELAMAT DATANG
              <strong className="text-uppercase">{user.name}</strong>
              <hr />
              <button onClick={logoutHanlder} className="btn btn-md btn-danger">
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
