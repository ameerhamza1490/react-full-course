import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const  params  = useParams();
  return (
    <div>
      <h3> {params.id} Course Detail</h3>
    </div>
  );
};

export default CourseDetail;
