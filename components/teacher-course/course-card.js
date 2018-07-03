import React from 'react'


const CourseCard =  (props) => {


    let haveCourse = null;
    let scheduleStartTime = null;
    let scheduleEndTime = null;
    let scheduleID = null;
    let year = null;
    let semester = null;
    let Card = [];
    const teacherData =  props.data;
    const currentDate =  props.currentDate;

    console.log(teacherData)


    // teacherData.aSubject.map((teacherSubject) => {
    //     console.log(teacherSubject)
    // })
    // teacherData.aSubject.forEach((teacherSubject) => {

        // haveCourse = 0;
        // semester = teacherSubject.ayear_term;
        // year = teacherSubject.ayear_year;
        //
        // teacherSubject.aGroup.forEach((teacherGroup) => {
        //
        //     teacherGroup.aSchedule.forEach((teacherSchedule) => {
        //
        //         let timeHourStart = parseInt(teacherSchedule.group_schedule_time_start.substring(0,2))-1;
        //         timeHourStart = ("0" + (timeHourStart)).slice(-2);
        //         let timeMinuteStart = teacherSchedule.group_schedule_time_start.substring(3,5);
        //         let timeSecondStart = teacherSchedule.group_schedule_time_start.substring(6,8);
        //         let timeStart = timeHourStart+':'+timeMinuteStart+':'+timeSecondStart;
        //
        //         let timeHourEnd = parseInt(teacherSchedule.group_schedule_time_stop.substring(0,2))+1;
        //         timeHourEnd = ("0" + (timeHourEnd)).slice(-2);
        //         let timeMinuteEnd = teacherSchedule.group_schedule_time_stop.substring(3,5);
        //         let timeSecondEnd = teacherSchedule.group_schedule_time_stop.substring(6,8);
        //         let timeEnd = timeHourEnd+':'+timeMinuteEnd+':'+timeSecondEnd;
        //
        //
        //
        //         if (teacherSchedule.group_schedule_date === props.currentDate) {
        //
        //
        //
        //             if(props.currentTime >= timeStart && props.currentTime <= timeEnd){
        //
        //
        //
        //                 haveCourse = 1;
        //                 scheduleID = teacherSchedule.group_schedule_id;
        //                 scheduleStartTime = teacherSchedule.group_schedule_time_start.substring(0, 5);
        //                 scheduleEndTime = teacherSchedule.group_schedule_time_stop.substring(0, 5);
        //
        //             }
        //
        //
        //         }
        //
        //
        //     })
        //
        //     if (haveCourse === 1) {
        //
        //         Card.push(
        //
        //             <div className="col-md-12">
        //                 <div className="card" >
        //                     <div className="card-body">
        //                         <h5 className="card-title">มี</h5>
        //                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of
        //                             the card's content.</p>
        //                         <a href="#" className="btn btn-primary">Go somewhere</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //
        //     }
        //     else if (haveCourse === 0) {
        //
        //         Card.push(
        //             <div className="col-md-12">
        //                 <div className="card" >
        //                     <div className="card-body">
        //                         <h5 className="card-title">ไม่มี</h5>
        //                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of
        //                             the card's content.</p>
        //                         <a href="#" className="btn btn-primary">Go somewhere</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         )
        //
        //     }
        //
        // })

        // scheduleStartTime = '';
        // scheduleEndTime = '';






    // })

    return (
        <div>

        </div>
    )


}

export default CourseCard
