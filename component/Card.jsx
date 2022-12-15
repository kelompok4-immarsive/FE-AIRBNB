import React from "react";

const Card = ({ title, description, image, price, onClick }) => {
  return (
    <div className="card w-96 bg-white shadow-xl mx-4 my-20">
      <figure>
        <img src={image} onClick={onClick} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{title}</h2>
        <p className="">{description}</p>
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

export default Card;
