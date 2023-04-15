import "./Home.css";

const descriptionCard = function(description: string) {
  return (
    <div className="container text-center">
      <p>
        {description}
      </p>
    </div>
    
  )
}

function Home () {
    return (
        <header className="App-header h-full bg-[#004a73]">
          <p className="text-3xl text-center text-white pt-[10%]">
            Welcome to Major Planner, an app to help you plan your course schedules
          </p>
          <div className="container text-white flex flex-row px-16 py-8">
            {descriptionCard("Check your schedule here")}
            {descriptionCard("Adjust your profile")}
            {descriptionCard("See course description and requirements")}
          </div>
        </header>
    );
}

export default Home