import React, { Component } from 'react'
import './style.css'
import OnlyGame from './OnlyGame';
import Banner from '../../assets/Imgs/Banner.png'
import botw from '../../assets/Imgs/botw.png'
import Expansion from '../../assets/Imgs/Expansion.png'
import HyruleWarriors from '../../assets/Imgs/HyruleWarriors.png'
import LinkAwaking from '../../assets/Imgs/LinkAwaking.png'
import Skyward from '../../assets/Imgs/Skyward.png'





export class Games extends Component {
  render() {
    return (
        <>
      <div className='flex justify-center mt-2'>
        <h3 className='GamesHeader'>Zelda para Nintendo Switch</h3>
      </div>
      <div className='GradeGames'>
        <OnlyGame name={"The legend of Zelda : Tears of the Kingdom"} Price={'357,99'} Gold={"299"} Img={Banner} />
        <OnlyGame name={"The legend of Zelda : Breath of the Wild"} Price={'299,00'} Gold={"299"} Img={botw} />
        <OnlyGame name={"The legend of Zelda : BOTW Expansion Pass"} Price={'99,00'} Gold={"299"} Img={Expansion} />
        </div>

        <div className='GradeGames'>

        <OnlyGame name={"The legend of Zelda : Tears of the Kingdom"} Price={'299,99'} Gold={"299"} Img={Skyward} />
        <OnlyGame name={"The legend of Zelda : Link’s Awakening"} Price={'299,00'} Gold={"299"} Img={LinkAwaking} />
        <OnlyGame name={"Hyrule Warrios: Age of Calamity"} Price={'299,00'} Gold={"299"} Img={HyruleWarriors} />
        </div>
        </>


    )
  }
}

export default Games