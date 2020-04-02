import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Menu.module.scss'

function Menu() {
    return (
        <header className={styles.header}>
            <aside>
                financial tools
            </aside>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/early-retirement'>Early Retirement</Link>
            </nav>
        </header>
    )
}

export default Menu
