//import React from "react";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const postProject = async (e) => {
    e.preventDefault();
    const temp = {
      email: email,
      password: password,
    };
    await setEmail(email);
    await setPassword(password);
    axios
      .post("http://18.183.239.8:8080/auth", temp)
      .then(function (response) {
        sessionStorage.setItem(`token`, response.data.data.token);
        sessionStorage.setItem(`role`, response.data.data.role);

        Router.push(`/stays/stays`);
      })
      .catch(function (error) {
        setError(error);
        alert("wrong email or password");
      });
  };

  const nextPage = () => {
    Router.push({
      pathname: `/register/register`,
    });
  };
  return (
    <div className="bg-orange-900 w-full h-full ">
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={(e) => postProject(e)}>
              <div className="card-body">
                <div>
                  <h1>Login</h1>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-warning">Login</button>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Don't have an account yet ?
                  </a>
                  <button
                    className="btn btn-warning"
                    onClick={() => nextPage()}
                  >
                    Register
                  </button>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
