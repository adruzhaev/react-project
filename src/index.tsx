import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pages/App'
import ErrorBoundary from './components/ErrorBoundary'
import './global.css'

const root = createRoot(document.getElementById('root')!)

root.render(
    <StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StrictMode>
)
