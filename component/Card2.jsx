import React from "react";

const Card2 = ({ name_room, deskripsi, image, price, onClick }) => {
  return (
    <div className="card w-96 bg-white shadow-xl mx-4 my-20">
      <figure>
        <img
          src="https://www.yuswohady.com/wp-content/uploads/2017/01/Homestay-2.jpg"
          onClick={onClick}
          alt="room"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{name_room}</h2>
        <p className="">{deskripsi}</p>
        <h2 className="card-title font-semibold">{price}</h2>
        <div className="rating">
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            checked
          />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
        </div>
      </div>
    </div>
  );
};

export default Card2;
