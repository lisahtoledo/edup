import React from 'react';
import { Link } from 'react-router-dom'

import styled from 'styled-components';
import Student from './img/student.svg'
import Teamwork from './img/teamwork.svg'

export default function chooseUserOrCompany() {
  return (
    <Section className="itens">
            <section className="background">
                <section className="form column">
                    <Link to="/cadastroPessoa">Pessoa</Link>
                    <img src={ Student }alt="" />
                </section>
                    <label>ou</label>
                <section className="form column">
                    <Link to="/cadastroEmpresa">Empresa</Link>
                    <img src={ Teamwork } alt="" />
                </section>
            </section>
    </Section>
  );
}


const Section = styled.section`
  
margin: 50px auto;
width: 132vh;
background-color: #419CA1;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-items: center;
padding: 105px;
border-radius: 56px;
box-shadow: 8px 8px 45px rgba(0,0,0,0.25);

.background{
    padding: 56px;
    background-color: #fff;
    display: flex;
    align-items:flex-start;
    justify-content:center;
    border-radius: 25px;
}

.form {
    display: flex;
    align-items: center;
    background-color: azure;
    width: 59vh;
    justify-content: center;
    border-radius: 44px;
}

.form a {
    height: 5.2vh;
    width: 42vh;
    margin: auto;
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 5px;
    border-radius: 6px;
}

.form a{
    background-color: #FCDE32;
    border: 0px;
    height: 7vh;
    font-size: 17px;
    font-weight: bolder;
}

.column {
    display: flex;
    flex-direction: column;
}

`;