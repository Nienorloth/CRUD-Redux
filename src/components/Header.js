import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NuevoProducto from './NuevoProducto';

const Header = () => {

    let location = useLocation();

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
            <div className="container">
                <h1> 
                    <Link to={'/'} className="text-light">
                        CRUD - React, Redux, REST API & Axios
                    </Link>  
                </h1>
            </div>
            { location.pathname === "/productos/nuevo" ? null : 
            <Link to={"/productos/nuevo"}
                className="btn btn-danger nuevo-post d-block d-md-inline-block"
            >
                Agregar producto &#43;
            </Link>  }

        </nav>
     );
}
 
export default Header;