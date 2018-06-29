import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

class Header extends React.Component {
    render () {
        return (
            <div>
                <Head>
                    <title>GE Smart Classroom</title>

                    <link rel="stylesheet"
                          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
                          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
                          crossOrigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,300i" rel="stylesheet"/>
                        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                                crossOrigin="anonymous"/>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
                                integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                                crossOrigin="anonymous"/>
                        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
                                integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
                                crossOrigin="anonymous"/>
                </Head>
                <style global jsx>{`
                 @import url('https://fonts.googleapis.com/css?family=Athiti');
    *{
        font-family: 'Athiti', sans-serif;
    }
    .show-font{
        font-family: 'Athiti', sans-serif;
    }
                `}</style>
            </div>

        )
    }
}

const ButtonLogin = (props) => {
    if(props.statusLogin == 'true') {
        return (
            <div>
                &nbsp;
                &nbsp;
                <button className="btn btn-danger btn-sm" onClick={props.logout}>
                   ออกจากระบบ
                </button>
            </div>
        )
    }
    else{
        return false;
    }
}



class Navbar extends React.Component {


    render () {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link href="/">
                    <a className="navbar-brand">GE Smart Classroom</a>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                        </ul>
                        <h6 className="text-light" style={{'margin-top':'10px'}}>{this.props.studentFirstName} {this.props.studentLastName}</h6>
                        <ButtonLogin statusLogin={this.props.statusLogin} logout={this.props.logout}/>
                    </div>

                </nav>
            </div>
        )
    }
}

export default class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = {
            statusLogin : '',
            studentFirstName: '',
            studentLastName : '',
        };
        this.logout = this.logout.bind(this);
        this.checkLogin = this.checkLogin.bind(this);

    }


    checkLogin(status){

        const isStudent =   localStorage.getItem("isStudent");

        if(isStudent == 'true'){
            const studentFirstName =  localStorage.getItem("studentFirstName");
            const studentLastName =  localStorage.getItem("studentLastName");
            this.setState({studentFirstName : studentFirstName});
            this.setState({studentLastName : studentLastName});
            this.setState({statusLogin : status});
        }

        else{
            return false;
        }
    }


    async componentDidMount() {

        const isStudent =   localStorage.getItem("isStudent");

        if(isStudent == 'true'){
            const studentFirstName =  localStorage.getItem("studentFirstName");
            const studentLastName =  localStorage.getItem("studentLastName");
            this.setState({studentFirstName : studentFirstName});
            this.setState({studentLastName : studentLastName});
            this.setState({statusLogin : 'true'});
        }

        else{
            return false;
        }
    }

    logout(){
        localStorage.clear();
        this.setState({studentFirstName : ''});
        this.setState({studentLastName : ''});
        this.setState({statusLogin : ''});
        Router.replace('/');
    }



    render () {

        const {Component, pageProps} = this.props
        return <Container>
            <Header/>
            <Navbar studentFirstName={this.state.studentFirstName} studentLastName={this.state.studentLastName}
                    statusLogin={this.state.statusLogin} logout={this.logout}/>
                <Component {...pageProps} checkLogin={this.checkLogin}/>
        </Container>
    }
}