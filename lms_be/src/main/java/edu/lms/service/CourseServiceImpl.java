package edu.lms.service;

import edu.lms.dto.CourseResponse;
import edu.lms.dto.CourseSummaryResponse;
import edu.lms.entity.Course;
import edu.lms.respository.CourseRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CourseServiceImpl implements CourseService {
    private final CourseRepository courseRepository;

    @Override
    public Course createCourse(Course course) {
        return null;
    }

    @Override
    public CourseResponse findAll(Integer pageIndex, Integer pageSize) {
        Pageable pageable = PageRequest.of(pageIndex - 1, pageSize);
        Page<Course> page = courseRepository.findAll(pageable);

        List<CourseSummaryResponse> courses = page.getContent()
                .stream()
                .map(this::mapToCourseSummary)
                .toList();

        CourseResponse courseResponse = new CourseResponse();
        courseResponse.setCourses(courses);
        courseResponse.setTotalPages(page.getTotalPages());

        log.info("Page {} of {} courses found ", page.getNumber(), page.getTotalPages());

        return courseResponse;
    }


    private CourseSummaryResponse mapToCourseSummary(Course course) {
        return CourseSummaryResponse.builder()
                .courseId(course.getCourseId())
                .title(course.getTitle())
                .subtitle(course.getSubtitle())
                .thumbnailUrl(course.getThumbnailUrl())
                .price(course.getPrice())
                .discount(course.getDiscount())
                .rating(course.getRating())
                .ratingCount(course.getRatingCount())
                .students(course.getStudents())
                .totalHours(course.getTotalHours())
                .level(course.getLevel().getDisplayName())
                .language(course.getLanguage())
                .build();
    }
}
