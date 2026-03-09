package edu.lms.controller;


import edu.lms.constants.ApiPaths;
import edu.lms.dto.CourseDetailResponse;
import edu.lms.dto.CourseResponse;
import edu.lms.service.CourseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(ApiPaths.BASE_URL_V1)
@Slf4j
public class CourseController {
    private final CourseService courseService;

    @GetMapping("/public/courses")
    public ResponseEntity<CourseResponse> getCourse(@RequestParam(defaultValue = "1", required = false) Integer page, @RequestParam(defaultValue = "9", required = false) Integer size) {

        log.info("Get course by page {}, and size {}", page, size);

        return ResponseEntity.ok().body(courseService.findAll(page, size));
    }

    @PostMapping("/enrolled/courses/{courseId}")
    public ResponseEntity<CourseDetailResponse> enroll(@PathVariable Integer courseId) {
        log.info("Enroll course by id {}", courseId);

        return ResponseEntity.ok().build();
    }
}
