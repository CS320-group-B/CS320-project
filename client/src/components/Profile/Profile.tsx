import React, {useState, FC} from "react";
import cn from "classnames";
import { UserProfile } from "../UserProfile";
import { IProfile } from "./types";
import { Icon } from "../icon";
import styles from "./Profile.module.sass";
import { Link } from "react-router-dom";
import { CourseCard } from "../CourseCard";

const Profile: FC/*<IProfile>*/ = (/*{user}*/) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visible, setVisible] = useState(false);
  
    const navLinks = [
        "Taken Courses",
        "Planned Courses",
     ];

    const user = {
        id: "abc",
        name: "CS320",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ligula ac metus placerat consequat ut in risus. Mauris at lobortis est. Nam pharetra a enim sit amet tincidunt. Suspendisse sagittis ornare augue, at feugiat libero porttitor at. Praesent imperdiet est at tellus pellentesque sagittis. Fusce hendrerit vitae elit vel ullamcorper. Aenean eget sodales ipsum. Fusce a turpis lobortis, tempus justo eget, convallis nunc. Etiam et elementum nisi. Aliquam hendrerit malesuada velit, et dapibus nisl. Curabitur a sollicitudin velit.",
        email: "course_planner@gmail.com",
        createdAt: "",
        image: "",
        taken_courses: "",
        planned_courses: "",
    }

    const taken = [ {
      name: "CS320: Introduction to Software Engineering",
      id: "abc",
      credits: 4,
      number: "4",
      professors: ["Heather Conboy"],
      subject: "Computer Science",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. VestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ligula ac metus placerat consequat ut in risus. Mauris at lobortis est. Nam pharetra a enim sit amet tincidunt. Suspendisse sagittis ornare augue, at feugiat libero porttitor at. Praesent imperdiet est at tellus pellentesque sagittis. Fusce hendrerit vitae elit vel ullamcorper. Aenean eget sodales ipsum. Fusce a turpis lobortis, tempus justo eget, convallis nunc. Etiam et elementum nisi. Aliquam hendrerit malesuada velit, et dapibus nisl. Curabitur a sollicitudin velit.",
      prerequisites: []
    },{
      name: "CS220: Introduction to Algorithm",
      id: "ljlsvi",
      credits: 4,
      number: "4",
      professors: ["Marius Minea", "Ghazaleh Parvini"],
      subject: "Computer Science",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget ligula ac metus placerat consequat ut in risus. Mauris at lobortis est. Nam pharetra a enim sit amet tincidunt. Suspendisse sagittis ornare augue, at feugiat libero porttitor at. Praesent imperdiet est at tellus pellentesque sagittis. Fusce hendrerit vitae elit vel ullamcorper. Aenean eget sodales ipsum. Fusce a turpis lobortis, tempus justo eget, convallis nunc. Etiam et elementum nisi. Aliquam hendrerit malesuada velit, et dapibus nisl. Curabitur a sollicitudin velit. ",
      prerequisites: []
    }]

    const planned = [{
      name: "CS383: Introduction to Artificial Intelligence",
      id: "sadagf",
      credits: 4,
      number: "4",
      professors: ["Matthew Rattigan"],
      subject: "Computer Science",
      description: "Hello, World",
      prerequisites: []
    }]

    return (
      <div className={styles.profile}>
        <div
          className={cn(styles.head, { [styles.active]: visible })}
          style={{
            backgroundImage: "url(/image/content/bg-profile.jpg)",
          }}
        >
          <div className={cn("container", styles.container)}>
            <div className={styles.btns}>
              <button
                className={cn("button-stroke button-small", styles.button)}
                onClick={() => setVisible(true)}
              >
                <Icon name="edit" size="16" />
                <span> Edit cover photo</span>
              </button>
              <button
                className={cn("button-stroke button-small", styles.button)}
                // to={`/profile-edit/${user.id}`}
              >
                <Link to={`/Profile-edit/${user.id}`}>
                    <Icon name="image" size="16" />
                    <span> Edit profile</span>
                </Link>
              </button>
            </div>
            <div className={styles.file}>
              <input type="file" />
              <div className={styles.wrap}>
                <Icon name="upload-file" size="48" />
                <div className={styles.info}>Drag and drop your photo here</div>
                <div className={styles.text}>or click to browse</div>
              </div>
              <button
                className={cn("button-small", styles.button)}
                onClick={() => setVisible(false)}
              >
                Save photo
              </button>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={cn("container", styles.container)}>
            <UserProfile 
              className={styles.user} 
              user={user}
            />
  
            <div className={styles.wrapper}>
              <div className={styles.nav}>
                {navLinks.map((x, index) => (
                  <button
                    className={cn(styles.link, {
                      [styles.active]: index === activeIndex,
                    })}
                    key={index}
                    onClick={() => setActiveIndex(index)}
                  >
                    {x}
                  </button>
                ))}
              </div>
              <div className={styles.group}>
                <div className={styles.item}>
                  {/* {activeIndex === 0 && (
                    <Product className ={styles.items} item={bids.slice(0, 3)} />
                  )}
  
  
                  {activeIndex === 1 && (
                    <IdeaCard idea = {idea1} />
  
                    <div>
                      {ideas.map((idea, index) => <IdeaCard key={index} idea={idea} />)}
                    </div>
  
  
                  )} */}
                  {activeIndex === 0 && (
                    <div className={styles.wrapper}>       
                      <div className={styles.list}>
                        {taken.map((course, index) => 
                          <CourseCard key={index} course={course} />
                        )}
                      </div>
                    </div>
                  )}
                  {activeIndex === 1 && (
                    <div className={styles.wrapper}>       
                      <div className={styles.list}>
                        {planned.map((course, index) => 
                          <CourseCard key={index} course={course} />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* End_Changes */}
  
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Profile;