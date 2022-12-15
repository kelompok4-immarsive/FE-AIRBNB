import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../component/Navbar";
import Router from "next/router";

const Detail = () => {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // const selisih = result2 - result; /// 86400000;

  const checkIn2 = parseInt(checkIn);
  // program to convert date to number
  // create date
  const d1 = new Date(checkIn);
  console.log(d1);

  // converting to number
  const result = d1.getTime();
  console.log(result);

  const d2 = new Date(checkOut);
  console.log(d2);

  // converting to number
  const result2 = d2.getTime();
  console.log(result2);
  const selisih = result2 - result;
  const a = selisih / 86400000;

  //const harga= {router?.query?.price};
  console.log(router.query.title);
  const nextPage = () => {
    Router.push({
      pathname: `/check/check`,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen bg-white">
        <div className="flex justify-center">
          <img
            src="https://www.yuswohady.com/wp-content/uploads/2017/01/Homestay-2.jpg"
            width={500}
            height={500}
          />
        </div>
        <div className="flex justify-center">
          <h1 className="text-black mt-12 font-semibold text-alta-space-cadet">
            {router?.query?.title}
          </h1>
        </div>
        <div className="flex justify-center ">
          <h1 className="text-black mt-3 font-semibold text-alta-space-cadet">
            {router?.query?.price}
          </h1>
        </div>
        <div className="flex justify-center mx-60">
          <h1 className="text-black mt-2 text-alta-space-cadet">
            {router?.query?.deskripsi}
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-black mt-2 font-semibold text-alta-orange">
            {router?.query?.komen1}
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-black mt-0 font-semibold text-alta-orange">
            {router?.query?.komen2}
          </h1>
        </div>
        <div className="flex justify-center ml-30">
          <div className="mt-10 w-1/2 sm:mx-auto lg:mx-0">
            <div className="md:grid md:grid-cols-6 gap-1 flex flex-col">
              <div className="rounded-l-lg col-span-2 col-span-2 flex flex-col py-2 items-center bg-info ml-30">
                <label
                  for="check-in"
                  className="py-3 text-sm font-semibold uppercase ml-30"
                >
                  Check-in
                </label>
                <input
                  id="startDate"
                  type="date"
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="col-span-2 py-2 flex flex-col items-center bg-info ml-30">
                <label
                  for="check-out"
                  className="py-2 text-sm font-semibold uppercase"
                >
                  Check-out
                </label>
                <input
                  id="check-out"
                  type="date"
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div className="col-span-2 py-2 flex flex-col items-center bg-info ml-30">
                <h1>Total Day : {a}</h1>
                <h1>Price : Rp {router?.query?.price}</h1>

                <h1>Total Price :Rp {router?.query?.price * a}</h1>
                <button className="btn btn-warning" onClick={() => nextPage()}>
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
