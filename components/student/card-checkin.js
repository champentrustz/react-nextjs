import React from 'react'


const CardCheckIn = (props) => {

    const checkStatus = props.checkStatus;


    if(checkStatus == 'false') {

        return (

                <div className="card border-primary">
                    <div className="card-header text-primary">เข้าห้องเรียน</div>
                    <div className="card-body">
                        <input className="form-control" type="text" value={props.checkInCode} onChange={props.checkInCodeChange}/>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success btn-block" onClick={() => props.checkInClass(props.checkInCode)}>ยืนยัน</button>
                    </div>

                </div>


        )
    }
    else if(checkStatus == 'true') {
        let checkInStatus = props.checkInStatus;
        if(checkInStatus == 'NORMAL'){
            checkInStatus = (<h4 className="text-center text-success">มาตรงเวลา</h4>)
        }
        else if(checkInStatus == 'LATE'){
            checkInStatus = (<h4 className="text-center text-warning">มาสาย</h4>)
        }
        else if(checkInStatus == 'ABSENT'){
            checkInStatus = (<h4 className="text-center text-danger">ขาดเรียน</h4>)
        }
        return (

                <div className="card border-primary">
                    <div className="card-header text-primary">เข้าห้องเรียน</div>
                    <div className="card-body">
                        {checkInStatus}
                    </div>
                    {/*<div className="card-footer">*/}
                        {/*<button className="btn btn-success btn-block" onClick={() => props.checkInClass(props.checkInCode)}>ยืนยัน</button>*/}
                    {/*</div>*/}

                </div>

        )
    }
    else{
        return false;
    }

}

export default CardCheckIn