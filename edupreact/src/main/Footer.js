import React from 'react';

import './style/footer.css'
import LogoFooter from '../img/logo-2.svg'
import facebook from '../img/facebook.svg'
import twitter from '../img/twitter.svg'
import linkedin from '../img/linkedin.svg'

export default function Footer() {
  return (
    <footer  class="footer">
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
        </footer>
  );
}
