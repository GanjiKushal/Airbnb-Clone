import React from 'react'
import './WeekComponent.css'
import photo from '../../images/1.webp'
function WeekComponent({ data }) {
  return (
    <div key={data.id} className='week_mainContainer' style={{
      backgroundImage: `url(${data.imageurl})`
    }}>
      <div className='week_text'>
        <p className='shortText' >{data.text}</p>
        <p className='longText'>{data.description}</p>
      </div>
      <div className='buttonContainer'>
        <button>Show all</button>
      </div>
    </div >
  )
}

export default WeekComponent