// @ts-nocheck
import * as React from 'react'
import Board from './components/Board'

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <header className="max-w-6xl mx-auto mb-6">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">📋</span>
                    <div>
                        <h1 className="text-2xl font-bold">Task Management App</h1>
                        <p className="text-sm text-gray-600">Collaborative board with real-time updates and drag-and-drop (React + Firebase)</p>
                    </div>
                </div>
            </header>
            <main className="max-w-6xl mx-auto">
                <Board />
            </main>
        </div>
    )
}
