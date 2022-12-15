import React from "react";

const Card3 = ({ Vote_star, Isi_komentar }) => {
  return (
    <div className="card w-96 bg-white shadow-xl mx-4 my-20">
      <div className="card-body">
        <h2 className="card-title font-semibold">{Vote_star}</h2>
        <p className="">{Isi_komentar}</p>
      </div>
    </div>
  );
};

export default Card3;
