import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pages/App'
import ErrorBoundary from './components/ErrorBoundary'
import { MovieContextProvider } from './context/movie'
import { store } from './store/store'
import { Provider } from 'react-redux'
import './global.css'

const root = createRoot(document.getElementById('root')!)

root.render(
    <StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <MovieContextProvider>
                    <App />
                </MovieContextProvider>
            </Provider>
        </ErrorBoundary>
    </StrictMode>
)
