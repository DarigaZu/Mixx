    import React from 'react';
    import './main.scss'
    import { Link } from 'react-router-dom';
    import { yupResolver } from "@hookform/resolvers/yup"
    import * as yup from "yup"
    import { useForm } from 'react-hook-form';
    import { BsEye } from 'react-icons/bs'
    import { BsEyeSlash } from 'react-icons/bs'

    const schema = yup.object({
        logIn: yup.string().required().min(3, "Wrong username!"),
        password: yup.string().min(8, "Incorrect password, please enter again!").required(),
    }).required();

    function LogIn() {

        const [showPassword, setShowPassword] = React.useState(false);
        const change = () => {
            setShowPassword(!showPassword)
        }
        const { register, handleSubmit, formState: { errors } } = useForm({
            resolver: yupResolver(schema)
        });

        const Submit = (data) => console.log("data", data);

        return (
            <div className="center container">
                <div className="log">
                    <div className="log_in">

                        <form onSubmit={handleSubmit(Submit)}>
                            <h3>Login to profile</h3>
                            <input type="text"
                                name="Login"
                                id="Login"
                                placeholder="Login"
                                {...register('logIn')} />

                            <p style={{ color: "red" }}>{errors.logIn?.message}</p>

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

                            <button type="submit">Login</button>
                            <Link to='/signup'><p>Don't Have an Account?</p></Link>
                        </form>

                    </div>
                </div>
                </div>
        )

    }

    export default LogIn;