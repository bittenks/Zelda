import  { Component } from 'react';
import './style.css';
import Coin from '../../assets/Imgs/Coin.png';
import CardLike from '../../assets/Imgs/CardLike.png';

interface OnlyGameProps {
    name: string;
    Img: string;
    Price: string;
    Gold: string;
}

export default class OnlyGame extends Component<OnlyGameProps> {
    render() {
        const { name, Img, Price, Gold } = this.props;

        return (
            <div className='Content'>
                <div className='Image'>
                    <img src={Img} alt="" />
                </div>
                <div className='flex flex-row justify-between'>
                    <span className='Title'>{name}</span>
                    <img src={CardLike} className='w-12 h-12 mb-3 ml-12 cursor-pointer' alt="" />
                </div>
                <span className='Price'>R$ {Price}</span>
                <div className='flex flex-row'>
                    <span className='Tag'>ação</span>
                    <span className='Tag'>aventura</span>
                    <span className='Tag'>RPG</span>
                </div>
                <div className='flex justify-around flex-row Coin'>
                    <img src={Coin} alt="" />
                    <span>Elegível em até {Gold} gold points</span>
                </div>
                <div className='flex justify-center w-80'>
                    <div className='ButtonHeaderGames'>
                        <button>
                            Comprar Agora
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
