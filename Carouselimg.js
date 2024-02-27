// Carousel.js
import React from 'react'
import { CarouselItem, Carousel } from 'react-bootstrap';


export default function Carouselimg() {
    return (
        <div>
            <Carousel>
                <CarouselItem>
                    <div style={{ backgroundColor: '#F5F5F5', textAlign: 'center' }}>
        <img
            className="carouselimage"
            src="https://www.foodlocale.in/wp-content/uploads/2023/01/fl_tm_food.jpg"
            alt="full meals"
            style={{ width: '90%', margin: 'auto', borderRadius: '10px' , marginTop: '20px'}}
        />
        <h3 style={{ color: '#333', marginTop: '10px' }}>Delicious Full Meal</h3>
        <p style={{ color: '#666' }}>Enjoy a satisfying and flavorful full meal</p>
    </div>
                </CarouselItem>


                <CarouselItem>
                <div style={{ backgroundColor: '#F5F5F5', textAlign: 'center' }}>
        <img
            className="carouselimage"
            src="https://www.foodlocale.in/wp-content/uploads/2023/01/fl_tm_food.jpg"
            alt="full meals"
            style={{ width: '90%', margin: 'auto', borderRadius: '10px' , marginTop: '20px'}}
        />
        <h3 style={{ color: '#333', marginTop: '10px' }}>Delicious Full Meal</h3>
        <p style={{ color: '#666' }}>Enjoy a satisfying and flavorful full meal</p>
    </div>
                </CarouselItem>
                <CarouselItem>
    <div style={{ backgroundColor: '#F5F5F5', textAlign: 'center', paddingTop: '10px' }}>
        <img
            className="carouselimage"
            src="https://myhealth-redcliffelabs.redcliffelabs.com/media/blogcard-images/3189/5de3a87e-ec91-4a32-bb73-7635d6bfb275.jpg"
            alt="chicken burger"
            style={{ width: '80%', margin: 'auto', borderRadius: '10px' }}
        />
        <h3 style={{ color: '#333', marginTop: '10px' }}>Tasty Chicken Burger</h3>
        <p style={{ color: '#666' }}>Savor the deliciousness of our chicken burger</p>
    </div>
</CarouselItem>

                
            </Carousel>
           
        </div>
       
    );
}

