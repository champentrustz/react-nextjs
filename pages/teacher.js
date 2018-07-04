import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router"



export default class teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    async componentDidMount(){
        const isTeacher =  await localStorage.getItem("isTeacher");
        const classStatus =  await localStorage.getItem("isTeacher");
        if(isTeacher != 'true'){
            Router.replace('/');
        }

    }




    render () {


        console.log(this.props.isLogin)

        if (this.props.isLogin == 'teacher') {

            return (

                <div className="container" style={{'paddingTop': '70px'}}>



                    teacher

                </div>


            );
        }
        else {
            return false;
        }
    }
}