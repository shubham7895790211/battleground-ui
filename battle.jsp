spring.mvc.view.prefix=/WEB-INF/views/
spring.mvc.view.suffix=.jsp
@Controller
public class UserController {
    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    @GetMapping("/register")
    public String registerPage() {
        return "register";
    }

    @GetMapping("/profile")
    public String profilePage() {
        return "profile";
    }
}
<a href="#" th:href="@{/login}">Login</a>
<a href="#" th:href="@{/register}">Register</a>
<a href="#" th:href="@{/profile}">Profile</a>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
    <scope>provided</scope>
</dependency>
public class User {
    private String email;
    private String password;

    // Getters and Setters
}
@Service
public class UserService {
    public boolean validateLogin(String email, String password) {
        // Add logic to check user credentials
        return true;
    }
}
