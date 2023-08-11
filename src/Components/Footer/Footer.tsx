import { Component } from 'react'
import NintendoLogo from '../../assets/Imgs/Nintendo 1.svg';

export default class Footer extends Component {
  render() {
    return (
      <>
      <footer className="w-full text-white ">
      {/*      <!-- Main footer --> */}
      <div className='flex justify-between items-center text-center mr-8 ml-8 text-FooterText border-b-1 bor'>
            <img src={NintendoLogo}  />
           
           <a href="https://github.com/bittenks text-FooterText "  target="_blank" rel="noopener noreferrer"> Created By @Bittenks</a>

      </div>
      <div className="pt-16 pb-12 text-sm   bg-#1D1C20">
        <div className="container px-6 mx-auto">
         
          <div className="grid grid-cols-6 gap-6 md:grid-cols-8 lg:grid-cols-12">
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3 text-FooterText "
              aria-labelledby="footer-product-4"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-product-4"
              >
               Sobre a Nintendo
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
                  Responsabilidade social corporativa
                  </a>
                </li>
              
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3 text-FooterText "
              aria-labelledby="footer-product-4"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-product-4"
              >
           Loja
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
                 Jogos
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
                 Hardware
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
                Ofertas e promoções
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
           Online service
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3 text-FooterText "
              aria-labelledby="footer-product-4"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-product-4"
              >
          Assistência
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
                Nintendo Switch
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
                Conta Nintendo
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
             Outros consoles
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
          Reparos
                  </a>
                </li>
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3 text-FooterText "
              aria-labelledby="footer-product-4"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-product-4"
              >
         Pais
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
          Informação para os pais
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
              Controle dos pais
                  </a>
                </li>
              
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3 text-FooterText "
              aria-labelledby="footer-product-4"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-product-4"
              >
       Comunidade
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
          Diretrizes comunitárias
                  </a>
                </li>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
              Segurança online
                  </a>
                </li>
              
              </ul>
            </nav>
            <nav
              className="col-span-2 md:col-span-4 lg:col-span-3 text-FooterText"
              aria-labelledby="footer-product-4"
            >
              <h3
                className="mb-6 text-base font-medium text-white"
                id="footer-product-4"
              >
      Privacidade
              </h3>
              <ul>
                <li className="mb-2 leading-6">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
         Política de privacidade
                  </a>
                </li>
                <li className="mb-2 leading-6 ">
                  <a
                    href="javascript:void(0)"
                    className="transition-colors duration-300 "
                  >
           Cookies e anúncios
                  </a>
                </li>
              
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <span className='text-sm ml-2 font-light text-FooterText'>© Nintendo. Os jogos são propriedade de seus respectivos donos. Nintendo of America Inc. A sede está localizada em Redmond, Washington (EUA).</span>
    </footer>

      </>
    )
  }
}
