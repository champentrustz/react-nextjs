import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router";
import CourseCard from '../components/teacher-course/course-card'



export default class teacherCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    async componentDidMount(){
        if(this.props.isLogin != 'teacher'){
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




    render () {




        if (this.props.isLogin == 'teacher') {

            return (

                <div className="container" style={{'paddingTop': '70px'}}>




                        <CourseCard data={this.state.data_course_teacher} currentDate={this.state.current_date} currentTime={this.state.current_time}/>


                </div>


            );
        }
        else {
            return false;
        }
    }
}