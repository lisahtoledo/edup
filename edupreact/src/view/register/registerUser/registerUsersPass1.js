import React from 'react';

import styled from 'styled-components'

export default function registerUser() {
  return (
    <Section>
        <form method="POST" action="" className="form">
        <h1>
            Formulario de cadastro de aluno
        </h1>
            <section className="session">
                <h2 className="title">Dados Pessoais</h2>
            <label for="" className="labels">
                <input type="text" name="" id="" placeholder="Nome completo" className="long"/>
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="RG"  className="short" />
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Orgão expeditor" className="short"/>
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="CPF"  className="short" />
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Etnia"  className="short" />
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Data de nascimento"  className="short" />
            </label>
            <label for=""  className="labels esp">
                <h2>Possui alguma necessidade especial?</h2>
                <div><input type="radio" name="pcds" value="yes" />Sim</div>
                <div><input type="radio" name="pcds" value="no" />Não</div>
            {/*  <!-- colocaria um de sim e não, aí se clicassem em sim, aparecesse uma caixinha de texto para especificar --> */}
            </label>
            <label for=""  className="labels esp">
                <h2>Sexo: </h2>
                <div><input type="radio" name="sex" id="" value="M" required /> Masculino</div>
                <div><input type="radio" name="sex" id="" value="F" required /> Feminino</div>
                <div><input type="radio" name="sex" id="" value="O" required /> Outros</div>
            </label>
            <label for=""  className="labels esp">
                <h2>É LGBTQIA+?</h2>
                <div><input type="radio" name="" id="" value="Y" /> Sim</div>
                <div><input type="radio" name="" id="" value="N" /> Não</div>
            {/*  <!-- vamos especificar qual? Não seria legal? --> */}
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Naturalidade" className="short" />
            </label>
            <label for=""  className="labels">
                <input type="text" name="" id="" placeholder="Nacionalidade" className="short" />
            </label>

            <label for="">
                <input type="text" placeholder="Nome" className="long" />
            </label>
            <label for="">
                <input type="date" placeholder="Data de Nascimento" />
            </label>
        
            <label for="">
                <label for="" >
                    Estado Civil
                    <p><input type="radio" name="estcivil" value="solteiro"/> Solteiro(a)</p>
                    <p><input type="radio" name="estcivil" value="casado"/> Casado(a)</p>
                    <p><input type="radio" name="estcivil" value="viuvo"/> Viúvo(a)</p>
                    <p><input type="radio" name="estcivil" value="divorciado"/> Divorciado(a)</p>
                </label>
            </label>
            <label for="">
                <input type="text" placeholder="Profissão" />
            </label>
        
            <label for="">
                <input type="text" placeholder="Renda bruta" />
            </label>
            <label for="">
                <select name=""  id="">
                    <option value="#">Grau de escolaridade</option>
                </select>
            </label>

            <h1>
                Informações adicionais
            </h1>
            <input type="text" placeholder="Como conheceu a gente?" className="short"/>
            <input type="text" placeholder="O que te motiva ir até o final de um curso?" className="short"/>
            {/* <!-- essa de motivação não é uma boa pergunta, melhor marcar para adaptarmos. "o que te motiva a fazer o curso" talvez já seja melhor --> */}
        </section>

        <section >
                <input type="submit" value="Proximo passo " className="finalizar" />
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