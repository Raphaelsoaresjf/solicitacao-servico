import Axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from 'react';
import * as yup from 'yup';
import Button from "../../Login/Button";
import './style.css';

const initialValues = () => {
	return {name: '', email: '', password: '', confirmPassword: '', house: 0, phone: '', responsible: '',}
}

const FormRegister = () => {

    const handleRegister = (values) => {
        if(values !== undefined){
            Axios.post("http://localhost:3001/register", {
                name: values.name,
                email: values.email,
                password: values.password,
                house: values.house,
                phone: values.phone,
                responsible: values.responsible
            }, {
                headers: {'Content-Type': 'application/json'}
              }).then(function(response) {
                alert(response.data.msg);
                setTimeout(function() {
                    window.location.href = "/";
                }, 1000);
              }).catch(function(error) {
                alert(error.data.msg);
              })
        }
    };
    
    const validationRegister = yup.object().shape({
        name: yup.string().required("Este campo é obrigatório"),
        email: yup.string().email("Não é um email válido").required("Este campo é obrigatório"),
        password: yup.string().max(20, "A senha deve conter no máximo 20 caracteres").required("Este campo é obrigatório"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não correspondem").required("Este campo é obrigatório"),
        house: yup.number().required("Este campo é obrigatório"),
        phone: yup.string().max(15).required("Este campo é obrigatório"),
        responsible: yup.string().max(255, "Limite de caracteres atingido"),
    }) 

    return(
        <>
            <span className="login-form-title"> Cadastro </span>
            <div className="msg-error" data-placeholder="Capos obrigatórios"> * Capos obrigatórios</div>
            <Formik 
                initialValues={{initialValues}} 
                onSubmit={async (values) => {handleRegister(values)}} 
                validationSchema={validationRegister}
            >
                <Form className="login-form">

                    <div className="wrap-input">
                        <Field
                            className={"has-val input"}
                            type="text"
                            name="name"
                        />
                        <span className="focus-input" data-placeholder="Nome completo *"></span>
                    </div>
                    <ErrorMessage component="span" name="name" className='msg-error' />

                    <div className="wrap-input">
                        <Field
                            className={"has-val input"}
                            type="email"
                            name="email"
                        />
                        <span className="focus-input" data-placeholder="Email *"></span>
                    </div>
                    <ErrorMessage component="span" name="email" className='msg-error' />    

                    <div className="wrap-input">
                        <Field
                            className={"has-val input"}
                            type="password"
                            name="password"
                        />
                        <span className="focus-input" data-placeholder="Senha *"></span>
                    </div>
                    <ErrorMessage component="span" name="password" className='msg-error' />

                    <div className="wrap-input">
                        <Field
                            className={"has-val input"}
                            type="password"
                            name="confirmPassword"
                        />
                        <span className="focus-input" data-placeholder="Confirme sua senha *"></span>
                    </div>
                    <ErrorMessage component="span" name="confirmPassword" className='msg-error' />

                    <div className="wrap-input">
                        <Field name="house" as="select"  className={"has-val input"}>
                            <option value="3">Casa 1</option>
                            <option value="4">Casa 2</option>
                        </Field>
                        <span className="focus-input" data-placeholder="Local onde reside *"></span>
                    </div>
                    <ErrorMessage component="span" name="house" className='msg-error' />

                    <div className="wrap-input">
                        <Field
                            className={"has-val input"}
                            type="text"
                            name="phone"
                        />
                        <span className="focus-input" data-placeholder="Telefone para contato"></span>
                    </div>
                    <ErrorMessage component="span" name="phone" className='msg-error' />

                    <div className="wrap-input">
                        <Field
                            // className={values.responsible !== "" ? "has-val input" : "input"}
                            className={"has-val input"}
                            type="text"
                            name="responsible"
                        />
                        <span 
                            className="focus-input" 
                            data-placeholder="Nome do conjulge / responsável">
                        </span>
                    </div>
                    <ErrorMessage component="span" name="responsible" className='msg-error' />

                    <Button />
                    
                </Form>
            </Formik>
        </>
    )
}

export default FormRegister;