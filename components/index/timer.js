import React from 'react'
const Timer = (props) => {

    return (
        <div>
            <div className="card">
                {props.timer}
            </div>
            <br/>
        </div>
    )
}

export default Timer
