import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline';
import Page from '../components/Page';
import GoBackBut from '../components/GoBackBut';


interface WelcomePG {

}

const WelcomePG: FC<WelcomePG> = ({ }) => {
  return (
    <Page pageName='WelcomePG' singglePage>
      <div className="title">
        <div className="welcome">
          <h1>WELCOME</h1>
          <h3>to</h3>
        </div>

        <h2>INDONESIA</h2>
        <div className="posHelper1">
          <h3 className="TxtArchive flex-center"> <span className="text">Archive</span></h3>
        </div>


      </div>

      <Link className="clickToContinue1" to={"/About"} >
        <h4>CLICK TO CONTINUE</h4>
      </Link>
      <div className="model">
        <Spline scene="https://prod.spline.design/VnLo8eaQFqSZtkc7/scene.splinecode" />
      </div>
    </Page>
  )
}

export default WelcomePG;

