import React from 'react'

function SingleComponent({ data, sty }) {

    return (
        <div style={{ border: "1px solid #edebeb", display: "inline-block", padding: '0 13px', borderRadius: "30px", minHeight: "10px", backgroundColor: `${sty}` }} key={data.id} className='single_text'>
            <p style={{ margin: "7px", fontSize: "0.9rem", minHeight: "10px", minWidth: 'max-content' }}>{data.choice}</p>
        </div>
    )
}

export default SingleComponent