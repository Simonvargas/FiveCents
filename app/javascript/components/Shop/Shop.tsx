import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ReviewForm from './ReviewForm';

import './shop.css'

const Shop = () => {
    const [shop, setShop] = useState([])
    const [review, setReview] = useState({})
    const { id } = useParams()
    const [loaded, setLoaded] = useState(false)
    const business_id = id
    useEffect(() => {
        (async function () {
          const res = await fetch(`/businesses/${id}`)
    
          if (res.ok) {
            const oneShop = await res.json()
            setShop(oneShop)
            setLoaded(true)
          }
        })()
      }, [])

      const handleChange = (e) => {
          e.preventDefault()
          setReview({...review, [e.target.name]: e.target.value})
      }

      const handleSubmit = async(e) => {
          e.preventDefault()

          const res = await fetch(`/businesses/${id}/reviews`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({review, business_id }),
        });
      }
//////////
    return ( 
    <div className='wrapper'>
        {loaded &&
        <Fragment>
        <div className='column'>
            <div className='main'>
            
            <Header shop={shop}/>
            </div>
            <div className='reviews'></div>
        </div>
        <div className='column2'>
            <ReviewForm 
            handleChange={handleChange}
            // handleSubmit={handleSubmit}
            shop={shop}
            review={review}
            id={id}
            />
           
        </div>
        </Fragment>
}   
    </div>
    
    )
}

export default Shop