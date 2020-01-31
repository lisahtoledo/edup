import React from 'react';

import Girl from './img/menina.jpg'
import styled from 'styled-components'

export default function cardCourse() {
  return (
    <Section>
        <img src={ Girl } alt="Nome do curso" className="img-Course" />
        <section className="cont">
            <h1 className="title-course">Nome Do Curso</h1>
            <p className="desc-course">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cum distinctio illum libero nesciunt laboriosam quasi architecto vel quisquam soluta.</p>       
            <div className="location">
                <p>Rio De Janeiro</p>
                <p>RJ</p>
            </div>
            <div className="course-tags">
                <p>#forWoman</p>
                <p>#tecnologia</p>
                <p>#gratuito</p>
            </div>
        </section>
    </Section>
  );
}

const Section = styled.section`

margin: 25px;
width: 350px;
height: 484px;
background-color: #fff;
border: 1px solid rgba(0,0,0,0.25);
box-shadow: 8px 8px 5px rgba(0,0,0,0.25);

.cont{
    padding:7px;
    margin: 20px;

}

.img-Course{
    width: 350px;
}
.title-course{
    font-weight: bolder;
    margin:5px;
    padding:7px;
}

.desc-course{
    font-size: 15px;
    padding:7px;
 }
.king{
    display: flex;
    justify-content: space-between;
    padding: 40px;

    margin-top: 100px;
    width: 350px;
    height: 484px;

}

h1{
    padding:7px;
    font-weight: normal;
    width: 45vh;
}
.location{
    display: flex;
    margin-right: 5px;
    font-size: 15px;
    padding:4px;
}

.location p{
    margin: 3px;
}

.cont1{
    font-size: 15px;
    height: 17vh;
    width: 45vh;
    padding:7px;
 }
.course-tags {
    display:flex;
}

.course-tags p {
    margin: 3px;
    font-weight: bolder;
}
`;