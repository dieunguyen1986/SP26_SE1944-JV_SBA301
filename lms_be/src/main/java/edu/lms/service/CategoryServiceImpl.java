package edu.lms.service;

import edu.lms.dto.CategoryRequest;
import edu.lms.dto.CategoryResponse;
import edu.lms.entity.Category;
import edu.lms.respository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service("categoryService")
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
//    @Autowired
//    private CategoryRepository categoryRepository; // inject bean

    private final CategoryRepository categoryRepository; // inject bean

    @Override
    public Category createCategory(CategoryRequest categoryRequest) {

        Category category = Category.builder()
                .categoryName(categoryRequest.getCategoryName())
                .description(categoryRequest.getDescription())
                .sortOrder(categoryRequest.getSortOrder())
                .isActive(categoryRequest.isActive())
                .build();

        if (categoryRequest.getId() != null && categoryRequest.getId() != 0) {
            category.setId(categoryRequest.getId());
        }

        if (categoryRequest.getParentId() != null) {
            Optional<Category> parent = categoryRepository.findById(categoryRequest.getParentId());

            if (parent.isPresent()) {
                category.setParent(parent.get());
            }
        }


        return categoryRepository.save(category);
    }

    @Override
    public List<CategoryResponse> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();

        return categories.stream()
                .sorted(Comparator.comparingInt(Category::getSortOrder))
                .map(this::mapToResponse)
                .toList();
    }


    private CategoryResponse mapToResponse(Category category) {
        return CategoryResponse.builder()
                .id(category.getId())
                .categoryName(category.getCategoryName())
                .description(category.getDescription())
                .sortOrder(category.getSortOrder())
                .active(category.isActive())
                .createAt(category.getCreateAt())
                .updateAt(category.getUpdateAt())
                .parentId(category.getParent() != null ? category.getParent().getId() : null)
                .parentName(category.getParent() != null ? category.getParent().getCategoryName() : null)
                .build();
    }

    @Override
    public CategoryResponse getCategoryById(Integer categoryId) {
        Optional<Category> categoryOptional = categoryRepository.findById(categoryId);

        Category category = categoryOptional.orElseThrow(() -> {
            throw new IllegalStateException("Category with id " + categoryId + " not found");
        });

        log.info("getCategoryById: {}", category.getCategoryName());
        return CategoryResponse.builder().id(category.getId())
                .categoryName(category.getCategoryName())
                .description(category.getDescription())
                .sortOrder(category.getSortOrder())
                .active(category.isActive())
                .parentId(category.getParent() != null ? category.getParent().getId() : null)
                .build();
    }

    @Override
    public void deleteCategoryById(Integer categoryId) {
        Optional<Category> categoryOptional = categoryRepository.findById(categoryId);

        Category category = categoryOptional.orElseThrow(() -> {
            throw new IllegalStateException("Category with id " + categoryId + " not found");
        });

        categoryRepository.delete(category);
    }
}
// Lambda Expression: implement Functional Interface

//class MyClass implements Supplier<IllegalArgumentException> {
//    @Override
//    public IllegalArgumentException get() {
//        return new IllegalArgumentException();
//    }
//}