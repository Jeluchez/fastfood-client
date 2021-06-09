import React from 'react'
import { useForm } from "react-hook-form";


type Inputs = {
    example: string,
    exampleRequired: string,
};

export const LoginForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit = (data: any) => console.log(data);

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="login__form">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group form-group-email">
                    <label htmlFor="Email" className="email-title">Usuario Correo Electrónico</label>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="form-control" defaultValue="test" {...register("example")} />
                </div>

                <div className="form-group form-group-password">
                    <div className="password-title">
                        <label htmlFor="Password">Contraseña</label>
                        <a href="#/"><span>¿Olvidó su contraseña?</span></a>
                    </div>
                    {/* include validation with required or other standard HTML validation rules */}
                    <input className="form-control input-password"  {...register("exampleRequired", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>

                <input type="submit" className="btn-register" value="Iniciar" />
            </form>
        </div>
    );
}
