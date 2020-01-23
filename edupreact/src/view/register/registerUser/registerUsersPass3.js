import React from 'react';

import styled from 'styled-components'

export default function registerUser() {
  return (
        <Section className="session">
            <section className="session">
            <form classNameName="form">
                
            <h1 className="title">Senha: </h1>
            <label for="">
                <input type="password" name="" id="" placeholder="Senha" className="short" />
            </label>
            <label for="" >
                <input type="password" name="" id="" placeholder="Confirmação de Senha" className="short" />
            </label>
            
            <h1 className="title">Disponilidade de turnos</h1>
                <label for="">
                    <div className="turno">
                        <div><input type="checkbox" name=""  id="" /> Manhã</div>
                        <div><input type="checkbox" name=""  id="" /> Tarde</div>
                        <div><input type="checkbox" name=""  id="" /> Noite</div>
                    </div>
                </label>

            <h1 className="title">Dados acadêmicos</h1>
            <label for="">
                <select className="selected">
                    <option value="null">Selecione</option>
                    <option value="Analfabeto">Analfabeto</option>
                    <option value="Fundamental">Fundamental</option>
                    <option value="Ensino Medio">Ensino Medio</option>
                    <option value="Superior">Superior</option>
                </select>
            </label>
            <label for="">
                <h2>Fez: </h2>
                <input type="checkbox" name=""  id="" /> Pré-vestibular
                <input type="checkbox" name=""  id="" /> Supletivo
            </label>
            <label for="">
            <br /> <input type="text" placeholder="Nome da Escola" className="short" />
            </label>
            <label for="">
                <select name="" id="" className="short">
                    <option value="">Exatas</option>
                    <option value="">Humanas</option>
                    <option value="">Biológicas</option>
                </select>
                {/* <!-- colocaria uma seleção com várias caixinhas para selecionarem áreas e passaria o de línguas para cá porque está desorganizado --> */}
            </label>
            <label for="">
                <h2>
                    Preferência de lingua
                </h2>
                <div>
                    <input type="checkbox" name=""  id="" /> Português
                    <input type="checkbox" name=""  id="" /> Espanhol
                    <input type="checkbox" name=""  id="" /> Inglês
                    <input type="checkbox" name=""  id="" /> Outro
                </div>
            </label>
            </form>
            </section>
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