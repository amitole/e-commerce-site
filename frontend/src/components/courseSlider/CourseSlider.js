import React, { useState } from "react";
import { courses, sale } from "../../dummyData/courses";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useWindoeSize from "../../customHooks/useWindowsSize";
import { useDispatch } from "react-redux";
import { setAlert } from "../../redux/actions/alertAction";

const CourseSlider = () => {
  const [courseCount, setCourseCount] = useState(0);
  const [courseSliderAnimate, setCourSliderAnimate] = useState(
    "course-slider__courses"
  );

  const { width } = useWindoeSize();
  let showCourses = 3;
  if (width <= 596) showCourses = 2;

  let courseCopy = [...courses];

  const dispatch = useDispatch();

  const makeAlert = (el) => {
    dispatch(setAlert(el.title));
  };

  courseCopy.push({
    title: "See More Courses",
    price: " varies",
    author: "our authors",
    img: require("../../imgs/books.jpg"),
    position: 9999999999999,
    id: 9999999999999,
  });

  const changeCourseCountBack = (e) => {
    e.stopPropagation();
    setCourSliderAnimate(
      "course-slider__courses course-slider__slideout-right"
    );
    setTimeout(() => {
      setCourseCount(courseCount - showCourses);
      setCourSliderAnimate(
        "course-slider__courses course-slider__slidein-right"
      );
    }, 150);
  };

  const changeCourseCountForward = (e) => {
    e.stopPropagation();
    setCourSliderAnimate("course-slider__courses course-slider__slideout");
    setTimeout(() => {
      setCourseCount(courseCount + showCourses);
      setCourSliderAnimate("course-slider__courses course-slider__slidein");
    }, 150);
  };

  const courseList = courseCopy.map((c) => (
    <div key={c.position} className="course-slider__course">
      <img className="course-slider__course--img" src={c.img} alt={c.name} />
      <div className="course-slider__course--bottom">
        <div className="course-slider__course--bottom--title">{c.title}</div>
        <div className="course-slider__course--bottom--author">
          by: {c.author}
        </div>

        {c.saleOptIn && sale ? (
          <div className="course-slider__course--bottom--price">
            <span className="course-slider__course--bottom--strike">
              ${c.price}
            </span>
            Sale ${c.price * sale}
          </div>
        ) : (
          <div className="course-slider__course--bottom--price">${c.price}</div>
        )}

        {c.position === 9999999999999 ? (
          <div />
        ) : (
          <input
            className="course-slider__course--bottom--button"
            type="submit"
            value="add to cart"
            onClick={() => makeAlert(c)}
          />
        )}
      </div>
    </div>
  ));

  let activeList = [];
  showCourses === 3
    ? (activeList = [
        courseList[courseCount],
        courseList[courseCount + 1],
        courseList[courseCount + 2],
      ])
    : (activeList = [courseList[courseCount], courseList[courseCount + 1]]);

  return (
    <div className="course-slider">
      <div className="course-slider__title">Top Courses</div>
      <div className="course-slider__underline" />
      <div className="course-slider__container">
        {courseCount === 0 ? (
          <div />
        ) : (
          <div
            className="course-slider__course--back"
            onClick={(e) => changeCourseCountBack(e)}
          >
            <FaArrowLeft />
          </div>
        )}
        <div className={courseSliderAnimate}>{activeList}</div>
        {courseCount + showCourses >= courseCopy.length ? (
          <div />
        ) : (
          <div
            className="course-slider__course--forward"
            onClick={(e) => changeCourseCountForward(e)}
          >
            <FaArrowRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSlider;
