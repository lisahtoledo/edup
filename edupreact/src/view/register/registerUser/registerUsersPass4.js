import React from 'react';

// import { Container } from './styles';

export default function registerUser() {
  return (
            <section class="session">
            <h1 class="title">Caso seja menor de idade</h1>
            {/* <!-- colocar um checkbox se é menor de idade, ou quando colocar a data de nascimento, abrir esse campo caso seja menor de 18 --> */}
            <label for="">
                <input type="text" name="" id="" placeholder="Nome do responsável" class="long" />
            </label>
            <label for="">
                <input type="text" name="" id="" placeholder="Profissão" class="short" />
            </label>
            {/* <!-- perguntar o nível de escolaridade do responsável, CPF e renda --> */}
            <label for="">
                <select name="" id="" class="short">
                    <option value="">Fundamental</option>
                </select>
            </label>
            <label for="">
                <input type="text" name="" id="" placeholder="Estado civil" />
            </label>
            <label for="">
                <input type="text" name="" id="" placeholder="CPF" class="short" />
            </label>

            <h1>Renda percapita</h1>
            <label for="">
                Quantas pessoa moram na sua casa?
                <input type="number" placeholder="Número de pessoas que moram em sua residência" />
                {/* <!-- tem que abrir um desse para cada pessoa. Acho melhor completar uma tabela com os dados do que individualmente. Tabela inicializar com o número de pessoas que moram na residência, e a própria pessoa tem que estar inclusa. Talvez fazer a pergunta sem ser placeholder, do lado de fora mesmo --> */}
            </label>
        </section>
  );
}
