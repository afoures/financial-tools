import React from 'react'

import Simulator from './Simulator'

function EarlyRetirement() {
    return (
        <article>
            <div>
                <p>
                    Ce calculateur / visualiseur de retraite anticipée est conçu pour projeter le nombre d'années qui vous séparent de la retraite, en fonction de quelques données clés telles que les revenus et les dépenses annuels, le taux de croissance des revenus, les dépenses annuelles prévues à la retraite et la répartition des actifs. Il s'agit d'un calculateur de préretraite qui est utile avant votre départ à la retraite pour avoir une idée du nombre d'années qu'il vous faudra probablement pour accumuler suffisamment d'argent pour prendre votre retraite.
                </p>
            </div>
            <Simulator />
        </article>
    )
}

export default EarlyRetirement
