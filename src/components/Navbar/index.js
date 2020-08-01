import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import ShopIcon from '../../assets/icons/icon-shop.svg';
import './Navbar.scss';
import Button from '../Button'

function Navbar() {
    return (
        <div className="container">
            <nav>
                <a href="/">
                    <img src={Logo} alt="SuperGet" />
                </a>
                <ul>
                    <li className="button-link"><a href="">Maquininhas</a></li>
                    <li className="button-link"><a href="">App Getnet</a></li>
                    <li className="button-link"><a href="">Cartão SuperGet</a></li>
                    <li className="button-link"><a href="">Quero Alugar</a></li>
                    <li className="button-link"><a href="">Ajuda</a></li>
                </ul>
                <div className="loginBtn button-link">
                    <a href="/" style={{ whiteSpace: 'nowrap' }}>Entre ou cadastre-se</a>
                </div>
                <div className="btns">
                    <button className="imgBtn"><img src={ShopIcon} alt="Cart" /></button>
                    <Button className="btn-secondary md" href="/" text="Pedir maquininha" width="164px" />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;