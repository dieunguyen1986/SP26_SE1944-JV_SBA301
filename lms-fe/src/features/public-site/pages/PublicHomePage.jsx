import React from "react";
import PublicCourseList from "../../courses/components/PublicCourseList";
import PublicHeader from "../../../shared/components/PublicHeader";
import useDocumentTitle from "../../../shared/hooks/useDocumentTitle";
import HeroSection from "../components/HeroSection";
import PopularCourse from "../components/PopularCourse";
import MentorFavoris from "../components/MentorFavoris";

const PublicHomePage = () => {
  useDocumentTitle("Elearning Management System");

  return (
    <>
      <HeroSection />
      <PopularCourse />
      <MentorFavoris />
    </>
  );
};

export default PublicHomePage;
