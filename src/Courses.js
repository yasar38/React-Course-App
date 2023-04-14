import { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';


function Courses({ courses, removeCourse }) {
    const [index, setIndex] = useState(0);
    const { content, title, price } = courses[index]
    const prevCourse = () => {
        setIndex((index) => {
            let newIndex = index - 1
            return checkIndex(newIndex)
        })
    }
    const checkIndex = (index) => {
        if (index < 0) {
            return courses.length - 1
        }
        if (index > courses.length - 1) {
            return 0
        }
        return index
    }
    const nextCourse = (index) => {
        setIndex((index) => {
            let newIndex = index + 1
            return checkIndex(newIndex)
        })
        return index
    }
    return <div className="courseMainDiv">
        <div className="baslik"><b>Kurslarım</b></div>
        <div className="cardDiv">
            <Button text onClick={prevCourse}><i className="pi pi-chevron-left"></i></Button>
            <div className='kart'>
                <div className="card flex justify-content-center">
                    <Card title={title} className="md:w-25rem">
                        <p className="m-0">
                            <p className="prices">{price} TL</p><br />
                            {content}
                        </p>
                    </Card>
                </div>
            </div>
            <Button text onClick={nextCourse}><i className="pi pi-chevron-right"></i></Button>
        </div>
    </div>
}
export default Courses