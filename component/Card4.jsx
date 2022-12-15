import React from "react";

const Card4 = ({ name, email, phone, address }) => {
  return (
    <div className="card w-96 bg-white shadow-xl mx-4 my-20">
      <div className="card-body">
        <h2 className="card-title font-semibold">{name}</h2>
        <p className="">{email}</p>
        <h2 className="card-title font-semibold">{phone}</h2>
        <h2 className="card-title font-semibold">{address}</h2>
      </div>
    </div>
  );
};

export default Card4;
