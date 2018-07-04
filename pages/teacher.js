import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router"
import CardCheckIn from '../components/teacher/card-checkin'
import CardCheckOut from '../components/teacher/card-checkout'
import TabsMenu from '../components/teacher/tabs-menu'



export default class teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    async componentDidMount(){
        const isTeacher =  await localStorage.getItem("isTeacher");
        const classStatus =  await localStorage.getItem("statusClass");
        const courseID =  await localStorage.getItem("courseID");
        const groupID =  await localStorage.getItem("groupID");
        if(isTeacher != 'true'){
            Router.replace('/');
        }
        else{
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
                this.setState({checkInCode : rand})
            }
            if(this.state.checkOutCode == null){
                let rand = Math.floor(Math.random() * 900000) + 100000;
                this.setState({checkOutCode : rand})
            }
        }

    }




    render () {


        if (this.props.isLogin == 'teacher') {

            return (

                <div className="container" style={{'paddingTop': '70px'}}>

                    <div className="row">
                        <CardCheckIn classStatus={this.state.classStatus} checkInCode={this.state.checkInCode}/>
                        <TabsMenu/>

                    </div>
                    <div className="row">
                    <CardCheckOut classStatus={this.state.classStatus} checkOutCode={this.state.checkOutCode}/>
                    </div>



                </div>


            );
        }
        else {
            return false;
        }
    }
}