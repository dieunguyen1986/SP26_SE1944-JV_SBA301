package edu.lms.controller;

import edu.lms.constants.ApiPaths;
import edu.lms.dto.CategoryRequest;
import edu.lms.dto.CategoryResponse;
import edu.lms.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
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
//@Tags({@Tag(name = "Categories Operations", description = "Category CRUD operations"), @Tag()})
@Tag(name = "Categories Operations", description = "Category CRUD operations")
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    @Operation(method = "POST",
            tags = {"Categories Operations"},
            description = "The method to create new a category",
            requestBody = @io.swagger.v3.oas.annotations.parameters.RequestBody(
                    description = "A Category Request that submit from category detail form",
                    required = true,
                    content = {@Content( //mediaType = "application/json",
                            examples = {
                                    @ExampleObject(name = "categoryName", value = "IT & Software"),
                                    @ExampleObject(name = "description", value = "IT & Software Courses"),
                                    @ExampleObject(name = "sortOrder", value = "1"),
                                    @ExampleObject(name = "active", value = "true"),
                                    @ExampleObject(name = "parentId", value = "2")
                            })
                    }
            ),
            responses = {@ApiResponse(description = "Return a success message",
                    responseCode = "200",
                    content = {@Content(mediaType = "application/json",
                            examples = {@ExampleObject(name = "message", value = "Save successfully")}
                    )}

            )}
    )
    public ResponseEntity<?> createCategory(@RequestBody @Valid CategoryRequest categoryRequest) {

        log.info("createCategory: {}", categoryRequest);
        categoryService.createCategory(categoryRequest);

        return ResponseEntity.ok().body(Map.of("message", "Save successfully"));
    }

    @GetMapping
    public ResponseEntity<List<CategoryResponse>> getAllCategories() {

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
