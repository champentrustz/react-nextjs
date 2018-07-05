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
            tabs : this.props.keyTabs,
            note : [],
            status : [],
            answer : [],

        };
        this.changeCheckInCode = this.changeCheckInCode.bind(this);
        this.changeCheckOutCode = this.changeCheckOutCode.bind(this);
        this.setStateTabs = this.setStateTabs.bind(this);
        this.noteChange = this.noteChange.bind(this);
        this.statusChange = this.statusChange.bind(this);
        this.answerChange = this.answerChange.bind(this);
        this.questionRealTime = this.questionRealTime.bind(this);
    }

    async questionRealTime(previousQuestion) {
        const courseID = await localStorage.getItem("courseID");
        const groupID = await localStorage.getItem("groupID");
        const courseStartTime = await localStorage.getItem("courseStartTime");
        const courseEndTime = await localStorage.getItem("courseEndTime");

        const respQuestion = await fetch('http://localhost/ge_api/getQuestionAll.php', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({

                course_id: courseID,
                group_id: groupID,
                course_start: courseStartTime,
                course_end: courseEndTime,
            }),
        });

        const dataQuestion = await respQuestion.json();


        if (JSON.stringify(dataQuestion) !== JSON.stringify(previousQuestion)) {
            this.setState({dataQuestion: dataQuestion})
            this.setState({
                answer: []
            })
            dataQuestion.forEach((data) => {
                if(data.answer == null){
                    this.setState({
                        answer: this.state.answer.concat([''])
                    })
                }
                else{
                    this.setState({
                        answer: this.state.answer.concat([data.answer])
                    })
                }


            });
        }
    }


    setStateTabs(index){
        this.setState({tabs : index})
        Router.push({
            pathname: '/teacher',
            query: { key: index }
        })
    }

    answerChange(event,index,question_id){
        let answer = this.state.answer.slice(); //creates the clone of the state

        answer[index] = event.target.value;


        fetch('http://localhost/ge_api/addAnswer.php', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                question_id : question_id,
                answer : answer[index]
            }),
        });


        this.setState({answer: answer});


    }

    noteChange(event,index,check_id){
        let note = this.state.note.slice(); //creates the clone of the state

         note[index] = event.target.value;


        fetch('http://localhost/ge_api/addNoteStudent.php', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                check_id : check_id,
                note : note[index]
            }),
        });


         this.setState({note: note});


    }

    statusChange(event,index,check_id){

        let status = this.state.status.slice(); //creates the clone of the state
        status[index] = event.target.value;

        fetch('http://localhost/ge_api/changeStatusInClass.php', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                check_id : check_id,
                status : status[index]
            }),
        });

        this.setState({status: status});


    }


    async componentDidMount(){
        const isTeacher =  await localStorage.getItem("isTeacher");
        const courseID =  await localStorage.getItem("courseID");

        if(isTeacher != 'true' || courseID == undefined){
            Router.replace('/');
        }
        else{
            const statusClass =  await localStorage.getItem("statusClass");
            const classStatus =  await localStorage.getItem("statusClass");
            const groupID =  await localStorage.getItem("groupID");
            const courseName =  await localStorage.getItem("courseName");
            const groupName =  await localStorage.getItem("groupName");
            const courseDate =  await localStorage.getItem("courseDate");
            const courseStartTime =  await localStorage.getItem("courseStartTime");
            const courseEndTime =  await localStorage.getItem("courseEndTime");

            this.setState({statusClass : statusClass})
            this.setState({courseName : courseName})
            this.setState({groupName : groupName})
            this.setState({classStatus : classStatus})

            if(statusClass == 'class'){

                const respQuestion = await fetch('http://localhost/ge_api/getQuestionAll.php', {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        course_id : courseID,
                        group_id : groupID,
                        course_start : courseStartTime,
                        course_end : courseEndTime,
                    }),
                });
                const dataQuestion = await respQuestion.json();

                this.setState({dataQuestion : dataQuestion})

                dataQuestion.forEach((data) => {
                    if(data.answer == null){
                        this.setState({
                            answer: this.state.answer.concat([''])
                        })
                    }
                    else{
                        this.setState({
                            answer: this.state.answer.concat([data.answer])
                        })
                    }


                });

                const respCheckStudent = await fetch('http://localhost/ge_api/getStudentCheckInClass.php', {
                    method: 'post',
                    headers: {
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        course_id : courseID,
                        group_id : groupID,
                        course_start : courseStartTime,
                        course_end : courseEndTime,
                        course_date : courseDate
                    }),
                });
                const dataCheckStudent = await respCheckStudent.json();
                dataCheckStudent.map((data) => {
                    if(data.note == null){
                        this.setState({
                            note: this.state.note.concat([''])
                        })
                    }
                    else{
                        this.setState({
                            note: this.state.note.concat([data.note])
                        })
                    }

                    this.setState({
                        status: this.state.status.concat([data.status])
                    })

                });

                this.setState({dataCheckStudent : dataCheckStudent});


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

                setInterval(async()=>{
                    if(this.state.tabs == 3) {
                        this.questionRealTime(await this.state.dataQuestion)
                    }
                }, 1000);

            }
            else if(statusClass == 'manage'){

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

    static getInitialProps ({ query: { key } }) {

        const keyTabs = key;
        return {
            keyTabs
        }
    }


    render () {



        if (this.props.isLogin == 'teacher') {

            return (

                <div className="container" style={{'paddingTop': '60px'}}>

                    <h4>{this.state.courseName} กลุ่มที่ : {this.state.groupName}</h4>
                    <br/>

                    <div className="row">
                        <div className="col-md-3">
                        <CardCheckIn classStatus={this.state.classStatus} checkInCode={this.state.checkInCode} changeCheckInCode={this.changeCheckInCode}/>
                         <br/>
                            <CardCheckOut classStatus={this.state.classStatus} checkOutCode={this.state.checkOutCode} changeCheckOutCode={this.changeCheckOutCode}/>
                            <br/>
                        </div>
                        <div className="col-md-9">
                            <TabsMenu setStateTabs={this.setStateTabs} tabsKey={this.state.tabs} statusClass={this.state.statusClass}
                                      dataCheckStudent={this.state.dataCheckStudent} note={this.state.note} noteChange={this.noteChange}
                                      status={this.state.status} statusChange={this.statusChange} dataQuestion={this.state.dataQuestion}
                                      answerChange={this.answerChange} answer={this.state.answer}/>
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