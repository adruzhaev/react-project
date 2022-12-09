export const formatDate = (date: Date, isBackend = false) => {
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`

    if (isBackend) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${day}`
    }

    return `${date.getMonth() + 1}/${day}/${date.getFullYear()}`
}
