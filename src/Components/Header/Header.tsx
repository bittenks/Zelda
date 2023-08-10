import  { Component } from 'react';
import ZeldaBreath from '../../assets/Imgs/LogoZeldaBreath.png';
import LinkCapa from '../../assets/Imgs/LinkCapa.svg';

import './style.css';

class Header extends Component {
    render() {
        return (
            <div className='flex justify-between AllContent'>
                <div>
                    <img className='icon' src={ZeldaBreath} alt="Zelda Breath" />
                    <h3 className='header'>
                        The Legend of Zelda: Tears of the Kingdom
                    </h3>
                    <div className='ResumeHeader'>
                        <span>
                            Nesta sequência do jogo Legend of Zelda: Breath of the Wild, você decidirá seu próprio caminho pelas extensas paisagens de Hyrule e pelas misteriosas ilhas que flutuam nos céus.
                        </span>
                        <div className='ButtonHeader'>
                            <button>
                                Comprar Agora
                            </button>
                        </div>
                    </div>
                </div>
                <div className='ImageArea text-gray-100'>
                    <img src={LinkCapa} alt="Link Capa" />
                </div>
            </div>
        );
    }
}

export default Header;
