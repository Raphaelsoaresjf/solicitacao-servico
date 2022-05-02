import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';
import Button from "../../Login/Button";
import './style.css';

function initialState() {
	return {name: '', email: '', password: '', confirmPassword: '', house: 0, phone: '', responsible: ''}
}

const FormRegister = () => {
    const handleRegister = (values) => {
        console.log(values)
    }
    
    const validationLogin = yup.object().shape({
        name: yup.string().required("Este campo é obrigatório"),
        email: yup.string().email("Não é um email válido").required("Este campo é obrigatório"),
        password: yup.string().max(20, "A senha deve conter no máximo 20 caracteres").required("Este campo é obrigatório"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não correspondem").required("Este campo é obrigatório"),
        house: yup.number().required("Este campo é obrigatório"),
        phone: yup.string().max(15).required("Este campo é obrigatório"),
        responsible: yup.string().max(255, "Limite de caracteres atingido"),
    }) 

    return(
        <Formik initialValues={{initialState}} onSubmit={handleRegister()} validationSchema={validationLogin}>
            <Form className="login-form">
                <span className="login-form-title"> Cadastro </span>

                <div className="wrap-input">
                    <Field
                        // className={values.name !== "" ? "has-val input" : "input"}
                        type="text"
                        name="name"
                    />
                    <ErrorMessage component="span" name="name" className='msg-error' />
                    <span className="focus-input" data-placeholder="Nome completo *"></span>
                </div>

                <div className="wrap-input">
                    <Field
                        // className={values.email !== "" ? "has-val input" : "input"}
                        type="email"
                        name="email"
                    />
                    <ErrorMessage component="span" name="email" className='msg-error' />
                    <span className="focus-input" data-placeholder="Email *"></span>
                </div>

                <div className="wrap-input">
                    <Field
                        // className={values.password !== "" ? "has-val input" : "input"}
                        type="password"
                        name="password"
                    />
                    <ErrorMessage component="span" name="password" className='msg-error' />
                    <span className="focus-input" data-placeholder="Senha *"></span>
                </div>

                <div className="wrap-input">
                    <Field
                        // className={values.confirmPassword !== "" ? "has-val input" : "input"}
                        type="password"
                        name="confirmPassword"
                    />
                    <ErrorMessage component="span" name="confirmPassword" className='msg-error' />
                    <span className="focus-input" data-placeholder="Confirme sua senha *"></span>
                </div>

                <div className="wrap-input">
                    <Field name="house" as="select">
                        <option value="01">Casa 1</option>
                        <option value="02">Casa 2</option>
                        <option value="03">Casa 3</option>
                    </Field>
                    <ErrorMessage component="span" name="house" className='msg-error' />
                    <span className="focus-input" data-placeholder="Selecione a casa onde reside atualmente *"></span>
                </div>

                <div className="wrap-input">
                    <Field
                        // className={values.phone !== "" ? "has-val input" : "input"}
                        type="text"
                        name="phone"
                    />
                    <ErrorMessage component="span" name="phone" className='msg-error' />
                    <span className="focus-input" data-placeholder="Telefone para contato"></span>
                </div>

                <div className="wrap-input">
                    <Field
                        // className={values.responsible !== "" ? "has-val input" : "input"}
                        type="text"
                        name="responsible"
                    />
                    <ErrorMessage component="span" name="responsible" className='msg-error' />
                    <span 
                        className="focus-input" 
                        data-placeholder="Nome do conjulge ou outra pessoa que possa atender caso não esteja em casa">
                    </span>
                </div>

                <Button />
                <Button />
                
            </Form>
        </Formik>
    )
}

export default FormRegister;