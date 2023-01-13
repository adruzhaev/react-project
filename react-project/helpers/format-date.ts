export const formatDate = (date: Date, isBackend = false) => {
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
    const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`

    if (isBackend) {
        return `${date.getFullYear()}-${month}-${day}`
    }

    return `${month}/${day}/${date.getFullYear()}`
}
