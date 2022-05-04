import Axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import Button from '../Button';
import './style.css';

function initialValues() {
	return {email: '', password: '',}
}

const LoginForm = () => {

	const handleLogin = (values) => {
        if(values !== undefined){
            Axios.post("http://localhost:3001/", {
                email: values.email,
                password: values.password,
            }, {
                headers: {'Content-Type': 'application/json'}
              }).then(function() {
				window.location.href = "/home";
              }).catch(function(error) {
                alert(error.data.msg);
              })
        }
    };

	const validationLogin = yup.object().shape({
		email: yup.string().email("Não é um email válido").required("Este campo é obrigatório"),
		password: yup.string().required("Este campo é obrigatório"),
	}) 

 	 return(
		<Formik 
			initialValues={{initialValues}} 
			onSubmit={async (values) => {handleLogin(values)}} 
			validationSchema={validationLogin}
		>
			<Form className="login-form">
				<span className="login-form-title"> Bem vindo </span>

				<div className="wrap-input">
					<Field
						className={"has-val input"}
						type="email"
						name="email"
					/>
					<span className="focus-input" data-placeholder="Email"></span>
				</div>
				<ErrorMessage component="span" name="email" className='msg-error' />

				<div className="wrap-input">
					<Field
						className={"has-val input"}
						type="password"
						name="password"
					/>
					<span className="focus-input" data-placeholder="Senha"></span>
				</div>
				<ErrorMessage component="span" name="password" className='msg-error' />
				
				<Button />

				<div className="text-center">
					<span className="txt1">Não possui conta? </span>
					<a className="txt2" href="/register">
							Criar conta
					</a>
				</div>
				<div className="text-center">
					<a className="txt2" href="www.google.com.br">
							Esqueci minha senha
					</a>
				</div>
			</Form>
		</Formik>
  	)
}

export default LoginForm;