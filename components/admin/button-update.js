import React from 'react'


const ButtonUpdate = (props) => {

    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                   <button className="btn btn-warning btn-block text-light" onClick={props.updateCourse}>อัพเดทข้อมูล</button>
                </div>
            </div>
        </div>
    )
}

export default ButtonUpdate
