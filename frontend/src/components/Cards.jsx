import React from "react";

const Cards = ({info}) => {
  return (
    <>
      <div>
        <div className="card w-92  bg-base-100 shadow-xl p-3 gap-3 mt-6 hover:scale-105 duration-300 ">
          <figure>
            <img className="h-56 w-full"
              src={info.image}
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {info.name}
              <div className="badge badge-secondary">{info.cotegory}</div>
            </h2>
            <p>{info.title}</p>
            <div className="card-actions justify-between mt-3">
              <div className="badge badge-outline text-green-400">${info.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 px-2 py-3">Buy Now</div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
