import React from 'react';


import LogoFooter from '../img/logo-2.svg'
import facebook from '../img/facebook.svg'
import twitter from '../img/twitter.svg'
import linkedin from '../img/linkedin.svg'

import styled from 'styled-components';



export default function Footer() {
  return (
    <Boot  class="footer">
            <section class="logo">
                <img src={ LogoFooter } alt="" />
            </section>
            <section class="links">
                &copy; EdUP 2020
                <ul>
                    <li>Link#1</li>
                    <li>Link#2</li>
                    <li>Link#3</li>
                </ul>
            </section>
            <section class="social">
                <figure>
                    <img src={ facebook } alt="facebook rede social" />
                    <img src={ twitter } alt="twitter rede social" />
                    <img src={ linkedin } alt="linkedin rede social" />
                </figure>
            </section>
    </Boot>
  );
}

const Boot = styled.footer`


display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
border-bottom: 7px solid #202F36;
box-shadow: 0px -4px 8px rgba(0,0,0,0.25);

/* logo */
.logo {
    margin: 15px;
}

/* map site */
.links {
    display: flex;
}

.links ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}

.links ul li {
    margin-left: 25px;
}

/* social */

.social figure{
    display: flex;

}

.social figure img{
    margin-left: 35px;
}

`;
