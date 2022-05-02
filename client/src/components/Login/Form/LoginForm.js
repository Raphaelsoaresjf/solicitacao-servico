import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import Button from '../Button';
import './style.css';

function initialState() {
	return {email: '', password: '',}
}

const LoginForm = () => {

	const handleLogin = (values) => {
		console.log(values)
	}

	const validationLogin = yup.object().shape({
		email: yup.string().email("Não é um email válido").required("Este campo é obrigatório"),
		password: yup.string().max("A senha deve conter no máximo 20 caracteres").required("Este campo é obrigatório"),
	}) 

 	 return(
		<Formik initialValues={{initialState}} onSubmit={handleLogin()} validationSchema={validationLogin}>
			<Form className="login-form">
				<span className="login-form-title"> Bem vindo </span>

				<div className="wrap-input">
					<Field
						// className={values.email !== "" ? "has-val input" : "input"}
						type="email"
						name="email"
					/>
					<ErrorMessage component="span" name="email" className='msg-error' />
					<span className="focus-input" data-placeholder="Email"></span>
				</div>

				<div className="wrap-input">
					<Field
						// className={values.password !== "" ? "has-val input" : "input"}
						type="password"
						name="password"
					/>
					<ErrorMessage component="span" name="password" className='msg-error' />
					<span className="focus-input" data-placeholder="Senha"></span>
				</div>
				
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