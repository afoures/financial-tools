import React from 'react'

import styles from './Home.module.scss'

function Home() {
    return (
        <article className={styles.home}>
            <p>
                Hello à tous, voici un petit side project pour m'occuper durant le confinement. Je compte de temps en temps rajouter d'autres outils en fonction de mon temps libre et de ma motivation.
            </p>
            <p>
                Aujourd'hui un seul outil est disponible: un calculateur de préretraite.
            </p>
            <p>
                Vous pouvez me faire vos retours sur discord (afoures#7719).
            </p>
        </article>
    )
}

export default Home
