import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { startlogin } from '../../actions/authAction';


type Inputs = {
    email: string,
    password: string,
};

export const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const dispatch = useDispatch();

    const onSubmit = (data: Inputs) => dispatch(startlogin(data));;

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="login__form">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group form-group-email">
                    <label htmlFor="Email" className="email-title">Usuario Correo Electrónico</label>

                    <input className="form-control" defaultValue="" {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}
                </div>

                <div className="form-group form-group-password">
                    <div className="password-title">
                        <label htmlFor="Password">Contraseña</label>
                        <a href="#/"><span>¿Olvidó su contraseña?</span></a>
                    </div>

                    <input className="form-control input-password"  {...register("password", { required: true })} />
                    {errors.password && <span>This field is required</span>}
                </div>

                <input type="submit" className="btn-register" value="Iniciar" />
            </form>
        </div>
    );
}
