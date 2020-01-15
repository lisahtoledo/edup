import React from 'react';
import { Link } from 'react-router-dom'
import './style/header.css'

export default function Header() {
  return (
        <header className="header">
            <div className="menu logo-search">
                    <Link to="/">
                        <img src="./img/logo.svg" alt="" />
                    </Link>
                <label>
                    <input type="search" name="" id="" placeholder="Qual curso deseja?" />
                </label>
            </div>
            <div className="menu cad-login">
                <Link to="">
                    Login
                </Link>
                <Link to="" className="gold">
                    Cadastre-se
                </Link>
            </div>
        </header>
  );
}
