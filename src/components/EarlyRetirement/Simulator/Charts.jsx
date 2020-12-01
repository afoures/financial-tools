import React, { useMemo } from 'react'

import Helper from '../../Helper'

import {
    ResponsiveContainer,
    ComposedChart,
    AreaChart,
    Area,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ReferenceLine,
    Tooltip
} from 'recharts'

export function Summary({ boundaries, income, spending, investments, savings, repartition }) {
    const savingsSummary = useMemo(() => {
        return savings.map((amount, index) => ({
            age: boundaries.min + index,
            saved: amount,
        }))
    }, [savings, boundaries])

    const investmentsSummary = useMemo(() => {
        return investments.map((amount, index) => ({
            age: boundaries.min + index,
            investment: amount,
        }))
    }, [investments, boundaries])

    const incomeOverSpending = useMemo(() => {
        return income.map((amount, index) => ({
            age: boundaries.min + index,
            income: amount,
            spending: spending[index],
        }))
    }, [income, spending, boundaries])

    const portfolio = useMemo(() => {
        return repartition.map((portfolio, index) => ({
            age: boundaries.min + index,
            ...portfolio,
        }))
    }, [repartition, boundaries])

    return (
        <div>
            <h2>
                Situation
                <Helper title='Situation' id='summary'>
                    <p>
                        Ces graphiques résument la situation 
                        simulée en fonction des valeurs 
                        présentes plus haut.
                    </p>
                    <p>
                        Le premier montre le montant calculé 
                        en tant qu'epargne régulière chaque année.
                    </p>
                    <p>
                        Le deuxième permet de voir les montants 
                        d'investissement irréguliers pour chaque 
                        année de la simulation.
                    </p>
                    <p>
                        Le troisième compare les revenus reguliers 
                        et les dépenses regulières.
                    </p>
                    <p>
                        Le dernier montre l'évolution de la repartition 
                        des actifs du portefeuille boursier.
                    </p>
                </Helper>
            </h2>
            <BarChart
                width={320}
                height={160}
                data={savingsSummary}
                syncId="summary"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="saved" fill="#fdad5c" />
            </BarChart>
            <BarChart
                width={320}
                height={160}
                data={investmentsSummary}
                syncId="summary"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="investment" fill="#63acdd" />
            </BarChart>
            <AreaChart
                width={320}
                height={160}
                data={incomeOverSpending}
                syncId="summary"
            >
                <defs>
                    <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Area type="monotone" dataKey="income" stroke="#82ca9d" fillOpacity={1} fill="url(#colorIncome)"/>
                <Area type="monotone" dataKey="spending" stroke="#8884d8" fillOpacity={1} fill="url(#colorSpending)"/>
            </AreaChart>
            <AreaChart
                width={320}
                height={160}
                data={portfolio}
                syncId="summary"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Area type="monotone" dataKey="bond" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="stock" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
        </div>
    )
}

export function Retirement({ boundaries, balance, target }) {
    const evolution = useMemo(() => {
        return balance.map((current, index) => ({
            age: boundaries.min + index,
            ...current,
        }))
    }, [balance, boundaries])

    const portfolio = useMemo(() => {
        return balance.map((current, index) => ({
            age: boundaries.min + index,
            stock: (current.stock / (current.bond + current.stock)).toFixed(3),
            bond: (current.bond / (current.bond + current.stock)).toFixed(3),
        }))
    }, [balance, boundaries])

    return (
        <div>
            <ResponsiveContainer width="100%" height={320} >
                <ComposedChart
                    data={evolution}
                    syncId="result"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Area type="monotone" dataKey="bond" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="stock" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <ReferenceLine y={target} label="FIRE Target" stroke="red" />
                </ComposedChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={224} >
                <AreaChart
                    data={portfolio}
                    syncId="result"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Area type="monotone" dataKey="bond" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="stock" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
