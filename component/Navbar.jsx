import React from "react";
import Router from "next/router";

const Navbar = () => {
  const nextPage = () => {
    //const id = 2;
    Router.push({
      pathname: `/profil/profil`,
    });
  };
  return (
    // <div className="w-screen">
    //   <div className="">
    <div className="navbar bg-base-600">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Airbnb App</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between" onClick={() => nextPage()}>
                Profile
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
