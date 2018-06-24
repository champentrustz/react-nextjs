import React from 'react'


const Card = (props) => {


    return (
        <div className="row">

            {props.json.map((jsonArray,index) =>{
                return (
                    <div className="col-md-4" key={index}>
                <div className="card" >
                    <img className="card-img-top" src="" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">test</p>
                        <button className="btn btn-primary" onClick={props.testPrint}>Go somewhere</button>
                    </div>
                </div>
                        <br/>
                    </div>

                )
            })
            }

        </div>
    )
}

export default Card
