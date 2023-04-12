import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)
  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id)
    setCourses(afterDeletedCourses)
  }
  const fetchCourses = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/courses')
      setCourses(response.data)
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
    }

  }
  useEffect(() => {
    fetchCourses()
  }, [])
  return <div className="App">
    {loading ? (
      <Loading />
    ) : (<Courses courses={courses} removeCourse={deleteCourse} />)}
  </div>
}

export default App;
