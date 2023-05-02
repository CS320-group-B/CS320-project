
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

function Home() {
  return (

    <div>
      <p className="text-3xl text-center text-black pt-4 mb-16 mt-16">
        Welcome to Major Planner, an app to help you plan your course schedules
      </p>
      <div className="flex flex-row px-16 py-16">
        {descriptionCard("Adjust your profile", "/Profile", "My profile")}
        {descriptionCard("See course description and requirements", "/Track", "Course list")}
      </div>
    </div>
  );
}

export default Home