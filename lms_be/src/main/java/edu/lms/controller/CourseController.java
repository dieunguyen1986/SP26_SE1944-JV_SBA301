package edu.lms.controller;


import edu.lms.constants.ApiPaths;
import edu.lms.dto.CourseResponse;
import edu.lms.service.CourseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping(ApiPaths.COURSES)
@Slf4j
public class CourseController {
    private final CourseService courseService;

    @GetMapping("/public")
    public ResponseEntity<CourseResponse> getCourse(@RequestParam(defaultValue = "1", required = false) Integer page, @RequestParam(defaultValue = "9", required = false) Integer size) {

        log.info("Get course by page {}, and size {}", page, size);

        return ResponseEntity.ok().body(courseService.findAll(page, size));
    }
}
