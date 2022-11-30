import { useCallback, useState } from 'react'

export const useToggle = (initialState: boolean) => {
    const [currentState, setCurrentState] = useState(initialState)

    const toggle = useCallback(() => {
        setCurrentState(!currentState)
    }, [currentState])

    return [currentState, toggle] as const
}
