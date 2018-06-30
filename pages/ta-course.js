import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router";

export default class taCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }

    componentDidMount(){
        if(this.props.isLogin != 'ta'){
            Router.replace('/');
        }
    }

    render () {

        if(this.props.isLogin == 'ta') {

            return (

                <div className="container" style={{'paddingTop': '80px'}}>


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