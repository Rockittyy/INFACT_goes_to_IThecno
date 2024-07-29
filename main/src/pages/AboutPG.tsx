import React, { FC } from 'react'

interface AboutPGProps {

}

const AboutPG: FC<AboutPGProps> = ({ }) => {
  return (
    <div className='AboutPG'>
      <main className="">
        <div className="Title">
          <h1>About</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque vel quos officia dicta dignissimos et aut rem nemo quas natus animi similique, expedita, ipsum, non illum doloremque quaerat odio.</p>

      </main>
      <div className="Robot"></div>
      <div className="TimeArchive"></div>
      <div className="Archives"></div>
    </div>
  )
}

export default AboutPG;