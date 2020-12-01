import React from 'react'
import ReactTooltip from 'react-tooltip'

import style from './Helper.module.scss'

function Helper({ id, children, title }) {
    return (
        <>
            <span className={style.helper} data-tip data-for={id}>?</span>
            <ReactTooltip
                className={style.tooltip}
                id={id}
                place='bottom'
                effect='solid'
                aria-haspopup='true'
            >
                <h3>{title}</h3>
                {children}
            </ReactTooltip>
        </>
    )
}

export default Helper
