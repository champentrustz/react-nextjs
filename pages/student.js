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
            question : '',
            sendQuestion : '',
            tabs : this.props.keyTabs,
            voteOwn : [],
            voteOther : [],
        };
        this.checkInClass = this.checkInClass.bind(this);
        this.checkOutClass = this.checkOutClass.bind(this);
        this.checkInCodeChange = this.checkInCodeChange.bind(this);
        this.checkOutCodeChange = this.checkOutCodeChange.bind(this);
        this.checkInClass = this.checkInClass.bind(this);
        this.checkOutClass = this.checkOutClass.bind(this);
        this.questionChange = this.questionChange.bind(this);
        this.sendQuestion = this.sendQuestion.bind(this);
        this.questionRealTime = this.questionRealTime.bind(this);
        this.voteQuestion = this.voteQuestion.bind(this);
        this.setStateTabs = this.setStateTabs.bind(this);
    }

    setStateTabs(index){
        this.setState({tabs : index})
        Router.push({
            pathname: '/student',
            query: { key: index }
        })
    }

    async questionRealTime(previousQuestionOther,previousQuestion) {
        const courseID =  await localStorage.getItem("courseID");
        const groupID =  await localStorage.getItem("groupID");
        const studentID =  await localStorage.getItem("studentUsername");
        const courseStartTime =  await localStorage.getItem("courseStartTime");
        const courseEndTime =  await localStorage.getItem("courseEndTime");

        const respQuestion = await fetch('http://localhost/ge_api/getOwnQuestion.php', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({

                course_id : courseID,
                group_id : groupID,
                student_id : studentID,
                course_start : courseStartTime,
                course_end : courseEndTime,
            }),
        });

        const dataQuestion = await respQuestion.json();


        if(JSON.stringify(dataQuestion) !== JSON.stringify(previousQuestion)){
            this.setState({dataQuestion : dataQuestion})
            this.setState({
                voteOwn: []
            })
            dataQuestion.forEach((data) => {
                this.setState({
                    voteOwn: this.state.voteOwn.concat([data.vote])
                })
            });
        }




        const respQuestionOther = await fetch('http://localhost/ge_api/getOtherQuestion.php', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({

                course_id : courseID,
                group_id : groupID,
                student_id : studentID,
                course_start : courseStartTime,
                course_end : courseEndTime,
            }),
        });

        const dataQuestionOther = await respQuestionOther.json();



        if(JSON.stringify(dataQuestionOther) !== JSON.stringify(previousQuestionOther)){
            this.setState({dataQuestionOther: dataQuestionOther})
            this.setState({
                voteOther: []
            })
            dataQuestionOther.forEach((data) => {
                this.setState({
                    voteOther: this.state.voteOther.concat([data.vote])
                })
            });
        }



    }

    checkInCodeChange(event){
        this.setState({checkInCode: event.target.value});
    }

    checkOutCodeChange(event){
        this.setState({checkOutCode: event.target.value});
    }

    questionChange(event){
        this.setState({question: event.target.value});
    }

    async voteQuestion(id,type,index){


        fetch('http://localhost/ge_api/voteQuestion.php', {
            method: 'post',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                course_question_id : id,
            }),
        });

        if(type == 'own'){

            let  voteOwn = this.state.voteOwn.slice(); //creates the clone of the state

            voteOwn[index] = ''+(parseInt(voteOwn[index]) +1);

            this.setState({voteOwn: voteOwn});
        }
        else if(type == 'other'){

            let  voteOther = this.state.voteOther.slice(); //creates the clone of the state
            voteOther[index] = ''+(parseInt(voteOther[index]) +1);

            this.setState({voteOther: voteOther});



        }


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


    async sendQuestion(question){
        if(question != ''){

            const courseID =  await localStorage.getItem("courseID");
            const groupID =  await localStorage.getItem("groupID");
            const studentID =  await localStorage.getItem("studentUsername");
            const courseStartTime =  await localStorage.getItem("courseStartTime");
            const courseEndTime =  await localStorage.getItem("courseEndTime");

            fetch('http://localhost/ge_api/createQuestion.php', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    course_id : courseID,
                    group_id : groupID,
                    student_id : studentID,
                    question : question
                }),
            });
            this.setState({question : ''});

            const respQuestion = await fetch('http://localhost/ge_api/getOwnQuestion.php', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({

                    course_id : courseID,
                    group_id : groupID,
                    student_id : studentID,
                    course_start : courseStartTime,
                    course_end : courseEndTime,
                }),
            });

            const dataQuestion = await respQuestion.json();
            this.setState({dataQuestion : dataQuestion})


        }
    }


    async componentDidMount(){
        const isStudent =  await localStorage.getItem("isStudent");
        const courseID =  await localStorage.getItem("courseID");


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
            this.setState({checkStatus : checkStatus})
            if(this.state.checkStatus == 'true'){
                this.setState({checkInStatus : data.status})
                this.setState({checkInID : data.id})
            }

            if(data.checkout_date != null){
                this.setState({checkOutStatus : 'true'})
            }

            const respQuestion = await fetch('http://localhost/ge_api/getOwnQuestion.php', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({

                    course_id : courseID,
                    group_id : groupID,
                    student_id : studentID,
                    course_start : courseStartTime,
                    course_end : courseEndTime,
                }),
            });

            const dataQuestion = await respQuestion.json();

            dataQuestion.map((data) => {
                this.setState({
                    voteOwn: this.state.voteOwn.concat([data.vote])
                })
            });

            this.setState({dataQuestion : dataQuestion})

            const respQuestionOther = await fetch('http://localhost/ge_api/getOtherQuestion.php', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({

                    course_id : courseID,
                    group_id : groupID,
                    student_id : studentID,
                    course_start : courseStartTime,
                    course_end : courseEndTime,
                }),
            });

            const dataQuestionOther = await respQuestionOther.json();

            dataQuestionOther.map((data) => {
                this.setState({
                    voteOther: this.state.voteOther.concat([data.vote])
                })
            });


            this.setState({dataQuestionOther : dataQuestionOther});

            setInterval(async()=>{
                if(this.state.tabs == 2) {
                    this.questionRealTime(await this.state.dataQuestionOther, await this.state.dataQuestion)
                }
                }, 1000);

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

    static getInitialProps ({ query: { key } }) {

        const keyTabs = key;
        return {
            keyTabs
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
                            <TabsMenu questionChange={this.questionChange} sendQuestion={this.sendQuestion} question={this.state.question}
                            dataQuestion={this.state.dataQuestion} dataQuestionOther={this.state.dataQuestionOther} voteQuestion={this.voteQuestion}
                             setStateTabs={this.setStateTabs} tabsKey={this.state.tabs} voteOwn={this.state.voteOwn} voteOther={this.state.voteOther}/>
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