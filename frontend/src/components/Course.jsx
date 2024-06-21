import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import {Link} from "react-router-dom"
const Course = () => {
  // console.log(list);
  return (
    <div className="max-w-screen-2xl container m-auto md:px-20 px-4 mb-4">
      <div className="mt-24 text-center">
        <h1 className="font-semibold md:text-4xl text-3xl ">
          We're delighted to have you{" "}
          <span className="text-pink-500"> here!!!</span>
        </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non
          ipsa consequuntur illo doloribus eaque, culpa, nobis beatae mollitia
          similique illum, rem sed asperiores. Quas sit mollitia deleniti
          laborum voluptatibus beatae dolorum explicabo, velit quae fugiat vero
          facilis minus minima consequatur nihil sed doloremque, totam
          exercitationem vel asperiores laudantium ratione.
        </p>
        <button className="bg-pink-500 px-5 py-3 hover:bg-pink-800 duration-300 rounded-lg mt-4">
         <Link to="/">Back</Link>
        </button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 my-6">
      {list.map((item) =>{
                return(
                  <Cards info = {item} key={item.id}/>
                )
              })}
      </div>
    </div>
  );
};

export default Course;
