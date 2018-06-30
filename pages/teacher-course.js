import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router";

export default class teacherCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount(){
        if(this.props.isLogin != 'teacher'){
            Router.replace('/');
        }
    }

    render () {

        if (this.props.isLogin == 'teacher') {

            return (

                <div className="container" style={{'paddingTop': '80px'}}>


                    <div className="row">

                        <div className="col-md-12">

                            teacher-course
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