import LoginForm from "../../components/Login/Form";
import "../../global/style.css";

function Login() {

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