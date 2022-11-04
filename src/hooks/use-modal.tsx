import { useState } from 'react'

export const useModal = () => {
    const [isShown, setIsShown] = useState<boolean>(false)
    const toggleShown = () => setIsShown(!isShown)

    return {
        isShown,
        toggleShown
    }
}