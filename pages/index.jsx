import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Router from "next/router";

const Home = () => {
  const nextPage = () => {
    Router.push({
      pathname: `/register/register`,
    });
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMO_X_dkMy8Dbf2I3T6gjngn3DcIVyXBWLUw&usqp=CAU')] w-full h-full bg-cover bg-center bg-no-repeat">
        <div className=" h-screen flex flex-col">
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">Airbnb App</a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a onClick={() => nextPage()}>Register</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-40 flex justify-center">
            <div className="">
              <div>
                <h1 className="mt-10 font-semibold text-3xl text-white ">
                  Best Choice for Family
                </h1>
              </div>
              <h1 className="font-bold text-7xl text-white">STAY WITH US,</h1>
              <h1 className="font-bold text-7xl text-white">FELL AT HOME</h1>
              <button className="btn btn-warning ">Explore More </button>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col">
          <div>
            <h1 className="mt-10 font-semibold text-3xl text-white">
              Best Choice for Family
            </h1>
          </div>
          <h1 className="font-bold text-7xl text-white">STAY WITH US,</h1>
          <h1 className="font-bold text-7xl text-white">FELL AT HOME</h1>
          <button className="btn btn-warning">Explore More </button>
        </div> */}
      </div>
    </div>
  );
};
export default Home;
