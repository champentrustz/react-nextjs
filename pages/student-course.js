import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from 'next/router'
import CourseCard from '../components/student-course/course-card'

export default class studentCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.alertNoClass = this.alertNoClass.bind(this);
        this.intoClass = this.intoClass.bind(this);

    }

    alertNoClass() {
        alert('ในขณะนี้ยังไม่มีคาบเรียน');
    }

    intoClass(courseID,groupID,courseDate,courseName,courseStartTime,courseEndTime,year,semester,groupName){

        localStorage.setItem('courseID', courseID);
        localStorage.setItem('groupID', groupID);
        localStorage.setItem('groupName', groupName);
        localStorage.setItem('courseDate', courseDate);
        localStorage.setItem('courseName', courseName);
        localStorage.setItem('courseStartTime', courseStartTime);
        localStorage.setItem('courseEndTime', courseEndTime);
        localStorage.setItem('semester', semester);
        localStorage.setItem('year', year);
        Router.push('/student');
    }


    async componentDidMount(){
        const isStudent =  await localStorage.getItem("isStudent");
        if(isStudent != 'true'){
            Router.replace('/');
        }
        else{
            const resp = await fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/studentlogin', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    // 'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    apiKey : "afab7e2f35fe11c45116e2315e7387b6",
                    sReturn : "1",
                    student_username : this.props.username,
                    student_password : this.props.password
                }),
            });
            const  data_resp  = await resp.json();
            const  data_student  =  data_resp.data;
            this.setState({data_course_student : data_student});

            const respDateTime = await fetch('http://localhost/ge_api/getCurrentDateTime.php');

            const dataDateTime = await respDateTime.json();

            this.setState({current_date : dataDateTime.date});
            this.setState({current_time : dataDateTime.time});


        }
    }

    render () {


        if(this.props.isLogin == 'student'){

            return (

                <div className="container" style={{'paddingTop': '60px'}}>






                            <CourseCard data={this.state.data_course_student} currentDate={this.state.current_date} currentTime={this.state.current_time}
                                        alertNoClass={this.alertNoClass} intoClass={this.intoClass}/>





                </div>


            );

        }
        else{
            return false;
        }
    }

}