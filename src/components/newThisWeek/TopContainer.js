import React from 'react'
import WeekComponent from './WeekComponent'
import './TopContainer.css'
import { TopCard, Options } from '../../data/week_mock-data'
import SingleComponent from './SingleWordComponent'

function NewThisWeek_Header() {
    const btnPrev = () => {
        const box = document.querySelector('.weekcomponent')
        let width = box.clientWidth;
        box.scrollLeft -= width
    }
    const btnNext = () => {
        const box = document.querySelector('.weekcomponent')
        let width = box.clientWidth;
        box.scrollLeft += width
    }
    const choicePrev = () => {
        const box = document.querySelector('.bottom_choices')
        let width = box.clientWidth;
        box.scrollLeft -= width
    }
    const choiceNext = () => {
        const box = document.querySelector('.bottom_choices')
        let width = box.clientWidth;
        box.scrollLeft += width
    }
    return (
        <div className='NewThisWeek_Container'>
            <div className='NewThisWeek_h2'>
                <h2>New this week</h2>
                <div className='crousel'>
                    <button className='lessthen' onClick={btnPrev}>&lt;</button>
                    <button className='greaterthan' onClick={btnNext}>&gt;</button>
                </div>
            </div>
            <div className='weekcomponent'>
                {
                    TopCard.map(data => (

                        <WeekComponent data={data} />

                    ))

                }
            </div>

            <div className='bottom_Container'>
                <div className='bottom_filter'>
                    <SingleComponent data={{ id: 1, choice: "Dates" }} />
                    <SingleComponent data={{ id: 2, choice: "Group size" }} />
                    <SingleComponent data={{ id: 3, choice: "More filters" }} />
                </div>
                <button className='choicePrev' onClick={choicePrev}>&lt;</button>
                <div className='bottom_choices'>

                    {

                        Options.map(data => (
                            <div key={data.id} >
                                <SingleComponent data={data} sty={"#edebeb"} />
                            </div>

                        ))

                    }


                </div>
                <button className='choiceNext' onClick={choiceNext}>&gt;</button>
            </div>
        </div>
    )
}


export default NewThisWeek_Header