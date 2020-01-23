import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Astronaut from './img/astronaut.svg'


export default function Banner() {
  return (
    <Section>
            <section class="beginner">
                <h1>Inicie sua jornada<br /> <span>conosco</span>.</h1>
                <div class="user-chooser">
                    <div>
                        <Link to="/login" class="study bottom">Alunos</Link>
                    </div>
                    <div>
                        <Link to="/login"  class="company bottom">
                            Empresa
                        </Link>
                    </div>
                </div>
            </section>
            <section>
                <figure>
                    <img src={ Astronaut} alt="Banner Astronauta olhando para o espaço" />
                </figure>
            </section>
        </Section>
  );
}


export const Section = styled.section`

background-color: #202F36;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;

img{
    height: 75vh;
    margin-right: 0px;
}

/* beginner */

 .beginner {
    color: #fff;
    font-size: 3.5rem;
    margin: 0 auto;
}
.beginner span{
    color: #FCDE32;
}

.user-chooser{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 1rem;
    padding: 15px;
    color: #000;
    
}

 
.bottom {
   width: 35vh;
    height: 7vh;
    margin: 5px;
    border-radius: 9px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    background-color: tomato;
}

.study {

    background-color: #1C596E;
}

.company {
    background-color: #FCDE32;
}
`;