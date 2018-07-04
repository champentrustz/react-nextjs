import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router"




export default class student extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    async componentDidMount(){
        const isStudent =  await localStorage.getItem("isStudent");
        const courseID =  await localStorage.getItem("courseID");
        const groupID =  await localStorage.getItem("groupID");
        const courseName =  await localStorage.getItem("courseName");
        const groupName =  await localStorage.getItem("groupName");
        if(isStudent != 'true'){
            Router.replace('/');
        }
        else{
            this.setState({courseName : courseName})
            this.setState({groupName : groupName})
            this.setState({classStatus : classStatus})
            const resp = await fetch('http://localhost/ge_api/getClassroomCode.php', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    course_id : courseID,
                    group_id : groupID
                }),
            });
            const classRoomCode = await resp.json();
            this.setState({checkInCode : classRoomCode.checkin_code})
            this.setState({checkOutCode : classRoomCode.checkout_code})
            if(this.state.checkInCode == null){
                let rand = Math.floor(Math.random() * 900000) + 100000;
                fetch('http://localhost/ge_api/createClassroomCode.php', {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        course_id : courseID,
                        group_id : groupID,
                        type : 'checkin-code',
                        code : rand
                    }),
                });
                this.setState({checkInCode : rand})
            }
            if(this.state.checkOutCode == null){
                let rand = Math.floor(Math.random() * 900000) + 100000;
                fetch('http://localhost/ge_api/createClassroomCode.php', {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        course_id : courseID,
                        group_id : groupID,
                        type : 'checkout-code',
                        code : rand
                    }),
                });
                this.setState({checkOutCode : rand})
            }
        }

    }

    async changeCheckInCode(){
        const courseID =  await localStorage.getItem("courseID");
        const groupID =  await localStorage.getItem("groupID");
        let rand = Math.floor(Math.random() * 900000) + 100000;
        fetch('http://localhost/ge_api/createClassroomCode.php', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                course_id : courseID,
                group_id : groupID,
                type : 'checkin-code',
                code : rand
            }),
        });
        this.setState({checkInCode : rand})
    }

    async changeCheckOutCode(){
        const courseID =  await localStorage.getItem("courseID");
        const groupID =  await localStorage.getItem("groupID");
        let rand = Math.floor(Math.random() * 900000) + 100000;
        fetch('http://localhost/ge_api/createClassroomCode.php', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                course_id : courseID,
                group_id : groupID,
                type : 'checkout-code',
                code : rand
            }),
        });
        this.setState({checkOutCode : rand})
    }


    render () {


        if (this.props.isLogin == 'student') {

            return (

                <div className="container" style={{'paddingTop': '60px'}}>

                    <h4>{this.state.courseName} กลุ่มที่ : {this.state.groupName}</h4>
                    <br/>
                    <div className="row">
                        <CardCheckIn classStatus={this.state.classStatus} checkInCode={this.state.checkInCode} changeCheckInCode={this.changeCheckInCode}/>
                        <TabsMenu/>

                    </div>
                    <div className="row">
                        <CardCheckOut classStatus={this.state.classStatus} checkOutCode={this.state.checkOutCode} changeCheckOutCode={this.changeCheckOutCode}/>
                    </div>



                </div>


            );
        }
        else {
            return false;
        }
    }
}