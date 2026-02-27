package edu.lms.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.servers.Server;
import io.swagger.v3.oas.models.tags.Tag;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenAPIConfig {
    
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("LMS API")
                        .description("API for Learning Management Systems: Course, Learner, Instructors")
                        .version("1.0")
                        .license(new License()
                                .name("FU LMS")
                                .url("https://github.com/fu/lms")
                        )
                        .contact(new Contact()
                                .name("Recruitment Leader")
                                .url("https://github.com/fu/recruitment-leader")
                                .email("fu-rec@example.com")
                        )
                )
                .servers(List.of(new Server().url("http://localhost:8080").description("Local"),
                        new Server().url("https://api.lms.com").description("Production")
                ))
                .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
                .tags(List.of(
                        new Tag().name("Auth"),
                        new Tag().name("Course"),
                        new Tag().name("Category"),
                        new Tag().name("Order")
                ));
    }
}
