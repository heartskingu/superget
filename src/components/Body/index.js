import React from 'react';
import './Body.scss';
import Card from './components/Card';
import Smartphone from '../../assets/icons/smartphone-icon.svg';
import Check from '../../assets/icons/check-icon.svg';
import Badge from '../../assets/icons/badge-icon.svg';
import Arrow from '../../assets/icons/arrow-right-icon.svg';

function Body() {
    let fadeDuration = "1000";
    return (
        <div className="container">
            <div className="flex evenly align-center" style={{ height: "242px", width: "1216px", marginTop: "65px" }}>
                <div style={{ marginRight: "32px" }} data-aos="fade-up" data-aos-easing="linear" data-aos-duration={fadeDuration}>
                    <span className="text-como">Como</span>
                    <br />
                    <span className="text-aproveitar">aproveitar ?</span>
                </div>
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration={fadeDuration}>
                    <Card textNormal="Compre e pague sua" textBold="SuperGet" icon={Smartphone} />
                </div>
                <img data-aos="fade-right" data-aos-easing="linear" data-aos-duration={fadeDuration} src={Arrow}></img>
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration={fadeDuration}>
                    <Card textNormal="Faça seu cadastro no" textBold="site da Getnet" icon={Check} />
                </div>
                <img data-aos="fade-right" data-aos-easing="linear" data-aos-duration={fadeDuration} src={Arrow}></img>
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration={fadeDuration}>
                    <Card textNormal="Ative sua maquininha e " textBold="comece a vender" icon={Badge} />
                </div>
            </div>
        </div>
    );
}

export default Body;