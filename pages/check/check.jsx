import React, { useState } from "react";
import Navbar from "../../component/Navbar";
import { useRouter } from "next/router";
import Router from "next/router";

const Check = () => {
  const router = useRouter();
  //const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // const selisih = result2 - result; /// 86400000;

  const checkIn2 = parseInt(checkIn);
  // program to convert date to number
  // create date
  const d1 = new Date(checkIn);

  // converting to number
  const result = d1.getTime();

  const d2 = new Date(checkOut);

  // converting to number
  const result2 = d2.getTime();

  const selisih = result2 - result;
  const a = selisih / 86400000;

  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen bg-white">
        <div>
          <h1 className="font-semibold text-xl text-black font-semibold ml-10">
            Payment and Confirm
          </h1>
        </div>
        <div className="flex flex-row ml-10">
          <h1>Credit Card</h1>
          <select className="select select-bordered w-full max-w-xs ml-20">
            <option disabled selected>
              Visa
            </option>
            <option>BRI</option>
            <option>BCA</option>
            <option>Mandiri</option>
          </select>
        </div>
        <div className="flex flex-row my-10">
          <h1 className="ml-10">Name </h1>
          <input
            type="text"
            placeholder="Type here"
            className="input select-bordered w-full w-full max-w-xs ml-36"
          />
        </div>
        <div className="flex flex-row my-10">
          <h1 className="ml-10">Card Member</h1>
          <input
            type="text"
            placeholder="Type here"
            className="input select-bordered w-full w-full max-w-xs ml-20"
          />
        </div>
        <div className="flex flex-row my-10">
          <h1 className="ml-10">Expiration Date</h1>
          <input
            type="text"
            placeholder="Type here"
            className="input select-bordered w-full w-full max-w-xs ml-20"
          />
        </div>
        <div className="flex justify-center">
          <h1 className="text-black mt-12 font-semibold text-alta-space-cadet">
            {router?.query?.title}
          </h1>
        </div>
        <div className="flex flex-row ml-10">
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
                  Confirm and Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;
