import React, { FC } from 'react'
import Page from '../components/Page';
import Spline from '@splinetool/react-spline';

interface DevWorldPGProps {

}

const DevWorldPG: FC<DevWorldPGProps> = ({ }) => {
    return (
        <Page pageName="DevWorldPG">
            <div className="Origin">
                <Spline
                    style={{ height: "auto" }}
                    id='nekosan'
                    scene="https://prod.spline.design/zxk-RCpWVSgkiD2c/scene.splinecode"
                />
            </div>

        </Page>
    )
}

export default DevWorldPG;