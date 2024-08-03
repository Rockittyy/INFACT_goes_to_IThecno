import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { ReactComponent as Book } from "../media/common/book.svg";
import Page from '../components/Page';
import Spline from '@splinetool/react-spline';
import GoBackBut from '../components/GoBackBut';
const Spline_ = React.lazy(() => import('@splinetool/react-spline'));

interface AboutPGProps {

}

const AboutPG: FC<AboutPGProps> = ({ }) => {
  return (
    <Page pageName='AboutPG'>
      <GoBackBut to="/" />
      <main className="">
        <div className="Title">
          <h1>About</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque vel quos officia dicta dignissimos et aut rem nemo quas natus animi similique, expedita, ipsum, non illum doloremque quaerat odio.</p>

      </main>
      <section className="Robot">
        <Spline
          style={{
            height: "auto",
            // width: '100vw',
            // transform:"translate(-30%,-30%)"
          }}
          id='nekosan'
          scene="https://prod.spline.design/zxk-RCpWVSgkiD2c/scene.splinecode"
        />
      </section>
      <section className="TimeArchive">

        <div className="TxtArchive">
          <div className="holder1">

            <h5 className="a1">ARCHIVE</h5>
            <h5 className="a2">ARCHIVE</h5>
            <div className="TxtTime">
              <h1>TIME</h1>
              <h3>in</h3>
            </div>

          </div>
          <h5 className='a3'>ARCHIVE</h5>
        </div>

      </section>
      <section className="Archives">
        <Link to="/Main" className="periode"><Book /></Link>
        <Link to="/Main" className="periode"><Book /></Link>
        <Link to="/Main" className="periode"><Book /></Link>
      </section>
    </Page>
  )
}

export default AboutPG;