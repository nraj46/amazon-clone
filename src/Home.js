import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" alt="All-new Ring Alarm Kit" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmI5MDQwZjEt/ZmI5MDQwZjEt-ZmMxNGZiOTQt-w1500._CB429000162_.jpg"></img>
            {/* <img className="home__image" src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_MMM_S3/5207c389-f678-42e7-8237-9015fc84053b._UR3000,600_SX1500_FMjpg_.jpg" alt="The Marvelous Mrs Maisel - Season 3" loading="eager" /> */}

            <div className = 'home__row'>
            <Product
                id="11"
                title="Sony Noise Cancelling Headphones WH1000XM3: Wireless Bluetooth Over the Ear Headset with Mic for phone-call and Alexa voice control - Industry Leading Active Noise Cancellation – Black"
                price={20.00}
                rating={3}
                image = "https://m.media-amazon.com/images/I/31ORARvYVOL._AC_SY149_.jpg"
            />
            <Product
                id="12"
                title="Men's 8926OB Pro Diver Stainless Steel Automatic Watch with Link Bracelet"
                price={20.00}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/41gUPeErcgL._AC_UL260_SR200,260_.jpg"
            />
            
            </div>
            <div className = 'home__row'>
            <Product
                id="21"
                title="JBL FLIP 5 - Waterproof Portable Bluetooth Speaker - Black (New Model)"
                price={20.00}
                rating={3}
                image = "https://m.media-amazon.com/images/I/31cvEaywM6L._AC_SY149_.jpg"
               
            />
            <Product
                id="22"
                title="Samsung Chromebook 4 Chrome OS 11.6 HD Intel Celeron Processor N4000 4GB RAM 64GB eMMC Gigabit Wi-Fi -XE310XBA-K02US"
                price={20.00}
                rating={3}
                image="https://m.media-amazon.com/images/I/41QLZRBgosL._AC_SY149_.jpg"
            />
            <Product
                id="23"
                title="Powerbeats Pro Wireless Earphones - Apple H1 Headphone Chip, Class 1 Bluetooth, 9 Hours Of Listening Time, Sweat Resistant Earbuds - Black"
                price={20.00}
                rating={3}
                image="https://m.media-amazon.com/images/I/31tLVPLQHLL._AC_SY149_.jpg"
            />
            
            </div>
            <div className = 'home__row'>
            <Product
                id="31"
                title="Sony X900H 55 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
                price={20.00}
                rating={3}
                image = "https://m.media-amazon.com/images/I/418uBvf4kYL._AC_SY149_.jpg"
               
            />
            </div>

            {/* product id,title,price,rating ,image */}
        </div>
    )
}

export default Home
