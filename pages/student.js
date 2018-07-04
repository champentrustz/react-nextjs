import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router"
import CardCheckIn from '../components/student/card-checkin'
import CardCheckOut from '../components/student/card-checkout'
import TabsMenu from '../components/student/tabs-menu'




export default class student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkInCode : '',
        };
        this.checkInClass = this.checkInClass.bind(this);
        this.checkInCodeChange = this.checkInCodeChange.bind(this);
        this.checkInClass = this.checkInClass.bind(this);
    }

    checkInCodeChange(event){
        this.setState({checkInCode: event.target.value});
    }

    async checkInClass(code){

        const resp = await fetch('http://localhost/ge_api/getClassroomCode.php', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                course_id : this.state.courseID,
                group_id : this.state.groupID
            }),
        });
        const dataCourse = await resp.json();
        const checkInCode = dataCourse.checkin_code;
        if(code == checkInCode){

            const courseID =  await localStorage.getItem("courseID");
            const groupID =  await localStorage.getItem("groupID");
            const studentID =  await localStorage.getItem("studentUsername");
            const studentFirstName =  await localStorage.getItem("studentFirstName");
            const studentLastName =  await localStorage.getItem("studentLastName");
            const courseStartTime =  await localStorage.getItem("courseStartTime");
            const courseEndTime =  await localStorage.getItem("courseEndTime");
            const courseDate =  await localStorage.getItem("courseDate");

            this.setState({checkStatus : 'true'})
            const resp = await fetch('http://localhost/ge_api/checkInClass.php', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    course_id : courseID,
                    group_id : groupID,
                    student_id : studentID,
                    student_first_name : studentFirstName,
                    student_last_name : studentLastName,
                    course_start : courseStartTime,
                    course_end : courseEndTime,
                }),
            });
            const data = await resp.json();
            const status = data.status;
            this.setState({checkInStatus : status})
        }
        else{
            alert("รหัสเข้าห้องเรียนไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง");
        }

    }


    async componentDidMount(){
        const isStudent =  await localStorage.getItem("isStudent");

        if(isStudent != 'true'){
            Router.replace('/');
        }
        else{
            const courseName =  await localStorage.getItem("courseName");
            const groupName =  await localStorage.getItem("groupName");

            const courseID =  await localStorage.getItem("courseID");
            const groupID =  await localStorage.getItem("groupID");
            const studentID =  await localStorage.getItem("studentUsername");
            const courseStartTime =  await localStorage.getItem("courseStartTime");
            const courseEndTime =  await localStorage.getItem("courseEndTime");
            const courseDate =  await localStorage.getItem("courseDate");

            this.setState({courseName : courseName})
            this.setState({groupName : groupName})
            this.setState({courseID : courseID})
            this.setState({groupID : groupID})
            const resp = await fetch('http://localhost/ge_api/checkStudentCheckIn.php', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    student_id : studentID,
                    course_id : courseID,
                    group_id : groupID,
                    course_start : courseStartTime,
                    course_end : courseEndTime,
                    course_date : courseDate
                }),
            });
            const data = await resp.json();
            const checkStatus = data.duplicate;
            this.setState({checkStatus : checkStatus})
            if(this.state.checkStatus == 'true'){
                this.setState({checkInStatus : data.status})
            }

        }

    }



    render () {



        if (this.props.isLogin == 'student') {

            return (

                <div className="container" style={{'paddingTop': '60px'}}>

                    <h4>{this.state.courseName} กลุ่มที่ : {this.state.groupName}</h4>
                    <br/>
                    <div className="row">
                        <div className="col-md-3">
                    <CardCheckIn checkStatus={this.state.checkStatus} checkInCode={this.state.checkInCode} checkInCodeChange={this.checkInCodeChange}
                    checkInClass={this.checkInClass} checkInStatus={this.state.checkInStatus}/>
                            <br/>
                     <CardCheckOut checkStatus={this.state.checkStatus}/>
                            <br/>
                    </div>
                        <div className="col-md-9">
                            <TabsMenu/>
                        </div>
                    </div>





                </div>


            );
        }
        else {
            return false;
        }
    }
}