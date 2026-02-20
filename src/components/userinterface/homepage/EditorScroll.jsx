import React from "react";
import book from "../../../assets/book.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";


export default function EditorScroll({show})
{
    var scrollRef = useRef();

  const data = [{category: "MODERN FICTION",title: "The Great Gatsby",author: "F. Scott Fitzgerald",price: "$24.00",image: book},
            {category: "BIOGRAPHY", title: "Becoming", author: "Michelle Obama", price: "$28.50",image: book,},
            {category: "CONTEMPORARY",title: "Normal People",author: "Sally Rooney",price: "$19.95",image: book},
            {category: "SCI-FI CLASSICS",title: "Dune", author: "Frank Herbert", price: "$22.00", image: book},
            {category: "MODERN FICTION",title: "The Great Gatsby",author: "F. Scott Fitzgerald",price: "$24.00",image: book},
            {category: "BIOGRAPHY", title: "Becoming", author: "Michelle Obama", price: "$28.50",image: book,},
            {category: "CONTEMPORARY",title: "Normal People",author: "Sally Rooney",price: "$19.95",image: book},
            {category: "SCI-FI CLASSICS",title: "Dune", author: "Frank Herbert", price: "$22.00", image: book}
  ];

   var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true
  };

  const showData=()=>{
    return data.map((item,i)=>{
        return(<div style={{display:'flex',flexDirection:'column',border:'1px solid grey'}}>
            <div>
                <img src={item.image}  style={{width:'70%'}}/>
            </div>

            <div className="text-primary small fw-semibold mb-1">
               {item.category}
            </div>

            <div className="fw-bold mb-0">
                {item.title}
            </div>

            <div className="text-muted small mb-1">
                 {item.author}
            </div>

            <div className="fw-bold">
                 {item.price}
            </div>

            


        </div>)
    })
  }


   const handleNext = () => {
    scrollRef.current.slickNext();
  };

  const handlePrev = () => {
    scrollRef.current.slickPrev();
  };




    return(<div style={{margin:10,padding:10,marginLeft:60}}>
        {show=='recommand'?<></>: <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <small className="text-primary fw-semibold">
              CURATED SELECTION
            </small>
            <h2 className="fw-bold mt-1">Editor’s Picks</h2>
          </div>

          <a href="#" className="text-dark text-decoration-none fw-semibold">
            View All Collection →
          </a>
        </div>}


        
        <div style={{ position: "relative" }}>

          <div onClick={handleNext} style={{ position: "absolute" ,zIndex:2, top:'28%', left:'0.5%', cursor:'pointer' }}>
            <i className="bi bi-arrow-left-circle-fill" style={{fontSize:22}}></i>
         </div>

       <Slider ref={scrollRef} {...settings}>
          {showData()}
        </Slider>

         <div onClick={handlePrev} style={{ position: "absolute" ,zIndex:2, cursor:'pointer', top:'28%',right:'0.5%' }}>
            <i className="bi bi-arrow-right-circle-fill" style={{fontSize:22}}></i>
         </div>

        
        </div>

        
    </div>)
}