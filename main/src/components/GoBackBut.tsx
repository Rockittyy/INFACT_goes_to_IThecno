import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as GoBack } from '../media/common/goBack.svg'


interface GoBackButProps {
    to: string;
}

const GoBackBut: FC<GoBackButProps> = ({ to }) => {
    return (
        <Link className='goBackBut' to={to}>
            <GoBack />
        </Link>
    )
}

export default GoBackBut;