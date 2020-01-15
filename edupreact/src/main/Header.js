import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

import Logo from '../img/logo.svg'

export default function Header() {
  return (
        <Head>
            <div className="menu logo-search">
                    <Link to="/">
                        <img src={ Logo } alt="" />
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
        </Head>
  );
}



const Head = styled.header`

    background-color: #202F36;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    box-shadow: 6px 6px 8px rgba(0,0,0,0.25);


.menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.cad-login a{
   margin: 15px;
}
.cad-login a:nth-child(1){
    color: #fff;
    font-weight: bolder;
}

.cad-login a:nth-child(2){
    background-color: #FCDE32;
    padding: 12px;
    border-radius: 9px;
    font-weight: 520;
}

.logo-search {
    margin-left:15px;
}

.logo-search label{
    margin-left: 50px;
}

.logo-search input{
    background-color: #1C596E;
    height: 35px;
    padding: 20px;
    border: none;
    border-radius: 10px;
    color: #fff;
}

.logo-search input::placeholder{
    color: #fff;
    opacity: 1;
    font-weight: 530;
}

`;
