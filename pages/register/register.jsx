import React, { useState } from "react";
import Router from "next/router";
import axios from "axios";

const Register = () => {
  // const [createuser, setCreateuser] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   phone: "",
  //   address: "",
  //   role: "traveller",
  // });
  // const postUser = async (e) => {
  //   e.preventDefault();
  //   const { name, email, password, phone, address, role } = createuser;
  //   axios
  //     .post(
  //       `http://18.183.239.8:8080/user/register`,
  //       {
  //         name,
  //         email,
  //         password,
  //         phone,
  //         address,
  //         role,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // };

  // console.log(createuser);

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
        Router.push(`/login/login`);
      })
      .catch((error) => {
        setValidation(error.response);
      });
  };

  const nextPage = () => {
    Router.push({
      pathname: `/login/login`,
    });
  };
  return (
    <div className="bg-orange-900 w-full h-full ">
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              {/* <form onSubmit={(e) => postUser(e)}> */}
              <form onSubmit={registerHandler}>
                <div>
                  <h1>Register</h1>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="name"
                  />
                  {/* <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    onChange={(e) =>
                      setCreateuser({ ...createuser, name: e.target.value })
                    }
                    value={createuser.name}
                  /> */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                  />
                  {/* <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    onChange={(e) =>
                      setCreateuser({ ...createuser, email: e.target.value })
                    }
                    value={createuser.email}
                  /> */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                  />
                  {/* <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) =>
                      setCreateuser({ ...createuser, password: e.target.value })
                    }
                    value={createuser.password}
                  /> */}
                  {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="phone"
                  />
                  {/* <input
                    type="number"
                    placeholder="phone number"
                    className="input input-bordered"
                    onChange={(e) =>
                      setCreateuser({ ...createuser, phone: e.target.value })
                    }
                    value={createuser.phone}
                  /> */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="adreess"
                  />
                  {/* <input
                    type="text"
                    placeholder="address"
                    className="input input-bordered"
                    onChange={(e) =>
                      setCreateuser({ ...createuser, address: e.target.value })
                    }
                    value={createuser.address}
                  /> */}
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-warning">Register</button>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Already have an Account ?
                  </a>
                  <button
                    className="btn btn-warning"
                    onClick={() => nextPage()}
                  >
                    Login
                  </button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
