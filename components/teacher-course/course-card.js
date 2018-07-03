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

    if(teacherData !== undefined && currentTime !== undefined && currentDate !== undefined) {

        teacherData.aSubject.map((teacherSubject, indexSubject) => {



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
                        <div className="card" style={{'height':'90%'}}>
                                <div className="card-body">
                                    <h4>{teacherSubject.subjectName}</h4>
                                    <p>รหัสวิชา : {teacherSubject.subjectID}</p>
                                    <p>กลุ่มเรียน : {teacherGroup.groupName}</p>
                                    <p>เวลา: {scheduleStartTime} - {scheduleEndTime} น.</p>
                                </div>
                        </div>
                            <br/>
                        </div>
                    )
                }
                if (haveCourse === 0) {

                    card.push(
                        <div className="col-md-4" key={index}>
                        <div className="card" style={{'height':'90%'}}>
                            <div className="card-body">
                                <h4>{teacherSubject.subjectName}</h4>
                                <p>รหัสวิชา : {teacherSubject.subjectID}</p>
                                <p>กลุ่มเรียน : {teacherGroup.groupName}</p>
                                <p>เวลา: <span className="text-danger">ในขณะนี้ยังไม่มีคาบเรียน</span></p>
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
    }



    return (
       <div className="row">
                {card}
        </div>
    )
}

export default CourseCard