import React, {useState, Fragment} from "react";
import './shop.css'
import { Rating, RatingView } from 'react-simple-star-rating'

const ReviewForm = ({handleChange,  shop, review, id}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [score, setScore] = useState('')
    const business_id = id
    const [state, setState] = useState(false)
   
    

    const handleSubmit = async(e) => {
        e.preventDefault()

        const res = await fetch(`/businesses/${id}/reviews`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title, description, score, business_id  }),
      });
      setState(!state)
      setTitle('')
      setDescription('')
      setScore('')
    }

    const ratingOptions = [1,2,3,4,5].map((score1, index) => {
        return (
        <Fragment>
        <input type='radio' value={score1} name='rating' onChange={(e) => setScore(e.target.value)}></input>
        <label className='label'></label>
        </Fragment>
    )
})

const handleRate =(rate) =>{
    setScore(rate)
}
    return (
        <div className='wrapper3'>
            <form onSubmit={handleSubmit}>
                <div className='text1'>Have an experience with {shop.name}? Share your review?</div>
                <input onChange={(e) => e.target.value} value={id} type='hidden' name='business_id' placeholder='Review Title'></input>
                <div className='field'>
                    <input className='input' onChange={(e) => setTitle(e.target.value)}  value={title} type='text' name='title' placeholder='Review Title'></input>
                </div>
                <div className='field'>
                    <textarea className='input' onChange={(e) => setDescription(e.target.value)}  value={description} name='description' placeholder='Review Description'></textarea>
                </div>
                <div className='field'>
                    <div className='rating-container'>
                        <div className='rating-title-text'>
                            <h3>Rate this business</h3>
                            <Rating size='50px' onClick={handleRate} ratingValue={score}/>
                        </div>
                    </div>
                </div>
            <button className='btn' type='submit'>Submit Your Review</button>
            <span><a href="#"></a></span>
            {/* <Star /> */}
            </form>
        </div>
    )
}

export default ReviewForm