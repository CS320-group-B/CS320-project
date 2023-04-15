import "./Schedule.css";

function Schedule() {
    let mondayData = [{ course_name: "Course 1", time: "8:30-9:45", room: "Goessmann 20", class_start: 510, class_end: 585 }, { course_name: "Course 2", time: "14:30-15:20", room: "LGRT 223", class_start: 870, class_end: 920 }]
    let tuesdayData: any[] = []
    let wednesdayData = [{ course_name: "Course 1", time: "8:30-9:45", room: "Goessmann 20", class_start: 510, class_end: 585 }, { course_name: "Course 2", time: "14:30-15:20", room: "LGRT 223", class_start: 870, class_end: 920 }]
    let thursdayData: any[] = []
    let fridayData = [{ course_name: "Course 2", time: "14:30-15:20", room: "LGRT 223", class_start: 870, class_end: 920 }]
    const tableSize = 1000
    let last = 510

    let setLast = () => {
        last = 510
        return ""
    }

    return (
        <div id="schedule-container" className="pt-8">
            <ul className="date">
                <div className="title">Monday</div>
                <ul className="course-list" style={{ height: tableSize + 'px' }}>
                    {mondayData.map((course) => {
                        const durationHeight = (course.class_end - course.class_start) / 615 * tableSize
                        const diffCourseMargin = (course.class_start - last) / 615 * tableSize
                        last = course.class_end
                        return (
                            <div className="course" style={{ height: durationHeight + 'px', marginTop: diffCourseMargin + 'px' }}>
                                <div className="course-name">{course.course_name}</div>
                                <div className="course-time">{course.time}</div>
                                <div className="course-room">{course.room}</div>
                            </div>
                        )
                    })}
                    {setLast()}
                </ul>
            </ul>
            <ul className="date">
                <div className="title">Tuesday</div>
                <ul className="course-list" style={{ height: tableSize + 'px' }}>
                    {tuesdayData.map((course) => {
                        const durationHeight = (course.class_end - course.class_start) / 615 * tableSize
                        const diffCourseMargin = (course.class_start - last) / 615 * tableSize
                        last = course.class_end
                        return (
                            <div className="course" style={{ height: durationHeight + 'px', marginTop: diffCourseMargin + 'px' }}>
                                <div className="course-name">{course.course_name}</div>
                                <div className="course-time">{course.time}</div>
                                <div className="course-room">{course.room}</div>
                            </div>
                        )
                    })}
                    {setLast()}
                </ul>
            </ul>
            <ul className="date">
                <div className="title">Wednesday</div>
                <ul className="course-list" style={{ height: tableSize + 'px' }}>
                    {wednesdayData.map((course) => {
                        const durationHeight = (course.class_end - course.class_start) / 615 * tableSize;
                        const diffCourseMargin = (course.class_start - last) / 615 * tableSize;
                        last = course.class_end
                        return (
                            <div className="course" style={{ height: durationHeight + 'px', marginTop: diffCourseMargin.toString() + 'px' }}>
                                <div className="course-name">{course.course_name}</div>
                                <div className="course-time">{course.time}</div>
                                <div className="course-room">{course.room}</div>
                            </div>
                        )
                    })}
                    {setLast()}
                </ul>
            </ul>
            <ul className="date">
                <div className="title">Thursday</div>
                <ul className="course-list" style={{ height: tableSize + 'px' }}>
                    {thursdayData.map((course) => {
                        const durationHeight = (course.class_end - course.class_start) / 615 * tableSize
                        const diffCourseMargin = (course.class_start - last) / 615 * tableSize
                        last = course.class_end
                        return (
                            <div className="course" style={{ height: durationHeight + 'px', marginTop: diffCourseMargin + 'px' }}>
                                <div className="course-name">{course.course_name}</div>
                                <div className="course-time">{course.time}</div>
                                <div className="course-room">{course.room}</div>
                            </div>
                        )
                    })}
                    {setLast()}
                </ul>
            </ul>
            <ul className="date">
                <div className="title">Friday</div>
                <ul className="course-list" style={{ height: tableSize + 'px' }}>
                    {fridayData.map((course) => {
                        const durationHeight = (course.class_end - course.class_start) / 615 * tableSize;
                        const diffCourseMargin = (course.class_start - last) / 615 * tableSize;
                        last = course.class_end
                        return (
                            <div className="course" style={{ height: durationHeight + 'px', marginTop: diffCourseMargin + 'px' }}>
                                <div className="course-name">{course.course_name}</div>
                                <div className="course-time">{course.time}</div>
                                <div className="course-room">{course.room}</div>
                            </div>
                        )
                    })}
                    {setLast()}
                </ul>
            </ul>
        </div>
    );
}

export default Schedule