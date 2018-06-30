import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router";

export default class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }

    componentDidMount(){
        if(this.props.isLogin != 'admin'){
            Router.replace('/');
        }
    }

    render () {

        if(this.props.isLogin == 'admin') {

            return (

                <div className="container" style={{'paddingTop': '80px'}}>


                    <div className="row">

                        <div className="col-md-12">
                            <h4>ผู้ดูแลระบบ</h4>
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