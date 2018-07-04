import React from 'react'




const CardCheckIn = (props) => {

    const classStatus = props.classStatus;
    const checkInCode = props.checkInCode;

    if(classStatus && classStatus == 'manage' || classStatus == 'class') {

           return (
               <div className="col-md-3">
               <div className="card border-primary">
                   <div className="card-header text-primary">รหัสเข้าห้องเรียน</div>
                   <div className="card-body">
                       <h2 className="text-center text-primary">{checkInCode}</h2>
                   </div>
                   <div className="card-footer">
                       <button className="btn btn-success btn-block" onClick={props.changeCheckInCode}>สุ่มรหัส</button>
                   </div>

               </div>
               </div>
           )



    }
    else{
        return false;
    }
}

export default CardCheckIn