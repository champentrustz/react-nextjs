import React, { Component } from 'react'
import 'isomorphic-fetch'
import Timer from '../components/index/timer'
import Card from '../components/index/card'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
        this.testPrint = this.testPrint.bind(this);

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

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    static async getInitialProps () {

        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await res.json()

        return {
            json
        }
    }

    render () {
        return (

                <div className="container" style={{'paddingTop':'80px'}}>



                             <Card json={this.props.json} testPrint={this.testPrint}/>

                </div>


        );
    }
}