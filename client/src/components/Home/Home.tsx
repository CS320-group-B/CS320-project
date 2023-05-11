import "./Home.css";
import { useState, useEffect } from "react";
import Axios from 'axios';

const descriptionCard = function(description: string, link: string, linkName: string) {
  return (
    <div className="container text-center bg-white mx-6 pb-7 rounded-md border-2 border-black">
      <p className="my-6">
        {description}
      </p>
      <div className="hover:-translate-y-1 transition-all">
        <a href={link} className="text-xl text-blue-400 hover:translate-y-0">
          {linkName}
        </a>
      </div>
      
    </div>
    
  )
}
// const rows = [];
// for (let i = 0; i < 20; i++) {
//     rows.push(<ObjectRow/>);
// }
// return <tbody>{rows}</tbody>;

function Home () {
    const [listOfCourses, setListOfCourses] = useState<any[]>([]);

    useEffect(() => {
      Axios.get("http://localhost:3001/getCourses").then((response) => {
        setListOfCourses(response.data);
      });
    }, []);
    // const rows: typeof listOfCourses[0][] = []
    // for (let i = 0; i < 20; i++) {
    //   rows.push(listOfCourses[i]);
    // }

    return (
        <header className="App-header h-screen bg-[#004a73]">
          <p className="text-3xl text-center text-white pt-[10%] mb-16">
            Welcome to Major Planner, an app to help you plan your course schedules
          </p>
          <div className="container flex flex-row px-16 py-16x">
            {descriptionCard("Check your saved schedule", "/Schedule", "My schedule")}
            {descriptionCard("Adjust your profile", "/Profile", "My profile")}
            {descriptionCard("See course description and requirements", "/Track", "Course list")}
          </div>
          <div>
            {listOfCourses.map((course)=> {
              return(
                <div>
                  <h1>Name: {course.name}</h1>
                </div>
              )
            })}
            {/* {[0,1,2].forEach(x=> {
              return(
                <div>
                  <h1>Name: {listOfCourses[x].name}</h1>
                </div>
              )
            })} */}
          </div>
        </header>
    );
}

export default Home