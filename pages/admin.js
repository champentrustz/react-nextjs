import React, { Component } from 'react'
import 'isomorphic-fetch'
import Router from "next/router";
import ButtonUpdate from '../components/admin/button-update'
import TabsMenu from '../components/admin/tabs-menu'

export default class admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.updateCourse = this.updateCourse.bind(this);
    }

    updateCourse(){
      alert('update')
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

                    <h4>ผู้ดูแลระบบ</h4>
                    <p/>
                    <div className="row">
                        <ButtonUpdate updateCourse={this.updateCourse}/>
                        <TabsMenu/>
                    </div>

                </div>


            );
        }
        else{
            return false;
        }
    }
}