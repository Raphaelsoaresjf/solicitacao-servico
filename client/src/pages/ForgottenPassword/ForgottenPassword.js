import ForgottenPasswordForm from '../../components/ForgottenPassword/ForgottenPasswordForm';
import '../../global/style.css';

const ForgottenPassword = () => {

  return (
    <div className="container">
    <div className="container-login">
      <div className="wrap-login">
          <ForgottenPasswordForm/>
      </div>
    </div>
  </div>
  );
}

export default ForgottenPassword;