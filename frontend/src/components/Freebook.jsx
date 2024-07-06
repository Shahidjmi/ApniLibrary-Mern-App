import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios"
import { useState,useEffect } from "react";

const Freebook = () => {
  const[book, setBook] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/book').then((res) => {
      setBook(res.data)
    }).catch((err)=>{
      console.log(`Error getting book: ${err.massage}`)
    })
  })

  const freeBook = book.filter((book) => {
    return book.cotegory === "free";
  });

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container m-auto md:px-20 px-4 mb-4">

      <div>
      <h1 className="font-semibold text-xl pb-4">Offered free books</h1>
        <p>
        Discover a treasure trove of free books at Apni Library! We offer a vast selection of free titles across various genres, including classics, contemporary fiction, non-fiction, and educational materials. Our free books collection is available to everyone, providing easy access to knowledge and entertainment without any cost. Dive into our library and start reading today!
        </p>
      </div>
      <div className="slider-container m-5">
        <Slider {...settings}>
          {freeBook.map((item)=>{
            return(
              <Cards info = {item} key={item.id}/>
            )
          })}
          
        </Slider>
      </div>
      </div>
    </>
  );
};

export default Freebook;
