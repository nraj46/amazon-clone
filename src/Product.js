import React from 'react'
import './Product.css'

function Product({ id, title, image, price, rating }) {
    return <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small> 
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>🌟</p>
                        // https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/white-medium-star_2b50.png
                    ))}
            </div>

        </div>
        <img src={image} alt="" />
        <button>Add to basket</button>

    </div>

}

export default Product
