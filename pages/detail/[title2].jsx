import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../component/Navbar";
import Router from "next/router";
import Card3 from "../../component/Card3";

const Detail = () => {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  // untuk komentar
  const [komentar, setKomentar] = useState("");
  //const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getKomentar = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };
    axios
      .get(`http://18.183.239.8:8080/komentars`, config)
      .then((response) => {
        setLoading(true);
        console.log(response.data.data);
        setKomentar(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getKomentar();
  }, []);

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
          <img src={router?.query?.image} width={500} height={500} />
        </div>
        <div className="flex justify-center">
          <h1 className="text-black mt-12 font-semibold text-alta-space-cadet">
            {router?.query?.name_room}
          </h1>
        </div>
        <div className="flex justify-center ">
          <h1 className="text-black mt-3 font-semibold text-alta-space-cadet">
            Price: {router?.query?.price}
          </h1>
        </div>
        <div className="flex justify-center ">
          <h1 className="text-black mt-3 font-semibold text-alta-space-cadet">
            popular komentar
          </h1>
          {komentar
            ? komentar.map((item) => {
                return (
                  <div key={item.UserID}>
                    <h1>{item.Vote_star}</h1>
                    <h1>{item.Isi_komentar}</h1>
                  </div>
                );
              })
            : null}
        </div>
        <div className="flex justify-center">
          <h1 className="text-black mt-12 text-alta-space-cadet">
            {router?.query?.deskripsi}
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
                <h1>Price : {router?.query?.price}</h1>
                <h1>Total Price :</h1>
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
