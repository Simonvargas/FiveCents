import React, {useState, useEffect} from 'react';
import './shop.css'
import { RatingView } from 'react-simple-star-rating'
const Header = ({shop}) => {
   const reviews = shop.reviews.length
   const allReviews = shop.reviews
    return ( 
    <div className='wrapperhead'>
      <h1 className='h1'><img className='imgid' src={shop.image_url}/>{shop.name}</h1>
        <div className='wrapped1'>
            <div className='totalReviews'>{reviews} User Reviews</div>
            <div className='starRating'></div>
            <div className='totalOutof'>{(Math.round(shop.avg_score * 100) / 100).toFixed(2)} out of 5 stars</div>
            <div>
                {allReviews?.map(review => {
                return (
                    <div className='card'>
                        <RatingView ratingValue={review.score} size={30} className="foo" />
                        <div className='title1'>{review.title}</div>
                        <div className='description1'>{review.description}</div>
                    </div>
                )
            })}</div>
        </div>
    </div>
    
    )
}

export default Header
