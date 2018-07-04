import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router";

export default class taCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }

    async componentDidMount(){
        const isTeacherAssistant =  await localStorage.getItem("isTeacherAssistant");
        if(isTeacherAssistant != 'true'){
            Router.replace('/');
        }
    }

    render () {

        if(this.props.isLogin == 'ta') {

            return (

                <div className="container" style={{'paddingTop': '60px'}}>


                    <div className="row">

                        <div className="col-md-12">

                            ta-course
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