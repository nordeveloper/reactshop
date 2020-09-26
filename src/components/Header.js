import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <div className="header">
            <div className="head-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="logo" src="/logo192.png"/ >
                        </div>
                        <div className="col-md-7">
                            <form class="search-box" action="/catalog/" method="get">
                                <div class="form-group">
                                <input type="text" class="form-control" name="q" value="" id="search-input" placeholder="Enter product name for search"/>
                                <button type="submit" class="btn btn-search" name="submit" value="Y"><i class="fas fa-search"></i></button>
                                </div>
                            </form>                            
                        </div>
                        <div className="col-md-3">
                            <div className="auth-link">
                            <Link className="nav-link" to='/login'>Login</Link>
                            <Link className="nav-link" to="/register">Register</Link>
                            </div>  
                            <div className="mini-basket">
                            <Link className="nav-link" to="/basket">Basket</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="top-menu navbar navbar-expand-lg">
                <div className="container">
                <ul  className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/catalog'>Catalog</Link></li>
                    <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="/contacts">Contacts</a></li>                
                </ul>
                </div>
            </nav>
            
        </div>
    );
}

export default Header;