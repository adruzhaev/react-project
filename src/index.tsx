import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pages/App'
import ErrorBoundary from './components/ErrorBoundary'
import { MovieContextProvider } from './context/movie'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { NotFound } from './components/NotFound'
import './global.css'

const root = createRoot(document.getElementById('root')!)

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/search" />,
        errorElement: <NotFound />
    },
    {
        path: 'search',
        element: <App />,
        errorElement: <NotFound />
    },
]);

root.render(
    <StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <MovieContextProvider>
                    <RouterProvider router={router} />
                </MovieContextProvider>
            </Provider>
        </ErrorBoundary>
    </StrictMode>
)
