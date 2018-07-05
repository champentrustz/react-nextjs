import React from 'react'



    const TabsMenu = (props) => {

        const tabsKey = props.tabsKey;

        return (
            <div className="card">
                <div className="col-md-12">
                    <p/>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" onClick={()=>props.setStateTabs(1)}>
                            <a className={tabsKey == 1 ? 'nav-link active'  : 'nav-link'} id="home-tab" data-toggle="tab" href="#file" role="tab"
                               aria-controls="home" aria-selected="true">เอกสารประกอบการสอน</a>
                        </li>
                        <li className="nav-item" onClick={()=>props.setStateTabs(2)}>
                            <a className={tabsKey == 2 ? 'nav-link active'  : 'nav-link'} id="contact-tab" data-toggle="tab" href="#question" role="tab"
                               aria-controls="contact" aria-selected="false">คำถาม</a>
                        </li>
                        <li className="nav-item" onClick={()=>props.setStateTabs(3)}>
                            <a className={tabsKey == 3 ? 'nav-link active'  : 'nav-link'} id="contact-tab" data-toggle="tab" href="#excercise" role="tab"
                               aria-controls="contact" aria-selected="false">แบบฝึกหัด</a>
                        </li>
                        <li className="nav-item" onClick={()=> props.setStateTabs(4)}>
                            <a className={tabsKey == 4 ? 'nav-link active'  : 'nav-link'} id="contact-tab" data-toggle="tab" href="#excercise-score"
                               role="tab"
                               aria-controls="contact" aria-selected="false">คะแนนแบบฝึกหัด</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">

                        <div className={tabsKey == 1 ? 'tab-pane fade show active'  : 'tab-pane fade'} id="file" role="tabpanel" aria-labelledby="file-tab">
                            <div className="col-md-12">
                                <p/>
                                เอกสารประกอบการสอน
                                <p/>
                            </div>
                        </div>
                        <div className={tabsKey == 2 ? 'tab-pane fade show active'  : 'tab-pane fade'} id="question" role="tabpanel" aria-labelledby="question-tab">
                            <div className="col-md-12">
                                <p/>
                                <CardSendQuestion questionChange={props.questionChange}
                                                  sendQuestion={props.sendQuestion} question={props.question}/>
                                <br/>
                                <CardOwnQuestion dataQuestion={props.dataQuestion} voteQuestion={props.voteQuestion} voteOwn={props.voteOwn}/>
                                <CardOtherQuestion dataQuestionOther={props.dataQuestionOther} voteQuestion={props.voteQuestion} voteOther={props.voteOther}/>
                                <br/>


                                <p/>
                            </div>
                        </div>

                        <div className={tabsKey == 3 ? 'tab-pane fade show active'  : 'tab-pane fade'} id="excercise" role="tabpanel" aria-labelledby="excercise-tab">
                            <div className="col-md-12">
                                <p/>
                                แบบฝึกหัด
                                <p/>
                            </div>
                        </div>

                        <div className={tabsKey == 4 ? 'tab-pane fade show active'  : 'tab-pane fade'} id="excercise-score" role="tabpanel"
                             aria-labelledby="excercise-score-tab">
                            <div className="col-md-12">
                                <p/>
                                คะแนนแบบฝึกหัด
                                <p/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
     }




const CardSendQuestion = (props) => {

    let alertQuestion = null;

    if(props.question == ''){
        alertQuestion = (<label className="text-center text-danger">*กรุณากรอกคำถาม</label>)
    }


    return (


        <div className="card">
            <div className="card-header text-primary">คำถาม</div>
            <div className="card-body">
                <input className="form-control" type="text" value={props.question} onChange={props.questionChange} required="true"/>
                {alertQuestion}
            </div>
            <div className="card-footer">
                <button className="btn btn-success btn-block" onClick={() => props.sendQuestion(props.question)}>บันทึก</button>
            </div>

        </div>


    )
}

const CardOwnQuestion = (props) => {



    const dataQuestion = props.dataQuestion;

    let card = [];


    dataQuestion && dataQuestion.map((dataQuestion,index) => {

        card.push(
            <div key={index}>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-11 col-sm-10">
                    <span className="fa fa-star text-warning "/> คำถาม : {dataQuestion.question}
                        </div>
                        <div className="col-md-1 col-sm-2">
                            <span className="badge badge-pill badge-danger" onClick={() => props.voteQuestion(dataQuestion.id,'own',index)} style={{'cursor': 'pointer'}}>{props.voteOwn[index]}</span>
                        </div>
                </div>
                </div>
                <div className="card-body">
                    <h6 className="text-primary">คำตอบ : {dataQuestion.answer}</h6>
                </div>

            </div>
                <br/>
            </div>

        )
    })

    return card;

}

const CardOtherQuestion = (props) => {

    const dataQuestionOther = props.dataQuestionOther;
    let card = [];

    dataQuestionOther && dataQuestionOther.map((dataQuestionOther, index) => {

        card.push(
            <div key={index}>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-11 col-sm-10">
                                คำถาม : {dataQuestionOther.question}
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <span className="badge badge-pill badge-danger"
                                      onClick={() => props.voteQuestion(dataQuestionOther.id,'other',index)}
                                      style={{'cursor': 'pointer'}}>{props.voteOther[index]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h6 className="text-primary">คำตอบ : {dataQuestionOther.answer}</h6>
                    </div>

                </div>
                <br/>
            </div>
        )
    })

    return card;


}



export default TabsMenu
