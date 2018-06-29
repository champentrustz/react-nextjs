import React, { Component } from 'react'
import 'isomorphic-fetch'
import Timer from '../components/login/timer'
import LoginForm from '../components/login/login-form'
import Router from 'next/router'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            status_login : '',
            username : '',
            password : '',
            type : 'student',

        };
        this.testPrint = this.testPrint.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.typeChange = this.typeChange.bind(this);
        this.login = this.login.bind(this);

    }

    tick() {
        this.setState((prevState, props) => {
            return {
                seconds: prevState.seconds + 1
            }
        });
    }

    testPrint() {
        console.log('test');
    }

    async login(){
        if(this.state.type == 'student'){

            const resp = await  fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/studentlogin', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    apiKey : "afab7e2f35fe11c45116e2315e7387b6",
                    sReturn : "1",
                    student_username : this.state.username,
                    student_password : this.state.password
                }),
            });

            const  data  = await resp.json();
            const dataStudent = data.data;

            if (data.status === 1) {

                localStorage.setItem('isStudent', 'true');
                localStorage.setItem('studentFirstName', dataStudent.studentName);
                localStorage.setItem('studentLastName', dataStudent.studentLastname);
                localStorage.setItem('studentUsername', this.state.username);
                localStorage.setItem('studentPassword', this.state.password);
                localStorage.setItem('studentGender', dataStudent.studentGender);
                this.props.checkLogin('true');
                Router.push('/student-course');

            }
            else{
                this.setState({username: ''});
                this.setState({password: ''});
                this.setState({status_login: 'wrong'});
            }

        }
        else if(this.state.type == 'teacher'){

            const resp = await fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/teacherlogin', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    apiKey : "afab7e2f35fe11c45116e2315e7387b6",
                    sReturn : "1",
                    teacher_username : this.state.username,
                    teacher_password : this.state.password
                }),
            });
            const  data  = await resp.json();
            const dataTeacher = data.data;

            if (data.status === 1) {
                alert('login สำเร็จ');
            }
            else{
                this.setState({username: ''});
                this.setState({password: ''});
                this.setState({status_login: 'wrong'});
            }

        }
        else if(this.state.type == 'ta'){

            const resp = await fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/talogin', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    apiKey : "afab7e2f35fe11c45116e2315e7387b6",
                    sReturn : "1",
                    ta_username : this.state.username,
                    ta_password : this.state.password
                }),
            });

            const  data  = await resp.json();
            const dataTeacherAssistant = data.data;

            if (data.status === 1) {
                alert('login สำเร็จ');
            }
            else{
                this.setState({username: ''});
                this.setState({password: ''});
                this.setState({status_login: 'wrong'});
            }

        }
        else if(this.state.type == 'admin'){

            const resp = await fetch('http://ge-tss.ssru.ac.th/index.php/Checkinapi/talogin', {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    apiKey : "afab7e2f35fe11c45116e2315e7387b6",
                    sReturn : "1",
                    ta_username : this.state.username,
                    ta_password : this.state.password
                }),
            });

            const  data  = await resp.json();
            const dataTeacherAssistant = data.data;

            if (data.status === 1) {
                alert('login สำเร็จ');
            }
            else{
                this.setState({username: ''});
                this.setState({password: ''});
                this.setState({status_login: 'wrong'});
            }

        }

    }

    usernameChange(event){
        this.setState({username: event.target.value});
    }

    passwordChange(event){
        this.setState({password: event.target.value});
    }

    typeChange(event){
        this.setState({type: event.target.value});
    }


    async componentDidMount() {

        const isStudent =   localStorage.getItem("isStudent");

        if(isStudent == 'true'){
            Router.push('/student-course')
        }

        else{
            return false;
        }
    }


    static async getInitialProps () {

        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await res.json()
        const message = "hello";

        return {
            json,
            message
        }
    }


    render () {


        return (

                <div className="container" style={{'paddingTop':'80px'}}>


                    <div className="row">

                        <div className="col-md-12">

                            <LoginForm message={this.props.message} username={this.state.username} password={this.state.password}
                            usernameChange={this.usernameChange} passwordChange={this.passwordChange} type={this.state.type}
                            typeChange={this.typeChange} status_login={this.state.status_login} login={this.login}
                           />


                        </div>


                    </div>
                             {/*<Card json={this.props.json} testPrint={this.testPrint}/>*/}

                </div>


        );
    }
}