import React, { Component } from 'react'
import './style.css'
import OnlyGame from './OnlyGame';
import Banner from '../../assets/Imgs/Banner.png'
export class Games extends Component {
  render() {
    return (
        <>
      <div className='flex justify-center mt-2'>
        <h3 className=''>Zelda para Nintendo Switch</h3>
      </div>
      <div className='GradeGames'>
        <OnlyGame name={"The Legend of Zelda: Tears of the Kingdom"} Price={'357,99'} Gold={"299"} Img={Banner} />
        <OnlyGame name={"The Legend of Zelda: Tears of the Kingdom"} Price={'357,99'} Gold={"299"} Img={Banner} />
        <OnlyGame name={"The Legend of Zelda: Tears of the Kingdom"} Price={'357,99'} Gold={"299"} Img={Banner} />
        </div>

        <div className='GradeGames'>

        <OnlyGame name={"The Legend of Zelda: Tears of the Kingdom"} Price={'357,99'} Gold={"299"} Img={Banner} />
        <OnlyGame name={"The Legend of Zelda: Tears of the Kingdom"} Price={'357,99'} Gold={"299"} Img={Banner} />
        <OnlyGame name={"The Legend of Zelda: Tears of the Kingdom"} Price={'357,99'} Gold={"299"} Img={Banner} />
        </div>
        </>


    )
  }
}

export default Games