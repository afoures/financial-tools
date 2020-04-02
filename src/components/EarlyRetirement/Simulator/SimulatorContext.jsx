import React, { createContext, useContext, useState } from 'react'

export const SimulatorContext = createContext()

export function useConfig() {
    const [config, updateConfig] = useContext(SimulatorContext)

    return {
        config,
        updateConfig,
    }
}

export function SimulatorStateProvider({ children }) {
    const initialState = {
        stockReturns: 0.081,
        bondReturns: 0.024,
        avgTaxRate: 0.3,
        goal: {
            amount: 30000,
            wr: 0.04,
        },
        spending: [
        ],
        income: [
        ],
        investments: [
        ],
        portfolio: [
        ],
    }

    const value = useState(initialState)

    return (
        <SimulatorContext.Provider value={value}>
            {children}
        </SimulatorContext.Provider>
    )
}
