import React, {Component} from 'react'
import NintendoLogo from '../../assets/Imgs/Nintendo 1.svg'
import './style.css'
export class Navbar extends Component {
    render() {
        return (
            <div className='flex flex-col'>
            <div className='flex justify-between mt-1 Navbar'>
                <div className='NintendoLogo'>
                    <img src={NintendoLogo} alt="" srcset=""/>
                </div>
                <div className='flex items-center InputSearch '>
                    <input className='InputSearch' type="text" placeholder='Pesquise o jogo'/>
                </div>
                <div className='flex items-center InfosNavbar '>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none">
                        <path
                            d="M4.32217 6.31802C2.56481 8.07538 2.56481 10.9246 4.32217 12.682L12.0042 20.364L19.6861 12.682C21.4435 10.9246 21.4435 8.07538 19.6861 6.31802C17.9288 4.56066 15.0795 4.56066 13.3222 6.31802L12.0042 7.63609L10.6861 6.31802C8.92877 4.56066 6.07953 4.56066 4.32217 6.31802Z"
                            stroke="#3A3A3C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                    <span>Adicionar a lista de Desejo</span>
                </div>
                <div className='flex items-center InfosNavbar '>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none">
                        <path
                            d="M5.12519 17.8037C7.15682 16.6554 9.50395 16 12.0042 16C14.5044 16 16.8515 16.6554 18.8831 17.8037M15.0042 10C15.0042 11.6569 13.661 13 12.0042 13C10.3473 13 9.00415 11.6569 9.00415 10C9.00415 8.34315 10.3473 7 12.0042 7C13.661 7 15.0042 8.34315 15.0042 10ZM21.0042 12C21.0042 16.9706 16.9747 21 12.0042 21C7.03359 21 3.00415 16.9706 3.00415 12C3.00415 7.02944 7.03359 3 12.0042 3C16.9747 3 21.0042 7.02944 21.0042 12Z"
                            stroke="#3A3A3C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                    <span>Acessar minha conta</span>
                </div>
                
            </div>
            <div className='line'>

            </div>
            </div>


        )
    }
}

export default Navbar