import React from "react";
import axiosClient from "../../../shared/services/axiosClient";

const PUBLIC_COURSE_API_URL = "/public/courses";
const LEARNER_COURSE_API_URL = "/enrolled/courses";
const PRIVATE_COURSE_API_URL = "/instructor/courses";
const courseService = {
  // Learner
  findAll: async (params = {}) => {
    const response = await axiosClient.get(PUBLIC_COURSE_API_URL, {
      params,
    });
    return response.data;
  },

  findById: async (courseId) => {
    const response = await axiosClient.get(
      `${PUBLIC_COURSE_API_URL}/${courseId}`,
    );
    return response.data;
  },

  enroll: async (courseId) => {
    const response = await axiosClient.post(
      `${LEARNER_COURSE_API_URL}/${courseId}`,{
        Header: {
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    return response.data;
  },

  // Management
  createCourse: async (payload) => {
    const response = await axiosClient.post(PRIVATE_COURSE_API_URL, payload);
    return response.data;
  },
};

export default courseService;
