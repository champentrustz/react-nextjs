import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from 'next/router'

export default class studentCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }


    componentDidMount(){
        if(this.props.isLogin != 'student'){
            Router.replace('/');
        }
    }

    render () {


        if(this.props.isLogin == 'student'){

            return (

                <div className="container" style={{'paddingTop': '70px'}}>


                    <div className="row">

                        <div className="col-md-12">

                            student-course
                        </div>


                    </div>

                </div>


            );

        }
        else{
            return false;
        }
    }

}