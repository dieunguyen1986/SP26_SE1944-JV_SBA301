package edu.lms.service;

import edu.lms.dto.CategoryRequest;
import edu.lms.dto.CategoryResponse;
import edu.lms.entity.Category;

import java.util.List;

public interface CategoryService {
    Category createCategory(CategoryRequest categoryRequest);

    List<Category> getAllCategories();

    CategoryResponse getCategoryById(Integer categoryId);

    void deleteCategoryById(Integer categoryId);
}
