import React from 'react'




const CourseCard = (props) => {

    let haveCourse = null;
    let scheduleStartTime = null;
    let scheduleEndTime = null;
    let scheduleID = null;
    let year = null;
    let semester = null;
    const teacherData = props.data;
    const currentTime = props.currentTime;
    const currentDate = props.currentDate;
    let card = [];
    let index = 0;



    teacherData && currentTime && currentDate && teacherData.aSubject.map((teacherSubject) => {



            haveCourse = 0;
            semester = teacherSubject.ayear_term;
            year = teacherSubject.ayear_year;


            teacherSubject.aGroup.map((teacherGroup,) => {

                teacherGroup.aSchedule.map((teacherSchedule) => {


                    index++;

                    let timeHourStart = parseInt(teacherSchedule.group_schedule_time_start.substring(0, 2)) - 1;
                    timeHourStart = ("0" + (timeHourStart)).slice(-2);
                    let timeMinuteStart = teacherSchedule.group_schedule_time_start.substring(3, 5);
                    let timeSecondStart = teacherSchedule.group_schedule_time_start.substring(6, 8);
                    let timeStart = timeHourStart + ':' + timeMinuteStart + ':' + timeSecondStart;

                    let timeHourEnd = parseInt(teacherSchedule.group_schedule_time_stop.substring(0, 2)) + 1;
                    timeHourEnd = ("0" + (timeHourEnd)).slice(-2);
                    let timeMinuteEnd = teacherSchedule.group_schedule_time_stop.substring(3, 5);
                    let timeSecondEnd = teacherSchedule.group_schedule_time_stop.substring(6, 8);
                    let timeEnd = timeHourEnd + ':' + timeMinuteEnd + ':' + timeSecondEnd;




                    if (teacherSchedule.group_schedule_date === currentDate) {




                        if (currentTime >= timeStart && currentTime <= timeEnd) {


                            haveCourse = 1;
                            scheduleID = teacherSchedule.group_schedule_id;
                            scheduleStartTime = teacherSchedule.group_schedule_time_start.substring(0, 5);
                            scheduleEndTime = teacherSchedule.group_schedule_time_stop.substring(0, 5);

                        }


                    }



                })


                if (haveCourse === 1) {
                    card.push(
                        <div className="col-md-4" key={index}>

                        <div className="card">
                                <div className="card-body">
                                    <p className="text-primary">{teacherSubject.subjectName}</p>
                                    <p>รหัสวิชา : {teacherSubject.subjectID}</p>
                                    <p>กลุ่มเรียน : {teacherGroup.groupName}</p>
                                    <p>เวลา: {scheduleStartTime} - {scheduleEndTime} น.</p>
                                </div>
                            <div className="card-footer">
                            <div className="row">
                            <div className="col-md-6">
                                <p/>
                                <button className="btn btn-success btn-md btn-block">เข้าห้องเรียน</button>
                                <p/>
                            </div>
                            <div className="col-md-6">

                                <p/>
                                    <button className="btn btn-warning btn-md btn-block text-light" onClick={() => props.manageClass(teacherSubject.subjectID,teacherGroup.groupID,teacherGroup.groupName,teacherSubject.subjectName)}>จัดการห้องเรียน</button>
                                <p/>

                            </div>

                            </div>
                            </div>
                        </div>
                            <br/>


                        </div>
                    )
                }
                if (haveCourse === 0) {

                    card.push(
                        <div className="col-md-4" key={index}>

                        <div className="card" >
                            <div className="card-body">
                                <p className="text-primary">{teacherSubject.subjectName}</p>
                                <p>รหัสวิชา : {teacherSubject.subjectID}</p>
                                <p>กลุ่มเรียน : {teacherGroup.groupName}</p>
                                <p>เวลา: <span className="text-danger">ในขณะนี้ยังไม่มีคาบเรียน</span></p>
                            </div>
                            <div className="card-footer">
                            <div className="row">
                            <div className="col-md-6">
                                <p/>
                                <button className="btn btn-danger btn-md btn-block" onClick={props.alertNoClass}>เข้าห้องเรียน</button>
                                <p/>
                            </div>
                            <div className="col-md-6">
                                <p/>
                                <button className="btn btn-warning btn-md btn-block text-light" onClick={() => props.manageClass(teacherSubject.subjectID,teacherGroup.groupID,teacherGroup.groupName,teacherSubject.subjectName,currentDate)}>จัดการห้องเรียน</button>
                                <p/>
                            </div>

                            </div>
                            </div>
                        </div>
                            <br/>

                        </div>
                    )

                }

            })

            scheduleStartTime = '';
            scheduleEndTime = '';


        })




    return (
       <div className="row">



               {card}


           </div>
    )
}

export default CourseCard