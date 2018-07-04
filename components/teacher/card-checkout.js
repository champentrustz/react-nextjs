import React from 'react'




const CardCheckOut = (props) => {

    const classStatus = props.classStatus;
    const checkOutCode = props.checkOutCode;

    if(classStatus && classStatus == 'manage' || classStatus == 'class') {

            return (

                    <div className="card border-danger">
                        <div className="card-header text-danger">รหัสออกห้องเรียน</div>
                        <div className="card-body">
                            <h2 className="text-center text-danger">{checkOutCode}</h2>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-success btn-block" onClick={props.changeCheckOutCode}>สุ่มรหัส</button>
                        </div>
                    </div>

            )
        }
    else{
        return false;
    }
}

export default CardCheckOut