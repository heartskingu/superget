import React from 'react';
import './Banner.scss';
import Woman from '../../assets/images/woman.png';
import IconText from './components/IconText'
import Button from '../Button'

import BluetoothIcon from '../../assets/icons/bluetooth-icon.svg';
import DeviceIcon from '../../assets/icons/device-icon.svg';
import TagIcon from '../../assets/icons/tag-icon.svg';

function Banner() {
    let fadeDuration = "1000";
    return (
        <div className="bg">
            <div className="container">
                <div className="flex" style={{ height: "494px" }}>
                    <div className="flex flex-col" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={fadeDuration} style={{ width: "488px" }}>
                        <h1 className="text-1">Chega de<br /> perder vendas!</h1>
                        <p className="text-2">Aceite cartões e as principais bandeiras com as melhores taxas do mercado . A Superget Mobile vai levar praticidade e economia para o seu dia a dia.</p>
                        <p className="text-3">Apenas 2% de Taxa Única</p>
                        <Button className="btn-primary lg" href="/" text="Pedir maquininha" width="239px" />
                    </div>
                    <div className="flex center" data-aos="fade-in" data-aos-easing="linear" data-aos-duration={fadeDuration}>
                        <img className="woman" src={Woman}></img>
                    </div>
                    <div className="flex flex-col" data-aos="fade-left" data-aos-easing="linear" data-aos-duration={fadeDuration}>
                        <div className="price-box">
                            <span className="text-4">DE R$ 118,90</span><br />
                            <div className="flex align-center">
                                <span className="text-5">POR<br />12X</span>
                                <span className="text-6">R$ 4,90</span>
                            </div>
                            <span className="text-7">OU R$58,80 À VISTA NO BOLETO</span>
                        </div>
                        <div className="icon-list">
                            <div className="mb-16">
                                <IconText icon={BluetoothIcon} text="Conexão bluetooth" />
                            </div>
                            <div className="mb-16">
                                <IconText icon={DeviceIcon} text="Realize transações pelo celular" />
                            </div>
                            <div>
                                <IconText icon={TagIcon} text="Venda pelo app SuperGet " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;