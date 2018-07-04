import React from 'react'




const CourseCard = (props) => {

    let haveCourse = null;
    let scheduleStartTime = null;
    let scheduleEndTime = null;
    let scheduleID = null;
    let year = null;
    let semester = null;
    const studentData = props.data;
    const currentTime = props.currentTime;
    const currentDate = props.currentDate;
    let card = [];
    let index = 0;

    console.log(studentData)

    studentData && currentTime && currentDate && studentData.aSubject.map((studentSubject) => {

        haveCourse = 0;
        year = studentSubject.ayear_year;
        semester = studentSubject.ayear_term;

        studentSubject.aSchedule.map((studentSchedule) => {

            let timeHourStart = parseInt(studentSchedule.group_schedule_time_start.substring(0,2));
            timeHourStart = ("0" + (timeHourStart)).slice(-2);
            let timeMinuteStart = studentSchedule.group_schedule_time_start.substring(3,5);
            let timeSecondStart = studentSchedule.group_schedule_time_start.substring(6,8);
            let timeStart = timeHourStart+':'+timeMinuteStart+':'+timeSecondStart;

            let timeHourEnd = parseInt(studentSchedule.group_schedule_time_stop.substring(0,2));
            timeHourEnd = ("0" + (timeHourEnd)).slice(-2);
            let timeMinuteEnd = studentSchedule.group_schedule_time_stop.substring(3,5);
            let timeSecondEnd = studentSchedule.group_schedule_time_stop.substring(6,8);
            let timeEnd = timeHourEnd+':'+timeMinuteEnd+':'+timeSecondEnd;





            if(studentSchedule.group_schedule_date === currentDate){






                if(currentTime >= timeStart && currentTime <= timeEnd){

                    haveCourse = 1;
                    scheduleStartTime = studentSchedule.group_schedule_time_start.substring(0,5);
                    scheduleEndTime = studentSchedule.group_schedule_time_stop.substring(0,5);

                }



            }


        })
        if (haveCourse === 1) {
            card.push(
                <div className="col-md-4" key={index}>

                    <div className="card">
                        <div className="card-body">
                            <p className="text-primary">{studentSubject.subject_name}</p>
                            <p>รหัสวิชา : {studentSubject.subject_id}</p>
                            <p>กลุ่มเรียน : {studentSubject.group_name}</p>
                            <p>เวลา: {scheduleStartTime} - {scheduleEndTime} น.</p>
                        </div>
                        <div className="card-footer">

                                    <p/>
                                    <button className="btn btn-success btn-md btn-block" onClick={() => props.intoClass(studentSubject.subject_id,studentSubject.group_id,today,studentSubject.subject_name,scheduleStartTime,scheduleEndTime,year,semester,studentSubject.group_name)}>เข้าห้องเรียน</button>
                                    <p/>
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
                            <p className="text-primary">{studentSubject.subject_name}</p>
                            <p>รหัสวิชา : {studentSubject.subject_id}</p>
                            <p>กลุ่มเรียน : {studentSubject.group_name}</p>
                            <p>เวลา: <span className="text-danger">ในขณะนี้ยังไม่มีคาบเรียน</span></p>
                        </div>
                        <div className="card-footer">
                                    <p/>
                                    <button className="btn btn-danger btn-md btn-block" onClick={props.alertNoClass}>เข้าห้องเรียน</button>
                                    <p/>

                        </div>
                    </div>
                    <br/>

                </div>
            )

        }

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