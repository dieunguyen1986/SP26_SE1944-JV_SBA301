// LoginPage.jsx
import React, { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  Alert,
} from "react-bootstrap";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../../../styles/loginPage.css";
import useDocumentTitle from "../../../shared/hooks/useDocumentTitle";
import auth from "../services/auth.service";
import { AuthActionsContext } from "../../../app/providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  useDocumentTitle("Login");

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);

  const {login} = useContext(AuthActionsContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const handleSubmit = async(e) => {
    e.preventDefault();
    // TODO: handle login

    try {
      // Call service
      const response = await auth.login(form);
      localStorage.setItem("accessToken", response.accessToken);

      console.log("Response: " + response);
      
      // Set user to context
      login(response);

      navigate("/");

    } catch (error) {
      setMessage(error.message || "An error has occurred!");
    }
  };

  return (
    <div className="lp-wrap">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Card className="lp-card shadow-sm border-0">
              <Card.Body className="p-4 p-sm-5">
                <h2 className="text-center fw-bold mb-4 lp-title">Login</h2>
                {message &&
                   <Alert variant="danger">{message}</Alert>
                }
               
                <Form onSubmit={handleSubmit}>
                  {/* Username / Email */}
                  <InputGroup className="lp-input mb-3">
                    <InputGroup.Text className="lp-icon-left">
                      <FaUser />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username or Email"
                      className="lp-control"
                      autoComplete="username"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                      }}
                    />
                  </InputGroup>

                  {/* Password */}
                  <InputGroup className="lp-input mb-4">
                    <InputGroup.Text className="lp-icon-left">
                      <FaLock />
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your Password"
                      className="lp-control"
                      autoComplete="current-password"
                      value={form.password}
                      onChange={(e) => {
                        setForm({ ...form, password: e.target.value });
                      }}
                    />
                    <Button
                      type="button"
                      variant="link"
                      className="lp-eye"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputGroup>

                  {/* Remember / Forgot */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <Form.Check
                      type="checkbox"
                      id="rememberMe"
                      label="Remember me"
                      className="lp-remember"
                    />
                    <a href="#" className="lp-link">
                      Forgot password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <Button type="submit" className="lp-login-btn w-100">
                    Login
                  </Button>

                  {/* Sign up */}
                  <div className="text-center mt-3 lp-muted">
                    Don't have an account?{" "}
                    <a href="#" className="lp-link">
                      Sign up
                    </a>
                  </div>

                  {/* Divider */}
                  <div className="lp-divider my-4">
                    <span>or connect with</span>
                  </div>

                  {/* Social */}
                  <div className="d-flex justify-content-center gap-3">
                    <button
                      type="button"
                      className="lp-social lp-social-fb"
                      aria-label="Continue with Facebook"
                    >
                      <FaFacebookF />
                    </button>
                    <button
                      type="button"
                      className="lp-social lp-social-gg"
                      aria-label="Continue with Google"
                    >
                      <FcGoogle />
                    </button>
                    <button
                      type="button"
                      className="lp-social lp-social-gh"
                      aria-label="Continue with GitHub"
                    >
                      <FaGithub />
                    </button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
