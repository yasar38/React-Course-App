import Course from "./Course"

function Courses({ courses, removeCourse }) {
    return <div className="courseMainDiv">
        <div className="baslik"><b>Kurslarım</b></div>
        <div className="cardDiv">
            {
                courses.map((course) => {
                    return (
                        <Course {...course} key={course.id} removeOneCourse={removeCourse} />
                    )
                })
            }
        </div>
    </div>
}
export default Courses