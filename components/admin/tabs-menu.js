import React from 'react'


const TabsMenu = (props) => {

    return (
        <div className="col-md-9">
            <div className="card">
                <div className="col-md-12">
                   <p/>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                           aria-controls="home" aria-selected="true">จัดการแบบประเมิน</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                           aria-controls="profile" aria-selected="false">สรุปผลแบบประเมิน</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                           aria-controls="contact" aria-selected="false">รายงานการวัดผลนักศึกษา</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="col-md-12">
                            <p/>
                        จัดการแบบประเมิน
                            <p/>
                        </div>
                    </div>
                       <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                           <div className="col-md-12">
                               <p/>
                           สรุปผลแบบประเมิน
                               <p/>
                           </div>
                       </div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div className="col-md-12">
                                <p/>
                            รายงานการวัดผลนักศึกษา
                                <p/>
                            </div>
                        </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default TabsMenu
