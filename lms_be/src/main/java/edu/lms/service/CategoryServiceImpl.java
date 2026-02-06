package edu.lms.service;

import edu.lms.dto.CategoryRequest;
import edu.lms.dto.CategoryResponse;
import edu.lms.entity.Category;
import edu.lms.respository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collections;
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

        Optional<Category> parent = categoryRepository.findById(categoryRequest.getParentId());

        Category category = Category.builder()
                .categoryName(categoryRequest.getCategoryName())
                .description(categoryRequest.getDescription())
                .sortOrder(categoryRequest.getSortOrder())
                .isActive(categoryRequest.isActive())
                .build();

        if(categoryRequest.getId() != null && categoryRequest.getId() != 0) {
            category.setId(categoryRequest.getId());
        }

        if (parent.isPresent()) {
            category.setParent(parent.get());
        }

        return categoryRepository.save(category);
    }

    @Override
    public List<Category> getAllCategories() {
        List<Category> categories = categoryRepository.findAll();

        Collections.sort(categories, (c1, c2) -> {
            return c1.getSortOrder() - c2.getSortOrder();
        });
        return categories;
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
                .parentId(category.getParent() !=null ? category.getParent().getId(): null)
                .build();
    }

    @Override
    public void deleteCategoryById(Integer categoryId) {
        Optional<Category> categoryOptional = categoryRepository.findById(categoryId);

        Category category = categoryOptional.orElseThrow(()->{
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