import Header from "../homepage/Header";
import book from "../../../assets/book.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Footer from "../homepage/Footer";


export default function Wishlist()
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



    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{margin:10,padding:20,marginLeft:25,display:'flex',flexDirection:'column'}}>
            <span style={{fontSize:48,fontWeight:650,lineHeight:1.2,letterSpacing:0.7,fontFamily:'Newsreader,serief'}}>Whislist</span>
            <span style={{fontSize:16}}>A curated sanctuary for your literary pursuits.</span>
        </div>

       <div style={{margin:10,padding:10,marginLeft:60,marginRight:34}}>
         <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <small className="text-primary fw-semibold">
              RECENTLY SAVE
            </small>
            <h2 className="fw-bold mt-1">Editor’s Picks</h2>
          </div>

          <a href="#" className="text-dark text-decoration-none fw-semibold">
            View All Collection →
          </a>
        </div>
       </div>

        <div style={{ position: "relative",margin:10,marginLeft:40,padding:30 }}>

          <div onClick={handleNext} style={{ position: "absolute" ,zIndex:2, top:'30%', left:'0.5%', cursor:'pointer' }}>
            <i class="bi bi-arrow-left-circle-fill" style={{fontSize:22}}></i>
         </div>

       <Slider ref={scrollRef} {...settings}>
          {showData()}
        </Slider>

         <div onClick={handlePrev} style={{ position: "absolute" ,zIndex:2, cursor:'pointer', top:'30%',right:'0.2%',left:'93.5%' }}>
            <i class="bi bi-arrow-right-circle-fill" style={{fontSize:22}}></i>
         </div>

        </div>

        <div>
            <Footer/>
        </div>
           
    </div>)
}