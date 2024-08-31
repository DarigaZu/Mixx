import React from 'react';
import './main.scss'
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { BsEye } from 'react-icons/bs'
import { BsEyeSlash } from 'react-icons/bs'

const schema = yup.object({
    fullName: yup.string().required().min(3, "The name is too short!"),
    email: yup.string().email("Wrong email!").required(),
    password: yup.string().min(8, "Password is not long enough!").required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords don't match!")
}).required();

function SignUp() {

    const [showPassword, setShowPassword] = React.useState(false);

    const change = () => {
        setShowPassword(!showPassword);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const Submit = (data) => console.log("data", data);

    return (
        <div className="center container">
            <div className="sign">
                <div className="sign_up">

                    <form onSubmit={handleSubmit(Submit)}>
                        <h3>Create New Account</h3>
                        <input type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Full Name"
                            {...register('fullName')} />

                        <p style={{ color: "red" }}>{errors.fullName?.message}</p>

                        <input type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            {...register('email')} />

                        <p style={{ color: "red", fontSize: "14px" }}>{errors.email?.message}</p>

                        <div className="relative-eye">
                            <input type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                placeholder="Password"
                                {...register('password')} />
                            <button className='eye' onClick={change}>
                                {showPassword ? <BsEyeSlash /> : <BsEye />}
                            </button>
                        </div>

                        <p style={{ color: "red" }}>{errors.password?.message}</p>

                        <input type="text"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            className="confirm-password"
                            {...register('confirmPassword')} />

                        <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
                        <button type="submit">Register Now</button>
                        <Link to='/login'><p>Have an Account?</p></Link>
                    </form>

                </div>
            </div>
            </div>
    )

}

export default SignUp;