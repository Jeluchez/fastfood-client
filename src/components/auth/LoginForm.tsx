import { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { startlogin } from '../../actions/authAction';
import { RootState } from '../../store/store';


type Inputs = {
    email: string,
    password: string,
};

export const LoginForm = () => {

    const dispatch = useDispatch();
    
    const { isloading } = useSelector((state: RootState) => state.ui);
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [success, setSuccess] = useState<boolean>();

    // flag to enable text "El correo o el usuario es incorrecto"
    const submitRef = useRef<boolean>();
    const isSuccessRef = useRef<boolean>();

    const onSubmit = (data: Inputs) => dispatch(startlogin(data, (success: boolean) => {
        submitRef.current=true;
        isSuccessRef.current = success;
        isSuccessRef.current=  isSuccessRef.current ? false :true 
    }));;

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className="login__form">
            {
                (isSuccessRef.current && submitRef.current) &&
                <p className="text-danger text-error mb-0 text-center">El correo o el usuario es incorrecto</p>
            }
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group form-group-email">
                    <label htmlFor="Email" className="email-title">Usuario Correo Electrónico</label>

                    <input className={errors.email ? 'form-control input-password is-invalid' : 'form-control input-password'} defaultValue="" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                    {/*Validation Messages for the Email   */}

                    {errors.email && errors.email.type === "required" && <span className="text-danger text-error">This field is required</span>}
                    {errors.email && errors.email.type === "pattern" && <span className="text-danger text-error">The Email is incorrect</span>}

                </div>

                <div className="form-group form-group-password">
                    <div className="password-title">
                        <label htmlFor="Password">Contraseña</label>
                        <a href="#/"><span>¿Olvidó su contraseña?</span></a>
                    </div>

                    <input className={errors.password ? 'form-control input-password is-invalid' : 'form-control input-password'}  {...register("password", { required: true, minLength: 6 })} />

                    {/*Validation Messages for ther Password  */}

                    {errors.password && errors.password.type === "required" && <span className="text-danger text-error">This field is required</span>}
                    {errors.password && errors.password.type === "minLength" && <span className="text-danger text-error">the length of your password is less than 5 characters</span>}

                </div>

                <button className="btn-register" disabled={isloading}>
                    {
                        isloading
                            ?
                            <div className="spinner-border text-light" role="status">
                                <span className="sr-only"></span>
                            </div>
                            :
                            'Iniciar'

                    }

                </button>
            </form>
        </div>
    );
}
