package edu.lms.service;

import edu.lms.constants.Constants;
import edu.lms.dto.RegisterRequest;
import edu.lms.dto.UserRegisteredEvent;
import edu.lms.entity.Role;
import edu.lms.entity.User;
import edu.lms.entity.UserRole;
import edu.lms.exception.BusinessException;
import edu.lms.respository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Set;

@Service
@RequiredArgsConstructor
public class AuthApplicationServiceImpl implements AuthApplicationService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final ApplicationEventPublisher eventPublisher;

    @Override
    @Transactional
    public void register(RegisterRequest request) {

        // 1. validate business
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BusinessException(
                    "EMAIL_EXISTED",
                    "Email already existed"
            );
        }

        // 2. encode password
        String encodedPassword =
                passwordEncoder.encode(request.getPassword());

        // 3. build user
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(encodedPassword);
        user.setFullName(
                request.getLastName() + " " + request.getFirstName()
        );
        //        user.setEnabled(false); // verify email if need

        // 4. assign role
        UserRole userRole = UserRole.builder()
                .user(user)
                .role(Role.builder()
                        .id(Constants.ROLE_INSTRUCTOR)
                        .build())
                .build();

        user.setUserRoles(Set.of(userRole));

        // 5. save
        userRepository.save(user);

        // 6. publish domain event
        eventPublisher.publishEvent(
                new UserRegisteredEvent(user.getEmail())
        );
    }
}

