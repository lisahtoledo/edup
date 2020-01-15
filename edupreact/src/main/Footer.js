import React from 'react';

import './style/footer.css'

export default function Footer() {
  return (
    <footer  class="footer">
            <section class="logo">
                <img src="./img/logo-2.svg" alt="" />
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
                    <img src="./img/facebook 1.svg" alt="facebook rede social" />
                    <img src="./img/twitter 1.svg" alt="twitter rede social" />
                    <img src="./img/linkedin.svg" alt="linkedin rede social" />
                </figure>
            </section>
        </footer>
  );
}
