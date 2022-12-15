import React from "react";
import Navbar from "../../component/Navbar";
import Card from "../../component/Card";
import Router from "next/router";

const Stays2 = () => {
  const room = [
    {
      image:
        "https://www.ngobrolin.id/wp-content/uploads/2019/12/Ini-Bedanya-Homestay-Hotel-Vila-Guesthouse-dan-Losmen.jpg",
      title: "Villa Premium A3",
      description: "2 guest - 1 bedroom - 1 bed -bad pool -wifi -kitchen",
      price: "$25/nigth",
      komen1: "Siti: Suasananya sangat bagus dan menyenangkan",
      komen2: "Nurbaya: Seperti tinggal di rumah sendiri",
    },
    {
      image:
        "https://www.yuswohady.com/wp-content/uploads/2017/01/Homestay-2.jpg",
      title: "Villa Premium A1",
      description: "1 guest - 1 bedroom - 1 bed -bad pool -wifi -kitchen",
      price: "$25/nigth",
      komen1: "Budi: Tempatnya bersih dan sagat asri",
      komen2: "Deva: Harganya terjangkau , fasilitasnya bagus",
    },
    {
      image:
        "https://media.suara.com/pictures/653x366/2021/11/22/55420-cempoko-mulyo-homestay.webp",
      title: "Villa Premium A2",
      description: "1 guest - 1 bedroom - 1 bed -bad pool -wifi -kitchen",
      price: "$25/nigth",
      komen1: "Almira: Tempatnya bersih dan sagat asri",
      komen2: "Fajar: Harganya terjangkau , fasilitasnya bagus",
    },
    {
      image:
        "https://banyuwangikab.go.id/media/berita/original/5fd073697db04be34e411292e12010b5.jpg",
      title: "Villa Premium A3",
      description: "2 guest - 1 bedroom - 1 bed -bad pool -wifi -kitchen",
      price: "$25/nigth",
      komen1: "Budi: Tempatnya bersih dan sagat asri",
      komen2: "Deva: Harganya terjangkau , fasilitasnya bagus",
    },
    {
      image:
        "https://www.yuswohady.com/wp-content/uploads/2017/01/Homestay-2.jpg",
      title: "Villa Premium A3",
      description: "2 guest - 1 bedroom - 1 bed -bad pool -wifi -kitchen",
      price: "$25/nigth",
      komen1: "Siti: Suasananya sangat bagus dan menyenangkan",
      komen2: "Nurbaya: Seperti tinggal di rumah sendiri",
    },
    {
      image:
        "https://media.suara.com/pictures/653x366/2021/11/22/55420-cempoko-mulyo-homestay.webp",
      title: "Villa Premium A3",
      description: "2 guest - 1 bedroom - 1 bed -bad pool -wifi -kitchen",
      price: "$25/nigth",
      komen1: "Siti: Suasananya sangat bagus dan menyenangkan",
      komen2: "Nurbaya: Seperti tinggal di rumah sendiri",
    },
  ];
  const getDetail = (item, title) => {
    Router.push({
      pathname: `/detail/${title}`,
      query: {
        description: item.description,
        title: item.title,
        image: item.image,
        komen1: item.komen1,
        komen2: item.komen2,
      },
    });
  };

  return (
    <div className="w-screen h-full bg-white">
      <Navbar />
      <div className="my-10 ml-20 text-black">
        <p className="text-xl text-black font-semibold ml-10">
          List Popular Homestay
        </p>
        <div className="flex flex-row flex-wrap my-12">
          {room.map((item) => {
            return (
              <Card
                title={item?.title}
                description={item?.description}
                image={item?.image}
                price={item?.price}
                onClick={() => getDetail(item, item.title)}
              />
              //   <div className="card w-96 bg-white shadow-xl mx-5 my-10">
              //     <figure>
              //       <img className="w-fit" src={item.image} />
              //     </figure>
              //     <div className="card-body">
              //       <h2 className="card-title">{item.title}</h2>
              //       <p>{item.description}</p>
              //       <h2 className="card-title">{item.price}</h2>
              //       <div className="rating">
              //         <input
              //           type="radio"
              //           name="rating-1"
              //           className="mask mask-star"
              //         />
              //         <input
              //           type="radio"
              //           name="rating-1"
              //           className="mask mask-star"
              //           checked
              //         />
              //         <input
              //           type="radio"
              //           name="rating-1"
              //           className="mask mask-star"
              //         />
              //         <input
              //           type="radio"
              //           name="rating-1"
              //           className="mask mask-star"
              //         />
              //         <input
              //           type="radio"
              //           name="rating-1"
              //           className="mask mask-star"
              //         />
              //       </div>
              //     </div>
              //   </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stays2;
