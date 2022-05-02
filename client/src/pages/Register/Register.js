import FormRegister from "../../components/Register/FormRegister/FormRegister";
import '../../global/style.css';

function Register() {

    return (
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
          <FormRegister/>
          </div>
        </div>
      </div>
    );
  }
  
  export default Register;