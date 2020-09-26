import React from 'react';
// import { Link } from 'react-router-dom'

const Login = () =>{
    return (
        <div className="login-form">

            <div className="form-group row">
                <label for="email" className="col-md-4 col-form-label text-md-right">E-Mail</label>
                <input id="email" type="email" className="form-control " name="email" requiredautocomplete="email"/>
            </div>

            <div className="form-group row">
                <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                <input id="password" type="password" className="form-control " name="password" required autocomplete="current-password"/>
            </div>

            <div className="form-group row">
                 <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    <a className="btn btn-link" href="http://laravelshop.loc/password/reset">Forgot Your Password?</a>
            </div>

        </div>
    );
}

export default Login;