import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface WelcomePG {

}

const WelcomePG: FC<WelcomePG> = ({ }) => {
  return (
    <div className='WelcomePG Singgle-Page'>

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

      </div>
  )
}

export default WelcomePG;