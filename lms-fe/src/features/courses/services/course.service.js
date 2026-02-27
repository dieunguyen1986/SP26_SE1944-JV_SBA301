import React from "react";
import axiosClient from "../../../shared/services/axiosClient";

const courseService = {
  findAll: async (params = {}) => {
    const response = await axiosClient.get("/courses", {
      params,
    });
    return response.data;
  },

  findById: async (courseId) => {
    const response = await axiosClient.get(`/courses/${courseId}`);
    return response.data;
  },

  createCourse: async (payload) => {
    const response = await axiosClient.post(`/courses`, payload);
    return response.data;
  },
};

export default courseService;
