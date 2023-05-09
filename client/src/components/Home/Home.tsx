
const descriptionCard = function (description: string, link: string, linkName: string) {
  return (
    <div className="w-full text-center  mx-6 pb-7 rounded-md border-2  ">
      <p className="my-6">
        {description}
      </p>

      <a href={link} className="text-xl text-blue-500 hover:text-blue-700 transition-all">
        {linkName}
      </a>



    </div>

  )
}


function Home () {


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
        </header>
    );

}

export default Home