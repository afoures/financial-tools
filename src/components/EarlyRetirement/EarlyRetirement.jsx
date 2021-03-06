import React from 'react'

import Simulator from './Simulator'

function EarlyRetirement() {
    return (
        <article>
            <div>
                <p>
                    Ce calculateur / visualiseur de retraite anticipée est conçu pour projeter le nombre d'années qui vous séparent de la retraite, en fonction de quelques données clés telles que les revenus et les dépenses annuels, le taux de croissance des revenus, les dépenses annuelles prévues à la retraite et la répartition des actifs. Il s'agit d'un calculateur de préretraite qui est utile avant votre départ à la retraite pour avoir une idée du nombre d'années qu'il vous faudra probablement pour accumuler suffisamment d'argent pour prendre votre retraite.
                </p>
                <strong>TODO</strong>
                <ul style={{ margin: 0, marginBottom: 16 }}>
                    <li>
                        ajouter un moyen d'investir sur des periodes differentes (ex: chaque mois, toutes les 2 semaines).
                    </li>
                    <li>
                        avoir plus de cohérance au niveau des couleurs des graphiques.
                        [epargne] -> jaune / orange
                        [investissement irreg] -> bleu azure ?
                        [repartition] -> cash(jaune) obligation(violet) action(rouge)
                        [revenu - depense] -> vert - bleu
                    </li>
                    <li>
                        ajouter cash et gold au portfolio.
                    </li>
                    <li>
                        afficher le nombre d'année avant retraite.
                    </li>
                    <li>
                        modifier les informations flottantes des graphiques.
                    </li>
                    <li>
                        faire une meilleur verification des formulaires + changer les pourcentages de 0.8 a 80%
                    </li>
                </ul>
            </div>
            <Simulator />
        </article>
    )
}

export default EarlyRetirement
