package edu.lms.controller;

import edu.lms.constants.ApiPaths;
import edu.lms.dto.CategoryRequest;
import edu.lms.dto.CategoryResponse;
import edu.lms.entity.Category;
import edu.lms.service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(ApiPaths.CATEGORIES)
@Slf4j
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    public ResponseEntity<?> createCategory(@RequestBody @Valid CategoryRequest categoryRequest) {

        log.info("createCategory: {}", categoryRequest);
        categoryService.createCategory(categoryRequest);

        return ResponseEntity.ok().body(Map.of("message", "Save successfully"));
    }

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {

        log.info("getAllCategories: {}");

        return ResponseEntity.ok().body(categoryService.getAllCategories());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCategoryById(@PathVariable Integer id) {
        log.info("getCategoryById: {}", id);
        CategoryResponse categoryResponse = categoryService.getCategoryById(id);

        log.info("Controller - getCategoryById: {}", categoryResponse);
        return ResponseEntity.ok().body(categoryResponse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategoryById(@PathVariable Integer id) {
        log.info("deleteCategoryById: {}", id);
        categoryService.deleteCategoryById(id);

        return ResponseEntity.ok().body(Map.of("message", "Delete successfully"));
    }
}
