import "./Schedule.css";

function Schedule() {
    let mondayData = [{course_name: "Course 1", time: "8:30-9:45", room: "Goessmann 20", class_start: 510, class_end: 585}, {course_name: "Course 2", time: "14:30-15:20", room: "LGRT 223", class_start: 870, class_end: 920}]
    let tuesdayData = []
    let wednesdayData = [{course_name: "Course 1", time: "8:30-9:45", room: "Goessmann 20", class_start: 510, class_end: 585}, {course_name: "Course 2", time: "14:30-15:20", room: "LGRT 223", class_start: 870, class_end: 920}]
    let thursdayData = []
    let fridayData = [{course_name: "Course 2", time: "14:30-15:20", room: "LGRT 223", class_start: 870, class_end: 920}]
    const tableSize = 1000
    let last = 510

    let setLast = () => {
        last = 510
    }

    return (
        <div id="schedule-container">
            <ul class="date">
                <div class="title">Monday</div>
                <ul class="course-list" style={{height: tableSize + 'px'}}>
                    {mondayData.map((course) =>  {
                        const durationHeight = (course.class_end - course.class_start) / 615 * tableSize
                        const diffCourseMargin = (course.class_start - last) / 615 * tableSize
                        last = course.class_end
                        return (
                        <div class="course" style={{height: durationHeight + 'px', marginTop: diffCourseMargin + 'px'}}>
                            <div class="course-name">{course.course_name}</div>
                            <div class="course-time">{course.time}</div>
                            <div class="course-room">{course.room}</div>
                        </div>
                    )})}
                    {setLast()}
                </ul>
            </ul>
            <ul class="date">
                <div class="title">Tuesday</div>
                <ul class="course-list" style={{height: tableSize + 'px'}}>
                    {tuesdayData.map((course) =>  {
                        const durationHeight = (course.class_end - course.class_start) / 615 * tableSize
                        const diffCourseMargin = (course.class_start - last) / 615 * tableSize
                        last = course.class_end
                        return (
                        <div class="course" style={{height: durationHeight + 'px', marginTop: diffCourseMargin + 'px'}}>
                            <div class="course-name">{course.course_name}</div>
                            <div class="course-time">{course.time}</div>
                            <div class="course-room">{course.room}</div>
                        </div>
                    )})}
                    {setLast()}
                </ul>
            </ul>
            <ul class="date">
                <div class="title">Wednesday</div>
                <ul class="course-list" style={{height: tableSize + 'px'}}>
                    {wednesdayData.map((course) =>  {
                        const durationHeight = (course.class_end - course.class_start) / 615 * tableSize
                        const diffCourseMargin = (course.class_start - last) / 615 * tableSize
                        last = course.class_end
                        return (
                        <div class="course" style={{height: durationHeight + 'px', marginTop: diffCourseMargin + 'px'}}>
                            <div class="course-name">{course.course_name}</div>
                            <div class="course-time">{course.time}</div>
                            <div class="course-room">{course.room}</div>
                        </div>
                    )})}
                    {setLast()}
                </ul>
            </ul>
            <ul class="date">
                <div class="title">Thursday</div>
                <ul class="course-list" style={{height: tableSize + 'px'}}>
                    {thursdayData.map((course) =>  {
                        const durationHeight = (course.class_end - course.class_start) / 615 * tableSize
                        const diffCourseMargin = (course.class_start - last) / 615 * tableSize
                        last = course.class_end
                        return (
                        <div class="course" style={{height: durationHeight + 'px', marginTop: diffCourseMargin + 'px'}}>
                            <div class="course-name">{course.course_name}</div>
                            <div class="course-time">{course.time}</div>
                            <div class="course-room">{course.room}</div>
                        </div>
                    )})}
                    {setLast()}
                </ul>
            </ul>
            <ul class="date">
                <div class="title">Friday</div>
                <ul class="course-list" style={{height: tableSize + 'px'}}>
                    {fridayData.map((course) =>  {
                        const durationHeight = (course.class_end - course.class_start) / 615 * tableSize
                        const diffCourseMargin = (course.class_start - last) / 615 * tableSize
                        last = course.class_end
                        return (
                        <div class="course" style={{height: durationHeight + 'px', marginTop: diffCourseMargin + 'px'}}>
                            <div class="course-name">{course.course_name}</div>
                            <div class="course-time">{course.time}</div>
                            <div class="course-room">{course.room}</div>
                        </div>
                    )})}
                    {setLast()}
                </ul>
            </ul>
        </div>
    );
}

export default Schedule