import React from 'react';
// import { Link } from 'react-router-dom'

const Register = () =>{
    return (
        <div className="login-form">

            <div className="form-group row">
                <label for="name" className="col-md-4 col-form-label text-md-right">Name</label>
                <input id="name" type="text" className="form-control" name="name" required autocomplete="name"/>
            </div>

            <div className="form-group row">
                <label for="phone" className="col-md-4 col-form-label text-md-right">Phone</label>
                <input id="phone" type="text" className="form-control" name="phone" required autocomplete="phone"/>
            </div>

            <div className="form-group row">
                <label for="email" className="col-md-4 col-form-label text-md-right">E-Mail</label>
                <input id="email" type="email" className="form-control" name="email" required autocomplete="name"/>
            </div>

            <div className="form-group row">
                <label for="password" className="col-md-4 col-form-label text-md-right">Password</label>
                <input id="password" type="password" className="form-control " name="password" required autocomplete="off"/>
            </div>

            <div className="form-group row">
                <label for="comfirm-password" className="col-md-4 col-form-label text-md-right">Comfirm Password</label>
                <input id="comfirm-password" type="password" className="form-control " name="comfirm-password" required autocomplete="off"/>
            </div>

            <div className="form-group row">
                <button className="btn btn-success" type="button">Register</button>
            </div>


        </div>
    );
}

export default Register;