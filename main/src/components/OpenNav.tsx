import React, { FC } from 'react'
import { ReactComponent as OpenNavSVG } from '../media/common/openNav.svg'

interface OpenNavProps {
    onClick: () => void;
}

const OpenNav: FC<OpenNavProps> = ({ onClick }) => {
    return (
        <button className="NavOpen" onClick={onClick}>
            <OpenNavSVG />
        </button>
    )
}

export default OpenNav;