import React, { Component } from 'react'
import 'isomorphic-fetch'

export default class studentCourse extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    async componentDidMount() {

        const isStudent =   localStorage.getItem("isStudent");

        if(isStudent == 'true'){
            this.setState({statusLogin : 'true'});
        }

        else{
            return false;
        }
    }



    render () {



        return (



            <div className="container" style={{'paddingTop':'80px'}}>


                <div className="row">

                    <div className="col-md-12">

                        student-course
                    </div>


                </div>

            </div>


        );
    }
}