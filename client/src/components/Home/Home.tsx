import "./Home.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

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

function Home () {
  const testContext = useContext(UserContext);

  testContext.setUserData({user: "Hello, World", track: "hi"})

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

          <div>test {testContext?.userData?.user}</div>
        </header>
    );
}

export default Home