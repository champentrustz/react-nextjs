import React from 'react'



const CardCheckOut = (props) => {


    const checkStatus = props.checkStatus;


    if(checkStatus == 'true') {

        return (

                <div className="card border-danger">

                    <div className="card-header text-danger">ออกห้องเรียน</div>
                    <div className="card-body">
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success btn-block">ยืนยัน</button>
                    </div>

                </div>


        )
    }
    else{
        return false;
    }
}

export default CardCheckOut