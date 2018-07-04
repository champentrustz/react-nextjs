import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router";
import ButtonUpdate from '../components/admin/button-update'
import TabsMenu from '../components/admin/tabs-menu'
import ModalUpdate from '../components/admin/modal-update'


export default class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            update : '',
        };
        this.updateCourse = this.updateCourse.bind(this);
    }


    async updateCourse(){

        this.setState({update: 'updating'});

        let courseAlready = null;
        let statusDelete = null;


        const TSS_resp = await fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/getSubjectSchedule', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                apiKey : "afab7e2f35fe11c45116e2315e7387b6",
                sReturn : "1"
            }),
        })
        const  TSS_data  = await TSS_resp.json();
        const  TSS_subject = await TSS_data.data

        const local_resp = await fetch('http://localhost/ge_api/getCourseAll.php', {

            method: 'post',
            headers: {
                Accept: 'application/json',
            },
        });
        const  local_data  = await local_resp.json();



        TSS_subject.forEach((subject) => {



            if(subject.aSchedule.length !== 0){

                subject.aSchedule[0].aTime.forEach((aTime) => {


                    courseAlready = 0;

                    local_data.forEach((course) => {

                        if(course.course_id == subject.subjectID && course.group_id == aTime.group_id){
                            courseAlready = 1;
                        }

                    })


                    if(courseAlready == 0){
                        fetch('http://localhost/ge_api/createCourse.php', {
                            method: 'post',
                            headers: {
                                Accept: 'application/json',
                            },
                            body: JSON.stringify({
                                course_id : subject.subjectID,
                                group_id : aTime.group_id,
                                course_name : subject.subjectName,
                                group_name : aTime.group_name
                            }),
                        });
                    }
                })

            }
    })



        const local_resp_again = await fetch('http://localhost/ge_api/getCourseAll.php', {

            method: 'post',
            headers: {
                Accept: 'application/json',
            },
        });
        const  local_data_again  = await local_resp_again.json();


        local_data_again.forEach((course) => {
            statusDelete = 0;
            TSS_subject.forEach((subject) => {
                if(subject.aSchedule.length !== 0){
                    subject.aSchedule[0].aTime.map((aTime) => {
                        // console.log(course.section+' : '+aTime.group_id)
                        if(course.course_id === subject.subjectID && course.group_id === aTime.group_id){
                            statusDelete = 1;
                        }
                    })
                }
                else{
                    if(course.course_id === subject.subjectID){
                        statusDelete = 1;

                    }
                }
            })
            if(statusDelete === 0){

                fetch('http://localhost/ge_api/deleteCourse.php', {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        course_id : course.course_id,
                        group_id : course.group_id,
                    }),
                });

            }
        })

        this.setState({update: 'success'});

    }


    async componentDidMount(){
        const isAdmin =  await localStorage.getItem("isAdmin");
        if(isAdmin != 'admin'){
            Router.replace('/');
        }

    }

    render () {



        if(this.props.isLogin == 'true') {

            return (

                <div className="container" style={{'paddingTop': '60px'}}>

                    <h4>ผู้ดูแลระบบ</h4>
                    <p/>
                    <div className="row">
                        <ModalUpdate update={this.state.update}/>
                        <ButtonUpdate updateCourse={this.updateCourse}/>
                        <TabsMenu/>
                    </div>

                </div>


            );
        }
        else{
            return false;
        }
    }
}