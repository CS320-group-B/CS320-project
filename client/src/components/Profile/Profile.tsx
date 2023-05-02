import React, { useState, FC } from "react";
import Popup from 'reactjs-popup';//for pop up
import { track } from "../../constants/Track";
import { Course } from "../../types/course";
import { courses } from "../../constants/Course";
import { user } from "../../constants/User";

const Profile: FC/*<IProfile>*/ = (/*{user}*/) => {



  const now = new Date();

  const plannedCourses: Course[] = track.semesters.filter((s, i) => {
    return (s.year === now.getFullYear() && getSeason(now) !== s.season && s.season === "Fall") || s.year > now.getFullYear();
  }).map(s => s.classes.map(c => courses.find(k => k.key === c) || null)).flat().filter(c => c) as Course[];

  const previousCourses: Course[] = track.semesters.filter((s, i) => {
    return s.year === now.getFullYear() && getSeason(now) === s.season;

  }).map(s => s.classes.map(c => courses.find(k => k.key === c) || null)).flat().filter(c => c) as Course[];

  const currentCourses: Course[] = track.semesters.filter((s, i) => {
    return (s.year === now.getFullYear() && getSeason(now) !== s.season && s.season === "Spring") || s.year < now.getFullYear();
  }).map(s => s.classes.map(c => courses.find(k => k.key === c) || null)).flat().filter(c => c) as Course[];

  return (

    <div className="container grid grid-cols-4 mx-auto gap-8  p-8">
      <div className="col-span-1 shadow-sm rounded-xl border border-gray-200 px-8 py-8 overflow-hidden">
        <div className="flex flex-col relative ">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <img src={"https://www.umass.edu/sites/default/files/2023-03/UMass_Seal_Medium_PMS_202_0.png"} className="rounded-lg shadow-lg h-44 w-44 mb-6 object-cover absolute -top-16 -right-16 opacity-5 saturate-0"></img>

              <img className="w-32 h-32 rounded-full object-cover" src={user.avatar} alt="Profile Picture" />

              <Popup trigger=
                {<button className="bg-black text-white px-8 py-10 rounded-lg" >Change profile</button>}//only half of the button works 
                position="right center">
                <form onSubmit={onProfileFormSubmit}>
                  <fieldset>
                    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
                      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                          Contact Form
                        </h1>
                        <form className="mt-6">
                          <div className="mb-2">
                            <label>
                              <span className="text-gray-700">Your name</span>
                              <input
                                type="text"
                                name="name"
                                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder="John Smith"
                              />
                            </label>
                          </div>
                          <div className="mb-2">
                            <label>
                              <span className="text-gray-700">Email address</span>
                              <input
                                name="email"
                                type="email"
                                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder="jsmith@umass.edu"
                                required
                              />
                            </label>
                          </div>
                          <div className="mb-2">
                            <label>
                              <span className="text-gray-700">Your Major</span>
                              <input
                                type="text"
                                name="name"
                                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder="Computer Science"
                              />
                            </label>
                          </div>
                          <div className="mb-2">
                            <label>
                              <span className="text-gray-700">Your Graduation Semester</span>
                              <input
                                type="text"
                                name="name"
                                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                placeholder="John Smith"
                              />
                            </label>
                          </div>
                          <div className="mb-2">
                            <label>
                              <span className="text-gray-700">Bio</span>
                              <textarea
                                name="message"
                                className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                                
                              ></textarea>
                            </label>
                          </div>

                          <div className="mb-6">
                            <button
                              type="submit"
                              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                            >
                              Update Profile
                            </button>
                          </div>
                          <div></div>
                        </form>
                      </div>
                    </div>
                  </fieldset>
                  <button type="submit">Submit</button>
                </form>
              </Popup>

            </div>
          </div>
          <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
          <a className="text-sm text-blue-500 underline" href={`mailto:${user.email}`}>{user.email}</a>
          <p className="text-sm mt-4"><strong>Major: </strong> {user.major}</p>
          <p className="text-sm"><strong>Subfield: </strong> {user.subfield}</p>

          <p className="text-sm"><strong>Graduating: </strong> {user.graduation.season} {user.graduation.year}</p>
          <p className="text-sm mt-4"><strong>Bio: </strong> {user.bio}</p>

        </div>
      </div >
      <div className="col-span-3 shadow-sm rounded-xl border border-gray-200 px-8 py-8">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-bold">Courses</h1>
            <div className="flex flex-row">
              <button className="bg-black text-white px-4 py-2 rounded-lg">Add Course</button>

            </div>

          </div>

        </div>
        <div className="flex flex-col">
          {/* {
            plannedCourses.map((course, i) => {
              return (
                <div className="mt-4">
                  <h4 className="text-gray-500 font-bold">Planned</h4>

                  <h1 className="text-lg font-semibold"> {course.key + " | "}{course.name} {'(' + course.credits + ' credits)'}</h1>

                  <h5 className="text-md"> By: {course.professors.map(p => p.split('-').map(c => c[0].toUpperCase() + c.substring(1, c.length)).join(' ')).join(', ')}</h5>
                  <p className="text-sm mt-1 text-gray-500"> {course.description.split('.').slice(0, 3).join('.') + "..."}</p>

                </div>
              )
            })
          }
          {
            currentCourses.map((course, i) => {
              const course = courses.find(k => k.key === c);
              return (
                <div className="mt-4">
                  <h4 className="text-blue-700 font-bold">In Progress</h4>

                  <h1 className="text-lg font-semibold"> {course.key + " | "}{course.name} {'(' + course.credits + ' credits)'}</h1>

                  <h5 className="text-md"> By: {course.professors.map(p => p.split('-').map(c => c[0].toUpperCase() + c.substring(1, c.length)).join(' ')).join(', ')}</h5>
                  <p className="text-sm mt-1 text-gray-500"> {course.description.split('.').slice(0, 3).join('.') + "..."}</p>

                </div>
              )
            })
          } */}
          {
            track.semesters.map((s, i) => {
              const status = getStatus(s);
              return s.classes.map((c, j) => {
                const course = courses.find(k => k.key === c);
                if (course) {
                  return (
                    <div className="mt-4">
                      <h4 className={`${status.color} font-bold`}>{status.status}</h4>

                      <h1 className="text-lg font-semibold"> {course.key + " | "}{course.name} {'(' + course.credits + ' credits)'}</h1>

                      <h5 className="text-md"> By: {course.professors.map(p => p.split('-').map(c => c[0].toUpperCase() + c.substring(1, c.length)).join(' ')).join(', ')}</h5>
                      <p className="text-sm mt-1 text-gray-500"> {course.description.split('.').slice(0, 3).join('.') + "..."}</p>

                    </div>
                  );
                }
                return null;
              });
            }).flat().filter(c => c).reverse()
          }
        </div>
      </div>
    </div >

  );
};

function getSeason(date: Date): string {
  const month = date.getMonth();
  if (month < 3) {
    return "Winter";
  } else if (month < 6) {
    return "Spring";
  } else if (month < 9) {
    return "Summer";
  } else {
    return "Fall";
  }

}
function onProfileFormSubmit() {
  //do stuff
}
function getStatus(s: any): { status: string, color: string } {
  const now = new Date();
  const planned = (s.year === now.getFullYear() && getSeason(now) !== s.season && s.season === "Fall") || s.year > now.getFullYear();
  const inProgress = s.year === now.getFullYear() && getSeason(now) === s.season;

  if (planned) {
    return { status: "Planned", color: "text-gray-500" };

  } else if (inProgress) {
    return { status: "In Progress", color: "text-blue-500" };
  }
  return { status: "✓ Completed", color: "text-green-500" };
}

export default Profile;