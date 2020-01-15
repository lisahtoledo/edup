import React from 'react';
import { Link } from 'react-router-dom'

import './banner.css'
import Astronaut from './img/astronaut.svg'

export default function Banner() {
  return (
    <section class="banner">
            <section class="beginner">
                <h1>Inicie sua jornada<br /> <span>conosco</span>.</h1>
                <div class="user-chooser">
                    <div>
                        <Link to="" class="study bottom">Alunos</Link>
                    </div>
                    <div>
                        <Link to=""  class="company bottom">
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
        </section>
  );
}
