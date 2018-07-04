import React from 'react'



const CardCheckOut = (props) => {


    const checkStatus = props.checkStatus;
    const checkOutStatus = props.checkOutStatus;


    if(checkStatus == 'true') {

        if(checkOutStatus == 'true') {

            return (

                <div className="card border-danger">

                    <div className="card-header text-danger">ออกห้องเรียน</div>
                    <div className="card-body">
                        <h4 className="text-center text-danger">ออกจากระบบแล้ว</h4>
                    </div>

                </div>


            )
        }
        else{

            return (

                <div className="card border-danger">

                    <div className="card-header text-danger">ออกห้องเรียน</div>
                    <div className="card-body">
                        <input className="form-control" type="text" value={props.checkOutCode} onChange={props.checkOutCodeChange}/>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success btn-block" onClick={() => props.checkOutClass(props.checkOutCode)}>ยืนยัน</button>
                    </div>

                </div>


            )
        }
    }
    else{
        return false;
    }
}

export default CardCheckOut