import React from 'react'

const StatusLogin = (props) => {
    if(props.status_login == 'wrong') {
        return (
            <div>
                <div className="alert alert-danger" role="alert">
                    ผิดพลาด! กรุณาตรวจสอบชื่อผู้ใช้หรือรหัสผ่านอีกครั้ง
                </div>
                <br/>
            </div>
        )
    }
    else{
        return false;
    }
}


const LoginForm = (props) => {


    return (
       <div className="text-center">
           <img src="../../static/image/ssru00.png"/>
           <h2>GE Smart Classroom</h2>
           <br/>
           <div className="col-md-6 offset-md-3">

               <StatusLogin status_login={props.status_login}/>


                   <select className="form-control" style={{width:'150px'}} value={props.type} onChange={props.typeChange}>
                       <option value="student">นักศึกษา</option>
                       <option value="teacher">อาจารย์</option>
                       <option value="ta">ผู้ช่วยสอน</option>
                       <option value="admin">ผู้ดูแลระบบ</option>

                   </select>

            <br/>
           <input type="text" className="form-control" value={props.username} onChange={props.usernameChange}/>
           <br/>
           <input type="password" className="form-control" value={props.password} onChange={props.passwordChange}/>
               <br/>
               <button className="btn btn-success btn-block" onClick={props.login}>เข้าสู่ระบบ</button>
               <br/>
           </div>
       </div>
    )
}

export default LoginForm
