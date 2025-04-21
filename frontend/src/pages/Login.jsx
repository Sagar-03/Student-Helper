import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Simulate Google login success after a short delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 0.5);
  };
  const handleEmaillogin = () => {
    // Simulate Google login success after a short delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 0.5);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Student Portal Login</h2>

        <div className="login-options">
          <button className="login-button google" onClick={handleGoogleLogin}>
            Continue with Google
          </button>
          <button className="login-button email" onClick={handleEmaillogin}>
            Continue with Email
          </button>
        </div>
      </div>
    </div>
  );
}
