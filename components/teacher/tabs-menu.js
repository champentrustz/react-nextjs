import React from 'react'


const TabsMenu = (props) => {

    const tabsKey = props.tabsKey;
    const statusClass = props.statusClass;
    const dataCheckStudent = props.dataCheckStudent;



    setTimeout(function(){
        $('#data-table').DataTable() },
        700);

    return (
            <div className="card">
                <div className="col-md-12">
                    <p/>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" onClick={()=>props.setStateTabs(1)}>
                            <a className={tabsKey == 1 ? 'nav-link active'  : 'nav-link'} id="home-tab" data-toggle="tab" href="#file" role="tab"
                               aria-controls="home" aria-selected="true">เอกสารประกอบการสอน</a>
                        </li>
                        <li className="nav-item" style={(statusClass == 'manage') ? {'display':'none'} : {}} onClick={()=>props.setStateTabs(2)}>
                            <a className={tabsKey == 2 ? 'nav-link active'  : 'nav-link'} id="profile-tab" data-toggle="tab" href="#report" role="tab"
                               aria-controls="profile" aria-selected="false">รายงานการเข้าห้องเรียน</a>
                        </li>
                        <li className="nav-item" style={(statusClass == 'manage') ? {'display':'none'} : {}} onClick={()=>props.setStateTabs(3)}>
                            <a className={tabsKey == 3 ? 'nav-link active'  : 'nav-link'} id="contact-tab" data-toggle="tab" href="#question" role="tab"
                               aria-controls="contact" aria-selected="false">คำถาม</a>
                        </li>
                        <li className="nav-item" onClick={()=>props.setStateTabs(4)}>
                            <a className={tabsKey == 4 ? 'nav-link active'  : 'nav-link'} id="contact-tab" data-toggle="tab" href="#excercise" role="tab"
                               aria-controls="contact" aria-selected="false">แบบฝึกหัด</a>
                        </li>
                        <li className="nav-item" onClick={()=>props.setStateTabs(5)}>
                            <a className={tabsKey == 5 ? 'nav-link active'  : 'nav-link'} id="contact-tab" data-toggle="tab" href="#excercise-score" role="tab"
                               aria-controls="contact" aria-selected="false">คะแนนแบบฝึกหัด</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">

                        <div className={tabsKey == 1 ? 'tab-pane fade show active'  : 'tab-pane fade'} id="file" role="tabpanel" aria-labelledby="file-tab">
                            <div className="col-md-12">
                                <p/>
                                <FileUpload fileUpload={props.fileUpload} fileChange={props.fileChange} uploadFile={props.uploadFile} fileName={props.fileName}
                                            statusUpload={props.statusUpload}/>
                                <br/>
                                <ShowFile dataFile={props.dataFile} deleteFile={props.deleteFile} statusDelete={props.statusDelete}
                                          downloadFile={props.downloadFile}/>
                                <p/>
                            </div>
                        </div>
                        <div className={tabsKey == 2 ? 'tab-pane fade show active'  : 'tab-pane fade'} style={(statusClass == 'manage') ? {'display':'none'} : {}}  id="report" role="tabpanel" aria-labelledby="report-tab">
                            <div className="col-md-12">
                                <p/>
                                <CardShowStudentCheckIn dataCheckStudent={dataCheckStudent} note={props.note} noteChange={props.noteChange}
                                status={props.status} statusChange={props.statusChange} />
                                <p/>
                            </div>
                        </div>
                        <div className={tabsKey == 3 ? 'tab-pane fade show active'  : 'tab-pane fade'} style={(statusClass == 'manage') ? {'display':'none'} : {}} id="question" role="tabpanel" aria-labelledby="question-tab">
                            <div className="col-md-12">
                                <p/>
                                <CardQuestion dataQuestion={props.dataQuestion} answer={props.answer} answerChange={props.answerChange}/>
                                <p/>
                            </div>
                        </div>

                        <div className={tabsKey == 4 ? 'tab-pane fade show active'  : 'tab-pane fade'} id="excercise" role="tabpanel" aria-labelledby="excercise-tab">
                            <div className="col-md-12">
                                <p/>
                                แบบฝึกหัด
                                <p/>
                            </div>
                        </div>

                        <div className={tabsKey == 5 ? 'tab-pane fade show active'  : 'tab-pane fade'} id="excercise-score" role="tabpanel" aria-labelledby="excercise-score-tab">
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

const CardShowStudentCheckIn = (props) => {

    const dataCheckStudent = props.dataCheckStudent;
    let card = [];



    return(
    <table id="data-table" className="table table-hover table-bordered">
        <thead>
        <tr>
            <th className="text-center">ที่</th>
            <th className="text-center">รหัส</th>
            <th className="text-center">ชื่อ - นามสกุล</th>
            <th className="text-center">สถานะ</th>
            <th className="text-center">หมายเหตุ</th>
        </tr>
        </thead>
        <tbody>

        {
            dataCheckStudent && dataCheckStudent.map((student, index) =>

                <tr key={index}>
                    <td className="text-center">{index+1}</td>
                    <td className="text-center">{student.student_id}</td>
                    <td>{student.student_first_name} {student.student_last_name}</td>
                    <td className="text-center">
                        <select className="form-control"  value={props.status[index]} onChange={(e)=> props.statusChange(e,index,student.id)}>
                            <option value='NORMAL' selected={student.status == 'NORMAL'}>มาเรียน</option>
                            <option value='LATE' selected={student.status == 'LATE'}>มาสาย</option>
                            <option value='ABSENT' selected={student.status == 'ABSENT'}>ขาดเรียน</option>



                        </select>
                    </td>
                    <td><input className="form-control" value={props.note[index] === undefined ? '' : props.note[index]} onChange={(e)=> props.noteChange(e,index,student.id)}/></td>
                </tr>

            )



        }


        </tbody>
    </table>


)

}

const CardQuestion = (props) => {



    const dataQuestion = props.dataQuestion;

    let card = [];



    dataQuestion && dataQuestion.map((dataQuestion,index) => {

        card.push(
            <div key={index}>
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-11 col-sm-10">คำถาม : {dataQuestion.question}
                            </div>
                            <div className="col-md-1 col-sm-2">
                                <span className="badge badge-pill badge-danger">{dataQuestion.vote}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <input className="form-control" value={props.answer[index] === undefined ? '' : props.answer[index]} onChange={(e)=> props.answerChange(e,index,dataQuestion.id)}/>
                    </div>

                </div>
                <br/>
            </div>

        )
    })

    if(card.length === 0){
        card.push(
            <div key={1}>
                <div className="card">
                    <div className="card-body">
                        <span className="text-danger">ไม่พบรายการคำถาม</span>
                    </div>
                </div>
            </div>
                )
    }

    return card;


}

const FileUpload = (props) => {

    let alertStatus = null;




if(props.statusUpload) {
    if(props.statusUpload.type === "wrong"){

        alertStatus = (<div className="alert alert-danger" role="alert">
            {props.statusUpload.status}
        </div>)


    }
    else if(props.statusUpload.type === "success"){

        alertStatus = (<div className="alert alert-success" role="alert">
            {props.statusUpload.status}
        </div>)


    }
}


    return(
        <div>
        {alertStatus}
        <div className="card">
            <div className="card-body">
                <input type="file" className="form-control-file" value={props.fileName} onChange={props.fileChange}/>
                <br/>
                <button className="btn btn-primary" onClick={props.uploadFile}>อัพโหลด</button>
            </div>
        </div>
        </div>
    )

}

const ShowFile = (props) => {

const dataFile = props.dataFile;

    let alertStatus = null;

    if(props.statusDelete) {
        if(props.statusDelete.type === "wrong"){

            alertStatus = (<div className="alert alert-danger" role="alert">
                {props.statusDelete.status}
            </div>)


        }
        else if(props.statusDelete.type === "success"){

            alertStatus = (<div className="alert alert-success" role="alert">
                {props.statusDelete.status}
            </div>)


        }
    }


    return(
        <div>
            {alertStatus}
            <div className="card">
                <div className="card-header">เอกสาร</div>
                <div className="card-body">
                    <table className="table table-hover">
                        <tbody>

                    {
                        dataFile && dataFile.map((dataFile,index) =>
                            <tr key={index}>
                                <td width="70%">
                                    {dataFile.name}
                                </td>
                                <td>
                                    <button className="btn btn-warning text-light" onClick={()=>props.downloadFile(dataFile.name)}>ดาวน์โหลด</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>props.deleteFile(dataFile.name)}>ลบ</button>
                                </td>

                            </tr>

                        )
                    }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default TabsMenu
