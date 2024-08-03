import React, { FC } from 'react'
import { ReactComponent as Close } from '../media/common/close.svg'
import { Link } from 'react-router-dom'


interface NavbarProps {
    onClose: () => void;
}

const Navbar: FC<NavbarProps> = ({ onClose }) => {
    return (
        <aside className="NavBar">
            <section className="closeBut">
                <div className="flexhold"></div>
                <button className="close" onClick={onClose}>
                    <Close />
                </button>
            </section>

            <nav>
                <Link to="/" className="Title2">

                    <span className="top">
                        <h2>INDONESIA</h2>
                        <h3>in</h3>
                    </span>

                    <h1>Archive</h1>

                </Link>
                <Link to="/" className="Home">
                    <h2>HOME</h2>
                </Link>
                <Link to="/" className="About">
                    <h2>ABOUT</h2>
                </Link>
                <Link to="/" className="TimeArchive">
                    <h1>Time's </h1> <h2>ARCHIVE</h2>
                </Link>
            </nav>

        </aside>
    )
}

export default Navbar;