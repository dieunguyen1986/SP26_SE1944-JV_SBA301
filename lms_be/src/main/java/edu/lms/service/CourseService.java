package edu.lms.service;

import edu.lms.dto.CourseResponse;
import edu.lms.entity.Course;
import org.springframework.data.domain.Page;

import java.util.List;

public interface CourseService {
    Course createCourse(Course course);

    CourseResponse findAll(Integer pageIndex, Integer pageSize);
}
