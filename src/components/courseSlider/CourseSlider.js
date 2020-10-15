import React from "react";
import { courses } from "../../dummyData/courses";

const CourseSlider = () => {
  let courseCopy = [...courses];
  const courseList = courseCopy.map((c) => (
    <div key={c.position} className="course-slider__course">
      <img className="course-slider__course--img" src={c.img} alt={c.name} />
      <div className="course-slider__course--bottom">
        <div className="course-slider__course--bottom--title">{c.title}</div>
        <div className="course-slider__course--bottom--author">
          by: {c.author}
        </div>
        <div className="course-slider__course--bottom--price">{c.price}</div>
      </div>
    </div>
  ));

  return (
    <div className="course-slider">
      <div className="course-slider__title">Top Courses</div>
      <div className="course-slider__underline" />
      <div className="course-slider__container">
        <div className="course-slider__course--back">Back</div>
        <div className="course-slider__courses">{courseList}</div>
        <div className="course-slider__course--back">Forward</div>
      </div>
    </div>
  );
};

export default CourseSlider;
