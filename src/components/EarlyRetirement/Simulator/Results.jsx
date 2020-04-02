import React, { useMemo } from 'react'

import { useConfig } from './SimulatorContext'

import style from './Results.module.scss'

import * as Charts from './Charts'

// 110 rule -> stock % = 110 - current age


const getBoundaries = (config) => {
    const max = 80
    let min = max

    console.log(config)

    config.income.forEach((elem) => {
        if ( elem.age < min) min = elem.age
    })

    config.spending.forEach((elem) => {
        if ( elem.age < min) min = elem.age
    })

    config.investments.forEach((elem) => {
        if ( elem.age < min) min = elem.age
    })

    config.portfolio.forEach((elem) => {
        if ( elem.age < min) min = elem.age
    })

    const years = max - min

    return { min, max, years }
}

const computeInformations = (boundaries, data) => {
    let lastAmount = 0
    return [...Array(boundaries.years)].map((_, year) => {
        const found = data.find(elem => elem.age === boundaries.min + year)
        if ( found ) lastAmount = found.amount
        return lastAmount
    })
}

const computeInvestments = (boundaries, data) => {
    return [...Array(boundaries.years)].map((_, year) => {
        const found = data.find(elem => elem.age === boundaries.min + year)
        if ( found ) return found.amount
        return 0
    })
}

const computeRepartition = (boundaries, data) => {
    let lastRepartition = {
        stock: 0,
        bond: 0,
        cash: 0,
    }
    return [...Array(boundaries.years)].map((_, year) => {
        const found = data.find(elem => elem.age === boundaries.min + year)
        if ( found ) lastRepartition = found.repartition
        return lastRepartition
    })
}

const computeSavings = (income, spending) => {
    return income.map((amount, index) => amount - spending[index])
}


// Balance(Y)   =   P(1 + r)Y   +   c[ ((1 + r)Y + 1 - (1 + r)) / r ]
//
// last balance - investments - savings - periode - repartition
//
// lastValue * (1 + returns) ** year
// + savings * (((1 + returns) ** (year + 1) - (1 + returns)) / returns)

const computeCompoundInterests = (last, investment, saved, returns, repartition) => {
    const past = last.stock + last.bond

    const futureInvestment = past + investment

    const diffInvestment = {
        stock: (repartition.stock * futureInvestment) - last.stock,
        bond: (repartition.bond * futureInvestment) - last.bond,
    }

    const lastInvestment = {
        stock: last.stock + Math.min(investment, Math.max(0, diffInvestment.stock)),
        bond: last.bond + Math.min(investment, Math.max(0, diffInvestment.bond)),
    }

    const future = past + investment + saved

    const diff = {
        stock: (repartition.stock * future) - lastInvestment.stock,
        bond: (repartition.bond * future) - lastInvestment.bond,
    }

    return {
        stock: last.stock * (1 + returns.stock)
            + Math.min(investment, Math.max(0, diffInvestment.stock)) * (1 + returns.stock)
            + Math.min(saved, Math.max(0, diff.stock)) * (1 + returns.stock),
        bond: last.bond * (1 + returns.bond)
            + Math.min(investment, Math.max(0, diffInvestment.bond)) * (1 + returns.bond)
            + Math.min(saved, Math.max(0, diff.bond)) * (1 + returns.bond),
    }
}


const computeBalance = (returns, investments, savings, repartition) => {
    let lastBalance = {
        stock: 0,
        bond: 0,
    }

    const balance = savings.map((saved, index) => {
        lastBalance = computeCompoundInterests(
            lastBalance,
            investments[index],
            saved,
            returns,
            repartition[index]
        )

        return lastBalance
    })

    return balance
}


function simulate(config) {

    const boundaries = getBoundaries(config)

    console.log(boundaries)

    const [income, spending, investments, repartition] = [
        computeInformations(boundaries, config.income),
        computeInformations(boundaries, config.spending),
        computeInvestments(boundaries, config.investments),
        computeRepartition(boundaries, config.portfolio),
    ]

    const target = (config.goal.amount / (1 - config.avgTaxRate)) / config.goal.wr

    const savings = computeSavings(income, spending)

    const balance = computeBalance({
        stock: config.stockReturns,
        bond: config.bondReturns,
    }, investments, savings, repartition)

    console.log(balance)

    return {
        boundaries,
        income,
        spending,
        investments,
        repartition,
        savings,
        balance,
        target,
    }
}


function Results() {
    const { config } = useConfig()

    const {
        boundaries,
        income,
        spending,
        investments,
        repartition,
        balance,
        target,
    } = useMemo(() => simulate(config), [config])

    return (
        <div className={style.results}>
            <Charts.Summary
                boundaries={boundaries}
                income={income}
                spending={spending}
                investments={investments}
                repartition={repartition}
            />
            <div className={style.main}>
                <div className={style.informations}>
                    <p>Target = ({config.goal.amount} / {1 - config.avgTaxRate}) / {config.goal.wr} = {target.toFixed(2)}</p>
                </div>
                <Charts.Retirement
                    boundaries={boundaries}
                    balance={balance}
                    target={target}
                />
            </div>
        </div>
    )
}

export default Results
