import React, { FC, useState } from 'react'
import Page from '../components/Page'
import Navbar from '../components/Navbar'
import OpenNav from '../components/OpenNav'
import GoBackBut from '../components/GoBackBut'

interface MainWorldPGProps {

}


const MainWorldPG: FC<MainWorldPGProps> = ({ }) => {

    const [openNav, setOpenNav] = useState(false);

    return (
        <Page pageName='MainWorldPG' singglePage>
            <div className="overLay">

                <GoBackBut to="/About" />
                {
                    openNav ?
                        <Navbar onClose={() => { setOpenNav(false); console.log('its supose to work') }} /> :
                        <OpenNav onClick={() => { setOpenNav(true); console.log('its supose to work', openNav) }} />
                }
            </div>
        </Page >
    )
}

export default MainWorldPG;