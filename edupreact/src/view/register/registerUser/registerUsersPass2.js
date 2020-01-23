import React from 'react';

import styled from 'styled-components';




export default function registerPass2() {
  return (
    <Section className="session">
        <form method="post" classNameName="form">
        <section classNameName="session">
            <h1 className="title">Endereço</h1>
                
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="CEP" className="short" />
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Estado" className="short" />
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Cidade" className="short" />
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Endereço" className="long" />
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Bairro" className="short" />
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Complemento" className="short" />
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Telefone celular" className="short" />
                <br /><input type="checkbox" name="wpp"  id="" /> É WhatsApp
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Telefone fixo" className="short" />
            </label>
            <label for=""  className="labels">
                <p><input type="checkbox" name=""  id="" /> O telefone informado é de algum
                    familiar ou pessoa próxima?</p>
            </label>
            </section>
        </form>
        
    </Section>
  );
}

const Section = styled.section`
  .form {
    max-width: 800px;
    padding: 50px;
    margin: 50px auto;
    border-radius: 50px;
    box-shadow: 8px 8px 45px rgba(0, 0, 0, 0.1);
}

.session{
    border-radius: 5px;
    box-shadow: 4px 4px 13px rgba(0,0,0,0.35);
    padding: 15px;
    /* width: 110vh; */
    flex-basis: 500px;
    margin: 25px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 3px;
}

label{
    /* border: 5px solid tomato; */
    padding: 5px;

}


input[type=text], input[type=password], input[type=date], input[type=number]{
    width: 45vh;
    font-size: 15px;
    border:0px solid #000;
    border-bottom: 2px solid rgb(74, 82, 184);
    height: 30px;
    padding: 2px;
    
}

input[type=text]::-moz-placeholder, input[type=password]::-moz-placeholder{
    font-size: 15px;
    opacity: 1;
}


.title {
    grid-column: 1/3;
    grid-row: 1;
}
.long{
    grid-column: 1/3;
}

.esp {
    width: 45vh;
    border-bottom:2px solid #09aa03;
}

.itens {
        background: #09aa03;
}

.finalizar {
    width: 20vw;
    height: 3vw;
    border: 1px solid rgb(0, 158, 26);
    background-color: #09aa03;
    color: #fff;
    font-weight: bolder;
    border-radius: 5px;
}

.finalizar:active {
    background-color: rgb(4, 94, 41);
}

`;