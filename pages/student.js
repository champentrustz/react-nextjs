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
            checkOutCode : '',
        };
        this.checkInClass = this.checkInClass.bind(this);
        this.checkOutClass = this.checkOutClass.bind(this);
        this.checkInCodeChange = this.checkInCodeChange.bind(this);
        this.checkOutCodeChange = this.checkOutCodeChange.bind(this);
        this.checkInClass = this.checkInClass.bind(this);
        this.checkOutClass = this.checkOutClass.bind(this);
    }

    checkInCodeChange(event){
        this.setState({checkInCode: event.target.value});
    }

    checkOutCodeChange(event){
        this.setState({checkOutCode: event.target.value});
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
            this.setState({checkInCode : ''})
        }

    }

    async checkOutClass(code){

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
        const checkOutCode = dataCourse.checkout_code;
        if(code == checkOutCode){

           fetch('http://localhost/ge_api/checkOutClass.php', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    course_check_student_id : this.state.checkInID,
                }),
            });

            this.props.logout();
        }
        else{
            alert("รหัสออกห้องเรียนไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง");
            this.setState({checkOutCode : ''})
        }

    }


    async componentDidMount(){
        const isStudent =  await localStorage.getItem("isStudent");
        const courseID =  await localStorage.getItem("courseID");
        console.log(courseID)

        if(isStudent != 'true' || courseID == undefined){
            Router.replace('/student-course');
        }
        else{
            const courseName =  await localStorage.getItem("courseName");
            const groupName =  await localStorage.getItem("groupName");

            const groupID =  await localStorage.getItem("groupID");
            const studentID =  await localStorage.getItem("studentUsername");
            const courseStartTime =  await localStorage.getItem("courseStartTime");
            const courseEndTime =  await localStorage.getItem("courseEndTime");

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
                }),
            });
            const data = await resp.json();
            const checkStatus = data.duplicate;
            console.log(data)
            this.setState({checkStatus : checkStatus})
            if(this.state.checkStatus == 'true'){
                this.setState({checkInStatus : data.status})
                this.setState({checkInID : data.id})
            }

            console.log(data.checkout_date);

            if(data.checkout_date != null){
                this.setState({checkOutStatus : 'true'})
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
                     <CardCheckOut checkStatus={this.state.checkStatus} checkOutCode={this.state.checkOutCode} checkOutCodeChange={this.checkOutCodeChange}
                                   checkOutClass={this.checkOutClass} checkOutStatus={this.state.checkOutStatus}/>
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