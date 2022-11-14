import React from 'react';
import "./Home.css"
import {Product} from '../Data/Data';
import img1 from "../image/Forent_Banner_5-min.jpg" 
import img2 from "../image/Mamaearth_banner_1-min.jpg" 
import img3 from "../image/Slider_banner_1-min.jpg" 
import Footar from "./Footar"
const Home = () => {




    const handleClick=({image,title,price,strikedOffPrice,discount})=>{



  localStorage.setItem("AddPrds",JSON.stringify({image,title,price,strikedOffPrice,discount}))
  alert("Product Added to Card")
    }

    console.log(Product)

    return (
        <div>
            <div className='Navimg'>
            

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner ms-5">
    <div className="carousel-item active crImg ">
      <img  src={img1} className="d-block w-100 h-100" alt="image"/>
      
    </div>
    <div className="carousel-item crImg">
      <img src={img2} className="d-block w-100 h-100" alt="image2"/>
      
    </div>
    <div className="carousel-item crImg">
      <img src={img3} className="d-block w-100 h-100" alt="image3"/>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


            </div>




            <div className='Personal'>
            {
                Product.personal.map(({image,title,price,strikedOffPrice,discount})=>(
                    <div>
                    <img src={image} alt="" />
                    <h5>{title}</h5>
                    <p>⭐⭐⭐⭐</p>
                    <h5 className='price' > ₹ {price} <del>{strikedOffPrice}</del> <span>{discount}</span></h5>
                    <button className='btn btn-primary' onClick={()=>handleClick({image,title,price,strikedOffPrice,discount})} >Add to Card</button>

                    

                    </div>
                ))
            }

            </div>

            <div>
            <Footar/>
            </div>
            
        </div>
    );
};

export default Home;
