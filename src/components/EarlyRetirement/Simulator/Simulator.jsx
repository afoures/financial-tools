import React from 'react'

import { SimulatorStateProvider } from './SimulatorContext'

import Configuration from './Configuration'
import Results from './Results'

function Simulator() {
    return (
        <SimulatorStateProvider>
            <Configuration />
            <Results />
        </SimulatorStateProvider>
    )
}

export default Simulator
