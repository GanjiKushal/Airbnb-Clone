import React from 'react'
import "./PlanATripMain.css"
import PlanATripContainer from './PlanATripContainer'
import { planatrip } from '../../data/PlanATrip'

function PlanATripMain() {
    const btnPrev = () => {
        const box = document.querySelector('.planatrip')

        let width = box.clientWidth;

        box.scrollLeft -= width
    }
    const btnNext = () => {
        const box = document.querySelector('.planatrip')
        let width = box.clientWidth;
        box.scrollLeft += width
    }
    return (
        <div className='PlanATrip_mainContainer'>
            <div className='PlanATrip_headTextContainer'>
                <p>Plan a trip with help from local Hosts around the world</p>
                <div className='plan_crousel'>
                    <button className='lessthen choicebtn' onClick={btnPrev}>&lt;</button>
                    <button className='greaterthan choicebtn' onClick={btnNext}>&gt;</button>
                </div>
            </div>
            <div className='planatrip'>
                {
                    planatrip.map(data => (

                        <PlanATripContainer data={data} />

                    ))
                }
            </div>
        </div>
    )
}

export default PlanATripMain