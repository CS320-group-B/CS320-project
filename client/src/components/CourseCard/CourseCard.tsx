
import React, { FC,useState } from "react";
import cn from "classnames";
// import { CustomLink } from "../customLink/index";
//import {TCard} from './types';
import styles from "./CourseCard.module.sass";
import { Icon } from "../icon";
// import Interpunct from "react-interpunct";
import { TCourseCard } from "./types";
// import { updatedAt } from "../../../../utils/updatedAt";
// import { issuePreviewShorterner } from "../../../../utils/issuePreviewShorterner";
// import useUserByUid from "../../../hooks/useUserByUid"
// import { getRandomProductCategories } from "utils/getRandomIdeaCategories";

const CourseCard: FC<TCourseCard> = ( {course} ) => {
  // const issuePreviewShorterner = (req: string | null | undefined, limit: number) : string => {
  //   if (!req) return "";
  //   if (req.length <= limit) return req;
  //   return req.slice(0, limit) + "..." + req.slice(req.length - 4);
  // }
  

  return (
    <div>
        <div className={styles.body}>
          <div className={styles.line}>
          <div className={styles.upper}>
            <div className={styles.title}>{course.name}
            </div>
                  {/* <div className={ styles.price}>
                      <button className={styles.copy}>
                      <Icon name="heart" size="35" />
                    </button>
                    <div className={styles.number}>100</div>
                  </div> */}
            
          </div>
          <div className={styles.details}>
            
          {/* {issuePreviewShorterner(course.description, 250)} */}
          {course.description}
          </div>
        
          
        </div>
        <div className={styles.foot}>
          <div className={styles.categoryBox}>
            <div className={styles.author}> Professor: {course.professors.join(", ")}</div>
          </div>
          <div className={styles.categoryBox}>
            <div className={styles.credit}> Credit: {course.credits}</div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default CourseCard;
