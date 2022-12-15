import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Card2 from "../../component/Card2";
import Category from "../../component/Category";
import axios from "axios";
import Router from "next/router";

const Stays = () => {
  const [room, setRoom] = useState("");
  //const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getRoom = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };
    axios
      .get(`http://18.183.239.8:8080/room`, config)
      .then((response) => {
        setLoading(true);
        console.log(response.data.data);
        setRoom(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDetail2 = (item, title2) => {
    Router.push({
      pathname: `/detail/${title2}`,
      query: {
        deskripsi: item.deskripsi,
        name_room: item.name_room,
        image: item.urlToImage,
        price: item.price,
      },
    });
  };

  useEffect(() => {
    getRoom();
  }, []);

  const nextPage = () => {
    //const id = 2;
    Router.push({
      pathname: `/profil/profil`,
    });
  };

  return (
    <div className="bg-white w-screen h-full ">
      <div className="navbar bg-base-100">
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
      {/* <div className="flex flex-col md:px-1 px-0 relative bg-background font-raleway items-center min-h-screen">
        <h1 className="text-4xl text-primary font-bold mt-0">Stays</h1>
      </div> */}
      {/* <div className="p-10 flex flex-column justify-center">
        {type ? (
          type.map((item) => {
            return (
              <Category
                title={item.type}
                onClick={() => setCategory(item.type)}
              />
            );
          })
        ) : (
          <></>
        )}
      </div> */}
      <div className="my-10 ml-20 text-black">
        <p className="text-xl text-black font-semibold ml-10">
          List Popular Homestay
        </p>
        <div className="flex justify-center">
          <div className="p-10 flex flex-wrap">
            {room && loading === false ? (
              room.map((item) => {
                return (
                  <Card2
                    name_room={item?.name_room}
                    deskripsi={item?.deskripsi}
                    price={item?.price}
                    onClick={() => getDetail2(item, item.name_room)}
                  />
                );
              })
            ) : (
              <div className="flex justify-center w-screen h-full bg-white">
                <h1 className="text-alta-space-cadet">Please Wait ...</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stays;
