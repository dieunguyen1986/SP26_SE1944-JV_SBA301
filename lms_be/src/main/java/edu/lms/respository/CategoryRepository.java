package edu.lms.respository;

import edu.lms.dto.CategoryResponse;
import edu.lms.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {

//    @Query("SELECT c FROM Category c")
//    List<CategoryResponse> getAllCategories();
}
