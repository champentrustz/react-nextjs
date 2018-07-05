import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router";
import CourseCard from '../components/teacher-course/course-card'



export default class teacherCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.alertNoClass = this.alertNoClass.bind(this);
        this.manageClass = this.manageClass.bind(this);
    }

    alertNoClass() {
        alert('ในขณะนี้ยังไม่มีคาบเรียน');
    }

    intoClass(courseID,groupID, groupName , courseDate,courseName,courseStartTime,courseEndTime, scheduleID, year , semester){

        localStorage.setItem('courseID', courseID);
        localStorage.setItem('courseSection', courseSection);
        localStorage.setItem('sectionName', sectionName);
        localStorage.setItem('courseDate', courseDate);
        localStorage.setItem('courseName', courseName);
        localStorage.setItem('courseStartTime', courseStartTime);
        localStorage.setItem('courseEndTime', courseEndTime);
        localStorage.setItem('groupScheduleID', scheduleID);
        localStorage.setItem('semester', semester);
        localStorage.setItem('year', year);
        localStorage.setItem('statusClass', 'class');
        Router.push("/teacher");
    }

    manageClass(courseID,groupID,groupName,courseName,courseDate){


        localStorage.setItem('courseID', courseID);
        localStorage.setItem('groupID', groupID);
        localStorage.setItem('groupName', groupName);
        localStorage.setItem('courseName', courseName);
        localStorage.setItem('statusClass', 'manage');
        localStorage.setItem('courseDate', courseDate);

        window.open('/teacher','class-manage','width=1200,height=700');
    }

    async componentDidMount(){
        const isTeacher =  await localStorage.getItem("isTeacher");
        if(isTeacher != 'true'){
            Router.replace('/');
        }
        else{
            const resp = await fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/teacherlogin', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    // 'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    apiKey : "afab7e2f35fe11c45116e2315e7387b6",
                    sReturn : "1",
                    teacher_username : this.props.username,
                    teacher_password : this.props.password
                }),
            });
            const  data_resp  = await resp.json();
            const  data_teacher  =  data_resp.data;
            this.setState({data_course_teacher : data_teacher});

            const respDateTime = await fetch('http://localhost/ge_api/getCurrentDateTime.php');

            const dataDateTime = await respDateTime.json();

            this.setState({current_date : dataDateTime.date});
            this.setState({current_time : dataDateTime.time});


        }
    }


    shouldComponentUpdate(nextProps, nextState){
        const props = this.props;
        const states = this.state;

        if(JSON.stringify(props) !== JSON.stringify(nextProps)){
            return true
        }

        if(JSON.stringify(states) !== JSON.stringify(nextState)){
            return true
        }
        return false

    }



    render () {



        if (this.props.isLogin == 'teacher') {

            return (

                <div className="container" style={{'paddingTop': '60px'}}>


                        <CourseCard data={this.state.data_course_teacher} currentDate={this.state.current_date} currentTime={this.state.current_time}
                        alertNoClass={this.alertNoClass} manageClass={this.manageClass}/>


                </div>


            );
        }
        else {
            return false;
        }
    }
}