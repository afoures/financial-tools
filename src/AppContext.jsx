import React from 'react'
import { HashRouter } from 'react-router-dom'

export function AppProvider({ children }) {
    return (
        <div className="app">
            <HashRouter>
                {children}
            </HashRouter>
        </div>
    )
}
