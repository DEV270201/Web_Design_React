import React,{useState,useEffect} from "react";
import "../css/Carousel.css";
import Data from "../Data/backgroundImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ()=>{
   const[index,setIndex] = useState(0);
   useEffect(()=>{
      let id =  setInterval(()=>{
           setIndex((prevValue)=> {
              return (prevValue+1) % Data.length;
           });
       },4000);
       return(()=>{
           clearInterval(id);
          }
       );
   },[index]);
   
   return(
     <div className="carousel slide" style={{backgroundImage : `url(${Data[index]})`}}>
      <div className="greet">
      <h2 className="greet_msg">{new Date().getHours() < 12 ? "Good Morning, Folk!" : (new Date().getHours() < 16 ? "Good Afternoon , Folk!" : (new Date().getHours() < 21 ? "Good Evening, Folk!" : "Good Night, Folk!"))}</h2>
      </div>
      <div className="info">
         <h2 className="carousel_head h1">Want to shop online for Tech??</h2>
         <h2 className="carousel_head h2">You have landed on the right place!!</h2>
         <button className="carousel_btn">Explore <FontAwesomeIcon icon={faLongArrowAltRight}/></button>
      </div>
     </div>
   );
}

export default Carousel;