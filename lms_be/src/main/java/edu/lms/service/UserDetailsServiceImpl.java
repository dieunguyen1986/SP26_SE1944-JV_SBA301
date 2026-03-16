package edu.lms.service;

import edu.lms.dto.CustomUserDetails;
import edu.lms.entity.Role;
import edu.lms.entity.User;
import edu.lms.respository.RoleRepository;
import edu.lms.respository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    /**
     * UserDetails: Chứa thông tin người dùng --> store tự động vào Security Context
     *
     * @param username
     * @return
     * @throws UsernameNotFoundException
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Process login: call repository to get user
        Optional<User> optional = userRepository.findByEmail(username);

        User user = optional.orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));

        List<Role> roles = roleRepository.findByUserRoles_User_UserId(user.getUserId()); // ROLE_ADMIN, ROLE_INSTRUCTOR

        for (Role role : roles) {
            log.info("Role: {}", role.getName());
        }

        // Using for loop
//        List<SimpleGrantedAuthority>authorities = new ArrayList<>();
//        for(Role role : roles){
//            SimpleGrantedAuthority authority = new SimpleGrantedAuthority(role.getName());
//            authorities.add(authority);
//        }

        // Using stream and map
        List<SimpleGrantedAuthority> authorities = roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).toList();


        // Gán thông tin vừa query ở DB vào cho CustomUserDetails
        return new CustomUserDetails(user.getFullName(), user.getEmail(), user.getPassword(), authorities);
//        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), authorities);
    }

}
