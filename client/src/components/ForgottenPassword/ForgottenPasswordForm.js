import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Button from '../Login/Button';

function initialValues() {
	return {email: ''}
}

const ForgottenPasswordForm = () => {

    const handleForgottenPassword = (values) => {
        console.log('Olá');
    };

    const validationLogin = yup.object().shape({
		email: yup.string().email("Não é um email válido").required("Este campo é obrigatório"),
	}) 

    return(
        <Formik 
			initialValues={{initialValues}} 
			onSubmit={async (values) => {handleForgottenPassword(values)}} 
			validationSchema={validationLogin}
		>
			<Form className="login-form">
				<span className="login-form-title"> Esqueceu sua senha? </span>

				<div className="wrap-input">
					<Field
						className={"has-val input"}
						type="email"
						name="email"
					/>
					<span className="focus-input" data-placeholder="Email"></span>
				</div>
				<ErrorMessage component="span" name="email" className='msg-error' />
				
				<Button />
                
			</Form>
		</Formik>
    )
}

export default ForgottenPasswordForm;