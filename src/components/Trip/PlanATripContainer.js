import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './PlanATripContainer.css'
function TripContainer({ data }) {
    return (
        <div className='plan_MainContainer'>
            <div className='plan_Image'>

                <img src={data.url} alt={data.location} />
                <p className='heart'><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="27" height="27" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="hsl(0, 1%, 25%,0.5)" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                </svg></p>
            </div>
            <div className='plan_bottomContent'>
                <div className='RatingAndLocation'>
                    <AiFillStar style={{ marginTop: '3px' }} />
                    <p className='rating'>{data.rating} <span>`(${data.points})`</span></p>
                    <span>.</span>
                    <span className='location'>
                        {data.location}
                    </span>
                </div>
                <div className='description'>
                    <p className='descriptionText'>
                        {data.Description}
                    </p>
                </div>
                <div className='priceContainer'>
                    <p className='price'>  From &#8377;{data.price} <span> &#47;person</span></p>
                </div>
            </div>
        </div>
    )
}

export default TripContainer