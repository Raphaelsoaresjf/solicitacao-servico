import LoginForm from "../../components/Login/LoginForm";
import "../../global/style.css";

const Login = () => {

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
         <LoginForm/>
        </div>
      </div>
    </div>
  );
}

export default Login;