import React from "react";
// import list from "../../public/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom"
import axios from "axios";
import {useState,useEffect} from "react"


const Course = () => {
  // console.log(list);

  const [book, setBook] = useState([])
  
  useEffect(() => {
    const getBook = async () =>{
      try {
        const res = await axios.get("http://localhost:3000/book")
        // console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(`Error getting book: ${error.message}`)
        
      }
    }
    getBook()
  },[])
  return (
    <div className="max-w-screen-2xl container m-auto md:px-20 px-4 mb-4">
      <div className="mt-24 text-center">
        <h1 className="font-semibold md:text-4xl text-3xl ">
          We're delighted to have you{" "}
          <span className="text-pink-500"> here!!!</span>
        </h1>
        <p className="mt-12">
        We're delighted to have you here! Apni Library is your go-to digital haven for books, journals, and educational resources. We offer a diverse collection across various genres, catering to all age groups and interests. Whether you're a student, a researcher, or an avid reader, Apni Library provides easy access to knowledge and entertainment. Explore our extensive catalog, take advantage of our user-friendly interface, and dive into the world of reading from the comfort of your home. Join us in our mission to promote literacy and lifelong learning. Happy reading!
        </p>
        <button className="bg-pink-500 px-5 py-3 hover:bg-pink-800 duration-300 rounded-lg mt-4">
         <Link to="/">Back</Link>
        </button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 my-6">
      {book.map((item) =>{
                return(
                  <Cards info = {item} key={item.id}/>
                )
              })}
      </div>
    </div>
  );
};

export default Course;
