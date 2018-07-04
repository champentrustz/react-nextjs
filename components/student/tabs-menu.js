import React from 'react'


const TabsMenu = (props) => {

    return (
            <div className="card">
                <div className="col-md-12">
                    <p/>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#file" role="tab"
                               aria-controls="home" aria-selected="true">เอกสารประกอบการสอน</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#report" role="tab"
                               aria-controls="profile" aria-selected="false">รายงานการเข้าห้องเรียน</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#question" role="tab"
                               aria-controls="contact" aria-selected="false">คำถาม</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#excercise" role="tab"
                               aria-controls="contact" aria-selected="false">แบบฝึกหัด</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#excercise-score" role="tab"
                               aria-controls="contact" aria-selected="false">คะแนนแบบฝึกหัด</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">

                        <div className="tab-pane fade show active" id="file" role="tabpanel" aria-labelledby="file-tab">
                            <div className="col-md-12">
                                <p/>
                                เอกสารประกอบการสอน
                                <p/>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="report" role="tabpanel" aria-labelledby="report-tab">
                            <div className="col-md-12">
                                <p/>
                                รายงานการเข้าห้องเรียน
                                <p/>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="question" role="tabpanel" aria-labelledby="question-tab">
                            <div className="col-md-12">
                                <p/>
                                คำถาม
                                <p/>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="excercise" role="tabpanel" aria-labelledby="excercise-tab">
                            <div className="col-md-12">
                                <p/>
                                แบบฝึกหัด
                                <p/>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="excercise-score" role="tabpanel" aria-labelledby="excercise-score-tab">
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

export default TabsMenu
