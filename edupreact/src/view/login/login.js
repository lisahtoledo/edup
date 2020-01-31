import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

export default function login() {
  return (
        <Section>
            <section  class="form">
                <form action="" method="post" class="log">
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <Link href="#">Esqueci a senha</Link>
                    <input type="submit" value="Login" />
                </form>
            </section>
            <section class="form log">
                
                <h1>Venha dar um UP! no seu futuro!</h1>
                <Link href="#">
                    <button>
                        Cadastre-se
                    </button>
                </Link>
            </section>
        </Section>
);
}

const Section = styled.section`
  

width: 132vh;
background-color: #419CA1;
height: 81vh;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-items: center;
padding: 5px;
margin: 50px auto;
border-radius: 56px;
box-shadow: 8px 8px 45px rgba(0,0,0,0.25);


.form {
    display: flex;
    align-items: center;
    background-color: azure;
    height: 53.6vh;
    width: 59vh;
    justify-content: center;
    border-radius: 44px;
    box-shadow: 8px 8px 45px rgba(0,0,0,0.25);
}

.form input, button {
    height: 5.2vh;
    width: 42vh;
    margin: 5px auto;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 6px;
}

.form input[type="submit"], button {
    background-color: #FCDE32;
    border: 0px;
    height: 7vh;
    font-size: 17px;
    font-weight: bolder;
}

.log {
    
    display: flex;
    flex-direction: column;
}

`;